/**
 * Designbase UI 컴포넌트 라이브러리 메인 엔트리 포인트
 * 
 * 목적: 모든 UI 컴포넌트와 타입을 내보냄
 * 기능: Tree-shaking 가능한 개별 컴포넌트 내보내기
 * 사용법: import { Button, Input } from '@designbase/ui'
 */

// 테마 및 토큰 자동 로드
import { loadTokens } from '@designbase/theme';

// UI 패키지가 로드될 때 자동으로 토큰 CSS 로드
if (typeof document !== 'undefined') {
    // DOM이 로드된 후 토큰 CSS 로드
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            loadTokens().catch(console.warn);
        });
    } else {
        loadTokens().catch(console.warn);
    }
}

// 컴포넌트 내보내기
export { Button } from './components/Button/Button';
export { Input } from './components/Input/Input';
export { Modal } from './components/Modal/Modal';
export { Checkbox } from './components/Checkbox/Checkbox';
export { Toggle } from './components/Toggle/Toggle';
export { Radio } from './components/Radio/Radio';
export { Toast, ToastContainer, ToastProvider, useToast, type ToastProps, type ToastStatus, type ToastContainerProps, type ToastItem } from './components/Toast';
export { Select, type SelectProps, type SelectOption } from './components/Select/Select';
export { Tabs, type TabsProps, type TabItem } from './components/Tabs/Tabs';
export { SegmentControl, type SegmentControlProps, type SegmentOption } from './components/SegmentControl/SegmentControl';
export { Dropdown, type DropdownProps, type DropdownItem } from './components/Dropdown/Dropdown';
export { Spinner, type SpinnerProps, type SpinnerType, type SpinnerSize } from './components/Spinner/Spinner';
export { Logo, type LogoProps, type LogoSize, type LogoVariant } from './components/Logo/Logo';
export { Progressbar, type ProgressbarProps, type ProgressbarSize, type ProgressbarVariant, type ProgressbarStyle } from './components/Progressbar/Progressbar';
export { Navbar, type NavbarProps, type NavbarSize, type NavbarVariant, type NavbarPosition, type NavbarItem } from './components/Navbar/Navbar';
export { Sidebar, type SidebarProps, type SidebarSize, type SidebarVariant, type SidebarPosition, type SidebarItem } from './components/Sidebar/Sidebar';
export { Pagination, type PaginationProps, type PaginationSize, type PaginationVariant, type PaginationAlignment } from './components/Pagination/Pagination';
export { Breadcrumbs, type BreadcrumbsProps, type BreadcrumbsSize, type BreadcrumbsStyle, type BreadcrumbItem } from './components/Breadcrumbs/Breadcrumbs';
export { Table, type TableProps, type TableColumn, type TableSize, type TableVariant, type SortDirection } from './components/Table/Table';
export { Chip, type ChipProps, type ChipSize, type ChipVariant } from './components/Chip/Chip';
export { Badge, type BadgeProps, type BadgeSize, type BadgeVariant, type BadgeStyle } from './components/Badge/Badge';
export { MenuItem, type MenuItemProps, type MenuItemVariant, type MenuItemType, type MenuItemSize, type MenuItemStyle, type MenuItemChild } from './components/MenuItem/MenuItem';
export { Avatar, AvatarGroup, type AvatarProps, type AvatarSize, type AvatarVariant, type AvatarStatus, type AvatarGroupProps } from './components/Avatar/Avatar';
export { Divider, type DividerProps } from './components/Divider/Divider';
export { RangeSlider, type RangeSliderProps, type RangeSliderSize, type RangeSliderVariant } from './components/RangeSlider/RangeSlider';
export { default as Tooltip, type TooltipProps, type TooltipPosition, type TooltipSize, type TooltipVariant } from './components/Tooltip/Tooltip';
export { default as Popover, type PopoverProps, type PopoverPosition, type PopoverSize, type PopoverVariant, type PopoverTrigger } from './components/Popover/Popover';
export { default as Alert, type AlertProps, type AlertVariant, type AlertSize, type AlertAction } from './components/Alert/Alert';
export { default as Confirm, type ConfirmProps, type ConfirmVariant, type ConfirmSize } from './components/Confirm/Confirm';
export { default as Accordion, type AccordionProps, type AccordionItem, type AccordionItemType } from './components/Accordion/Accordion';
export { default as ContextMenu, type ContextMenuProps, type ContextMenuItem } from './components/ContextMenu/ContextMenu';
export { useContextMenu, type UseContextMenuReturn } from './components/ContextMenu/useContextMenu';
export { default as Textarea, Textarea as TextareaComponent, type TextareaProps } from './components/Textarea/Textarea';
export { default as Image, type ImageProps, type ImageRatio, type ImageFit, type ImageLoading, type ImagePlaceholder, type ImageRounded } from './components/Image/Image';
export { default as Container, type ContainerProps, type ContainerSize, type ContainerPadding } from './components/Container/Container';
export { default as Stack, type StackProps, type StackDirection, type StackAlignment, type StackJustify, type StackSpacing } from './components/Stack/Stack';
export { default as Grid, GridRow, GridCol, type GridProps, type GridRowProps, type GridColProps, type GridBreakpoint, type GridSize, type GridAlignment, type GridJustify } from './components/Grid/Grid';

