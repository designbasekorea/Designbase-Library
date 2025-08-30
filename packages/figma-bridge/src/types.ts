/**
 * 피그마 브리지 타입 정의
 * 
 * 목적: UI와 Main 스레드 간 통신을 위한 타입 안전한 메시지 인터페이스 정의
 * 기능: 요청/응답 패턴, 에러 처리, 이벤트 시스템
 * 사용법: 모든 메시지는 이 타입들을 기반으로 정의되어야 함
 */

// ============================================================================
// 기본 메시지 타입
// ============================================================================

/**
 * 메시지 ID 타입
 */
export type MessageId = string;

/**
 * 메시지 타입 열거형
 */
export enum MessageType {
    REQUEST = 'REQUEST',
    RESPONSE = 'RESPONSE',
    EVENT = 'EVENT',
    ERROR = 'ERROR',
}

/**
 * 기본 메시지 인터페이스
 */
export interface BaseMessage {
    id: MessageId;
    type: MessageType;
    timestamp: number;
}

/**
 * 요청 메시지
 */
export interface RequestMessage<T = any> extends BaseMessage {
    type: MessageType.REQUEST;
    action: string;
    payload: T;
}

/**
 * 응답 메시지
 */
export interface ResponseMessage<T = any> extends BaseMessage {
    type: MessageType.RESPONSE;
    requestId: MessageId;
    success: boolean;
    payload: T;
}

/**
 * 이벤트 메시지
 */
export interface EventMessage<T = any> extends BaseMessage {
    type: MessageType.EVENT;
    event: string;
    payload: T;
}

/**
 * 에러 메시지
 */
export interface ErrorMessage extends BaseMessage {
    type: MessageType.ERROR;
    requestId?: MessageId;
    code: string;
    message: string;
    details?: any;
}

/**
 * 모든 메시지 타입의 유니언
 */
export type Message =
    | RequestMessage
    | ResponseMessage
    | EventMessage
    | ErrorMessage;

// ============================================================================
// 핸들러 타입
// ============================================================================

/**
 * 요청 핸들러 타입
 */
export type RequestHandler<TRequest = any, TResponse = any> = (
    payload: TRequest
) => Promise<TResponse> | TResponse;

/**
 * 이벤트 핸들러 타입
 */
export type EventHandler<TEvent = any> = (payload: TEvent) => void;

/**
 * 에러 핸들러 타입
 */
export type ErrorHandler = (error: ErrorMessage) => void;

/**
 * 메시지 핸들러 맵
 */
export interface MessageHandlers {
    [action: string]: RequestHandler;
}

/**
 * 이벤트 핸들러 맵
 */
export interface EventHandlers {
    [event: string]: EventHandler[];
}

// ============================================================================
// 브리지 옵션
// ============================================================================

/**
 * 메시지 옵션
 */
export interface MessageOptions {
    /** 타임아웃 (밀리초) */
    timeout?: number;
    /** 재시도 횟수 */
    retries?: number;
    /** 에러 시 자동 로깅 여부 */
    logErrors?: boolean;
}

/**
 * 브리지 설정
 */
export interface BridgeConfig {
    /** 기본 타임아웃 (밀리초) */
    defaultTimeout: number;
    /** 기본 재시도 횟수 */
    defaultRetries: number;
    /** 디버그 모드 */
    debug: boolean;
    /** 에러 로깅 */
    logErrors: boolean;
    /** 메시지 큐 최대 크기 */
    maxQueueSize: number;
}

// ============================================================================
// 피그마 특화 타입
// ============================================================================

/**
 * 피그마 노드 선택 이벤트
 */
export interface NodeSelectionEvent {
    selection: SceneNode[];
}

/**
 * 피그마 문서 변경 이벤트
 */
export interface DocumentChangeEvent {
    documentChanges: DocumentChange[];
}

/**
 * 피그마 플러그인 종료 요청
 */
export interface ClosePluginRequest {
    message?: string;
}

/**
 * 피그마 알림 표시 요청
 */
export interface ShowNotificationRequest {
    message: string;
    options?: NotificationOptions;
}

/**
 * 피그마 스토리지 작업
 */
export interface StorageRequest<T = any> {
    operation: 'get' | 'set' | 'delete' | 'clear';
    key?: string;
    value?: T;
}

/**
 * 피그마 스토리지 응답
 */
export interface StorageResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
}

