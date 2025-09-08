# Designbase Library

Designbase 피그마 플러그인을 위한 공통 디자인시스템 및 컴포넌트 라이브러리입니다.

## 📦 설치

### 전체 라이브러리 설치
```bash
npm install @designbase/library
```

### 개별 패키지 설치
```bash
# UI 컴포넌트
npm install @designbase/ui

# 테마 시스템
npm install @designbase/theme

# 디자인 토큰
npm install @designbase/tokens

# 아이콘 시스템 (React)
npm install @designbasekorea/icons

# 아이콘 웹폰트(CSS/WOFF)
npm install @designbasekorea/icons-webfont
```

## 🚀 사용법

### React 컴포넌트 사용
```tsx
import { Button, Card, Input } from '@designbase/ui';
import '@designbase/theme/dist/css/theme.css';

function App() {
  return (
    <div>
      <Button variant="primary">클릭하세요</Button>
      <Card>
        <Input placeholder="입력하세요" />
      </Card>
    </div>
  );
}
```

### 테마 시스템 사용
```tsx
import { setTheme } from '@designbase/theme';
import '@designbase/theme/dist/css/theme.css';

// 다크모드 적용
setTheme('dark');

// 라이트모드 적용
setTheme('light');
```

### 디자인 토큰 사용
```tsx
import { tokens } from '@designbase/tokens';

// CSS 변수로 사용
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-semantic-primary');
```

### 아이콘 사용 (React)
```tsx
import { CheckIcon, UserIcon } from '@designbasekorea/icons';

function App() {
  return (
    <div>
      <CheckIcon size={24} />
      <UserIcon size={20} />
    </div>
  );
}
```

### 아이콘 웹폰트 사용 (CSS)
```css
@import '@designbasekorea/icons-webfont/css';
```

```html
<i class="icon-check" aria-hidden="true"></i>
<i class="icon-user" aria-hidden="true"></i>
```

## 🏗️ 개발

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

### Storybook 실행
```bash
npm run storybook
```

## 📚 패키지 구조

- **`@designbase/ui`**: React 컴포넌트 라이브러리
- **`@designbase/theme`**: 테마 시스템 및 CSS 유틸리티
- **`@designbase/tokens`**: 디자인 토큰 (색상, 간격, 타이포그래피 등)
- **`@designbasekorea/icons`**: SVG 아이콘 React 컴포넌트
- **`@designbasekorea/icons-webfont`**: 아이콘 웹폰트(CSS/WOFF/HTML/JSON)

## 🔧 빌드 및 배포

### 전체 빌드
```bash
npm run build
```

### 개별 패키지 배포
```bash
# UI 패키지 배포
npm run publish:ui

# 테마 패키지 배포
npm run publish:theme

# 토큰 패키지 배포
npm run publish:tokens

# 아이콘 패키지 배포
npm run publish:icons
```

### 모든 패키지 배포
```bash
npm run publish:packages
```

## 📖 문서

자세한 사용법과 컴포넌트 예제는 Storybook을 참조하세요:

```bash
npm run storybook
```

## 🤝 기여

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
