# Designbase UI 예제 갤러리

디자이너를 위한 Designbase UI 컴포넌트 예제 갤러리입니다.

## 🎯 특징

- **사이드바 네비게이션**: 왼쪽 사이드바에서 모든 컴포넌트 예제 탐색
- **카테고리별 그룹화**: Form, Navigation, Layout, Feedback, Data Display
- **실시간 미리보기**: 각 컴포넌트의 다양한 사용 예제 확인
- **디자이너 친화적**: 코드보다 시각적 예제에 집중

## 🚀 실행 방법

### 방법 1: 루트에서 실행 (권장)

```bash
# 루트 디렉토리에서
npm run example:gallery
```

### 방법 2: 직접 실행

```bash
# 예제 폴더로 이동
cd examples/design-examples

# 의존성 설치 (처음 한 번만)
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 **`http://localhost:5174`** 접속하면 예제 갤러리를 확인할 수 있습니다!

## 📁 구조

```
design-examples/
├── src/
│   ├── main.tsx              # 엔트리 포인트
│   ├── App.tsx               # 메인 앱 (사이드바 + 뷰)
│   ├── components/
│   │   ├── Sidebar.tsx       # 왼쪽 사이드바
│   │   └── ExampleView.tsx   # 오른쪽 예제 뷰
│   ├── examples/             # 각 컴포넌트 예제
│   │   ├── ButtonExample.tsx
│   │   ├── BreadcrumbExample.tsx
│   │   └── ...
│   └── data/
│       └── examples.ts       # 예제 메타데이터
```

## 📝 예제 추가하기

1. `src/examples/` 폴더에 새 예제 컴포넌트 생성
2. `src/data/examples.ts`에 예제 정보 추가

```typescript
{
  id: 'new-component',
  title: 'New Component',
  category: 'Form',
  component: lazy(() => import('../examples/NewComponentExample')),
}
```

## 🎨 사용 가능한 컴포넌트

**총 80개 이상의 컴포넌트 예제 포함!**

### Form (11개)
- Button, Input, Checkbox, Radio, Select, Textarea, Toggle
- FileUploader, RangeSlider, ColorPicker, Label

### Navigation (10개)
- Breadcrumb, Tabs, Pagination, Dropdown, Navbar
- SearchBar, SegmentControl, BottomNavigation
- ContextMenu, FloatingActionButton

### Layout (15개)
- Card, Modal, Accordion, Divider, Drawer
- Grid, Stack, Container, Backdrop, ScrollArea, Section
- BottomSheet, ResizablePanels, SplitView, Sidebar, Banner

### Feedback (9개)
- Alert, Badge, Spinner, Progress, Tooltip
- Toast, Skeleton, EmptyState, ProgressStep

### Data Display (8개)
- Table, Chip, Avatar, List, Image
- Carousel, Timeline, Stat, ImageList, Masonry, Logo

### Date & Time (3개)
- Calendar, DatePicker, TimePicker

### 기타 (25개 이상)
- Rating, Stepper, Popover, Dropzone
- VideoPlayer, Lightbox, Share, Confirm, Countdown
- Reorder, Gradient, AnimationBackground, AnimationText
- HeroFeature, Testimonial, AdBanner, MarkdownEditor
- Tutorial, Indicator, OnboardingModal
- AudioPlayer, YouTubePlayer, RandomGradient
- Form, MenuItem, Toolbar

