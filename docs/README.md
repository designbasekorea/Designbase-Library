# Designbase Library Documentation

피그마 플러그인을 위한 공통 디자인시스템 및 컴포넌트 라이브러리 문서입니다.

## 📚 목차

- [시작하기](#시작하기)
- [패키지 구조](#패키지-구조)
- [디자인 토큰](#디자인-토큰)
- [테마 시스템](#테마-시스템)
- [아이콘 가이드](#아이콘-가이드)
- [UI 컴포넌트](#ui-컴포넌트)
- [개발 가이드](#개발-가이드)
- [배포 및 버전 관리](#배포-및-버전-관리)

## 🚀 시작하기

### 설치

```bash
# 전체 프로젝트 설치
npm install

# 개발 모드 시작
npm run dev

# 빌드
npm run build
```

### 플러그인에서 사용하기

```bash
# 필요한 패키지 설치
npm install @designbase/ui @designbase/theme @designbase/icons
```

```tsx
// React 컴포넌트에서 사용
import { Button, Input } from '@designbase/ui';
import { CheckIcon } from '@designbase/icons';
import '@designbase/theme/dist/css/theme.css';

function MyPlugin() {
  return (
    <div data-theme="light">
      <Button variant="primary" startIcon={CheckIcon}>
        확인
      </Button>
      <Input label="이름" placeholder="이름을 입력하세요" />
    </div>
  );
}
```

## 📦 패키지 구조

### Core Packages

| 패키지 | 설명 | 용도 |
|--------|------|------|
| `@designbase/tokens` | 디자인 토큰 | 색상, 간격, 타이포그래피 등 기본 값 |
| `@designbase/theme` | 테마 시스템 | CSS 변수, 테마 전환, 유틸리티 |
| `@designbase/ui` | UI 컴포넌트 | React 컴포넌트 라이브러리 |
| `@designbase/icons` | 아이콘 시스템 | SVG 아이콘 + React 컴포넌트 |

### Utility Packages

| 패키지 | 설명 | 용도 |
|--------|------|------|
| `@designbase/utils` | 공통 유틸리티 | 포맷, 검증, 날짜 등 헬퍼 함수 |
| `@designbase/figma-bridge` | 피그마 브리지 | UI-Main 간 타입 안전한 통신 |

## 🎨 디자인 토큰

디자인 토큰은 디자인 시스템의 기초가 되는 값들입니다.

### Foundation Tokens

```typescript
import { tokens } from '@designbase/tokens';

// 색상
tokens.color.foundation.blue[500]    // #3b82f6
tokens.color.foundation.gray[100]    // #f3f4f6

// 간격
tokens.spacing.foundation[4]         // 16px (1rem)
tokens.spacing.foundation[8]         // 32px (2rem)

// 타이포그래피
tokens.typography.foundation.fontSize.base  // 16px (1rem)
tokens.typography.foundation.fontWeight.medium  // 500
```

### Semantic Tokens

```typescript
// 의미론적 색상
tokens.color.semantic.text.primary     // 주요 텍스트 색상
tokens.color.semantic.background.primary  // 주요 배경 색상
tokens.color.semantic.border.focus     // 포커스 테두리 색상
```

### 사용법

```tsx
// TypeScript에서 타입 안전하게 사용
import { getColorValue, getSpacingValue } from '@designbase/tokens';

const primaryColor = getColorValue('semantic.text.primary');
const spacing = getSpacingValue('4');
```

## 🌈 테마 시스템

### 테마 적용

```html
<!-- 라이트 테마 -->
<div data-theme="light">
  <!-- 컴포넌트들 -->
</div>

<!-- 다크 테마 -->
<div data-theme="dark">
  <!-- 컴포넌트들 -->
</div>
```

### CSS 변수 사용

```css
/* 자동으로 테마에 따라 변경되는 CSS 변수 */
.my-component {
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-primary);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
}
```

### SCSS 믹스인

```scss
@import '@designbase/theme/scss/mixins';

.my-button {
  @include button-base;
  @include button-variant('primary');
  @include button-size('md');
}

.my-layout {
  @include flex-center;
  @include container(1200px);
}
```

## 🎯 아이콘 가이드

### 아이콘 사용

```tsx
import { CheckIcon, CloseIcon, SearchIcon } from '@designbase/icons';

function MyComponent() {
  return (
    <div>
      <CheckIcon size={16} color="green" />
      <CloseIcon size={20} className="text-red-500" />
      <SearchIcon size={24} style={{ color: 'blue' }} />
    </div>
  );
}
```

### 동적 아이콘 로드

```tsx
import { getIcon, iconMap } from '@designbase/icons';

function DynamicIcon({ name, ...props }) {
  const IconComponent = getIcon(name);
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent {...props} />;
}

// 사용
<DynamicIcon name="check" size={16} />
```

### 아이콘 목록

```tsx
import { iconNames } from '@designbase/icons';

// 모든 아이콘 이름 배열
console.log(iconNames); // ['check', 'close', 'search', ...]
```

## 🧩 UI 컴포넌트

### Button

```tsx
import { Button } from '@designbase/ui';
import { CheckIcon } from '@designbase/icons';

// 기본 버튼
<Button variant="primary" size="m">
  확인
</Button>

// 아이콘 버튼
<Button variant="secondary" startIcon={CheckIcon}>
  저장
</Button>

// 아이콘 전용 버튼
<Button variant="ghost" iconOnly startIcon={CheckIcon} aria-label="확인" />

// 로딩 상태
<Button loading>처리 중...</Button>
```

### Input

```tsx
import { Input } from '@designbase/ui';
import { SearchIcon } from '@designbase/icons';

// 기본 입력
<Input 
  label="이름" 
  placeholder="이름을 입력하세요"
  required 
/>

// 아이콘 포함
<Input 
  label="검색" 
  startIcon={SearchIcon}
  placeholder="검색어를 입력하세요"
/>

// 에러 상태
<Input 
  label="이메일"
  value={email}
  error={!!emailError}
  errorMessage={emailError}
  onChange={setEmail}
/>
```

### Card

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@designbase/ui';

<Card variant="elevated" interactive onClick={handleClick}>
  <CardHeader>
    <h3>카드 제목</h3>
  </CardHeader>
  <CardContent>
    <p>카드 내용입니다.</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">액션</Button>
  </CardFooter>
</Card>
```

### Modal

```tsx
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@designbase/ui';

<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  size="md"
  title="확인"
>
  <ModalBody>
    <p>정말로 삭제하시겠습니까?</p>
  </ModalBody>
  <ModalFooter>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>
      취소
    </Button>
    <Button variant="danger" onClick={handleDelete}>
      삭제
    </Button>
  </ModalFooter>
</Modal>
```

## 🛠 개발 가이드

### 새 컴포넌트 추가

1. **컴포넌트 파일 생성**
```tsx
// packages/ui/src/components/NewComponent/NewComponent.tsx
export interface NewComponentProps {
  // props 정의
}

export const NewComponent: React.FC<NewComponentProps> = (props) => {
  // 컴포넌트 구현
};
```

2. **스토리 작성**
```tsx
// packages/ui/src/components/NewComponent/NewComponent.stories.tsx
export default {
  title: 'Components/NewComponent',
  component: NewComponent,
};

export const Default = {
  args: {
    // 기본 props
  },
};
```

3. **테스트 작성**
```tsx
// packages/ui/src/components/NewComponent/NewComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { NewComponent } from './NewComponent';

describe('NewComponent', () => {
  it('renders correctly', () => {
    render(<NewComponent />);
    // 테스트 구현
  });
});
```

4. **내보내기 추가**
```tsx
// packages/ui/src/index.ts
export { NewComponent } from './components/NewComponent/NewComponent';
export type { NewComponentProps } from './components/NewComponent/NewComponent';
```

### 개발 서버 시작

```bash
# 모든 패키지 dev 모드
npm run dev

# 특정 패키지만
npm run dev -- --package ui

# 스토리북 포함
npm run dev -- --storybook
```

### 테스트 실행

```bash
# 모든 테스트
npm test

# 특정 패키지
npm run test:ui

# 커버리지 포함
npm run test:coverage
```

## 📋 피그마 브리지 사용법

### UI 측 (React)

```tsx
import { createUIBridge } from '@designbase/figma-bridge';

const bridge = createUIBridge({
  debug: true,
  defaultTimeout: 5000,
});

// 요청 보내기
async function createRectangle() {
  try {
    const result = await bridge.request('node:create', {
      type: 'RECTANGLE',
      properties: {
        width: 100,
        height: 100,
        fills: [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }],
      },
    });
    
    console.log('Rectangle created:', result);
  } catch (error) {
    console.error('Failed to create rectangle:', error);
  }
}

// 이벤트 수신
bridge.on('selection:change', (selection) => {
  console.log('Selection changed:', selection);
});
```

### Main 측 (Figma Plugin)

```tsx
import { createMainBridge } from '@designbase/figma-bridge';

const bridge = createMainBridge({
  debug: true,
});

// 요청 핸들러 등록
bridge.handle('node:create', async (request) => {
  const node = figma.createRectangle();
  
  // 속성 적용
  Object.assign(node, request.properties);
  
  return {
    nodeId: node.id,
    success: true,
  };
});

// 선택 변경 이벤트 전송
figma.on('selectionchange', () => {
  bridge.emit('selection:change', {
    selection: figma.currentPage.selection,
  });
});

// 브리지 준비 완료
bridge.ready();
```

## 🚀 배포 및 버전 관리

### 버전 업데이트

```bash
# Changeset 생성
npm run changeset

# 버전 업데이트
npm run version-packages

# 패키지 배포
npm run release
```

### 릴리즈 프로세스

1. **변경사항 검증**
   - 모든 테스트 통과
   - 린트 및 타입 체크 통과
   - 스토리북 빌드 성공

2. **Changeset 작성**
   - 변경사항 요약
   - Breaking change 여부
   - 적절한 semver 레벨

3. **버전 업데이트**
   - CHANGELOG 자동 생성
   - package.json 버전 업데이트
   - Git 태그 생성

4. **배포 실행**
   - npm 레지스트리에 배포
   - GitHub Release 생성
   - 문서 사이트 업데이트

### 브랜치 전략

- `main`: 안정 버전
- `develop`: 개발 버전
- `feat/*`: 기능 개발
- `fix/*`: 버그 수정
- `release/*`: 릴리즈 준비

## 📖 추가 자료

- [Storybook 컴포넌트 카탈로그](./storybook/)
- [API 레퍼런스](./api/)
- [마이그레이션 가이드](./migration/)
- [기여 가이드](../CONTRIBUTING.md)
- [코드 스타일 가이드](./code-style.md)

## 🤝 기여하기

1. 이슈 생성 및 논의
2. 브랜치 생성 (`feat/feature-name`)
3. 변경사항 구현
4. 테스트 작성 및 실행
5. 문서 업데이트
6. Pull Request 생성

자세한 내용은 [CONTRIBUTING.md](../CONTRIBUTING.md)를 참고하세요.

## 📞 지원

- 이슈: [GitHub Issues](https://github.com/designbase/designbase-library/issues)
- 문의: design-system@designbase.co.kr
- Slack: #design-system

---

**Designbase Library**는 피그마 플러그인 개발팀의 생산성과 일관성을 위해 지속적으로 발전하고 있습니다. 🚀
