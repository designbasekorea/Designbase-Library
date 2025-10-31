# 📦 @designbasekorea/figma-ui - 사용 가능한 모든 컴포넌트

`npm install @designbasekorea/figma-ui@latest` 설치 시 사용 가능한 **모든 컴포넌트** 목록입니다.

---

## 🎯 Figma 플러그인 전용 컴포넌트 (13개)

### 1. **Footer** 🔹
Figma 플러그인 하단 Footer (로고, 결제 상태, 언어 선택)

```tsx
import { Footer } from '@designbasekorea/figma-ui';

<Footer 
  logoLinks={links}           // 로고 클릭 시 표시할 링크
  paymentStatus="FREE"        // 'PAID' | 'FREE' | 'TRIAL'
  usageCount={5}              // 사용 횟수
  maxDailyUsage={20}          // 최대 일일 사용량
  showPaymentStatus={true}    // 결제 상태 표시 여부
  onLicensePageClick={() => {}} // 라이선스 페이지 열기
/>
```

---

### 2. **LogoDropdown** 🔹
클릭 가능한 로고 + 드롭다운 메뉴

```tsx
import { LogoDropdown } from '@designbasekorea/figma-ui';
import { GlobeIcon, MailIcon } from '@designbasekorea/icons';

<LogoDropdown 
  logoType="designbase"       // 'designbase' | 'designbase-mark' | 'custom'
  logoSize="xs"               // 'xs' | 's' | 'm' | 'l' | 'xl'
  links={[
    { name: '웹사이트', url: 'https://...', icon: <GlobeIcon /> },
    { name: '문의', url: 'mailto:...', icon: <MailIcon /> }
  ]}
  position="top-left"         // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
/>
```

---

### 3. **PageLicense** 🔹
라이선스 관리 페이지 (전체 화면)

```tsx
import { PageLicense } from '@designbasekorea/figma-ui';

<PageLicense 
  status="FREE"                      // 'PAID' | 'FREE' | 'UNPAID'
  usageCount={5}
  onClose={() => {}}
  onLicenseSubmit={async (key) => {}} // 라이선스 제출 핸들러
  setPaymentStatus={(status) => {}}
  setUsageCount={(count) => {}}
  setShowLicensePage={(show) => {}}
  paymentPageUrl="https://..."       // 선택사항
/>
```

---

### 4. **ProgressModal** 🔹
진행 상태 모달 (로딩, 성공, 에러)

```tsx
import { ProgressModal } from '@designbasekorea/figma-ui';

<ProgressModal 
  status="loading"            // 'loading' | 'success' | 'error'
  message="처리 중입니다..."
  progress={60}               // 0-100 (선택사항)
  showProgress={true}         // 진행률 바 표시
  onClose={() => {}}          // 성공/에러 시 닫기
/>
```

---

### 5. **PaymentBadge** 🔹
결제 상태 뱃지

```tsx
import { PaymentBadge } from '@designbasekorea/figma-ui';

<PaymentBadge 
  isActive={false}            // true: PAID, false: FREE
  onClick={() => {}}          // 클릭 핸들러
  isLoading={false}
/>
```

---

### 6. **DonationBadge** 🔹
기부 버튼 (무료 플러그인용)

```tsx
import { DonationBadge } from '@designbasekorea/figma-ui';

<DonationBadge 
  donationUrl="https://buymeacoffee.com/..."
  text="커피 한 잔 사주기"
  iconType="heart"            // 'heart' | 'coffee' | 'gift'
  size="s"                    // 's' | 'm' | 'l'
/>
```

---

### 7. **LanguageSelector** 🔹
언어 선택 드롭다운

```tsx
import { LanguageSelector } from '@designbasekorea/figma-ui';

<LanguageSelector 
  currentLanguage="ko"
  languages={[
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]}
  onLanguageChange={(code) => {}}
  size="s"
/>
```

---

### 8. **FormWithSubmit** 🔹
라이선스 키 입력 폼

```tsx
import { FormWithSubmit } from '@designbasekorea/figma-ui';

<FormWithSubmit 
  onLicenseSubmit={async (key) => {}}
  disabled={false}
  isSubmitting={false}
  value=""
  label="라이선스 키"
  submitText="제출"
/>
```

