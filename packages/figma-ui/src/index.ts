/**
 * Designbase Figma UI 컴포넌트 라이브러리 메인 엔트리 포인트
 * 
 * 목적: 피그마 플러그인 전용 UI 컴포넌트와 기존 UI 컴포넌트를 통합 제공
 * 기능: Tree-shaking 가능한 개별 컴포넌트 내보내기
 * 사용법: import { LogoDropdown, Footer, Button } from '@designbasekorea/figma-ui'
 */

// 테마 CSS 자동 로드 (로컬 복사본 사용)
import './theme/theme.css';

// ✅ Figma Plugin 전용 컴포넌트들 (개별 index.ts를 통해 re-export)
export * from './components/DonationBadge';
export * from './components/FigmaContainer';
export * from './components/FigmaHeader';
export * from './components/FigmaPageHead';
export * from './components/FigmaSection';
export * from './components/FigmaSidebar';
export * from './components/FigmaFooter';
export * from './components/FigmaToast';
export * from './components/FormWithSubmit';
export * from './components/InteractionFeedback';
export * from './components/LanguageSelector';
export * from './components/LogoDropdown';
export * from './components/PageLicense';
export * from './components/PaymentBadge';
export * from './components/PaymentStatusSection';
export * from './components/PricingComparison';
export * from './components/ProgressModal';
export * from './components/ResizablePlugin';
export * from './components/SettingsModal';
export * from './components/TitleDescription';
export * from './components/UpgradeBanner';

// ✅ i18n 타입과 헬퍼 함수 export
export * from './i18nTypes';

// ✅ 기존 UI 컴포넌트들도 재export (필요시)
export * from '@designbasekorea/ui';
