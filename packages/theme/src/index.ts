/**
 * Designbase Theme 메인 엔트리 포인트
 * 
 * 목적: 테마 관련 TypeScript 유틸리티와 타입 정의 제공
 * 기능: CSS 변수 헬퍼, 테마 전환, 유틸리티 함수
 * 사용법: import { setTheme, getTheme } from '@designbase/theme'
 */

// 테마 타입 정의
export type Theme = 'light' | 'dark' | 'brand';

/**
 * 현재 활성 테마 가져오기
 */
export function getTheme(): Theme {
    if (typeof document === 'undefined') {
        return 'light';
    }

    const element = document.documentElement;
    const themeAttr = element.getAttribute('data-theme');

    if (themeAttr === 'dark' || themeAttr === 'brand') {
        return themeAttr;
    }

    return 'light';
}

/**
 * 테마 설정
 */
export function setTheme(theme: Theme): void {
    if (typeof document === 'undefined') {
        return;
    }

    document.documentElement.setAttribute('data-theme', theme);

    // 로컬 스토리지에 저장
    try {
        localStorage.setItem('designbase-theme', theme);
    } catch (error) {
        // 로컬 스토리지를 사용할 수 없는 환경
        console.warn('Cannot save theme preference to localStorage');
    }
}

/**
 * 저장된 테마 불러오기
 */
export function loadSavedTheme(): Theme {
    if (typeof document === 'undefined') {
        return 'light';
    }

    try {
        const savedTheme = localStorage.getItem('designbase-theme') as Theme;
        if (savedTheme && ['light', 'dark', 'brand'].includes(savedTheme)) {
            return savedTheme;
        }
    } catch (error) {
        // 로컬 스토리지를 사용할 수 없는 환경
    }

    // 시스템 다크 모드 확인
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    return 'light';
}

/**
 * 테마 자동 초기화
 */
export function initializeTheme(): void {
    const savedTheme = loadSavedTheme();
    setTheme(savedTheme);
}

/**
 * CSS 변수 값 가져오기
 */
export function getCSSVariable(variableName: string): string {
    if (typeof document === 'undefined') {
        return '';
    }

    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue(`--${variableName}`).trim();
}

/**
 * CSS 변수 설정
 */
export function setCSSVariable(variableName: string, value: string): void {
    if (typeof document === 'undefined') {
        return;
    }

    document.documentElement.style.setProperty(`--${variableName}`, value);
}

/**
 * 테마 토글
 */
export function toggleTheme(): Theme {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    return newTheme;
}

/**
 * 테마 변경 감지 훅 (React 등에서 사용)
 */
export function createThemeWatcher(callback: (theme: Theme) => void): () => void {
    if (typeof document === 'undefined') {
        return () => { };
    }

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (
                mutation.type === 'attributes' &&
                mutation.attributeName === 'data-theme'
            ) {
                const newTheme = getTheme();
                callback(newTheme);
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
    });

    // cleanup 함수 반환
    return () => observer.disconnect();
}

// 브라우저 환경에서 자동 초기화
if (typeof document !== 'undefined') {
    // DOM이 로드된 후 실행
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTheme);
    } else {
        initializeTheme();
    }
}
