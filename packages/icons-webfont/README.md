# @designbasekorea/icons-webfont

Designbase 아이콘 웹폰트 - HTML/CSS로 사용할 수 있는 아이콘 폰트 라이브러리입니다.

![npm](https://img.shields.io/npm/v/@designbasekorea/icons-webfont)
![license](https://img.shields.io/npm/l/@designbasekorea/icons-webfont)

## 📦 설치

### NPM
```bash
npm install @designbasekorea/icons-webfont
```

### Yarn
```bash
yarn add @designbasekorea/icons-webfont
```

### pnpm
```bash
pnpm add @designbasekorea/icons-webfont
```

## 🚀 사용법

### CSS import (NPM)

```tsx
// React/Next.js
import '@designbasekorea/icons-webfont/dist/css/designbase-icons.css';

// 또는 SCSS
@import '@designbasekorea/icons-webfont/dist/css/designbase-icons.css';
```

### CDN 사용

```html
<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/icons-webfont@latest/dist/css/designbase-icons.css">

<!-- jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@designbasekorea/icons-webfont@latest/dist/css/designbase-icons.css">
```

### HTML에서 사용

```html
<!-- 기본 사용 -->
<i class="icon-check"></i>
<i class="icon-user"></i>
<i class="icon-home"></i>

<!-- 크기 조정 -->
<i class="icon-check" style="font-size: 24px;"></i>
<i class="icon-user" style="font-size: 32px;"></i>

<!-- 색상 변경 -->
<i class="icon-heart" style="color: red;"></i>
<i class="icon-star" style="color: gold;"></i>

<!-- CSS 클래스와 함께 -->
<i class="icon-settings my-icon"></i>
```

### CSS로 스타일링

```css
/* 크기 조정 */
.icon-large {
  font-size: 32px;
}

.icon-small {
  font-size: 16px;
}

/* 색상 변경 */
.icon-primary {
  color: var(--db-color-primary);
}

.icon-success {
  color: var(--db-color-success);
}

/* 애니메이션 */
.icon-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

## 🎨 사용 가능한 아이콘

### 일반 아이콘
```html
<i class="icon-home"></i>
<i class="icon-home-filled"></i>
<i class="icon-user"></i>
<i class="icon-user-filled"></i>
<i class="icon-settings"></i>
<i class="icon-settings-filled"></i>
<i class="icon-search"></i>
<i class="icon-bell"></i>
<i class="icon-bell-filled"></i>
<i class="icon-heart"></i>
<i class="icon-heart-filled"></i>
<i class="icon-star"></i>
<i class="icon-star-filled"></i>
<i class="icon-bookmark"></i>
<i class="icon-bookmark-filled"></i>
```

### 액션 아이콘
```html
<i class="icon-check"></i>
<i class="icon-close"></i>
<i class="icon-plus"></i>
<i class="icon-minus"></i>
<i class="icon-edit"></i>
<i class="icon-delete"></i>
<i class="icon-download"></i>
<i class="icon-upload"></i>
<i class="icon-refresh"></i>
<i class="icon-copy"></i>
```

### 화살표/네비게이션
```html
<i class="icon-chevron-up"></i>
<i class="icon-chevron-down"></i>
<i class="icon-chevron-left"></i>
<i class="icon-chevron-right"></i>
<i class="icon-arrow-up"></i>
<i class="icon-arrow-down"></i>
<i class="icon-arrow-left"></i>
<i class="icon-arrow-right"></i>
```

### 미디어/통신
```html
<i class="icon-image"></i>
<i class="icon-video"></i>
<i class="icon-music"></i>
<i class="icon-file"></i>
<i class="icon-folder"></i>
<i class="icon-mail"></i>
<i class="icon-phone"></i>
<i class="icon-message"></i>
```

### 기타
```html
<i class="icon-info"></i>
<i class="icon-warning"></i>
<i class="icon-error"></i>
<i class="icon-success"></i>
<i class="icon-lock"></i>
<i class="icon-unlock"></i>
<i class="icon-eye"></i>
<i class="icon-eye-off"></i>
<i class="icon-menu"></i>
<i class="icon-more"></i>
<i class="icon-filter"></i>
<i class="icon-calendar"></i>
<i class="icon-clock"></i>
```

## 💡 사용 팁

### 1. 테마 색상과 함께 사용

```html
<i class="icon-check" style="color: var(--db-color-success);"></i>
<i class="icon-close" style="color: var(--db-color-danger);"></i>
<i class="icon-info" style="color: var(--db-color-info);"></i>
```

### 2. 버튼에 아이콘 추가

```html
<button class="btn btn-primary">
  <i class="icon-search"></i>
  검색
</button>

<button class="btn btn-icon">
  <i class="icon-settings"></i>
</button>
```

### 3. 입력 필드에 아이콘

```html
<div class="input-group">
  <i class="icon-search"></i>
  <input type="text" placeholder="검색...">
</div>

<style>
  .input-group {
    position: relative;
    display: inline-flex;
    align-items: center;
  }
  
  .input-group i {
    position: absolute;
    left: 12px;
    color: var(--db-text-secondary);
  }
  
  .input-group input {
    padding-left: 40px;
  }
</style>
```

### 4. 알림 배지

```html
<div class="notification-icon">
  <i class="icon-bell"></i>
  <span class="badge">5</span>
</div>

<style>
  .notification-icon {
    position: relative;
    display: inline-block;
  }
  
  .notification-icon .badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: var(--db-color-danger);
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
```

### 5. 로딩 스피너

```html
<i class="icon-refresh icon-spin"></i>

<style>
  .icon-spin {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>
```

## 🎯 실전 예제

### 네비게이션 메뉴

```html
<nav class="nav-menu">
  <a href="/">
    <i class="icon-home"></i>
    <span>홈</span>
  </a>
  <a href="/profile">
    <i class="icon-user"></i>
    <span>프로필</span>
  </a>
  <a href="/settings">
    <i class="icon-settings"></i>
    <span>설정</span>
  </a>
</nav>

<style>
  .nav-menu {
    display: flex;
    gap: 24px;
  }
  
  .nav-menu a {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: var(--db-text-primary);
    padding: 8px 16px;
    border-radius: 8px;
    transition: background 0.2s;
  }
  
  .nav-menu a:hover {
    background: var(--db-bg-secondary);
  }
  
  .nav-menu i {
    font-size: 20px;
  }
</style>
```

### 상태 표시

```html
<div class="status-list">
  <div class="status success">
    <i class="icon-check"></i>
    <span>완료</span>
  </div>
  <div class="status error">
    <i class="icon-close"></i>
    <span>실패</span>
  </div>
  <div class="status warning">
    <i class="icon-warning"></i>
    <span>경고</span>
  </div>
</div>

<style>
  .status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 6px;
  }
  
  .status.success {
    background: var(--db-color-success-bg);
    color: var(--db-color-success);
  }
  
  .status.error {
    background: var(--db-color-danger-bg);
    color: var(--db-color-danger);
  }
  
  .status.warning {
    background: var(--db-color-warning-bg);
    color: var(--db-color-warning);
  }
</style>
```

### 카드 헤더

```html
<div class="card">
  <div class="card-header">
    <div class="card-title">
      <i class="icon-file"></i>
      <h3>문서 제목</h3>
    </div>
    <button class="icon-btn">
      <i class="icon-more"></i>
    </button>
  </div>
  <div class="card-body">
    <p>카드 내용...</p>
  </div>
</div>

<style>
  .card {
    border: 1px solid var(--db-border-primary);
    border-radius: 12px;
    overflow: hidden;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid var(--db-border-primary);
  }
  
  .card-title {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .card-title i {
    font-size: 24px;
    color: var(--db-color-primary);
  }
  
  .icon-btn {
    background: transparent;
    border: none;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  .icon-btn:hover {
    background: var(--db-bg-secondary);
  }
</style>
```

## 📦 패키지 내용물

```
@designbasekorea/icons-webfont/
├── dist/
│   ├── css/
│   │   └── designbase-icons.css    # 아이콘 폰트 CSS
│   ├── fonts/
│   │   ├── designbase-icons.woff2  # WOFF2 폰트
│   │   ├── designbase-icons.woff   # WOFF 폰트
│   │   ├── designbase-icons.ttf    # TTF 폰트
│   │   └── designbase-icons.eot    # EOT 폰트 (IE)
│   ├── html/
│   │   └── preview.html            # 아이콘 미리보기
│   └── json/
│       └── icons.json              # 아이콘 메타데이터
└── package.json
```

## 🔗 관련 패키지

- [@designbasekorea/icons](../icons) - React 아이콘 컴포넌트
- [@designbasekorea/ui](../ui) - UI 컴포넌트 라이브러리

## 🆚 React vs Webfont

### Webfont (@designbasekorea/icons-webfont) - 현재 패키지
**장점**:
- ✅ 순수 HTML/CSS에서 사용 가능
- ✅ React 없이 사용 가능
- ✅ CSS로 간편하게 스타일링
- ✅ 브라우저 캐싱 가능

**단점**:
- ❌ 동적 제어 제한적
- ❌ 전체 폰트 로드 필요 (번들 크기)

```html
<i class="icon-check" style="font-size: 24px; color: red;"></i>
```

### React 컴포넌트 (@designbasekorea/icons)
**장점**:
- ✅ TypeScript 지원
- ✅ Props로 동적 제어
- ✅ Tree shaking 지원
- ✅ React 이벤트 핸들러

**단점**:
- ❌ React 프로젝트에서만 사용 가능

```tsx
<CheckIcon size={24} color="red" onClick={handleClick} />
```

## 🔄 버전 히스토리

### 0.1.1 (Latest)
- ✅ 100+ 아이콘 웹폰트 제공
- ✅ WOFF2, WOFF, TTF, EOT 형식 지원
- ✅ CSS 클래스 기반 사용

## 📄 라이선스

MIT

