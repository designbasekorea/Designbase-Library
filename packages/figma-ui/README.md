# @designbasekorea/figma-ui

> 피그마 플러그인 개발을 위한 완벽한 UI 컴포넌트 라이브러리

[![npm version](https://img.shields.io/npm/v/@designbasekorea/figma-ui.svg)](https://www.npmjs.com/package/@designbasekorea/figma-ui)
[![license](https://img.shields.io/npm/l/@designbasekorea/figma-ui.svg)](https://github.com/designbasekorea/Designbase-Library/blob/main/LICENSE)

## ✨ 특징

- 🎯 **피그마 플러그인 최적화** - 플러그인 UI에 특화된 컴포넌트
- 📦 **올인원 패키지** - `@designbasekorea/ui` 모든 컴포넌트 포함
- 🎨 **일관된 디자인 시스템** - Tokens & Theme 기반
- 🌍 **다국어 지원** - i18n 통합 가능
- 🔧 **TypeScript** - 완벽한 타입 지원
- 📱 **반응형** - 다양한 화면 크기 지원

## 📦 설치

```bash
npm install @designbasekorea/figma-ui
```

**하나만 설치하면 끝!** 모든 의존성 패키지가 자동으로 포함됩니다.

## 🚀 빠른 시작

```tsx
import {
  // Figma 전용 컴포넌트
  LogoDropdown,
  Footer,
  
  // 기본 UI 컴포넌트 (자동 포함)
  Button,
  Card,
  Input,
  Toggle,
  
  // 아이콘 (자동 포함)
  GlobeIcon,
  YoutubeIcon,
} from '@designbasekorea/figma-ui';

function MyFigmaPlugin() {
  return (
    <div>
      <LogoDropdown
        logoSrc="/logo.svg"
        links={[
          { name: 'Website', url: 'https://...', icon: <GlobeIcon /> }
        ]}
      />
      
      <Card>
        <Input placeholder="이름 입력" />
        <Button variant="primary">저장</Button>
      </Card>
      
      <Footer
        logoSrc="/logo.svg"
        paymentStatus="FREE"
        usageCount={5}
        maxDailyUsage={20}
      />
    </div>
  );
}
```

## 📚 문서

- **[📖 완전한 사용 가이드](./USAGE_GUIDE.md)** - 모든 기능과 예제
- **[🎭 Storybook](http://localhost:6007)** - 컴포넌트 미리보기
- **[🎨 테마 가이드](https://github.com/designbasekorea/Designbase-Library/tree/main/packages/theme)**

## 🎨 주요 컴포넌트

### Figma 전용

| 컴포넌트 | 설명 |
|---------|------|
| `LogoDropdown` | 로고 클릭 시 드롭다운 메뉴 |
| `Footer` | 플러그인 푸터 (결제 상태, 사용량 표시) |
| `PageLicense` | 라이센스 관리 페이지 (레몬스퀴지 연동) |
| `FormWithSubmit` | 라이센스 키 입력 폼 |
| `PaymentStatusSection` | 결제 상태 표시 |
| `PricingComparison` | 가격 비교 테이블 |
| `UpgradeBanner` | 업그레이드 유도 배너 |
| `ResizablePlugin` | 플러그인 리사이즈 핸들 |

### 기본 UI (자동 포함)

`Button`, `Input`, `Card`, `Modal`, `Toast`, `Toggle`, `Checkbox`, `Radio`, `Select`, `Tabs`, `Dropdown`, `Badge`, `Avatar`, `Tooltip`, `Alert` 등 **60+ 컴포넌트**

## 🌍 다국어 지원

```tsx
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  
  return <Footer t={t} {...props} />;
}
```

## 🔗 관련 패키지

- [@designbasekorea/ui](https://www.npmjs.com/package/@designbasekorea/ui) - 웹용 UI 컴포넌트
- [@designbasekorea/icons](https://www.npmjs.com/package/@designbasekorea/icons) - 아이콘 컴포넌트
- [@designbasekorea/theme](https://www.npmjs.com/package/@designbasekorea/theme) - 테마 시스템
- [@designbasekorea/tokens](https://www.npmjs.com/package/@designbasekorea/tokens) - 디자인 토큰

## 📄 라이선스

MIT © [Designbase Korea](https://designbase.co.kr)

