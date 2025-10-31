/**
 * Designbase 디자인 토큰 메인 엔트리 포인트
 * 
 * 목적: 모든 디자인 토큰의 TypeScript 타입과 값을 내보냄
 * 기능: Foundation 토큰, Semantic 토큰, 다크 테마 토큰 제공
 * 사용법: import { tokens } from '@designbasekorea/tokens'
 */

// 빌드된 토큰을 동적으로 로드하기 위한 임시 구현
// 실제 빌드에서는 JSON 파일에서 직접 로드
import foundationColors from '../tokens/foundation/colors.json';
import foundationSpacing from '../tokens/foundation/spacing.json';
import foundationTypography from '../tokens/foundation/typography.json';
import foundationEffects from '../tokens/foundation/effects.json';
import foundationBorder from '../tokens/foundation/border.json';
import foundationZIndex from '../tokens/foundation/zIndex.json';
import semanticColors from '../tokens/semantic/colors.json';
import semanticSpacing from '../tokens/semantic/spacing.json';
import semanticBorder from '../tokens/semantic/border.json';
import semanticEffects from '../tokens/semantic/effects.json';
import darkColors from '../tokens/dark/colors.json';

// 토큰 값 타입 정의
export interface TokenValue {
    value: string | number | object;
    type: string;
}

// 토큰 타입 정의 (단순화)
export interface DesignTokens {
    color: any;
    spacing: any;
    typography: any;
    shadow: any;
    borderRadius: any;
    opacity: any;
    zIndex: any;
}

// 토큰 조합하여 내보내기
export const tokens: DesignTokens = {
    color: {
        foundation: foundationColors.color.foundation,
        semantic: semanticColors.color.semantic,
    },
    spacing: {
        foundation: foundationSpacing.spacing.foundation,
        semantic: semanticSpacing.spacing.semantic,
    },
    typography: foundationTypography.typography,
    shadow: {
        foundation: foundationEffects.shadow.foundation,
        semantic: semanticEffects.shadow.semantic,
    },
    borderRadius: {
        foundation: foundationBorder.border.foundation,
        semantic: semanticBorder.border.semantic,
    },
    opacity: {
        foundation: foundationEffects.opacity.foundation,
        semantic: semanticEffects.opacity.semantic,
    },
    zIndex: foundationZIndex.zIndex.foundation,
};

export const darkTokens: DesignTokens = {
    color: {
        foundation: foundationColors.color.foundation,
        semantic: darkColors.color.semantic,
    },
    spacing: {
        foundation: foundationSpacing.spacing.foundation,
        semantic: semanticSpacing.spacing.semantic,
    },
    typography: foundationTypography.typography,
    shadow: {
        foundation: foundationEffects.shadow.foundation,
        semantic: semanticEffects.shadow.semantic,
    },
    borderRadius: {
        foundation: foundationBorder.border.foundation,
        semantic: semanticBorder.border.semantic,
    },
    opacity: {
        foundation: foundationEffects.opacity.foundation,
        semantic: semanticEffects.opacity.semantic,
    },
    zIndex: foundationZIndex.zIndex.foundation,
};

// 개별 토큰 카테고리 내보내기
export const colors = tokens.color;
export const spacing = tokens.spacing;
export const typography = tokens.typography;
export const shadows = tokens.shadow;
export const borderRadius = tokens.borderRadius;
export const opacity = tokens.opacity;
export const zIndex = tokens.zIndex;

// 유틸리티 함수들
export const getToken = (path: string, theme: 'light' | 'dark' = 'light') => {
    const tokenSet = theme === 'dark' ? darkTokens : tokens;
    return path.split('.').reduce((obj, key) => obj?.[key], tokenSet as any);
};

export const getColorValue = (colorPath: string, theme: 'light' | 'dark' = 'light') => {
    const token = getToken(`color.${colorPath}`, theme);
    return token?.value || token;
};

export const getSpacingValue = (spacingKey: string) => {
    const token = getToken(`spacing.foundation.${spacingKey}`);
    return token?.value || token;
};

export const getTypographyValue = (category: string, key: string) => {
    const token = getToken(`typography.foundation.${category}.${key}`);
    return token?.value || token;
};

// 타입 가드 함수들
export const isValidColorToken = (path: string): boolean => {
    return Boolean(getToken(`color.${path}`));
};

export const isValidSpacingToken = (key: string): boolean => {
    return Boolean(getToken(`spacing.foundation.${key}`));
};

// CSS 변수명 생성 유틸리티
export const toCSSVariable = (tokenPath: string): string => {
    return `--${tokenPath.replace(/\./g, '-').toLowerCase()}`;
};

// 기본 내보내기
export default tokens;