/**
 * 피그마 노드 생성 요청
 */
export interface CreateNodeRequest {
    type: string;
    properties: Record<string, any>;
    parent?: string; // 부모 노드 ID
}

/**
 * 피그마 노드 업데이트 요청
 */
export interface UpdateNodeRequest {
    nodeId: string;
    properties: Record<string, any>;
}

/**
 * 피그마 노드 응답
 */
export interface NodeResponse {
    nodeId: string;
    success: boolean;
    error?: string;
}

// ============================================================================
// 에러 코드
// ============================================================================

/**
 * 브리지 에러 코드
 */
export enum BridgeErrorCode {
    TIMEOUT = 'TIMEOUT',
    HANDLER_NOT_FOUND = 'HANDLER_NOT_FOUND',
    INVALID_MESSAGE = 'INVALID_MESSAGE',
    NETWORK_ERROR = 'NETWORK_ERROR',
    PERMISSION_DENIED = 'PERMISSION_DENIED',
    INTERNAL_ERROR = 'INTERNAL_ERROR',
    VALIDATION_ERROR = 'VALIDATION_ERROR',
    QUEUE_FULL = 'QUEUE_FULL',
}

/**
 * 브리지 에러 클래스
 */
export class BridgeError extends Error {
    constructor(
        public code: BridgeErrorCode,
        message: string,
        public details?: any
    ) {
        super(message);
        this.name = 'BridgeError';
    }
}

// ============================================================================
// 유틸리티 타입
// ============================================================================

/**
 * 메시지에서 페이로드 타입 추출
 */
export type PayloadOf<T> = T extends RequestMessage<infer P>
    ? P
    : T extends ResponseMessage<infer P>
    ? P
    : T extends EventMessage<infer P>
    ? P
    : never;

/**
 * 핸들러 맵에서 액션 타입 추출
 */
export type ActionsOf<T extends MessageHandlers> = keyof T;

/**
 * 핸들러 맵에서 특정 액션의 요청 타입 추출
 */
export type RequestTypeOf<
    T extends MessageHandlers,
    K extends keyof T
> = T[K] extends RequestHandler<infer Req, any> ? Req : never;

/**
 * 핸들러 맵에서 특정 액션의 응답 타입 추출
 */
export type ResponseTypeOf<
    T extends MessageHandlers,
    K extends keyof T
> = T[K] extends RequestHandler<any, infer Res> ? Res : never;

// ============================================================================
// 공통 액션 타입 정의
// ============================================================================

/**
 * 공통 메시지 핸들러 인터페이스
 */
export interface CommonMessageHandlers extends MessageHandlers {
    // 플러그인 제어
    'plugin:close': RequestHandler<ClosePluginRequest, void>;
    'plugin:show-notification': RequestHandler<ShowNotificationRequest, void>;

    // 스토리지 작업
    'storage:get': RequestHandler<StorageRequest, StorageResponse>;
    'storage:set': RequestHandler<StorageRequest, StorageResponse>;
    'storage:delete': RequestHandler<StorageRequest, StorageResponse>;
    'storage:clear': RequestHandler<StorageRequest, StorageResponse>;

    // 노드 작업
    'node:create': RequestHandler<CreateNodeRequest, NodeResponse>;
    'node:update': RequestHandler<UpdateNodeRequest, NodeResponse>;
    'node:delete': RequestHandler<{ nodeId: string }, NodeResponse>;

    // 선택 작업
    'selection:get': RequestHandler<void, NodeSelectionEvent>;
    'selection:set': RequestHandler<{ nodeIds: string[] }, void>;
}

/**
 * 공통 이벤트 타입
 */
export interface CommonEvents {
    // 선택 변경
    'selection:change': NodeSelectionEvent;

    // 문서 변경
    'document:change': DocumentChangeEvent;

    // 플러그인 상태
    'plugin:ready': void;
    'plugin:error': { error: string };
}

// ============================================================================
// 메시지 유효성 검증
// ============================================================================

/**
 * 메시지 유효성 검증 결과
 */
export interface ValidationResult {
    valid: boolean;
    errors: string[];
}

/**
 * 메시지 스키마
 */
export interface MessageSchema {
    type: MessageType;
    required: string[];
    properties: Record<string, any>;
}

/**
 * 스키마 레지스트리
 */
export interface SchemaRegistry {
    [messageType: string]: MessageSchema;
}