---

### 9. **PaymentStatusSection** 🔹
결제 상태 상세 정보

```tsx
import { PaymentStatusSection } from '@designbasekorea/figma-ui';

<PaymentStatusSection 
  status="PAID"
  usageCount={0}
  activationLimit={5}
  activationUsage={2}
  licenseKey="abc-123-..."
  onDeactivate={() => {}}
  showDetails={true}
/>
```

---

### 10. **PricingComparison** 🔹
가격 비교 테이블

```tsx
import { PricingComparison } from '@designbasekorea/figma-ui';

<PricingComparison 
  t={(key) => translations[key]}
/>
```

---

### 11. **UpgradeBanner** 🔹
업그레이드 배너

```tsx
import { UpgradeBanner } from '@designbasekorea/figma-ui';

<UpgradeBanner 
  onUpgradeClick={() => {}}
  message="프리미엄으로 업그레이드하세요"
  buttonText="업그레이드"
/>
```

---

### 12. **ResizablePlugin** 🔹
크기 조절 가능한 플러그인 컨테이너

```tsx
import { ResizablePlugin } from '@designbasekorea/figma-ui';

<ResizablePlugin 
  minWidth={320}
  maxWidth={800}
  minHeight={400}
  maxHeight={1000}
>
  {/* 내용 */}
</ResizablePlugin>
```

---

### 13. **InteractionFeedback** 🔹
사용자 피드백 (성공, 경고, 에러)

```tsx
import { InteractionFeedback } from '@designbasekorea/figma-ui';

<InteractionFeedback 
  status="success"            // 'success' | 'warning' | 'error' | 'info'
  message="성공적으로 처리되었습니다"
  duration={3000}
  onClose={() => {}}
/>
```

---

### 14. **SettingsModal** 🔹
설정 모달

```tsx
import { SettingsModal } from '@designbasekorea/figma-ui';

<SettingsModal 
  isOpen={true}
  onClose={() => {}}
  categories={[
    {
      id: 'general',
      label: '일반',
      groups: [
        {
          label: '기본 설정',
          settings: [
            { id: 'theme', label: '테마', type: 'select', options: [...] }
          ]
        }
      ]
    }
  ]}
  onSettingChange={(id, value) => {}}
/>
```

---

## 🎨 @designbasekorea/ui 컴포넌트 (40+ 개) - 모두 사용 가능!

`@designbasekorea/figma-ui`는 `@designbasekorea/ui`의 모든 컴포넌트도 재export합니다!

```tsx
// ✅ 이것도 모두 사용 가능!
import { 
  Button,
  Input,
  Checkbox,
  Radio,
  Select,
  Textarea,
  Switch,
  Slider,
  Spinner,
  Progressbar,
  Badge,
  Chip,
  Avatar,
  Tooltip,
  Modal,
  Dropdown,
  Tabs,
  Accordion,
  Card,
  Divider,
  Alert,
  // ... 40개 이상!
} from '@designbasekorea/figma-ui';  // ✅ figma-ui에서 모두 import 가능!
```

---

## 🎯 아이콘도 자동 포함!

```tsx
import { 
  CloseIcon,
  CheckIcon,
  ArrowLeftIcon,
  SettingsIcon,
  StarIcon,
  // ... 1000개 이상의 아이콘!
} from '@designbasekorea/icons';  // ✅ 자동 설치됨!
```

---

## 📦 단 하나의 설치 명령어로 모든 것 사용!

```bash
npm install @designbasekorea/figma-ui@latest
```

**자동으로 설치되는 것들**:
- ✅ **13개 Figma 전용 컴포넌트**
- ✅ **40개 이상 UI 컴포넌트** (Button, Input, Spinner 등)
- ✅ **1000개 이상 아이콘** (@designbasekorea/icons)
- ✅ **테마 시스템** (@designbasekorea/theme)
- ✅ **디자인 토큰** (@designbasekorea/tokens)

---

## 🚀 실전 사용 예제

### 완전한 Figma 플러그인 UI:

