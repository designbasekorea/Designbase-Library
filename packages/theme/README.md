# @designbasekorea/theme

Designbase 테마 시스템 - CSS 변수, 테마 프리셋, 유틸리티 클래스를 제공합니다.

![npm](https://img.shields.io/npm/v/@designbasekorea/theme)
![license](https://img.shields.io/npm/l/@designbasekorea/theme)

## 📦 설치

### NPM
```bash
npm install @designbasekorea/theme @designbasekorea/tokens
```

⚠️ **주의**: `@designbasekorea/tokens`는 필수 의존성입니다!

### Yarn
```bash
yarn add @designbasekorea/theme @designbasekorea/tokens
```

### pnpm
```bash
pnpm add @designbasekorea/theme @designbasekorea/tokens
```

## 🚀 사용법

### React/Next.js에서

```tsx
// 1. 토큰 CSS 먼저 import (필수!)
import '@designbasekorea/tokens/dist/css/tokens.css';

// 2. 테마 CSS import
import '@designbasekorea/theme/dist/css/theme.css';

// 3. 테마 함수 사용
import { setTheme, getTheme } from '@designbasekorea/theme';

function App() {
  const handleToggleTheme = () => {
    const currentTheme = getTheme();
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <div>
      <button onClick={handleToggleTheme}>
        테마 전환
      </button>
    </div>
  );
}
```

### CDN 사용

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <!-- 1. 토큰 CSS 먼저! (필수) -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">
    
    <!-- 2. 테마 CSS -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/theme@latest/dist/css/theme.css">
</head>
<body>
    <button onclick="toggleTheme()">테마 전환</button>
    
    <!-- 테마 스크립트 -->
    <script src="https://unpkg.com/@designbasekorea/theme@latest/dist/index.umd.js"></script>
    <script>
        const { setTheme, getTheme } = DesignbaseTheme;
        
        function toggleTheme() {
            const current = getTheme();
            setTheme(current === 'light' ? 'dark' : 'light');
        }
    </script>
</body>
</html>
```

## 🎨 테마 변수

테마는 디자인 토큰을 **사용하기 쉬운 단축 변수**로 제공합니다.

### 색상 변수

```css
/* 배경색 */
--db-bg-primary: 주요 배경색
--db-bg-secondary: 보조 배경색
--db-bg-tertiary: 3차 배경색
--db-bg-inverse: 반전 배경색

/* 텍스트 색상 */
--db-text-primary: 주요 텍스트
--db-text-secondary: 보조 텍스트
--db-text-tertiary: 3차 텍스트
--db-text-disabled: 비활성 텍스트
--db-text-inverse: 반전 텍스트

/* 테두리 색상 */
--db-border-primary: 주요 테두리
--db-border-secondary: 보조 테두리
--db-border-muted: 연한 테두리
--db-border-focus: 포커스 테두리
--db-border-error: 에러 테두리

/* 상태 색상 */
--db-color-primary: 주요 색상
--db-color-success: 성공 색상
--db-color-warning: 경고 색상
--db-color-danger: 위험 색상
--db-color-info: 정보 색상
```

### 간격 변수

```css
/* Padding */
--db-padding-xs: 4px
--db-padding-s: 8px
--db-padding-m: 16px
--db-padding-l: 24px
--db-padding-xl: 32px

/* Margin */
--db-margin-xs: 4px
--db-margin-s: 8px
--db-margin-m: 16px
--db-margin-l: 24px
--db-margin-xl: 32px

/* Gap */
--db-gap-xs: 4px
--db-gap-s: 8px
--db-gap-m: 16px
--db-gap-l: 24px
--db-gap-xl: 32px
```

### 타이포그래피 변수

```css
/* Font Size */
--db-text-xs: 12px (caption)
--db-text-s: 14px (small body)
--db-text-m: 16px (body)
--db-text-l: 18px (large body)
--db-text-xl: 24px (heading small)
--db-text-2xl: 32px (heading medium)
--db-text-3xl: 48px (heading large)

/* Font Weight */
--db-font-regular: 400
--db-font-medium: 500
--db-font-semibold: 600
--db-font-bold: 700

/* Line Height */
--db-leading-tight: 1.2
--db-leading-normal: 1.5
--db-leading-relaxed: 1.75
```

### Border Radius 변수

```css
--db-radius-xs: 2px
--db-radius-s: 4px
--db-radius-m: 8px
--db-radius-l: 12px
--db-radius-xl: 16px
--db-radius-full: 9999px (원형)

/* 컴포넌트별 */
--db-radius-button: 8px
--db-radius-input: 6px
--db-radius-card-s: 8px
--db-radius-card-m: 12px
--db-radius-card-l: 16px
```

### Shadow 변수

```css
--db-shadow-xs: 미세한 그림자
--db-shadow-s: 작은 그림자
--db-shadow-m: 중간 그림자
--db-shadow-l: 큰 그림자
--db-shadow-xl: 매우 큰 그림자

/* 컴포넌트별 */
--db-shadow-dropdown: 드롭다운 그림자
--db-shadow-modal: 모달 그림자
--db-shadow-tooltip: 툴팁 그림자
```

## 🌓 다크 테마

### 자동 테마 전환

```tsx
import { setTheme, getTheme, initTheme } from '@designbasekorea/theme';

// 앱 초기화 시 시스템 설정 따르기
initTheme(); // localStorage 또는 시스템 선호도 확인

// 수동 전환
setTheme('dark');
setTheme('light');

// 현재 테마 확인
const currentTheme = getTheme(); // 'light' | 'dark'
```

### HTML 속성

테마는 `data-theme` 속성으로 제어됩니다:

```html
<!-- 라이트 테마 -->
<html data-theme="light">

<!-- 다크 테마 -->
<html data-theme="dark">
```

### CSS에서 테마별 스타일링

```css
/* 라이트 테마 전용 */
[data-theme="light"] .my-component {
  background: white;
}

/* 다크 테마 전용 */
[data-theme="dark"] .my-component {
  background: black;
}

/* 또는 테마 변수 사용 (권장) */
.my-component {
  background: var(--db-bg-primary);
  color: var(--db-text-primary);
}
```

## 🎯 실제 사용 예시

### 버튼 스타일링

```css
.btn {
  padding: var(--db-padding-m) var(--db-padding-l);
  font-size: var(--db-text-m);
  font-weight: var(--db-font-semibold);
  border-radius: var(--db-radius-button);
  border: 1px solid var(--db-border-primary);
  background: var(--db-bg-primary);
  color: var(--db-text-primary);
  box-shadow: var(--db-shadow-s);
  transition: all 0.2s ease;
}

.btn:hover {
  background: var(--db-bg-secondary);
  box-shadow: var(--db-shadow-m);
}

.btn-primary {
  background: var(--db-color-primary);
  color: white;
  border-color: var(--db-color-primary);
}
```

### 카드 스타일링

```css
.card {
  padding: var(--db-padding-xl);
  background: var(--db-bg-primary);
  border: 1px solid var(--db-border-primary);
  border-radius: var(--db-radius-card-m);
  box-shadow: var(--db-shadow-m);
}

.card-title {
  font-size: var(--db-text-2xl);
  font-weight: var(--db-font-bold);
  color: var(--db-text-primary);
  margin-bottom: var(--db-margin-m);
}

.card-content {
  font-size: var(--db-text-m);
  color: var(--db-text-secondary);
  line-height: var(--db-leading-relaxed);
}
```

## 📦 Export 형식

| 형식 | 경로 | 설명 |
|------|------|------|
| CSS | `dist/css/theme.css` | 테마 CSS 변수 |
| TypeScript | `dist/index.d.ts` | 타입 정의 |
| ESM | `dist/index.esm.js` | ES Module (setTheme, getTheme 함수) |
| CJS | `dist/index.js` | CommonJS |
| UMD | `dist/index.umd.js` | Universal Module (CDN) |

## 🔧 API

### `setTheme(theme: 'light' | 'dark'): void`

테마를 설정하고 `data-theme` 속성을 업데이트합니다.

```tsx
import { setTheme } from '@designbasekorea/theme';

setTheme('dark'); // 다크 테마로 전환
```

### `getTheme(): 'light' | 'dark'`

현재 활성화된 테마를 반환합니다.

```tsx
import { getTheme } from '@designbasekorea/theme';

const currentTheme = getTheme(); // 'light' or 'dark'
```

### `initTheme(): void`

앱 초기화 시 호출하여 저장된 테마 또는 시스템 선호도를 적용합니다.

```tsx
import { initTheme } from '@designbasekorea/theme';

// 앱 진입점에서
initTheme();
```

### `watchTheme(callback: (theme: Theme) => void): () => void`

테마 변경을 감지합니다.

```tsx
import { watchTheme } from '@designbasekorea/theme';

const unwatch = watchTheme((theme) => {
  console.log('테마 변경됨:', theme);
});

// 감지 중단
unwatch();
```

## 🔄 버전 히스토리

### 0.1.11 (Latest)
- ✅ CSS export 경로 수정 (`./dist/css/theme.css`)
- ✅ UI 패키지 통합 개선

### 0.1.10
- ✅ Border 색상 변수 상태별 세분화
- ✅ 다크 테마 border 색상 최적화

### 0.1.9
- ✅ 테마 변수 체계 확립
- ✅ `--db-*` 네이밍 컨벤션 도입

## 🔗 관련 패키지

- [@designbasekorea/tokens](../tokens) - 디자인 토큰 (필수 의존성)
- [@designbasekorea/ui](../ui) - UI 컴포넌트 (이 테마 사용)

## ⚠️ 주의사항

### 1. 토큰 먼저 로드하기

테마는 토큰을 기반으로 하므로 **반드시 토큰을 먼저 로드**해야 합니다:

```tsx
// ✅ 올바른 순서
import '@designbasekorea/tokens/dist/css/tokens.css';
import '@designbasekorea/theme/dist/css/theme.css';

// ❌ 잘못된 순서
import '@designbasekorea/theme/dist/css/theme.css';
import '@designbasekorea/tokens/dist/css/tokens.css';
```

### 2. 버전 호환성

- Tokens `0.1.7+` 필요
- UI `0.1.0+` 호환

## 📄 라이선스

MIT

