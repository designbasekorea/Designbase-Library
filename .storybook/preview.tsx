import React from 'react';
import type { Preview } from '@storybook/react';
import { setTheme, getTheme, type Theme } from '@designbasekorea/theme';
import '@designbasekorea/theme/css';
import '@designbasekorea/tokens/css';
import './storybook.css';

// 테마 컨트롤을 위한 글로벌 타입 정의
declare global {
    interface Window {
        __STORYBOOK_ADDON_THEMES__?: {
            setTheme: (theme: Theme) => void;
            getTheme: () => Theme;
        };
    }
}

// 테마 전환 함수들을 전역에 노출
if (typeof window !== 'undefined') {
    window.__STORYBOOK_ADDON_THEMES__ = {
        setTheme,
        getTheme,
    };
}

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        // 테마 관련 파라미터
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: 'light', color: '#ffffff' },
                { name: 'dark', class: 'dark', color: '#1a1a1a' },
            ],
        },
        // 배경색 설정
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#1a1a1a' },
            ],
        },

    },
    // 글로벌 데코레이터
    decorators: [
        (Story, context) => {
            // 현재 선택된 테마 가져오기
            const currentTheme = context.globals.theme || 'light';

            // 테마 설정 - 더 확실하게 적용
            React.useEffect(() => {
                if (typeof document !== 'undefined') {
                    // HTML과 body에 data-theme 속성 설정 (토큰이 자동 적용됨)
                    document.documentElement.setAttribute('data-theme', currentTheme);
                    document.body.setAttribute('data-theme', currentTheme);
                }
            }, [currentTheme]);

            // I18nText를 위한 기본 t 함수 제공
            const defaultTFunction = (key: string) => {
                // 기본 번역 매핑
                const translations: Record<string, string> = {
                    // 공통 키들
                    'common.cancel': '취소',
                    'common.save': '저장',
                    'common.confirm': '확인',
                    'common.close': '닫기',
                    'common.loading': '로딩 중...',
                    'common.error': '오류',
                    'common.success': '성공',

                    // 라이선스 관련
                    'license.pro_account': '프로 계정',
                    'license.upgrade_to_pro': '프로로 업그레이드',
                    'license.all_features_available': '모든 기능을 사용할 수 있습니다.',
                    'license.purchase_for_unlimited': '라이선스 구매 후 무제한 접근이 가능합니다.',
                    'license.activated': '라이선스 활성화됨',
                    'license.enter_key': '라이선스 키 입력',
                    'license.purchase': '라이선스 구매',
                    'license.key': 'License Key',
                    'license.submit': 'Submit',
                    'license.verifying': 'Verifying...',
                    'license.enter_from_email': '구독 후 이메일로 받은 라이선스 키를 입력하세요.',
                    'license.key_label': '라이선스 키',
                    'license.activations_remaining': '활성',
                    'license.spots_remaining': '자리 남음',
                    'license.deactivating': '비활성화중...',
                    'license.deactivate': '라이선스 비활성화',

                    // 배너 관련
                    'banner.upgrade_title': '프로로 업그레이드하세요',
                    'banner.upgrade_description': '무제한 기능을 사용하고 더 많은 혜택을 누리세요.',
                    'banner.upgrade_button': '지금 업그레이드',

                    // 진행 관련
                    'progress.working': '작업 중',
                    'progress.completed': '완료되었습니다',
                    'progress.processing': '처리 중...',
                    'progress.stop': '중지',
                    'progress.confirm': '확인',
                    'progress.help_text': '이 작업은 시간이 걸릴 수 있습니다.',

                    // 설정 관련
                    'settings.modal_title': '목록 변경',
                    'settings.modal_description': '드래그하여 순서를 변경하거나, 토글하여 카테고리를 숨길 수 있습니다.',
                    'settings.reset': '초기화',
                    'settings.cancel': '취소',
                    'settings.save': '저장',

                    // 제목 관련
                    'title.premium_plan': '프리미엄 플랜',
                    'title.premium_description': '모든 기능을 잠금 해제하고 팀과 함께 작업하세요.',
                    'feature.unlimited_projects': '무제한 프로젝트',
                    'feature.team_collaboration': '팀 협업 기능',
                    'feature.priority_support': '우선 고객 지원',

                    // 플러그인 관련
                    'plugin.resize': '플러그인 크기 조절'
                };
                return translations[key] || key;
            };

            return (
                <div
                    data-theme={currentTheme}
                    style={{
                        minHeight: '100vh',
                        padding: '20px',
                        backgroundColor: currentTheme === 'dark' ? '#1a1a1a' : '#ffffff',
                        color: currentTheme === 'dark' ? '#ffffff' : '#000000',
                        transition: 'background-color 0.3s ease, color 0.3s ease',
                    }}
                >
                    <Story />
                </div>
            );
        },
    ],
    // 글로벌 컨트롤
    globalTypes: {
        theme: {
            description: '글로벌 테마 설정',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'paintbrush',
                items: [
                    { value: 'light', title: 'Light', icon: 'circlehollow' },
                    { value: 'dark', title: 'Dark', icon: 'circle' },
                ],
                dynamicTitle: true,
            },
        },
    },
};

export default preview;