```tsx
import React, { useState } from 'react';
import { 
  // Figma 전용
  Footer,
  PageLicense,
  ProgressModal,
  InteractionFeedback,
  
  // 기본 UI
  Button,
  Input,
  Spinner,
  Modal,
  Tabs,
} from '@designbasekorea/figma-ui';

import { 
  GlobeIcon,
  MailIcon,
  SettingsIcon,
  CheckIcon,
} from '@designbasekorea/icons';

import '@designbasekorea/figma-ui/dist/index.css';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showLicense, setShowLicense] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* 헤더 */}
      <div style={{ padding: '16px', borderBottom: '1px solid #e5e7eb' }}>
        <h1>내 플러그인</h1>
      </div>

      {/* 탭 */}
      <Tabs
        tabs={[
          { id: 'main', label: '메인' },
          { id: 'settings', label: '설정' }
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* 메인 컨텐츠 */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {activeTab === 0 && (
          <div>
            <Input placeholder="텍스트 입력" size="m" />
            
            <Button 
              variant="primary" 
              size="m"
              onClick={() => setProcessing(true)}
            >
              <CheckIcon size={16} />
              실행
            </Button>
          </div>
        )}

        {activeTab === 1 && (
          <div>
            <h3>설정</h3>
            {/* 설정 내용 */}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer 
        logoLinks={[
          { name: '웹사이트', url: 'https://...', icon: <GlobeIcon size={20} /> },
          { name: '문의', url: 'mailto:...', icon: <MailIcon size={20} /> }
        ]}
        paymentStatus="FREE"
        usageCount={5}
        onLicensePageClick={() => setShowLicense(true)}
      />

      {/* 라이선스 페이지 */}
      {showLicense && (
        <PageLicense 
          status="FREE"
          onClose={() => setShowLicense(false)}
          onLicenseSubmit={async (key) => {}}
          setPaymentStatus={() => {}}
          setUsageCount={() => {}}
          setShowLicensePage={setShowLicense}
        />
      )}

      {/* 로딩 모달 */}
      {processing && (
        <ProgressModal 
          status="loading"
          message="처리 중..."
        />
      )}

      {/* 피드백 */}
      {feedback && (
        <InteractionFeedback 
          status="success"
          message={feedback}
          onClose={() => setFeedback(null)}
        />
      )}
    </div>
  );
};

export default App;
```

---

## 📋 전체 컴포넌트 목록

### Figma 플러그인 전용 (figma-ui):

| 컴포넌트 | 설명 | 주요 Props |
|---------|------|-----------|
| **Footer** | 플러그인 하단 푸터 | logoLinks, paymentStatus, usageCount |
| **LogoDropdown** | 로고 + 드롭다운 메뉴 | logoType, links, position |
| **PageLicense** | 라이선스 관리 페이지 | status, onLicenseSubmit, paymentPageUrl |
| **ProgressModal** | 진행 상태 모달 | status, message, progress |
| **PaymentBadge** | 결제 상태 뱃지 | isActive, onClick |
| **DonationBadge** | 기부 버튼 | donationUrl, text, iconType |
| **LanguageSelector** | 언어 선택기 | currentLanguage, languages |
| **FormWithSubmit** | 라이선스 입력 폼 | onLicenseSubmit, value |
| **PaymentStatusSection** | 결제 상태 상세 | status, licenseKey, activationLimit |
| **PricingComparison** | 가격 비교 테이블 | features, pricing |
| **UpgradeBanner** | 업그레이드 배너 | message, onUpgradeClick |
| **ResizablePlugin** | 크기 조절 컨테이너 | minWidth, maxWidth |
| **InteractionFeedback** | 사용자 피드백 | status, message, duration |
| **SettingsModal** | 설정 모달 | categories, onSettingChange |

---

### 기본 UI 컴포넌트 (ui) - 모두 사용 가능!

**Form Controls (입력)**:
- `Button` - 버튼
- `Input` - 텍스트 입력
- `Textarea` - 여러 줄 입력
- `Checkbox` - 체크박스
- `Radio` - 라디오 버튼
- `Switch` - 스위치
- `Select` - 드롭다운 선택
- `Slider` - 슬라이더
- `ColorPicker` - 색상 선택
- `FileUpload` - 파일 업로드

