# Designbase Library

Designbase 피그마 플러그인을 위한 공통 디자인시스템 및 컴포넌트 라이브러리입니다.

## 📦 패키지 구조

| 패키지 | 버전 | 설명 |
|--------|------|------|
| [@designbasekorea/tokens](./packages/tokens) | ![npm](https://img.shields.io/npm/v/@designbasekorea/tokens) | 디자인 토큰 (색상, 간격, 타이포그래피 등) |
| [@designbasekorea/theme](./packages/theme) | ![npm](https://img.shields.io/npm/v/@designbasekorea/theme) | 테마 시스템 및 CSS 변수 |
| [@designbasekorea/icons](./packages/icons) | ![npm](https://img.shields.io/npm/v/@designbasekorea/icons) | SVG 아이콘 React 컴포넌트 |
| [@designbasekorea/icons-webfont](./packages/icons-webfont) | ![npm](https://img.shields.io/npm/v/@designbasekorea/icons-webfont) | 아이콘 웹폰트 (CSS/WOFF) |
| [@designbasekorea/ui](./packages/ui) | ![npm](https://img.shields.io/npm/v/@designbasekorea/ui) | React UI 컴포넌트 라이브러리 |
| [@designbasekorea/figma-ui](./packages/figma-ui) | ![npm](https://img.shields.io/npm/v/@designbasekorea/figma-ui) | 🆕 피그마 플러그인 전용 UI 컴포넌트 |

## 🚀 빠른 시작

### 방법 1: NPM 설치

```bash
# 1. 토큰 설치 (필수)
npm install @designbasekorea/tokens

# 2. 테마 설치 (필수)
npm install @designbasekorea/theme

# 3. UI 컴포넌트 설치
npm install @designbasekorea/ui

# 4. 아이콘 설치 (선택)
npm install @designbasekorea/icons
```

### 방법 2: CDN 사용

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- 1. 토큰 CSS (필수) -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">
    
    <!-- 2. 테마 CSS (필수) -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/theme@latest/dist/css/theme.css">
    
    <!-- 3. 아이콘 웹폰트 (선택) -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/icons-webfont@latest/dist/css/designbase-icons.css">
    
    <title>Designbase Library</title>
</head>
<body>
    <!-- React 앱 루트 -->
    <div id="root"></div>
    
    <!-- React & ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- Designbase UI 컴포넌트 -->
    <script src="https://unpkg.com/@designbasekorea/ui@latest/dist/index.umd.js"></script>
    
    <script>
        const { Button, Card } = DesignbaseUI;
        
        const App = () => {
            return React.createElement('div', null,
                React.createElement(Button, { variant: 'primary' }, '클릭하세요'),
                React.createElement(Card, null, '카드 내용')
            );
        };
        
        ReactDOM.render(React.createElement(App), document.getElementById('root'));
    </script>
</body>
</html>
```

## 📚 사용 가이드

### 1. 디자인 토큰 사용

디자인 토큰은 **모든 패키지의 기반**이 됩니다. 반드시 먼저 로드해야 합니다.

#### NPM 사용
```tsx
import '@designbasekorea/tokens/dist/css/tokens.css';

// CSS 변수로 접근
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-foundation-blue-500');
```

#### CDN 사용
```html
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">
```

### 2. 테마 시스템 사용

테마는 디자인 토큰을 기반으로 **시맨틱 변수**를 제공합니다.

#### NPM 사용
```tsx
import { setTheme, getTheme } from '@designbasekorea/theme';
import '@designbasekorea/theme/dist/css/theme.css';

// 다크모드 전환
setTheme('dark');

// 현재 테마 확인
const currentTheme = getTheme(); // 'light' | 'dark'
```

#### CDN 사용
```html
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/theme@latest/dist/css/theme.css">

<script src="https://unpkg.com/@designbasekorea/theme@latest/dist/index.umd.js"></script>
<script>
    const { setTheme, getTheme } = DesignbaseTheme;
    setTheme('dark');
</script>
```

### 3. 아이콘 사용

#### React 컴포넌트 (NPM)
```tsx
import { CheckIcon, UserIcon, HomeIcon } from '@designbasekorea/icons';

function App() {
  return (
    <div>
      <CheckIcon size={24} color="var(--color-semantic-primary)" />
      <UserIcon size={20} />
      <HomeIcon />
    </div>
  );
}
```

#### 웹폰트 (CDN)
```html
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/icons-webfont@latest/dist/css/designbase-icons.css">

<i class="icon-check"></i>
<i class="icon-user"></i>
<i class="icon-home"></i>
```

### 4. UI 컴포넌트 사용

#### NPM 사용
```tsx
import { Button, Card, Input, Accordion, Toast, Toggle } from '@designbasekorea/ui';
import '@designbasekorea/tokens/dist/css/tokens.css'; // 필수
import '@designbasekorea/theme/dist/css/theme.css';   // 필수

function App() {
  return (
    <div>
      <Button variant="primary" size="lg">
        클릭하세요
      </Button>
      
      <Card>
        <Input placeholder="이름을 입력하세요" />
      </Card>
      
      <Toggle size="m">
        토글 스위치
      </Toggle>
      
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Header>제목 1</Accordion.Header>
          <Accordion.Content>내용 1</Accordion.Content>
        </Accordion.Item>
      </Accordion>
      
      <Toast
        id="example-toast"
        title="알림"
        description="작업이 완료되었습니다."
        status="success"
        onClose={(id) => console.log('Toast closed:', id)}
      />
    </div>
  );
}
```

## 🎨 올바른 연결 순서

### React 프로젝트에서

```tsx
// 1. 토큰 CSS (필수 - 가장 먼저!)
import '@designbasekorea/tokens/dist/css/tokens.css';

// 2. 테마 CSS (필수)
import '@designbasekorea/theme/dist/css/theme.css';

// 3. UI 컴포넌트 import
import { Button, Card } from '@designbasekorea/ui';

// 4. 테마 함수 (선택)
import { setTheme } from '@designbasekorea/theme';

// 5. 아이콘 (선택)
import { CheckIcon } from '@designbasekorea/icons';
```

### HTML에서 (CDN)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <!-- 1. 토큰 CSS (필수 - 가장 먼저!) -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">
    
    <!-- 2. 테마 CSS (필수) -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/theme@latest/dist/css/theme.css">
    
    <!-- 3. 아이콘 웹폰트 (선택) -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/icons-webfont@latest/dist/css/designbase-icons.css">
</head>
<body>
    <!-- React -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- UI 컴포넌트 -->
    <script src="https://unpkg.com/@designbasekorea/ui@latest/dist/index.umd.js"></script>
</body>
</html>
```

## 🏗️ 개발

### 의존성 설치
```bash
npm install
```

### 전체 빌드
```bash
npm run build
```

### Storybook 실행
```bash
npm run storybook
```

브라우저에서 `http://localhost:6006`으로 접속하면 모든 컴포넌트, 토큰, 테마를 확인할 수 있습니다.

## 📦 배포

### 개별 패키지 배포
```bash
# 토큰 배포
npm run publish:tokens

# 테마 배포
npm run publish:theme

# 아이콘 배포
npm run publish:icons

# UI 배포
npm run publish:ui
```

### 모든 패키지 배포
```bash
npm run publish:packages
```

## 🔗 CDN 링크

### unpkg
- Tokens: `https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css`
- Theme: `https://unpkg.com/@designbasekorea/theme@latest/dist/css/theme.css`
- Icons Webfont: `https://unpkg.com/@designbasekorea/icons-webfont@latest/dist/css/designbase-icons.css`
- UI: `https://unpkg.com/@designbasekorea/ui@latest/dist/index.umd.js`

### jsDelivr
- Tokens: `https://cdn.jsdelivr.net/npm/@designbasekorea/tokens@latest/dist/css/tokens.css`
- Theme: `https://cdn.jsdelivr.net/npm/@designbasekorea/theme@latest/dist/css/theme.css`
- Icons Webfont: `https://cdn.jsdelivr.net/npm/@designbasekorea/icons-webfont@latest/dist/css/designbase-icons.css`
- UI: `https://cdn.jsdelivr.net/npm/@designbasekorea/ui@latest/dist/index.umd.js`

## ✨ 최신 기능

### 🎨 새로운 토큰 시스템
- **Alias 토큰**: Foundation과 Semantic 사이의 중간 계층 추가
- **다크 모드 최적화**: 다크 모드 빌드에서 color-aliases만 포함하여 효율성 향상
- **일관된 변수명**: `--db-*` 형태의 짧고 직관적인 CSS 변수

### 🔧 개선된 컴포넌트
- **Toast**: 4가지 위치 지원 (우측 상단, 상단 중앙, 하단 중앙, 우측 하단)
- **Toggle**: 정확한 사이즈와 간소화된 스토리북
- **Toolbar**: 아이콘 중복 문제 해결 및 @icons 패키지 활용
- **모든 컴포넌트**: 새로운 토큰 변수 적용으로 일관된 스타일링

### 📦 패키지 업데이트
- **@designbasekorea/ui**: `0.1.6` - 모든 컴포넌트 최적화
- **@designbasekorea/theme**: `0.1.19` - 새로운 토큰 시스템 지원
- **@designbasekorea/tokens**: `0.1.13` - Alias 토큰 추가
- **@designbasekorea/icons**: `0.2.0` - 확장된 아이콘 세트

## 📖 문서

- [Storybook (컴포넌트 예제)](http://localhost:6006)
- [Tokens 패키지](./packages/tokens/README.md)
- [Theme 패키지](./packages/theme/README.md)
- [Icons 패키지](./packages/icons/README.md)
- [UI 패키지](./packages/ui/README.md)
- [테마 가이드](./packages/theme/THEME_GUIDE.md)
- [변수 빠른 참조](./packages/theme/VARIABLES_QUICK_REFERENCE.md)

## 🤝 기여

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## ⚠️ 주의사항

### 필수 의존성 순서
1. **@designbasekorea/tokens** - 가장 먼저 로드 (Foundation 토큰)
2. **@designbasekorea/theme** - 두 번째로 로드 (Semantic 토큰)
3. **@designbasekorea/ui** - 마지막에 로드 (컴포넌트)

이 순서를 지키지 않으면 CSS 변수가 제대로 적용되지 않을 수 있습니다.

### 버전 호환성
- Tokens `0.1.13+`
- Theme `0.1.19+`
- Icons `0.2.0+`
- UI `0.1.6+`

호환되는 버전을 함께 사용하세요.
