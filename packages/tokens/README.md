# @designbasekorea/tokens

Designbase 디자인 토큰 시스템 - 색상, 타이포그래피, 간격, 그림자 등의 디자인 토큰을 정의합니다.

![npm](https://img.shields.io/npm/v/@designbasekorea/tokens)
![license](https://img.shields.io/npm/l/@designbasekorea/tokens)

## 📦 설치

### NPM
```bash
npm install @designbasekorea/tokens
```

### Yarn
```bash
yarn add @designbasekorea/tokens
```

### pnpm
```bash
pnpm add @designbasekorea/tokens
```

## 🚀 사용법

### CSS 변수로 사용

```tsx
// React/Next.js
import '@designbasekorea/tokens/dist/css/tokens.css';

// 이제 CSS에서 토큰 사용 가능
.my-element {
  color: var(--color-foundation-blue-500);
  padding: var(--spacing-foundation-m);
  font-size: var(--text-foundation-size-body-m);
}
```

### CDN 사용

```html
<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">

<!-- jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@designbasekorea/tokens@latest/dist/css/tokens.css">
```

### SCSS 변수로 사용

```scss
@import '@designbasekorea/tokens/dist/scss/tokens';

.my-element {
  color: $color-foundation-blue-500;
  padding: $spacing-foundation-m;
}
```

### JavaScript/TypeScript로 사용

```tsx
import { tokens } from '@designbasekorea/tokens';

// 토큰 객체로 접근
const primaryColor = tokens.color.foundation.blue[500];
const spacingM = tokens.spacing.foundation.m;

// 또는 CSS 변수로 접근
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-foundation-blue-500');
```

### JSON으로 사용

```tsx
import tokens from '@designbasekorea/tokens/json';

console.log(tokens.color.foundation.blue[500]); // "#3B82F6"
```

## 🎨 토큰 구조

### Foundation 토큰 (기본)

기본적인 디자인 값들입니다. 직접 사용하기보다는 Semantic 토큰의 기반이 됩니다.

#### 색상
```css
:root {
  /* Blue */
  --color-foundation-blue-50: #eff6ff;
  --color-foundation-blue-100: #dbeafe;
  --color-foundation-blue-500: #3b82f6;
  --color-foundation-blue-900: #1e3a8a;
  
  /* Gray */
  --color-foundation-gray-50: #f9fafb;
  --color-foundation-gray-500: #6b7280;
  --color-foundation-gray-900: #111827;
  
  /* 기타: red, green, yellow, purple, pink 등 */
}
```

#### 간격
```css
:root {
  --spacing-foundation-xs: 4px;
  --spacing-foundation-s: 8px;
  --spacing-foundation-m: 16px;
  --spacing-foundation-l: 24px;
  --spacing-foundation-xl: 32px;
  --spacing-foundation-2xl: 48px;
  --spacing-foundation-3xl: 64px;
}
```

#### 타이포그래피
```css
:root {
  /* Font Family */
  --text-foundation-family-sans: 'Pretendard', -apple-system, sans-serif;
  --text-foundation-family-mono: 'Fira Code', monospace;
  
  /* Font Size */
  --text-foundation-size-display-xl: 72px;
  --text-foundation-size-heading-xl: 48px;
  --text-foundation-size-heading-l: 36px;
  --text-foundation-size-heading-m: 28px;
  --text-foundation-size-body-l: 18px;
  --text-foundation-size-body-m: 16px;
  --text-foundation-size-body-s: 14px;
  --text-foundation-size-caption: 12px;
  
  /* Font Weight */
  --text-foundation-weight-regular: 400;
  --text-foundation-weight-medium: 500;
  --text-foundation-weight-semibold: 600;
  --text-foundation-weight-bold: 700;
  
  /* Line Height */
  --text-foundation-lineHeight-tight: 1.2;
  --text-foundation-lineHeight-normal: 1.5;
  --text-foundation-lineHeight-relaxed: 1.75;
}
```

#### 그림자
```css
:root {
  --shadow-foundation-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-foundation-s: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-foundation-m: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-foundation-l: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-foundation-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
}
```

### Semantic 토큰 (의미)

사용 목적에 따른 의미론적 토큰입니다. **실제 개발에서는 이것을 사용하세요.**

#### 색상
```css
:root {
  /* Primary */
  --color-semantic-primary: var(--color-foundation-blue-500);
  --color-semantic-primary-hover: var(--color-foundation-blue-600);
  --color-semantic-primary-active: var(--color-foundation-blue-700);
  
  /* Success, Warning, Danger, Info */
  --color-semantic-success: var(--color-foundation-green-500);
  --color-semantic-warning: var(--color-foundation-yellow-500);
  --color-semantic-danger: var(--color-foundation-red-500);
  --color-semantic-info: var(--color-foundation-blue-400);
  
  /* Background */
  --color-semantic-bg-primary: #ffffff;
  --color-semantic-bg-secondary: var(--color-foundation-gray-50);
  
  /* Text */
  --color-semantic-text-primary: var(--color-foundation-gray-900);
  --color-semantic-text-secondary: var(--color-foundation-gray-600);
  --color-semantic-text-disabled: var(--color-foundation-gray-400);
}
```

#### Border
```css
:root {
  /* Primary Border */
  --border-semantic-color-primary-default: var(--color-foundation-neutral-700);
  --border-semantic-color-primary-hover: var(--color-foundation-neutral-600);
  --border-semantic-color-primary-active: var(--color-foundation-neutral-500);
  --border-semantic-color-primary-focus: var(--color-foundation-blue-500);
  --border-semantic-color-primary-disabled: var(--color-foundation-neutral-300);
  
  /* Success, Warning, Danger, Info Borders */
  /* ... 각 상태별 border 토큰 */
}
```

### 다크 테마

다크 테마는 자동으로 `[data-theme="dark"]` 속성에서 활성화됩니다.

```html
<html data-theme="dark">
  <!-- 다크 테마 적용 -->
</html>
```

```css
[data-theme="dark"] {
  --color-semantic-bg-primary: #1a1a1a;
  --color-semantic-text-primary: #ffffff;
  /* 기타 다크 테마 오버라이드 */
}
```

## 📦 Export 형식

| 형식 | 경로 | 설명 |
|------|------|------|
| CSS | `dist/css/tokens.css` | CSS 변수 형식 |
| SCSS | `dist/scss/_tokens.scss` | SCSS 변수 형식 |
| JSON | `dist/json/tokens.json` | JSON 객체 형식 |
| TypeScript | `dist/index.d.ts` | 타입 정의 |
| ESM | `dist/index.esm.js` | ES Module |
| CJS | `dist/index.cjs.js` | CommonJS |

## 🎯 토큰 네이밍 규칙

```
--{category}-{type}-{property}-{variant}-{state}

예시:
--color-semantic-primary                    (기본 primary 색상)
--color-semantic-primary-hover              (hover 상태)
--border-semantic-color-primary-default     (border primary 기본)
--spacing-semantic-padding-m                (medium padding)
```

### Category (카테고리)
- `color`: 색상
- `spacing`: 간격
- `text`: 타이포그래피
- `shadow`: 그림자
- `border`: 테두리
- `radius`: 모서리
- `motion`: 애니메이션

### Type (타입)
- `foundation`: 기본 값
- `semantic`: 의미론적 값
- `alias`: 별칭

## 🔄 버전 히스토리

### 0.1.7 (Latest)
- ✅ Border 색상 토큰 상태별 세분화 (default, hover, active, focus, disabled)
- ✅ 라이트/다크 테마 border 색상 개선
- ✅ Style Dictionary 빌드 최적화

### 0.1.6
- ✅ Motion 토큰 추가 (애니메이션 속도, easing)
- ✅ Shadow 토큰 확장

### 0.1.5
- ✅ Semantic 토큰 체계 확립
- ✅ 다크 테마 지원

## 🔗 관련 패키지

- [@designbasekorea/theme](../theme) - 테마 시스템 (이 토큰을 기반으로 함)
- [@designbasekorea/ui](../ui) - UI 컴포넌트 (토큰 사용)

## 📄 라이선스

MIT

