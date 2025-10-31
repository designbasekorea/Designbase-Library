# FigmaContainer 사용 가이드

`FigmaContainer`는 Figma 플러그인을 위한 기본 레이아웃 컨테이너 컴포넌트입니다. CSS Flexbox를 사용하여 헤더, 배너, 사이드바, 메인 콘텐츠, 인터랙션 피드백, 액션 버튼, 푸터를 자동으로 배치합니다.

## 주요 특징

- ✅ **자동 레이아웃**: CSS Flexbox 기반으로 자동 높이/폭 계산
- ✅ **유연한 구조**: 필요한 영역만 선택적으로 사용 가능
- ✅ **자동 스크롤**: 메인 콘텐츠 영역이 나머지 공간을 모두 차지하고 내부에서 스크롤
- ✅ **반응형**: 고정 요소들은 콘텐츠에 맞게 자동으로 크기 조정

## 설치 및 임포트

```bash
npm install @designbasekorea/figma-ui
```

```tsx
import { FigmaContainer } from '@designbasekorea/figma-ui';
import '@designbasekorea/figma-ui/dist/index.css';
```

## Props

| Prop | Type | 기본값 | 설명 |
|------|------|--------|------|
| `header` | `React.ReactNode` | `undefined` | 상단 헤더 영역 |
| `banner` | `React.ReactNode` | `undefined` | 배너 영역 (업그레이드 배너 등) |
| `bannerPosition` | `'top' \| 'bottom'` | `'top'` | 배너 위치 (헤더 아래 또는 푸터 위) |
| `sidebar` | `React.ReactNode` | `undefined` | 좌측 사이드바 영역 |
| `sidebarWidth` | `number` | `undefined` | 사이드바 고정 폭 (px). 지정하지 않으면 자동 계산 |
| `children` | `React.ReactNode` | **필수** | 메인 콘텐츠 영역 |
| `interactionFeedback` | `React.ReactNode` | `undefined` | 인터랙션 피드백 영역 (푸터 위) |
| `actionButton` | `React.ReactNode` | `undefined` | 액션 버튼 영역 (푸터 바로 위) |
| `footer` | `React.ReactNode` | `undefined` | 하단 푸터 영역 |
| `size` | `'s' \| 'm' \| 'l'` | `'m'` | 컨테이너 크기 (패딩 조정) |
| `fullHeight` | `boolean` | `true` | 전체 높이 사용 여부 |
| `className` | `string` | `undefined` | 추가 CSS 클래스 |

## 레이아웃 구조

```
┌─────────────────────────────────────┐
│ Header (자동 높이)                   │
├─────────────────────────────────────┤
│ Banner (top, 자동 높이) [선택]      │
├─────────────────────────────────────┤
│ ┌─────────┬─────────────────────────┐│
│ │Sidebar  │ Main Content            ││
│ │(고정폭) │ (flex: 1, 스크롤 가능)  ││
│ │자동높이 │                         ││
│ └─────────┴─────────────────────────┘│
├─────────────────────────────────────┤
│ Interaction Feedback (자동 높이) [선택] │
├─────────────────────────────────────┤
│ Action Button (자동 높이) [선택]    │
├─────────────────────────────────────┤
│ Banner (bottom, 자동 높이) [선택]   │
├─────────────────────────────────────┤
│ Footer (자동 높이)                   │
└─────────────────────────────────────┘
```

## 기본 사용법

### 1. 가장 기본적인 형태

```tsx
import { FigmaContainer } from '@designbasekorea/figma-ui';

function App() {
  return (
    <FigmaContainer>
      <div>메인 콘텐츠</div>
    </FigmaContainer>
  );
}
```

### 2. 헤더와 푸터 포함

```tsx
import { FigmaContainer, FigmaHeader, FigmaFooter } from '@designbasekorea/figma-ui';

function App() {
  return (
    <FigmaContainer
      header={<FigmaHeader>제목</FigmaHeader>}
      footer={<FigmaFooter paymentStatus="FREE" />}
    >
      <div>메인 콘텐츠</div>
    </FigmaContainer>
  );
}
```

### 3. 사이드바 포함

