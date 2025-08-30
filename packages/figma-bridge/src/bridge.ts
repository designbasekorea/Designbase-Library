/**
 * 피그마 브리지 메인 클래스
 * 
 * 목적: UI와 Main 스레드 간 타입 안전한 통신을 담당하는 중앙 브리지
 * 기능: 메시지 라우팅, 요청/응답 매칭, 이벤트 에미터, 에러 처리
 * 사용법: UI와 Main에서 각각 인스턴스를 생성하여 통신
 */

// UUID 생성 함수 (외부 dependency 제거)
function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
import {
    BridgeConfig,
    BridgeError,
    BridgeErrorCode,
    ErrorHandler,
    ErrorMessage,
    EventHandler,
    EventHandlers,
    EventMessage,
    Message,
    MessageHandlers,
    MessageId,
    MessageOptions,
    MessageType,
    RequestHandler,
    RequestMessage,
    ResponseMessage,
    ValidationResult,
} from './types';

/**
 * 브리지 환경 타입
 */
export type BridgeEnvironment = 'ui' | 'main';

/**
 * 펜딩 요청 정보
 */
interface PendingRequest {
    resolve: (value: any) => void;
    reject: (error: any) => void;
    timeout: NodeJS.Timeout;
    retries: number;
    maxRetries: number;
}

/**
 * 기본 브리지 설정
 */
const DEFAULT_CONFIG: BridgeConfig = {
    defaultTimeout: 30000, // 30초
    defaultRetries: 3,
    debug: false,
    logErrors: true,
    maxQueueSize: 1000,
};

/**
 * 피그마 브리지 클래스
 */
export class FigmaBridge {
    private config: BridgeConfig;
    private environment: BridgeEnvironment;
    private messageHandlers: MessageHandlers = {};
    private eventHandlers: EventHandlers = {};
    private pendingRequests = new Map<MessageId, PendingRequest>();
    private messageQueue: Message[] = [];
    private isReady = false;
    private errorHandler?: ErrorHandler;

    constructor(
        environment: BridgeEnvironment,
        config: Partial<BridgeConfig> = {}
    ) {
        this.environment = environment;
        this.config = { ...DEFAULT_CONFIG, ...config };

        this.setupMessageListener();
        this.log('Bridge initialized', { environment, config: this.config });
    }

    // ========================================================================
    // 메시지 송신
    // ========================================================================

    /**
     * 요청 메시지 전송
     */
    async request<TRequest = any, TResponse = any>(
        action: string,
        payload: TRequest,
        options: MessageOptions = {}
    ): Promise<TResponse> {
        const messageId = generateUUID();
        const timeout = options.timeout ?? this.config.defaultTimeout;
        const maxRetries = options.retries ?? this.config.defaultRetries;

        const message: RequestMessage<TRequest> = {
            id: messageId,
            type: MessageType.REQUEST,
            action,
            payload,
            timestamp: Date.now(),
        };

        return new Promise<TResponse>((resolve, reject) => {
            const attemptRequest = (retryCount = 0) => {
                const timeoutHandle = setTimeout(() => {
                    this.pendingRequests.delete(messageId);

                    if (retryCount < maxRetries) {
                        this.log(`Request timeout, retrying (${retryCount + 1}/${maxRetries})`, { action, messageId });
                        attemptRequest(retryCount + 1);
                    } else {
                        const error = new BridgeError(
                            BridgeErrorCode.TIMEOUT,
                            `Request timeout after ${maxRetries} retries: ${action}`,
                            { action, messageId, timeout }
                        );
                        reject(error);
                    }
                }, timeout);

                this.pendingRequests.set(messageId, {
                    resolve,
                    reject,
                    timeout: timeoutHandle,
                    retries: retryCount,
                    maxRetries,
                });

                this.sendMessage(message);
            };

            attemptRequest();
        });
    }

    /**
     * 이벤트 메시지 전송
     */
    emit<TEvent = any>(event: string, payload: TEvent): void {
        const message: EventMessage<TEvent> = {
            id: generateUUID(),
            type: MessageType.EVENT,
            event,
            payload,
            timestamp: Date.now(),
        };

        this.sendMessage(message);
        this.log('Event emitted', { event, payload });
    }

    /**
     * 응답 메시지 전송
     */
    private sendResponse<TResponse = any>(
        requestId: MessageId,
        payload: TResponse,
        success = true
    ): void {
        const message: ResponseMessage<TResponse> = {
            id: generateUUID(),
            type: MessageType.RESPONSE,
            requestId,
            success,
            payload,
            timestamp: Date.now(),
        };

        this.sendMessage(message);
    }

    /**
     * 에러 메시지 전송
     */
    private sendError(
        code: BridgeErrorCode,
        message: string,
        requestId?: MessageId,
        details?: any
    ): void {
        const errorMessage: ErrorMessage = {
            id: generateUUID(),
            type: MessageType.ERROR,
            requestId,
            code,
            message,
            details,
            timestamp: Date.now(),
        };

        this.sendMessage(errorMessage);
    }