// Form
export { default as Form, type FormProps, type FormField, type FormLayout, type FormSize, type FormVariant } from './components/Form/Form';

// Share
export { default as Share, type ShareProps, type SharePlatform, type ShareVariant, type ShareSize, type SharePosition, type SharePlatformConfig } from './components/Share/Share';

// Card
export { default as Card, type CardProps, type CardVariant, type CardSize, type CardLayout, type CardImagePosition, type CardImage, type CardAction } from './components/Card/Card';

// Reorder
export { default as Reorder, type ReorderProps, type ReorderVariant, type ReorderSize, type ReorderOrientation, type ReorderItem } from './components/Reorder/Reorder';

export { default as ScrollArea, type ScrollAreaProps, type ScrollDirection, type ScrollbarStyle, type ScrollAreaSize } from './components/ScrollArea/ScrollArea';
export { default as SplitView, type SplitViewProps, type SplitDirection, type SplitSize, type SplitMode } from './components/SplitView/SplitView';
export { default as Section, type SectionProps, type SectionSize, type SectionVariant } from './components/Section/Section';
export { default as Timeline, type TimelineProps, type TimelinePosition, type TimelineSize, type TimelineVariant, type TimelineColor, type TimelineItem } from './components/Timeline/Timeline';
export { default as ProgressStep, type ProgressStepProps, type ProgressStepVariant, type ProgressStepSize, type ProgressStepLayout, type ProgressStepItem } from './components/ProgressStep/ProgressStep';
export { default as Stat, type StatProps, type StatSize, type StatVariant, type StatLayout, type StatColor } from './components/Stat/Stat';
export { default as Rating, type RatingProps, type RatingSize, type RatingVariant } from './components/Rating/Rating';
export { default as VideoPlayer, type VideoPlayerProps, type VideoPlayerSize, type VideoPlayerVariant, type VideoPlayerTheme } from './components/VideoPlayer/VideoPlayer';
export { default as AudioPlayer, type AudioPlayerProps, type AudioPlayerSize, type AudioPlayerVariant, type AudioPlayerTheme } from './components/AudioPlayer/AudioPlayer';
export { default as Dropzone, type DropzoneProps, type DropzoneSize, type DropzoneVariant } from './components/Dropzone/Dropzone';
export { default as FileUploader, type FileUploaderProps, type FileUploaderSize, type FileUploaderVariant, type FileStatus, type UploadFile } from './components/FileUploader/FileUploader';
export { default as Progress, type ProgressProps, type ProgressSize, type ProgressVariant, type ProgressType } from './components/Progress/Progress';
export { default as Stepper, type StepperProps, type StepperSize, type StepperVariant } from './components/Stepper/Stepper';
export { default as Gradient, type GradientProps, type GradientDirection, type GradientSize, type GradientVariant, type GradientColor } from './components/Gradient/Gradient';
export { default as Toolbar, type ToolbarProps, type ToolbarSize, type ToolbarVariant, type ToolbarPosition, type ToolbarItem } from './components/Toolbar/Toolbar';
export { default as TimePicker, type TimePickerProps, type TimePickerSize, type TimePickerVariant, type TimeFormat, type TimePickerMode } from './components/TimePicker/TimePicker';

// DatePicker
export { default as DatePicker } from './components/DatePicker/DatePicker';
export type {
    DatePickerProps,
    DatePickerMode,
    DatePickerSize,
    DatePickerVariant,
    DatePickerEvent,
    StartOfWeek,
} from './components/DatePicker/DatePicker';

// MarkdownEditor
export { default as MarkdownEditor } from './components/MarkdownEditor/MarkdownEditor';
export type {
    MarkdownEditorProps,
    MarkdownEditorSize,
    MarkdownEditorVariant,
    MarkdownEditorMode,
    MarkdownEditorTheme,
    MarkdownToolbarItem,
} from './components/MarkdownEditor/MarkdownEditor';

// Lightbox
export { default as Lightbox } from './components/Lightbox/Lightbox';
export type {
    LightboxProps,
    LightboxSize,
    LightboxVariant,
    LightboxTheme,
    LightboxImage,
} from './components/Lightbox/Lightbox';