```tsx
import { FigmaContainer, FigmaSidebar } from '@designbasekorea/figma-ui';

function App() {
  const categories = ['general', 'settings', 'about'];
  
  return (
    <FigmaContainer
      header={<FigmaHeader>제목</FigmaHeader>}
      sidebar={
        <FigmaSidebar
          categories={categories}
          activeCategory="general"
          onCategoryClick={(cat) => console.log(cat)}
        />
      }
      sidebarWidth={200} // 선택사항: 지정하지 않으면 자동 계산
      footer={<FigmaFooter />}
    >
      <div id="scroll-container">
        {/* 스크롤 가능한 콘텐츠 */}
        <div>섹션 1</div>
        <div>섹션 2</div>
        <div>섹션 3</div>
      </div>
    </FigmaContainer>
  );
}
```

### 4. 배너 포함 (상단)

```tsx
import { FigmaContainer, UpgradeBanner } from '@designbasekorea/figma-ui';

function App() {
  return (
    <FigmaContainer
      header={<FigmaHeader>제목</FigmaHeader>}
      banner={
        <UpgradeBanner
          onClick={() => console.log('업그레이드')}
          variant="clickable"
          useGradient={true}
          gradientScheme="primary"
          gradientTone="light"
        />
      }
      bannerPosition="top" // 기본값
    >
      <div>메인 콘텐츠</div>
    </FigmaContainer>
  );
}
```

### 5. 배너 포함 (하단)

```tsx
<FigmaContainer
  header={<FigmaHeader>제목</FigmaHeader>}
  banner={<UpgradeBanner onClick={handleClick} />}
  bannerPosition="bottom" // 푸터 위에 배치
  footer={<FigmaFooter />}
>
  <div>메인 콘텐츠</div>
</FigmaContainer>
```

### 6. 인터랙션 피드백 포함

```tsx
import { FigmaContainer, InteractionFeedback } from '@designbasekorea/figma-ui';

function App() {
  return (
    <FigmaContainer
      header={<FigmaHeader>제목</FigmaHeader>}
      interactionFeedback={
        <InteractionFeedback
          status="info"
          message="5개 항목이 선택되었습니다"
          visible={true}
        />
      }
      footer={<FigmaFooter />}
    >
      <div>메인 콘텐츠</div>
    </FigmaContainer>
  );
}
```

### 7. 액션 버튼 포함

```tsx
import { FigmaContainer, Button } from '@designbasekorea/figma-ui';

function App() {
  return (
    <FigmaContainer
      header={<FigmaHeader>제목</FigmaHeader>}
      actionButton={
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', width: '100%' }}>
          <Button variant="tertiary" size="m">취소</Button>
          <Button variant="primary" size="m">적용</Button>
        </div>
      }
      footer={<FigmaFooter />}
    >
      <div>메인 콘텐츠</div>
    </FigmaContainer>
  );
}
```

### 8. 전체 기능 사용 예제

```tsx
import { 
  FigmaContainer,
  FigmaHeader,
  FigmaSidebar,
  UpgradeBanner,
  InteractionFeedback,
  FigmaFooter,
  Button,
  SegmentControl
} from '@designbasekorea/figma-ui';

function App() {
  const [activeTab, setActiveTab] = useState('design');
  const categories = ['general', 'settings'];
  
  return (
    <FigmaContainer
      fullHeight={true}
      size="m"
      header={
        <FigmaHeader>
          <SegmentControl
            options={[
              { value: 'design', label: '디자인' },
              { value: 'code', label: '코드' }
            ]}
            value={activeTab}
            onChange={setActiveTab}
          />
        </FigmaHeader>
      }
      banner={
        <UpgradeBanner
          onClick={() => console.log('업그레이드')}
          variant="clickable"
          useGradient={true}
        />
      }
      bannerPosition="top"
      sidebar={
        <FigmaSidebar
          categories={categories}
          activeCategory="general"
          onCategoryClick={(cat) => console.log(cat)}
        />
      }
      sidebarWidth={200}
      interactionFeedback={
        <InteractionFeedback
          status="info"
          message="작업이 완료되었습니다"
          visible={true}
        />
      }
      actionButton={
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', width: '100%' }}>
          <Button variant="tertiary">취소</Button>
          <Button variant="primary">저장</Button>
        </div>
      }
      footer={
        <FigmaFooter
          paymentStatus="FREE"
          usageCount={5}
          showDonation={true}
        />
      }
    >
      <div id="scroll-container">
        {/* 스크롤 가능한 메인 콘텐츠 */}
        <div>콘텐츠 섹션 1</div>
        <div>콘텐츠 섹션 2</div>
      </div>
    </FigmaContainer>
  );
}
```

## 중요 사항

### 자동 높이 계산