    // ========================================================================
    // 핸들러 등록
    // ========================================================================

    /**
     * 요청 핸들러 등록
     */
    handle<TRequest = any, TResponse = any>(
        action: string,
        handler: RequestHandler<TRequest, TResponse>
    ): void {
        this.messageHandlers[action] = handler;
        this.log('Request handler registered', { action });
    }

    /**
     * 여러 요청 핸들러 등록
     */
    handleAll(handlers: MessageHandlers): void {
        Object.entries(handlers).forEach(([action, handler]) => {
            this.handle(action, handler);
        });
    }

    /**
     * 이벤트 핸들러 등록
     */
    on<TEvent = any>(event: string, handler: EventHandler<TEvent>): () => void {
        if (!this.eventHandlers[event]) {
            this.eventHandlers[event] = [];
        }

        this.eventHandlers[event].push(handler);
        this.log('Event handler registered', { event });

        // 핸들러 제거 함수 반환
        return () => this.off(event, handler);
    }

    /**
     * 이벤트 핸들러 제거
     */
    off<TEvent = any>(event: string, handler?: EventHandler<TEvent>): void {
        if (!handler) {
            // 모든 핸들러 제거
            delete this.eventHandlers[event];
        } else {
            // 특정 핸들러 제거
            const handlers = this.eventHandlers[event];
            if (handlers) {
                const index = handlers.indexOf(handler);
                if (index !== -1) {
                    handlers.splice(index, 1);
                }
            }
        }

        this.log('Event handler removed', { event });
    }

    /**
     * 한 번만 실행되는 이벤트 핸들러 등록
     */
    once<TEvent = any>(event: string, handler: EventHandler<TEvent>): void {
        const wrappedHandler = (payload: TEvent) => {
            handler(payload);
            this.off(event, wrappedHandler);
        };

        this.on(event, wrappedHandler);
    }

    /**
     * 에러 핸들러 등록
     */
    onError(handler: ErrorHandler): void {
        this.errorHandler = handler;
    }

    // ========================================================================
    // 메시지 처리
    // ========================================================================

    /**
     * 메시지 리스너 설정
     */
    private setupMessageListener(): void {
        const listener = (event: MessageEvent) => {
            try {
                const message = this.parseMessage(event.data);
                if (message) {
                    this.handleMessage(message);
                }
            } catch (error) {
                this.log('Failed to parse message', { error, data: event.data });
            }
        };

        if (this.environment === 'ui') {
            // UI 환경에서는 window에서 메시지 수신
            window.addEventListener('message', listener);
        } else {
            // Main 환경에서는 figma.ui에서 메시지 수신
            figma.ui.onmessage = (message) => {
                listener({ data: message } as MessageEvent);
            };
        }
    }

    /**
     * 메시지 파싱
     */
    private parseMessage(data: any): Message | null {
        if (!data || typeof data !== 'object') {
            return null;
        }

        // 메시지 유효성 검증
        if (!this.validateMessage(data)) {
            return null;
        }

        return data as Message;
    }

    /**
     * 메시지 유효성 검증
     */
    private validateMessage(data: any): boolean {
        if (!data.id || !data.type || !data.timestamp) {
            return false;
        }

        if (!Object.values(MessageType).includes(data.type)) {
            return false;
        }

        return true;
    }

    /**
     * 메시지 처리
     */
    private async handleMessage(message: Message): Promise<void> {
        this.log('Message received', { message });

        try {
            switch (message.type) {
                case MessageType.REQUEST:
                    await this.handleRequest(message as RequestMessage);
                    break;
                case MessageType.RESPONSE:
                    this.handleResponse(message as ResponseMessage);
                    break;
                case MessageType.EVENT:
                    this.handleEvent(message as EventMessage);
                    break;
                case MessageType.ERROR:
                    this.handleError(message as ErrorMessage);
                    break;
            }
        } catch (error) {
            this.log('Error handling message', { error, message });
        }
    }

    /**
     * 요청 메시지 처리
     */
    private async handleRequest(message: RequestMessage): Promise<void> {
        const { id, action, payload } = message;
        const handler = this.messageHandlers[action];

        if (!handler) {
            this.sendError(
                BridgeErrorCode.HANDLER_NOT_FOUND,
                `No handler found for action: ${action}`,
                id,
                { action }
            );
            return;
        }

        try {
            const result = await handler(payload);
            this.sendResponse(id, result);
        } catch (error) {
            this.sendError(
                BridgeErrorCode.INTERNAL_ERROR,
                `Handler error: ${error.message}`,
                id,
                { action, error: error.stack }
            );
        }
    }

