# 📁 컴포넌트 폴더 구조 가이드

## 🎯 목적

모든 컴포넌트 폴더에 일관된 구조를 적용하여 **유지보수성**, **가독성**, **import 편의성**을 향상시킵니다.

---

## 📂 표준 컴포넌트 폴더 구조

```
ComponentName/
├── index.ts                  # ⭐ 컴포넌트 엔트리 포인트 (필수)
├── ComponentName.tsx         # 메인 컴포넌트 파일
├── ComponentName.scss        # 스타일 파일
├── ComponentName.stories.tsx # Storybook 스토리 (선택)
└── ComponentName.test.tsx    # 테스트 파일 (선택)
```

---

## 🔑 `index.ts` 파일의 역할

### ❓ 왜 `index.ts`가 필요한가요?

1. **Import 경로 단순화**
   ```tsx
   // ❌ index.ts가 없을 때
   import { Button } from '@designbasekorea/ui/dist/components/Button/Button';
   
   // ✅ index.ts가 있을 때
   import { Button } from '@designbasekorea/ui';
   ```

2. **명시적인 Public API**
   - 어떤 컴포넌트와 타입이 export되는지 명확하게 정의
   - 내부 구현 세부사항 숨기기

3. **일관성**
   - 모든 컴포넌트가 동일한 방식으로 export됨
   - 다른 개발자가 쉽게 이해하고 사용 가능

4. **Tree-shaking 최적화**
   - 번들러가 사용되지 않는 코드를 더 효율적으로 제거 가능

---

## 📝 `index.ts` 파일 작성 규칙

### 기본 템플릿

```typescript
export { ComponentName, type ComponentNameProps } from './ComponentName';
export default ComponentName;
```

### 예제 1: 단일 컴포넌트

```typescript
// Button/index.ts
export { Button, type ButtonProps } from './Button';
export default Button;
```

### 예제 2: 여러 타입이 있는 경우

```typescript
// Dropdown/index.ts
export { 
  Dropdown, 
  type DropdownProps, 
  type DropdownOption,
  type DropdownGroup 
} from './Dropdown';
export default Dropdown;
```

### 예제 3: 여러 컴포넌트가 있는 경우

```typescript
// Modal/index.ts
export { 
  Modal, 
  ModalHeader,
  ModalBody,
  ModalFooter,
  type ModalProps,
  type ModalHeaderProps 
} from './Modal';
export default Modal;
```

---

## 🤖 자동 생성 스크립트

모든 컴포넌트에 `index.ts`를 자동으로 생성하는 스크립트를 제공합니다:

### 사용 방법

```bash
# ui 패키지의 모든 컴포넌트에 index.ts 생성
node scripts/generate-component-index.js packages/ui

# figma-ui 패키지의 모든 컴포넌트에 index.ts 생성
node scripts/generate-component-index.js packages/figma-ui
```

### 스크립트 동작

1. **컴포넌트 파일 스캔**: `ComponentName.tsx` 파일 찾기
2. **타입 추출**: `export interface` 또는 `export type` 찾기
3. **index.ts 생성**: 자동으로 적절한 export 문 작성
4. **기존 파일 보호**: 이미 `index.ts`가 있으면 스킵

### 출력 예시

```
✅ Created: Button/index.ts
✅ Created: Input/index.ts
⏭️  Skipped: Modal (index.ts already exists)

📊 Summary:
✅ Created: 75 files
⏭️  Skipped: 3 files
📁 Total: 78 components
```

---

## 📦 패키지별 현황

### `@designbasekorea/ui` (78개 컴포넌트)

모든 컴포넌트에 `index.ts` 추가 완료 ✅  
(AnimationBackground는 0.5.1부터 types.ts, renderers.ts, CanvasLayer, CSSGradientLayer, MeshAuroraLayer, GridOverlay 등 레이어 구조 사용)

<details>
<summary>전체 컴포넌트 목록 보기</summary>

- Accordion
- Alert
- AnimationBackground
- AnimationText
- AudioPlayer
- Avatar
- Backdrop
- Badge
- Banner
- BottomSheet
- Breadcrumbs
- Button
- Calendar
- Card
- Carousel
- Checkbox
- Chip
- Confirm
- Container
- ContextMenu
- DatePicker
- Divider
- Drawer
- Dropdown
- Dropzone
- EmptyState
- FileUploader
- FloatingActionButton
- Form
- Gradient
- Grid
- HeroFeature
- Image
- ImageList
- Input
- Lightbox
- List
- Logo
- MarkdownEditor
- Masonry
- MenuItem
- Modal
- Navbar
- Pagination
- Popover
- Progress
- ProgressStep
- Progressbar
- Radio
- RangeSlider
- Rating
- Reorder
- ResizablePanels
- ScrollArea
- SearchBar
- Section
- SegmentControl
- Select
- Share
- Sidebar
- Skeleton
- Spinner
- SplitView
- Stack
- Stat
- Stepper
- Table
- Tabs
- Textarea
- TimePicker
- Timeline
- Toast
- Toggle
- Toolbar
- Tooltip
- VideoPlayer
- YouTubePlayer