모든 고정 요소들(header, banner, footer 등)은 **자동으로 콘텐츠에 맞게 높이가 계산**됩니다. 명시적으로 높이를 지정할 필요가 없습니다.

```tsx
// ✅ 올바른 사용법
<FigmaContainer
  header={<FigmaHeader>제목</FigmaHeader>} // 자동 높이
  footer={<FigmaFooter />} // 자동 높이
>
  <div>콘텐츠</div>
</FigmaContainer>

// ❌ 불필요한 높이 지정 (제거됨)
// headerHeight, footerHeight 등은 더 이상 사용하지 않습니다.
```

### 메인 콘텐츠 영역의 스크롤

메인 콘텐츠 영역(`children`)은 **자동으로 나머지 공간을 모두 차지**하고, 내부에서 스크롤됩니다.

- 사이드바가 **없을 때**: `__main` 영역에서 스크롤
- 사이드바가 **있을 때**: `__content` 영역에서 스크롤

```tsx
// 사이드바 없을 때
<FigmaContainer>
  <div>이 영역이 스크롤됩니다</div>
</FigmaContainer>

// 사이드바 있을 때
<FigmaContainer sidebar={<FigmaSidebar />}>
  <div id="scroll-container">
    {/* 이 영역이 스크롤됩니다 */}
    <div>콘텐츠</div>
  </div>
</FigmaContainer>
```

### 사이드바 폭 설정

`sidebarWidth`를 지정하지 않으면 사이드바는 **자동으로 콘텐츠에 맞게 폭이 계산**됩니다.

```tsx
// 자동 폭 (권장)
<FigmaContainer sidebar={<FigmaSidebar />}>
  {/* 사이드바가 콘텐츠에 맞게 자동 계산 */}
</FigmaContainer>

// 고정 폭
<FigmaContainer sidebar={<FigmaSidebar />} sidebarWidth={200}>
  {/* 사이드바가 200px로 고정 */}
</FigmaContainer>
```

### 전체 높이 사용

`fullHeight={true}` (기본값)일 때 컨테이너는 `100vh`를 사용합니다. 제한된 높이 내에서 사용하려면 `fullHeight={false}`를 설정하세요.

```tsx
// 전체 화면 (기본값)
<FigmaContainer fullHeight={true}>
  <div>콘텐츠</div>
</FigmaContainer>

// 부모 컨테이너 높이에 맞춤
<div style={{ height: '600px' }}>
  <FigmaContainer fullHeight={false}>
    <div>콘텐츠</div>
  </FigmaContainer>
</div>
```

### 크기별 패딩

`size` prop으로 패딩 크기를 조정할 수 있습니다:

- `'s'`: 작은 패딩
- `'m'`: 중간 패딩 (기본값)
- `'l'`: 큰 패딩

```tsx
<FigmaContainer size="s"> {/* 작은 패딩 */} </FigmaContainer>
<FigmaContainer size="m"> {/* 중간 패딩 (기본값) */} </FigmaContainer>
<FigmaContainer size="l"> {/* 큰 패딩 */} </FigmaContainer>
```

## 레이아웃 배치 순서

요소들이 렌더링되는 순서는 다음과 같습니다:

1. **Header** (있으면)
2. **Banner** (top 위치, 있으면)
3. **Main Content** (필수)
   - Sidebar (있으면)
   - Content (children)
4. **Interaction Feedback** (있으면)
5. **Action Button** (있으면)
6. **Banner** (bottom 위치, 있으면)
7. **Footer** (있으면)

## 주의사항

1. **CSS 필수**: `@designbasekorea/figma-ui/dist/index.css`를 반드시 임포트해야 합니다.
2. **flex 기반**: 내부 구조가 CSS Flexbox를 사용하므로, 자식 요소의 `height: 100%` 스타일이 제대로 작동하지 않을 수 있습니다.
3. **스크롤 컨테이너**: 사이드바와 함께 사용할 때, 스크롤이 필요한 콘텐츠에는 `id="scroll-container"`를 지정하는 것을 권장합니다. (FigmaSidebar와 연동 시 필요)
4. **높이 제한**: 부모 컨테이너에 높이가 있어야 `fullHeight={false}`가 제대로 작동합니다.

## 예제 코드

더 많은 예제는 Storybook에서 확인할 수 있습니다:

```bash
npm run storybook
```

또는 다음 경로에서 확인:
- `packages/figma-ui/src/components/FigmaContainer/FigmaContainer.stories.tsx`

