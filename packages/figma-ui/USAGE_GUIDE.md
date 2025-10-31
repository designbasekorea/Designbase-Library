# @designbasekorea/figma-ui 사용 가이드

피그마 플러그인 개발을 위한 완벽한 UI 컴포넌트 라이브러리입니다.

## 📦 설치

```bash
npm install @designbasekorea/figma-ui
```

### 의존성 패키지 (자동 설치됨)

이 패키지는 다음 패키지들을 자동으로 포함합니다:

- `@designbasekorea/ui` - 모든 기본 UI 컴포넌트
- `@designbasekorea/icons` - 아이콘 컴포넌트
- `@designbasekorea/theme` - 테마 시스템
- `@designbasekorea/tokens` - 디자인 토큰

**별도 설치 불필요** - `@designbasekorea/figma-ui` 하나만 설치하면 모든 컴포넌트를 사용할 수 있습니다!

## 🚀 빠른 시작

### 1. 기본 설정

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { LogoDropdown, Footer, Button } from '@designbasekorea/figma-ui';

function App() {
  return (
    <div>
      <h1>My Figma Plugin</h1>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

**💡 팁:** CSS는 자동으로 로드되므로 별도로 import할 필요가 없습니다!

### 2. 피그마 플러그인 전용 컴포넌트

#### LogoDropdown

로고 클릭 시 드롭다운 메뉴를 표시합니다.

```tsx
import { LogoDropdown } from '@designbasekorea/figma-ui';
import { GlobeIcon, YoutubeIcon, InstagramIcon, FigmaIcon, MailIcon } from '@designbasekorea/figma-ui';

const links = [
  {
    name: 'officialWebsite',
    url: 'https://designbase.co.kr',
    icon: <GlobeIcon size={20} />,
  },
  {
    name: 'youtube',
    url: 'https://youtube.com/designbase',
    icon: <YoutubeIcon size={20} />,
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/designbase',
    icon: <InstagramIcon size={20} />,
  },
  {
    name: 'figmaCommunity',
    url: 'https://www.figma.com/@designbasekorea',
    icon: <FigmaIcon size={20} />,
  },
  {
    name: 'contact',
    url: 'mailto:designbasekorea@gmail.com',
    icon: <MailIcon size={20} />,
  },
];

function Header() {
  return (
    <LogoDropdown
      logoSrc="/path/to/logo.svg"
      logoAlt="Designbase Logo"
      links={links}
      position="bottom-left"
      t={(key) => translations[key]} // 다국어 지원
    />
  );
}
```

**Props:**
- `logoSrc` (string, 필수): 로고 이미지 경로
- `logoAlt` (string): 로고 대체 텍스트 (기본값: "Logo")
- `links` (LogoDropdownLink[], 필수): 드롭다운 링크 목록
- `position` ('bottom-left' | 'bottom-right' | 'top-left' | 'top-right'): 드롭다운 위치 (기본값: "bottom-left")
- `t` (function): 다국어 번역 함수

#### Footer

피그마 플러그인용 푸터 컴포넌트입니다.

```tsx
import { Footer } from '@designbasekorea/figma-ui';

function App() {
  return (
    <div>
      {/* 메인 콘텐츠 */}
      
      <Footer
        logoSrc="/path/to/logo.svg"
        logoLinks={links}
        paymentStatus="FREE" // or "PAID"
        usageCount={5}
        maxDailyUsage={20}
        showPaymentStatus={true}
        onLicensePageClick={() => {
          // 라이선스 페이지로 이동
          window.open('https://yoursite.com/license', '_blank');
        }}
        t={(key) => translations[key]}
      />
    </div>
  );
}
```

**Props:**
- `logoSrc` (string, 필수): 로고 이미지 경로
- `logoLinks` (LogoDropdownLink[]): 로고 드롭다운 링크
- `paymentStatus` ('PAID' | 'FREE' | 'TRIAL'): 결제 상태 (기본값: "FREE")
- `usageCount` (number): 현재 사용량 (기본값: 0)
- `maxDailyUsage` (number): 최대 일일 사용량 (기본값: 20)
- `showPaymentStatus` (boolean): 결제 상태 표시 여부 (기본값: true)
- `isLoading` (boolean): 로딩 상태 (기본값: false)
- `onLicensePageClick` (function): 라이선스 페이지 클릭 핸들러
- `t` (function): 다국어 번역 함수
- `children` (ReactNode): 추가 콘텐츠

### 3. 기존 UI 컴포넌트 사용

`@designbasekorea/ui`의 모든 컴포넌트를 그대로 사용할 수 있습니다!

```tsx
import {
  // Figma 전용 컴포넌트
  LogoDropdown,
  Footer,
  
  // 기본 UI 컴포넌트
  Button,
  Input,
  Card,
  Modal,
  Toast,
  Toggle,
  Checkbox,
  Radio,
  Select,
  Tabs,
  Dropdown,
  Badge,
  Avatar,
  Tooltip,
  Alert,
  
  // 아이콘
  CheckIcon,
  UserIcon,
  HomeIcon,
} from '@designbasekorea/figma-ui';

function MyPlugin() {
  return (
    <div>
      <LogoDropdown logoSrc="/logo.svg" links={links} />
      
      <Card>
        <Input placeholder="이름을 입력하세요" />
        <Toggle size="m">알림 받기</Toggle>
        <Button variant="primary">저장</Button>
      </Card>
      
      <Footer
        logoSrc="/logo.svg"
        logoLinks={links}
        paymentStatus="FREE"
        usageCount={5}
      />
    </div>
  );
}
```

## 🌍 다국어 지원 (i18n)

### react-i18next 사용

```bash
npm install react-i18next i18next
```

```tsx
import { useTranslation } from 'react-i18next';
import { LogoDropdown, Footer } from '@designbasekorea/figma-ui';

// i18n 설정
const resources = {
  ko: {
    translation: {
      officialWebsite: '공식 웹사이트',
      youtube: '유튜브',
      instagram: '인스타그램',
      figmaCommunity: '피그마 커뮤니티',
      contact: '문의하기',
      unlimitedUsage: '무제한 사용 가능',
      perDay: '하루',
      resetsDaily: '매일 리셋',
      premium: '프리미엄',
      free: '무료',
    },
  },
  en: {
    translation: {
      officialWebsite: 'Official Website',
      youtube: 'YouTube',
      instagram: 'Instagram',
      figmaCommunity: 'Figma Community',
      contact: 'Contact',
      unlimitedUsage: 'Unlimited Usage',
      perDay: 'per day',
      resetsDaily: 'Resets Daily',
      premium: 'Premium',
      free: 'Free',
    },
  },
};

function App() {
  const { t } = useTranslation();
  
  return (
    <Footer
      logoSrc="/logo.svg"
      logoLinks={links}
      paymentStatus="FREE"
      t={t} // react-i18next의 t 함수 전달
    />
  );
}
```

### 커스텀 번역 함수

```tsx
const translations = {
  officialWebsite: '공식 웹사이트',
  youtube: '유튜브',
  // ...
};

const translate = (key: string) => translations[key] || key;

<LogoDropdown
  logoSrc="/logo.svg"
  links={links}
  t={translate}
/>
```

## 🎨 테마 커스터마이징

CSS 변수를 오버라이드하여 테마를 커스터마이징할 수 있습니다:

```css
:root {
  /* 브랜드 컬러 */
  --db-brand-primary: #0066ff;
  --db-brand-secondary: #00d4ff;
  
  /* 텍스트 컬러 */
  --db-text-primary: #1a1a1a;
  --db-text-secondary: #666666;
  
  /* 배경 컬러 */
  --db-surface-base: #ffffff;
  --db-surface-layer-1: #f5f5f5;
  
  /* 피드백 컬러 */
  --db-feedback-success-fg: #00c853;
  --db-feedback-error-fg: #ff3b30;
}

/* 다크모드 */
[data-theme="dark"] {
  --db-text-primary: #ffffff;
  --db-surface-base: #1a1a1a;
  /* ... */
}
```

## 📱 피그마 플러그인 완전한 예제

```tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import {
  LogoDropdown,
  Footer,
  Button,
  Input,
  Card,
  Toggle,
  GlobeIcon,
  YoutubeIcon,
} from '@designbasekorea/figma-ui';

function FigmaPlugin() {
  const { t } = useTranslation();
  const [usageCount, setUsageCount] = useState(5);
  const [isPremium, setIsPremium] = useState(false);

  const logoLinks = [
    {
      name: 'officialWebsite',
      url: 'https://designbase.co.kr',
      icon: <GlobeIcon size={20} />,
    },
    {
      name: 'youtube',
      url: 'https://youtube.com/designbase',
      icon: <YoutubeIcon size={20} />,
    },
  ];

  const handleAction = () => {
    if (!isPremium && usageCount >= 20) {
      alert(t('limitReached'));
      return;
    }
    
    // 실제 작업 수행
    setUsageCount(prev => prev + 1);
  };

  return (
    <div className="plugin-container">
      <header>
        <LogoDropdown
          logoSrc="/logo.svg"
          links={logoLinks}
          t={t}
        />
      </header>

      <main>
        <Card>
          <h2>{t('settings')}</h2>
          <Input placeholder={t('enterName')} />
          <Toggle size="m">{t('notifications')}</Toggle>
          <Button variant="primary" onClick={handleAction}>
            {t('apply')}
          </Button>
        </Card>
      </main>

      <Footer
        logoSrc="/logo.svg"
        logoLinks={logoLinks}
        paymentStatus={isPremium ? 'PAID' : 'FREE'}
        usageCount={usageCount}
        maxDailyUsage={20}
        onLicensePageClick={() => {
          window.open('https://yoursite.com/pricing', '_blank');
        }}
        t={t}
      />
    </div>
  );
}

ReactDOM.render(<FigmaPlugin />, document.getElementById('root'));
```

## 🔗 관련 링크

- [Storybook](http://localhost:6007) - 컴포넌트 미리보기
- [GitHub](https://github.com/designbasekorea/Designbase-Library)
- [NPM](https://www.npmjs.com/package/@designbasekorea/figma-ui)
- [테마 가이드](https://github.com/designbasekorea/Designbase-Library/blob/main/packages/theme/THEME_GUIDE.md)

## 📄 라이선스

MIT License

---

**문제가 있으신가요?** [이슈 등록](https://github.com/designbasekorea/Designbase-Library/issues)