    /**
     * 응답 메시지 처리
     */
    private handleResponse(message: ResponseMessage): void {
        const { requestId, success, payload } = message;
        const pendingRequest = this.pendingRequests.get(requestId);

        if (!pendingRequest) {
            this.log('No pending request found', { requestId });
            return;
        }

        clearTimeout(pendingRequest.timeout);
        this.pendingRequests.delete(requestId);

        if (success) {
            pendingRequest.resolve(payload);
        } else {
            pendingRequest.reject(new Error(payload));
        }
    }

    /**
     * 이벤트 메시지 처리
     */
    private handleEvent(message: EventMessage): void {
        const { event, payload } = message;
        const handlers = this.eventHandlers[event];

        if (handlers) {
            handlers.forEach(handler => {
                try {
                    handler(payload);
                } catch (error) {
                    this.log('Event handler error', { event, error });
                }
            });
        }
    }

    /**
     * 에러 메시지 처리
     */
    private handleError(message: ErrorMessage): void {
        const { requestId, code, message: errorMessage, details } = message;

        if (requestId) {
            // 특정 요청에 대한 에러
            const pendingRequest = this.pendingRequests.get(requestId);
            if (pendingRequest) {
                clearTimeout(pendingRequest.timeout);
                this.pendingRequests.delete(requestId);

                const error = new BridgeError(code as BridgeErrorCode, errorMessage, details);
                pendingRequest.reject(error);
            }
        }

        // 글로벌 에러 핸들러 호출
        if (this.errorHandler) {
            this.errorHandler(message);
        }

        this.log('Error received', { message });
    }

    // ========================================================================
    // 메시지 전송
    // ========================================================================

    /**
     * 메시지 전송
     */
    private sendMessage(message: Message): void {
        try {
            if (this.environment === 'ui') {
                // UI에서 Main으로 전송
                parent.postMessage({ pluginMessage: message }, '*');
            } else {
                // Main에서 UI로 전송
                figma.ui.postMessage(message);
            }

            this.log('Message sent', { message });
        } catch (error) {
            this.log('Failed to send message', { error, message });
            throw new BridgeError(
                BridgeErrorCode.NETWORK_ERROR,
                'Failed to send message',
                { error, message }
            );
        }
    }

    // ========================================================================
    // 유틸리티
    // ========================================================================

    /**
     * 브리지 준비 상태 설정
     */
    ready(): void {
        this.isReady = true;
        this.emit('bridge:ready', { environment: this.environment });
        this.log('Bridge ready');
    }

    /**
     * 브리지 종료
     */
    destroy(): void {
        // 펜딩 요청들 정리
        this.pendingRequests.forEach(({ timeout, reject }) => {
            clearTimeout(timeout);
            reject(new BridgeError(BridgeErrorCode.INTERNAL_ERROR, 'Bridge destroyed'));
        });

        this.pendingRequests.clear();
        this.messageHandlers = {};
        this.eventHandlers = {};
        this.messageQueue = [];
        this.isReady = false;

        this.log('Bridge destroyed');
    }

    /**
     * 디버그 로깅
     */
    private log(message: string, data?: any): void {
        if (this.config.debug) {
            console.log(`[FigmaBridge:${this.environment}] ${message}`, data);
        }
    }

    /**
     * 브리지 상태 정보 반환
     */
    getStatus() {
        return {
            environment: this.environment,
            isReady: this.isReady,
            pendingRequests: this.pendingRequests.size,
            registeredHandlers: Object.keys(this.messageHandlers),
            registeredEvents: Object.keys(this.eventHandlers),
            queueSize: this.messageQueue.length,
            config: this.config,
        };
    }
}

// ========================================================================
// 헬퍼 함수들
// ========================================================================

/**
 * UI 브리지 인스턴스 생성
 */
export function createUIBridge(config?: Partial<BridgeConfig>): FigmaBridge {
    return new FigmaBridge('ui', config);
}

/**
 * Main 브리지 인스턴스 생성
 */
export function createMainBridge(config?: Partial<BridgeConfig>): FigmaBridge {
    return new FigmaBridge('main', config);
}

/**
 * 타입 안전한 요청 함수 생성
 */
export function createTypedRequest<THandlers extends MessageHandlers>(
    bridge: FigmaBridge
) {
    return <K extends keyof THandlers>(
        action: K,
        payload: Parameters<THandlers[K]>[0],
        options?: MessageOptions
    ): Promise<ReturnType<THandlers[K]>> => {
        return bridge.request(action as string, payload, options);
    };
}

/**
 * 타입 안전한 핸들러 등록
 */
export function createTypedHandlers<THandlers extends MessageHandlers>(
    bridge: FigmaBridge
) {
    return {
        handle: <K extends keyof THandlers>(
            action: K,
            handler: THandlers[K]
        ) => {
            bridge.handle(action as string, handler);
        },

        handleAll: (handlers: Partial<THandlers>) => {
            bridge.handleAll(handlers as MessageHandlers);
        },
    };
}