</details>

### `@designbasekorea/figma-ui` (14개 컴포넌트)

모든 컴포넌트에 `index.ts` 추가 완료 ✅

- DonationBadge ✅
- Footer ✅
- FormWithSubmit ✅
- InteractionFeedback ✅
- LanguageSelector ✅
- LogoDropdown ✅
- PageLicense ✅
- PaymentBadge ✅
- PaymentStatusSection ✅
- PricingComparison ✅
- ProgressModal ✅
- ResizablePlugin ✅
- SettingsModal ✅
- UpgradeBanner ✅

---

## 🔍 빌드 후 사용 차이

### ❓ `index.ts`가 빌드에 영향을 주나요?

**아니요!** `index.ts`의 유무는 **빌드된 결과물에 영향을 주지 않습니다**.

하지만 **개발자 경험(DX)**에 큰 차이를 만듭니다:

#### 1. **Import 경로**

```tsx
// index.ts가 없어도 동작함 (하지만 불편함)
import { Button } from '@designbasekorea/ui/dist/components/Button/Button';

// index.ts가 있으면 간결함
import { Button } from '@designbasekorea/ui';
```

#### 2. **타입 힌트**

IDE에서 자동완성 시 `index.ts`가 있으면:
- 컴포넌트명만 입력하면 바로 import 경로 제안
- 어떤 Props 타입이 있는지 명확히 표시

#### 3. **번들 크기**

**영향 없음!** 최종 빌드 결과는 동일합니다.
- Rollup/Webpack은 `index.ts`를 inline 처리
- Tree-shaking은 동일하게 작동

---

## ✅ 체크리스트: 새 컴포넌트 만들 때

- [ ] `ComponentName.tsx` 파일 생성
- [ ] `ComponentName.scss` 파일 생성
- [ ] `index.ts` 파일 생성 (또는 스크립트 실행)
- [ ] `ComponentName.stories.tsx` 파일 생성 (Storybook용)
- [ ] 메인 `src/index.ts`에 컴포넌트 export 추가

```typescript
// packages/ui/src/index.ts
export * from './components/NewComponent';
```

---

## 🔧 트러블슈팅

### Q: `index.ts`를 추가했는데 import가 안 돼요

**A**: 메인 `src/index.ts`에 컴포넌트를 export 했는지 확인하세요.

```typescript
// packages/ui/src/index.ts
export * from './components/YourComponent';  // ← 이 줄 추가
```

### Q: 스크립트가 `index.ts`를 생성하지 않아요

**A**: 다음을 확인하세요:
1. `ComponentName.tsx` 파일이 존재하는가?
2. 파일명이 폴더명과 일치하는가?
3. 이미 `index.ts`가 존재하지 않는가?

### Q: 기존 `index.ts`를 다시 생성하고 싶어요

**A**: 기존 파일을 삭제하고 스크립트를 다시 실행하세요:

```bash
rm packages/ui/src/components/Button/index.ts
node scripts/generate-component-index.js packages/ui
```

### Q: 빌드 시 오류가 나요

**A**: `index.ts`의 export 경로가 올바른지 확인하세요:

```typescript
// ❌ 잘못된 경로
export { Button } from './Button.tsx';  // .tsx 확장자는 불필요

// ✅ 올바른 경로
export { Button } from './Button';
```

---

## 📚 참고 자료

### 공식 문서

- [TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
- [Rollup Plugin Node Resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve)

### Best Practices

1. **Barrel Exports 패턴**: `index.ts`를 사용한 re-export
2. **Public API Pattern**: 명시적으로 export할 항목 정의
3. **Tree-shaking Friendly**: Named exports 사용

---

## 🎯 결론

### ✅ `index.ts`를 사용하면:

1. **개발자 경험 향상**: 간결한 import 경로
2. **유지보수성 향상**: 명확한 Public API
3. **일관성**: 모든 컴포넌트가 동일한 구조
4. **협업 효율**: 다른 개발자가 쉽게 이해

### 📊 통계

- **ui 패키지**: 78개 컴포넌트, 100% `index.ts` 완료
- **figma-ui 패키지**: 14개 컴포넌트, 100% `index.ts` 완료
- **총**: 92개 컴포넌트, 모두 통일된 구조

---

**모든 컴포넌트가 이제 일관된 구조를 가지고 있습니다!** 🎉

