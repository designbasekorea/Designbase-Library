export interface ExampleItem {
  id: string;
  title: string;
  category: string;
  icon?: string;
  component: React.ComponentType;
}

// 예제 컴포넌트들을 lazy import로 로드
import { lazy } from 'react';

export const examples: ExampleItem[] = [
  // Form 컴포넌트
  {
    id: 'button',
    title: 'Button',
    category: 'Form',
    component: lazy(() => import('../examples/ButtonExample')),
  },
  {
    id: 'input',
    title: 'Input',
    category: 'Form',
    component: lazy(() => import('../examples/InputExample')),
  },
  {
    id: 'checkbox',
    title: 'Checkbox',
    category: 'Form',
    component: lazy(() => import('../examples/CheckboxExample')),
  },
  {
    id: 'radio',
    title: 'Radio',
    category: 'Form',
    component: lazy(() => import('../examples/RadioExample')),
  },
  {
    id: 'select',
    title: 'Select',
    category: 'Form',
    component: lazy(() => import('../examples/SelectExample')),
  },
  {
    id: 'textarea',
    title: 'Textarea',
    category: 'Form',
    component: lazy(() => import('../examples/TextareaExample')),
  },
  {
    id: 'toggle',
    title: 'Toggle',
    category: 'Form',
    component: lazy(() => import('../examples/ToggleExample')),
  },
  {
    id: 'fileuploader',
    title: 'FileUploader',
    category: 'Form',
    component: lazy(() => import('../examples/FileUploaderExample')),
  },
  {
    id: 'rangeslider',
    title: 'RangeSlider',
    category: 'Form',
    component: lazy(() => import('../examples/RangeSliderExample')),
  },
  {
    id: 'colorpicker',
    title: 'ColorPicker',
    category: 'Form',
    component: lazy(() => import('../examples/ColorPickerExample')),
  },
  {
    id: 'label',
    title: 'Label',
    category: 'Form',
    component: lazy(() => import('../examples/LabelExample')),
  },
  {
    id: 'stepper',
    title: 'Stepper',
    category: 'Form',
    component: lazy(() => import('../examples/StepperExample')),
  },
  {
    id: 'rating',
    title: 'Rating',
    category: 'Form',
    component: lazy(() => import('../examples/RatingExample')),
  },
  // {
  //   id: 'dropzone',
  //   title: 'Dropzone',
  //   category: 'Form',
  //   component: lazy(() => import('../examples/DropzoneExample')),
  // },
  // {
  //   id: 'markdowneditor',
  //   title: 'MarkdownEditor',
  //   category: 'Form',
  //   component: lazy(() => import('../examples/MarkdownEditorExample')),
  // },
  {
    id: 'form',
    title: 'Form',
    category: 'Form',
    component: lazy(() => import('../examples/FormExample')),
  },

  // Navigation 컴포넌트
  {
    id: 'breadcrumb',
    title: 'Breadcrumb',
    category: 'Navigation',
    component: lazy(() => import('../examples/BreadcrumbExample')),
  },
  {
    id: 'tabs',
    title: 'Tabs',
    category: 'Navigation',
    component: lazy(() => import('../examples/TabsExample')),
  },
  {
    id: 'pagination',
    title: 'Pagination',
    category: 'Navigation',
    component: lazy(() => import('../examples/PaginationExample')),
  },
  {
    id: 'dropdown',
    title: 'Dropdown',
    category: 'Navigation',
    component: lazy(() => import('../examples/DropdownExample')),
  },
  {
    id: 'navbar',
    title: 'Navbar',
    category: 'Navigation',
    component: lazy(() => import('../examples/NavbarExample')),
  },
  {
    id: 'searchbar',
    title: 'SearchBar',
    category: 'Navigation',
    component: lazy(() => import('../examples/SearchBarExample')),
  },
  {
    id: 'segmentcontrol',
    title: 'SegmentControl',
    category: 'Navigation',
    component: lazy(() => import('../examples/SegmentControlExample')),
  },
  {
    id: 'bottomnavigation',
    title: 'BottomNavigation',
    category: 'Navigation',
    component: lazy(() => import('../examples/BottomNavigationExample')),
  },
  {
    id: 'contextmenu',
    title: 'ContextMenu',
    category: 'Navigation',
    component: lazy(() => import('../examples/ContextMenuExample')),
  },
  {
    id: 'floatingactionbutton',
    title: 'FloatingActionButton',
    category: 'Navigation',
    component: lazy(() => import('../examples/FloatingActionButtonExample')),
  },
  {
    id: 'menuitem',
    title: 'MenuItem',
    category: 'Navigation',
    component: lazy(() => import('../examples/MenuItemExample')),
  },
  // {
  //   id: 'toolbar',
  //   title: 'Toolbar',
  //   category: 'Navigation',
  //   component: lazy(() => import('../examples/ToolbarExample')),
  // },
  // 숨김 처리된 예제들
  // {
  //   id: 'share',
  //   title: 'Share',
  //   category: 'Navigation',
  //   component: lazy(() => import('../examples/ShareExample')),
  // },

  // Layout 컴포넌트
  {
    id: 'card',
    title: 'Card',
    category: 'Layout',
    component: lazy(() => import('../examples/CardExample')),
  },
  {
    id: 'modal',
    title: 'Modal',
    category: 'Layout',
    component: lazy(() => import('../examples/ModalExample')),
  },
  {
    id: 'accordion',
    title: 'Accordion',
    category: 'Layout',
    component: lazy(() => import('../examples/AccordionExample')),
  },
  {
    id: 'divider',
    title: 'Divider',
    category: 'Layout',
    component: lazy(() => import('../examples/DividerExample')),
  },
  {
    id: 'drawer',
    title: 'Drawer',
    category: 'Layout',
    component: lazy(() => import('../examples/DrawerExample')),
  },
  {
    id: 'backdrop',
    title: 'Backdrop',
    category: 'Layout',
    component: lazy(() => import('../examples/BackdropExample')),
  },
  // {
  //   id: 'scrollarea',
  //   title: 'ScrollArea',
  //   category: 'Layout',
  //   component: lazy(() => import('../examples/ScrollAreaExample')),
  // },
  {
    id: 'section',
    title: 'Section',
    category: 'Layout',
    component: lazy(() => import('../examples/SectionExample')),
  },
  {
    id: 'bottomsheet',
    title: 'BottomSheet',
    category: 'Layout',
    component: lazy(() => import('../examples/BottomSheetExample')),
  },
  {
    id: 'sidebarlayout',
    title: 'Sidebar (Layout)',
    category: 'Layout',
    component: lazy(() => import('../examples/SidebarLayoutExample')),
  },
  {
    id: 'banner',
    title: 'Banner',
    category: 'Layout',
    component: lazy(() => import('../examples/BannerExample')),
  },
  {
    id: 'reorder',
    title: 'Reorder',
    category: 'Layout',
    component: lazy(() => import('../examples/ReorderExample')),
  },
  // {
  //   id: 'gradient',
  //   title: 'Gradient',
  //   category: 'Layout',
  //   component: lazy(() => import('../examples/GradientExample')),
  // },
  // {
  //   id: 'randomgradient',
  //   title: 'RandomGradient',
  //   category: 'Layout',
  //   component: lazy(() => import('../examples/RandomGradientExample')),
  // },
  // {
  //   id: 'animationbackground',
  //   title: 'AnimationBackground',
  //   category: 'Layout',
  //   component: lazy(() => import('../examples/AnimationBackgroundExample')),
  // },
  // {
  //   id: 'animationtext',
  //   title: 'AnimationText',
  //   category: 'Layout',
  //   component: lazy(() => import('../examples/AnimationTextExample')),
  // },
  // {
  //   id: 'herofeature',
  //   title: 'HeroFeature',
  //   category: 'Layout',
  //   component: lazy(() => import('../examples/HeroFeatureExample')),
  // },
  {
    id: 'adbanner',
    title: 'AdBanner',
    category: 'Layout',
    component: lazy(() => import('../examples/AdBannerExample')),
  },

  // Feedback 컴포넌트
  {
    id: 'alert',
    title: 'Alert',
    category: 'Feedback',
    component: lazy(() => import('../examples/AlertExample')),
  },
  {
    id: 'badge',
    title: 'Badge',
    category: 'Feedback',
    component: lazy(() => import('../examples/BadgeExample')),
  },
  {
    id: 'spinner',
    title: 'Spinner',
    category: 'Feedback',
    component: lazy(() => import('../examples/SpinnerExample')),
  },
  {
    id: 'progress',
    title: 'Progress',
    category: 'Feedback',
    component: lazy(() => import('../examples/ProgressExample')),
  },
  {
    id: 'tooltip',
    title: 'Tooltip',
    category: 'Feedback',
    component: lazy(() => import('../examples/TooltipExample')),
  },
  {
    id: 'toast',
    title: 'Toast',
    category: 'Feedback',
    component: lazy(() => import('../examples/ToastExample')),
  },
  {
    id: 'skeleton',
    title: 'Skeleton',
    category: 'Feedback',
    component: lazy(() => import('../examples/SkeletonExample')),
  },
  {
    id: 'emptystate',
    title: 'EmptyState',
    category: 'Feedback',
    component: lazy(() => import('../examples/EmptyStateExample')),
  },
  {
    id: 'progressstep',
    title: 'ProgressStep',
    category: 'Feedback',
    component: lazy(() => import('../examples/ProgressStepExample')),
  },
  {
    id: 'popover',
    title: 'Popover',
    category: 'Feedback',
    component: lazy(() => import('../examples/PopoverExample')),
  },
  {
    id: 'confirm',
    title: 'Confirm',
    category: 'Feedback',
    component: lazy(() => import('../examples/ConfirmExample')),
  },
  {
    id: 'indicator',
    title: 'Indicator',
    category: 'Feedback',
    component: lazy(() => import('../examples/IndicatorExample')),
  },
  // {
  //   id: 'tutorial',
  //   title: 'Tutorial',
  //   category: 'Feedback',
  //   component: lazy(() => import('../examples/TutorialExample')),
  // },
  {
    id: 'onboardingmodal',
    title: 'OnboardingModal',
    category: 'Feedback',
    component: lazy(() => import('../examples/OnboardingModalExample')),
  },

  // Data Display 컴포넌트
  {
    id: 'table',
    title: 'Table',
    category: 'Data Display',
    component: lazy(() => import('../examples/TableExample')),
  },
  {
    id: 'chip',
    title: 'Chip',
    category: 'Data Display',
    component: lazy(() => import('../examples/ChipExample')),
  },
  {
    id: 'avatar',
    title: 'Avatar',
    category: 'Data Display',
    component: lazy(() => import('../examples/AvatarExample')),
  },
  {
    id: 'list',
    title: 'List',
    category: 'Data Display',
    component: lazy(() => import('../examples/ListExample')),
  },
  {
    id: 'image',
    title: 'Image',
    category: 'Data Display',
    component: lazy(() => import('../examples/ImageExample')),
  },
  {
    id: 'carousel',
    title: 'Carousel',
    category: 'Data Display',
    component: lazy(() => import('../examples/CarouselExample')),
  },
  {
    id: 'timeline',
    title: 'Timeline',
    category: 'Data Display',
    component: lazy(() => import('../examples/TimelineExample')),
  },
  {
    id: 'stat',
    title: 'Stat',
    category: 'Data Display',
    component: lazy(() => import('../examples/StatExample')),
  },
  {
    id: 'imagelist',
    title: 'ImageList',
    category: 'Data Display',
    component: lazy(() => import('../examples/ImageListExample')),
  },
  {
    id: 'masonry',
    title: 'Masonry',
    category: 'Data Display',
    component: lazy(() => import('../examples/MasonryExample')),
  },
  {
    id: 'logo',
    title: 'Logo',
    category: 'Data Display',
    component: lazy(() => import('../examples/LogoExample')),
  },
  {
    id: 'videoplayer',
    title: 'VideoPlayer',
    category: 'Data Display',
    component: lazy(() => import('../examples/VideoPlayerExample')),
  },
  {
    id: 'audioplayer',
    title: 'AudioPlayer',
    category: 'Data Display',
    component: lazy(() => import('../examples/AudioPlayerExample')),
  },
  {
    id: 'youtubeplayer',
    title: 'YouTubePlayer',
    category: 'Data Display',
    component: lazy(() => import('../examples/YouTubePlayerExample')),
  },
  {
    id: 'lightbox',
    title: 'Lightbox',
    category: 'Data Display',
    component: lazy(() => import('../examples/LightboxExample')),
  },
  {
    id: 'testimonial',
    title: 'Testimonial',
    category: 'Data Display',
    component: lazy(() => import('../examples/TestimonialExample')),
  },
  {
    id: 'countdown',
    title: 'Countdown',
    category: 'Data Display',
    component: lazy(() => import('../examples/CountdownExample')),
  },

  // Date & Time 컴포넌트
  {
    id: 'calendar',
    title: 'Calendar',
    category: 'Date & Time',
    component: lazy(() => import('../examples/CalendarExample')),
  },
  {
    id: 'datepicker',
    title: 'DatePicker',
    category: 'Date & Time',
    component: lazy(() => import('../examples/DatePickerExample')),
  },
  {
    id: 'timepicker',
    title: 'TimePicker',
    category: 'Date & Time',
    component: lazy(() => import('../examples/TimePickerExample')),
  },
];

export const categories = [
  'Form',
  'Navigation',
  'Layout',
  'Feedback',
  'Data Display',
  'Date & Time',
] as const;

export type Category = typeof categories[number];

