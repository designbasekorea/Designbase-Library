# @designbasekorea/figma-ui 빠른 시작 가이드

## 🚀 5분 안에 시작하기

### 1단계: 설치

```bash
npm install @designbasekorea/figma-ui
```

### 2단계: 기본 설정

```tsx
// App.tsx
import React from 'react';
import { LogoDropdown, Footer, Button } from '@designbasekorea/figma-ui';

export function App() {
  return (
    <div className="plugin-container">
      {/* 헤더 */}
      <LogoDropdown
        logoSrc="/logo.svg"
        links={[
          { name: '웹사이트', url: 'https://example.com' }
        ]}
      />

      {/* 메인 콘텐츠 */}
      <main>
        <Button variant="primary">시작하기</Button>
      </main>

      {/* 푸터 */}
      <Footer
        logoSrc="/logo.svg"
        paymentStatus="FREE"
        usageCount={0}
      />
    </div>
  );
}
```

### 3단계: 스타일 추가 (선택사항)

CSS는 자동으로 로드되지만, 커스터마이징하려면:

```css
/* styles.css */
.plugin-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 20px;
}
```

## 💡 자주 사용하는 패턴

### 결제 상태 관리

```tsx
import { useState } from 'react';
import { Footer } from '@designbasekorea/figma-ui';

function App() {
  const [isPremium, setIsPremium] = useState(false);
  const [usageCount, setUsageCount] = useState(0);

  return (
    <Footer
      logoSrc="/logo.svg"
      paymentStatus={isPremium ? 'PAID' : 'FREE'}
      usageCount={usageCount}
      maxDailyUsage={20}
      onLicensePageClick={() => {
        window.open('https://yoursite.com/pricing', '_blank');
      }}
    />
  );
}
```

### 다국어 지원

```tsx
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <LogoDropdown
      logoSrc="/logo.svg"
      links={links}
      t={t} // react-i18next 번역 함수
    />
  );
}
```

### 모든 컴포넌트 사용

```tsx
import {
  // Figma 전용
  LogoDropdown,
  Footer,
  
  // UI 컴포넌트
  Button,
  Input,
  Card,
  Modal,
  Toast,
  Toggle,
  Checkbox,
  Select,
  Tabs,
  
  // 아이콘
  CheckIcon,
  UserIcon,
  SettingsIcon,
} from '@designbasekorea/figma-ui';
```

## 📱 완전한 예제

```tsx
import React, { useState } from 'react';
import {
  LogoDropdown,
  Footer,
  Card,
  Input,
  Button,
  Toggle,
  GlobeIcon,
} from '@designbasekorea/figma-ui';

export function FigmaPlugin() {
  const [name, setName] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [usageCount, setUsageCount] = useState(0);

  const links = [
    {
      name: '공식 웹사이트',
      url: 'https://designbase.co.kr',
      icon: <GlobeIcon size={20} />,
    },
  ];

  const handleApply = () => {
    setUsageCount(prev => prev + 1);
    // 실제 작업 수행
    console.log('Applied:', { name, enabled });
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 헤더 */}
      <header style={{ padding: '16px', borderBottom: '1px solid #eee' }}>
        <LogoDropdown logoSrc="/logo.svg" links={links} />
      </header>

      {/* 메인 콘텐츠 */}
      <main style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
        <Card>
          <h2>설정</h2>
          <Input
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Toggle
            size="m"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          >
            기능 활성화
          </Toggle>
          <Button variant="primary" onClick={handleApply}>
            적용
          </Button>
        </Card>
      </main>

      {/* 푸터 */}
      <Footer
        logoSrc="/logo.svg"
        logoLinks={links}
        paymentStatus="FREE"
        usageCount={usageCount}
        maxDailyUsage={20}
        onLicensePageClick={() => {
          window.open('https://yoursite.com/pricing', '_blank');
        }}
      />
    </div>
  );
}
```

## 🎨 테마 커스터마이징

```css
:root {
  /* 브랜드 컬러 변경 */
  --db-brand-primary: #0066ff;
  
  /* 텍스트 컬러 변경 */
  --db-text-primary: #1a1a1a;
  
  /* 배경 컬러 변경 */
  --db-surface-base: #ffffff;
}
```

## 📚 다음 단계

- [전체 사용 가이드](./USAGE_GUIDE.md) 읽기
- [Storybook](http://localhost:6007)에서 모든 컴포넌트 확인
- [GitHub Issues](https://github.com/designbasekorea/Designbase-Library/issues)에서 도움 받기

---

**문제가 있나요?** [이슈 등록하기](https://github.com/designbasekorea/Designbase-Library/issues)