// Carousel
export { default as Carousel } from './components/Carousel/Carousel';
export type {
    CarouselProps,
    CarouselSize,
    CarouselVariant,
    CarouselTheme,
    CarouselTransition,
    CarouselItem,
} from './components/Carousel/Carousel';

// List
export { default as List } from './components/List/List';
export type {
    ListProps,
    ListItem,
    ListSize,
    ListVariant,
    ListItemType,
    ListLayout,
} from './components/List/List';

// HeroFeature
export { default as HeroFeature } from './components/HeroFeature/HeroFeature';
export type {
    HeroFeatureProps,
    HeroFeatureButton,
    HeroFeatureSize,
    HeroFeatureVariant,
    HeroFeatureTheme,
    HeroFeatureAlignment,
} from './components/HeroFeature/HeroFeature';

// Banner
export { default as Banner } from './components/Banner/Banner';
export type {
    BannerProps,
    BannerAction,
    BannerSize,
    BannerVariant,
    BannerStyle,
    BannerPosition,
    BannerAlignment,
} from './components/Banner/Banner';

// Skeleton
export { default as Skeleton } from './components/Skeleton/Skeleton';
export type { SkeletonProps } from './components/Skeleton/Skeleton';

// YouTubePlayer
export { default as YouTubePlayer } from './components/YouTubePlayer/YouTubePlayer';
export type {
    YouTubePlayerProps,
    YouTubePlayerSize,
    YouTubePlayerVariant,
    YouTubePlayerTheme
} from './components/YouTubePlayer/YouTubePlayer';

// Backdrop
export { default as Backdrop } from './components/Backdrop/Backdrop';
export type { BackdropProps } from './components/Backdrop/Backdrop';

// BottomSheet
export { default as BottomSheet } from './components/BottomSheet/BottomSheet';
export type {
    BottomSheetProps,
    BottomSheetSize,
    BottomSheetVariant
} from './components/BottomSheet/BottomSheet';

// FloatingActionButton
export { default as FloatingActionButton } from './components/FloatingActionButton/FloatingActionButton';
export type {
    FloatingActionButtonProps,
    FloatingActionButtonSize,
    FloatingActionButtonVariant,
    FloatingActionButtonPosition
} from './components/FloatingActionButton/FloatingActionButton';

// Calendar
export { default as Calendar } from './components/Calendar/Calendar';
export type {
    CalendarProps,
    CalendarView,
    CalendarEvent,
    CalendarEventType
} from './components/Calendar/Calendar';

// Drawer
export { default as Drawer } from './components/Drawer/Drawer';
export type {
    DrawerProps,
    DrawerPosition,
    DrawerSize
} from './components/Drawer/Drawer';

// ImageList
export { default as ImageList } from './components/ImageList/ImageList';
export type {
    ImageListProps,
    ImageListLayout,
    ImageListColumns,
    ImageListSpacing,
    ImageItem
} from './components/ImageList/ImageList';

// Masonry
export { default as Masonry } from './components/Masonry/Masonry';
export type {
    MasonryProps,
    MasonryColumns,
    MasonrySpacing,
    MasonryAnimation,
    MasonryItem
} from './components/Masonry/Masonry';

// AnimationText
export { default as AnimationText } from './components/AnimationText/AnimationText';
export type { AnimationTextProps } from './components/AnimationText/AnimationText';

// AnimationBackground
export { default as AnimationBackground } from './components/AnimationBackground/AnimationBackground';
export type { AnimationBackgroundProps } from './components/AnimationBackground/AnimationBackground';

// ResizablePanels
export { default as ResizablePanels } from './components/ResizablePanels/ResizablePanels';
export type { ResizablePanelsProps } from './components/ResizablePanels/ResizablePanels';

// ThemeToggle
export { default as ThemeToggle } from './components/ThemeToggle/ThemeToggle';
export type { ThemeToggleProps } from './components/ThemeToggle/ThemeToggle';

// 추후 추가될 컴포넌트들
// export { default as Checkbox } from './components/Checkbox/Checkbox';
// export { default as Radio } from './components/Radio/Radio';
// export { default as Select } from './components/Select/Select';
// export { default as Textarea } from './components/Textarea/Textarea';
// export { default as Badge } from './components/Badge/Badge';
// export { default as Tag } from './components/Tag/Tag';
// export { default as Tooltip } from './components/Tooltip/Tooltip';
// export { default as Toast } from './components/Toast/Toast';
// export { default as Spinner } from './components/Spinner/Spinner';

// 유틸리티 타입들
export interface ComponentBaseProps {
    className?: string;
    children?: React.ReactNode;
}

// 테마 관련 유틸리티 재내보내기
// 임시로 theme 함수들을 정의
export const setTheme = (theme: string) => {
    console.log('setTheme called with:', theme);
};

export const getTheme = () => {
    return 'light';
};

export const toggleTheme = () => {
    console.log('toggleTheme called');
};
