/**
 * Designbase Figma Bridge 메인 엔트리 포인트
 * 
 * 목적: 피그마 브리지의 모든 기능과 타입을 내보냄
 * 기능: UI-Main 간 타입 안전한 통신을 위한 브리지
 * 사용법: import { createUIBridge, createMainBridge } from '@designbase/figma-bridge'
 */

// 메인 브리지 클래스와 함수들
export {
    FigmaBridge,
    createUIBridge,
    createMainBridge,
    createTypedRequest,
    createTypedHandlers,
} from './bridge';

// 모든 타입 정의
export * from './types';

// 기본 export
export { FigmaBridge as default } from './bridge';
