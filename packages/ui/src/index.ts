/**
 * Designbase UI 컴포넌트 라이브러리 메인 엔트리 포인트
 * 
 * 목적: 모든 UI 컴포넌트와 타입을 내보냄
 * 기능: Tree-shaking 가능한 개별 컴포넌트 내보내기
 * 사용법: import { Button, Input } from '@designbase/ui'
 */

// 디자인 토큰 CSS import
import '@designbase/tokens/dist/css/tokens.css';
// 테마 CSS import
import '@designbase/theme/dist/css/theme.css';

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
export { default as Textarea, type TextareaProps } from './components/Textarea/Textarea';
export { default as Image, type ImageProps, type ImageRatio, type ImageFit, type ImageLoading, type ImagePlaceholder, type ImageRounded } from './components/Image/Image';
export { default as Container, type ContainerProps, type ContainerSize, type ContainerPadding } from './components/Container/Container';
export { default as Stack, type StackProps, type StackDirection, type StackAlignment, type StackJustify, type StackSpacing } from './components/Stack/Stack';
export { default as Grid, GridItem, type GridProps, type GridItemProps, type GridColumns, type GridGap, type GridAlignment } from './components/Grid/Grid';
export { default as ScrollArea, type ScrollAreaProps, type ScrollDirection, type ScrollbarStyle, type ScrollAreaSize } from './components/ScrollArea/ScrollArea';
export { default as SplitView, type SplitViewProps, type SplitDirection, type SplitSize, type SplitMode } from './components/SplitView/SplitView';
export { default as Section, type SectionProps, type SectionSize, type SectionVariant } from './components/Section/Section';
export { default as Timeline, type TimelineProps, type TimelineDirection, type TimelineSize, type TimelineVariant, type TimelineItem } from './components/Timeline/Timeline';
export { default as Stat, type StatProps, type StatSize, type StatVariant, type StatTrend } from './components/Stat/Stat';
export { default as Rating, type RatingProps, type RatingSize, type RatingVariant } from './components/Rating/Rating';
export { default as Dropzone, type DropzoneProps, type DropzoneSize, type DropzoneVariant } from './components/Dropzone/Dropzone';
export { default as FileUploader, type FileUploaderProps, type FileUploaderSize, type FileUploaderVariant, type FileStatus, type UploadFile } from './components/FileUploader/FileUploader';
export { default as Progress, type ProgressProps, type ProgressSize, type ProgressVariant, type ProgressType } from './components/Progress/Progress';
export { default as Stepper, type StepperProps, type StepperSize, type StepperVariant } from './components/Stepper/Stepper';
export { default as Gradient, type GradientProps, type GradientDirection, type GradientSize, type GradientVariant, type GradientColor } from './components/Gradient/Gradient';
export { default as Toolbar, type ToolbarProps, type ToolbarSize, type ToolbarVariant, type ToolbarPosition, type ToolbarItem } from './components/Toolbar/Toolbar';
export { default as Calendar, type CalendarProps, type CalendarMode, type CalendarSize, type CalendarVariant, type StartOfWeek, type EventType, type CalendarEvent } from './components/Calendar/Calendar';

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
