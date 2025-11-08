/**
 * Designbase UI 컴포넌트 라이브러리 메인 엔트리 포인트
 * 
 * 목적: 모든 UI 컴포넌트와 타입을 내보냄
 * 기능: Tree-shaking 가능한 개별 컴포넌트 내보내기
 * 사용법: import { Button, Input } from '@designbasekorea/ui'
 */

// 테마 CSS 자동 로드 (로컬 복사본 사용)
import './theme/theme.css';

// ✅ 개별 컴포넌트의 index.ts를 통해 re-export (깔끔!)
export * from './components/Accordion';
export * from './components/AdBanner';
export * from './components/Alert';
export * from './components/AnimationBackground';
export * from './components/AnimationText';
export * from './components/AudioPlayer';
export * from './components/Avatar';
export * from './components/Backdrop';
export * from './components/Badge';
export * from './components/Banner';
export * from './components/BottomNavigation';
export * from './components/BottomSheet';
export * from './components/Breadcrumbs';
export * from './components/Button';
export * from './components/Calendar';
export * from './components/Card';
export * from './components/Carousel';
export * from './components/Checkbox';
export * from './components/Chip';
export * from './components/ColorPicker';
export * from './components/Confirm';
export * from './components/Countdown';
export * from './components/Container';
export * from './components/ContextMenu';
export * from './components/DatePicker';
export * from './components/Divider';
export * from './components/Drawer';
export * from './components/Dropdown';
export * from './components/Dropzone';
export * from './components/EmptyState';
export * from './components/FileUploader';
export * from './components/FloatingActionButton';
export * from './components/Form';
export * from './components/Gradient';
export * from './components/Grid';
export * from './components/HeroFeature';
export * from './components/Image';
export * from './components/ImageList';
export * from './components/Input';
export * from './components/Label';
export * from './components/Lightbox';
export * from './components/List';
export * from './components/Logo';
export * from './components/MarkdownEditor';
export * from './components/Masonry';
export * from './components/MenuItem';
export * from './components/Modal';
export * from './components/OnboardingModal';
export * from './components/Indicator';
export * from './components/Tutorial';
export * from './components/Navbar';
export * from './components/Pagination';
export * from './components/Popover';
export * from './components/Progress';
export * from './components/ProgressStep';
export * from './components/Progressbar';
export * from './components/Radio';
export * from './components/RandomGradient';
export * from './components/RangeSlider';
export * from './components/Rating';
export * from './components/Reorder';
export * from './components/ResizablePanels';
export * from './components/ScrollArea';
export * from './components/SearchBar';
export * from './components/Section';
export * from './components/SegmentControl';
export * from './components/Select';
export * from './components/Share';
export * from './components/Sidebar';
export * from './components/Skeleton';
export * from './components/Spinner';
export * from './components/SplitView';
export * from './components/Stack';
export * from './components/Stat';
export * from './components/Stepper';
export * from './components/Table';
export * from './components/Tabs';
export * from './components/Textarea';
export * from './components/TimePicker';
export * from './components/Timeline';
export * from './components/Toast';
export * from './components/Toggle';
export * from './components/Testimonial';
export * from './components/Toolbar';
export * from './components/Tooltip';
export * from './components/VideoPlayer';
export * from './components/YouTubePlayer';

// 유틸리티 타입들
export interface ComponentBaseProps {
    className?: string;
    children?: React.ReactNode;
}

// 테마 관련 유틸리티 재내보내기
export const setTheme = (theme: string) => {
    console.log('setTheme called with:', theme);
};

export const getTheme = () => {
    return 'light';
};

export const toggleTheme = () => {
    console.log('toggleTheme called');
};