**Feedback (피드백)**:
- `Spinner` - 로딩 스피너
- `Progressbar` - 진행률 바
- `Alert` - 알림
- `Toast` - 토스트 알림
- `Badge` - 뱃지
- `Chip` - 칩

**Layout (레이아웃)**:
- `Card` - 카드
- `Modal` - 모달
- `Drawer` - 사이드 드로어
- `Tabs` - 탭
- `Accordion` - 아코디언
- `Divider` - 구분선
- `Spacer` - 공간

**Navigation (네비게이션)**:
- `Breadcrumb` - 경로 표시
- `Pagination` - 페이지네이션
- `Dropdown` - 드롭다운

**Display (표시)**:
- `Avatar` - 아바타
- `Tooltip` - 툴팁
- `Popover` - 팝오버
- `Logo` - 로고 (DesignBase 로고 포함!)
- `Table` - 테이블
- `List` - 리스트

**Media (미디어)**:
- `Image` - 이미지
- `VideoPlayer` - 비디오 플레이어

**그 외 30개 이상...**

---

## 🎨 아이콘 (1000개 이상!)

```tsx
import {
  // 기본 아이콘
  CloseIcon, CheckIcon, ArrowLeftIcon, ArrowRightIcon,
  
  // 액션 아이콘
  EditIcon, DeleteIcon, CopyIcon, PasteIcon,
  
  // UI 아이콘
  SettingsIcon, SearchIcon, FilterIcon, MoreIcon,
  
  // 소셜 미디어
  GlobeIcon, MailIcon, YoutubeIcon, InstagramIcon,
  
  // 피그마 관련
  ComponentIcon, FrameIcon, LayerIcon, PluginIcon,
  
  // 파일
  FileIcon, FolderIcon, ImageIcon, VideoIcon,
  
  // 그 외 1000개 이상...
} from '@designbasekorea/icons';
```

---

## ✅ 사용 가능한 전체 패키지:

### 1개 설치로 4개 패키지 사용!

```bash
npm install @designbasekorea/figma-ui@latest
```

**자동 설치됨**:
1. ✅ `@designbasekorea/figma-ui` - Figma 전용 컴포넌트 (13개)
2. ✅ `@designbasekorea/ui` - 기본 UI 컴포넌트 (40개+)
3. ✅ `@designbasekorea/icons` - 아이콘 (1000개+)
4. ✅ `@designbasekorea/theme` + `@designbasekorea/tokens` - 테마/토큰

---

## 💡 import 방법

### 방법 1: figma-ui에서 모두 import (추천)

```tsx
import { 
  Footer,           // Figma 전용
  PageLicense,      // Figma 전용
  Button,           // 기본 UI
  Input,            // 기본 UI
  Spinner,          // 기본 UI
} from '@designbasekorea/figma-ui';  // ✅ 한 곳에서!

import { GlobeIcon, MailIcon } from '@designbasekorea/icons';
import '@designbasekorea/figma-ui/dist/index.css';
```

### 방법 2: 개별 패키지에서 import

```tsx
import { Footer } from '@designbasekorea/figma-ui';
import { Button } from '@designbasekorea/ui';
import { GlobeIcon } from '@designbasekorea/icons';
```

**둘 다 완전히 동일하게 작동합니다!**

---

## 🎯 요약:

### ❓ figma-ui 폴더의 모든 컴포넌트를 사용할 수 있나요?
**✅ 네! 모두 사용 가능합니다!**

### ❓ ui 폴더의 컴포넌트도 사용 가능한가요?
**✅ 네! figma-ui가 ui를 재export하므로 모두 사용 가능합니다!**

### ❓ 아이콘도 별도 설치 필요한가요?
**✅ 아니요! 자동으로 함께 설치됩니다!**

### ❓ 총 몇 개를 사용할 수 있나요?
**✅ 13개(Figma) + 40개+(UI) + 1000개+(아이콘) = 1000개 이상!**

---

**단 하나의 패키지로 모든 것을 사용하세요!** 🎊

```bash
npm install @designbasekorea/figma-ui@latest
```
