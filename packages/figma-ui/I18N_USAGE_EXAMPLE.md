# I18n 사용 예제

figma-ui 패키지의 새로운 i18n 구조 사용법을 보여주는 예제입니다.

## 1. 기본 사용법

### 문자열 직접 전달
```tsx
import { DonationBadge } from '@designbasekorea/figma-ui';

// 문자열을 직접 전달 (기존 방식과 동일)
<DonationBadge text="Buy me a coffee" iconType="coffee" />
```

### I18n 키 사용 (t 함수 없음)
```tsx
import { DonationBadge } from '@designbasekorea/figma-ui';

// 키만 전달하면 키 자체가 표시됨
<DonationBadge text={{ key: 'donation.buy_me_a_coffee' }} iconType="coffee" />
```

### I18n 키 사용 (t 함수 있음)
```tsx
import { DonationBadge } from '@designbasekorea/figma-ui';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <DonationBadge 
      text={{ key: 'donation.buy_me_a_coffee' }} 
      iconType="coffee"
      t={t}
    />
  );
}
```

## 2. 여러 컴포넌트 예제

### FormWithSubmit
```tsx
import { FormWithSubmit } from '@designbasekorea/figma-ui';
import { useTranslation } from 'react-i18next';

function LicenseForm() {
  const { t } = useTranslation();
  
  return (
    <FormWithSubmit
      onLicenseSubmit={handleSubmit}
      label={{ key: 'form.license_key' }}
      placeholder={{ key: 'form.license_placeholder' }}
      submitText={{ key: 'form.submit' }}
      submittingText={{ key: 'form.verifying' }}
      t={t}
    />
  );
}
```

### UpgradeBanner
```tsx
import { UpgradeBanner } from '@designbasekorea/figma-ui';
import { useTranslation } from 'react-i18next';

function Banner() {
  const { t } = useTranslation();
  
  return (
    <UpgradeBanner
      onClick={handleUpgrade}
      title={{ key: 'banner.upgrade_title' }}
      description={{ key: 'banner.upgrade_description' }}
      buttonText={{ key: 'banner.upgrade_button' }}
      t={t}
    />
  );
}
```

### TitleDescription
```tsx
import { TitleDescription } from '@designbasekorea/figma-ui';
import { useTranslation } from 'react-i18next';

function FeatureCard() {
  const { t } = useTranslation();
  
  return (
    <TitleDescription
      title={{ key: 'feature.title' }}
      description={{ key: 'feature.description' }}
      features={[
        { key: 'feature.benefit1' },
        { key: 'feature.benefit2' },
        { key: 'feature.benefit3' }
      ]}
      t={t}
    />
  );
}
```

### InteractionFeedback
```tsx
import { InteractionFeedback } from '@designbasekorea/figma-ui';
import { useTranslation } from 'react-i18next';

function FeedbackComponent() {
  const { t } = useTranslation();
  
  return (
    <InteractionFeedback
      message={{ key: 'feedback.selected_count' }}
      statusMessage={{ key: 'feedback.limit_warning' }}
      status="warning"
      t={t}
    />
  );
}
```

### LanguageSelector
```tsx
import { LanguageSelector } from '@designbasekorea/figma-ui';
import { useTranslation } from 'react-i18next';

function LanguageComponent() {
  const { t } = useTranslation();
  
  return (
    <LanguageSelector
      currentLanguage="ko"
      languages={[
        { code: 'ko', label: { key: 'language.korean' } },
        { code: 'en', label: { key: 'language.english' } }
      ]}
      onLanguageChange={handleLanguageChange}
      t={t}
    />
  );
}
```

### LicenseManager (통합 라이선스 관리)
```tsx
import { LicenseManager } from '@designbasekorea/figma-ui';
import { useTranslation } from 'react-i18next';

function LicenseComponent() {
  const { t } = useTranslation();
  const [licenseStatus, setLicenseStatus] = useState('INACTIVE');
  
  return (
    <LicenseManager
      licenseStatus={licenseStatus}
      licenseKey={licenseKey}
      activationLimit={3}
      activationUsage={1}
      onLicenseActivate={handleActivate}
      onLicenseDeactivate={handleDeactivate}
      t={t}
    />
  );
}
```

## 3. 번역 리소스 예제

### en.json
```json
{
  "donation.buy_me_a_coffee": "Buy me a coffee",
  "form.license_key": "License Key",
  "form.license_placeholder": "Enter your license key",
  "form.submit": "Submit",
  "form.verifying": "Verifying...",
  "banner.upgrade_title": "Upgrade to Pro",
  "banner.upgrade_description": "Unlock unlimited features and benefits",
  "banner.upgrade_button": "Upgrade Now",
  "feature.title": "Advanced Features",
  "feature.description": "Get access to premium functionality",
  "feature.benefit1": "Unlimited usage",
  "feature.benefit2": "Priority support",
  "feature.benefit3": "Advanced analytics",
  "feedback.selected_count": "3 items selected",
  "feedback.limit_warning": "Free users can select up to 3 items",
  "feedback.success_save": "Successfully saved",
  "feedback.error_message": "Selection error",
  "language.korean": "Korean",
  "language.english": "English",
  "language.japanese": "Japanese",
  "payment.license_key_label": "License Key",
  "payment.activations_remaining": "activations",
  "payment.spots_remaining": "spots remaining",
  "payment.deactivating": "Deactivating...",
  "payment.deactivate_license": "Deactivate License"
}
```

### ko.json
```json
{
  "donation.buy_me_a_coffee": "커피 한 잔 사주기",
  "form.license_key": "라이선스 키",
  "form.license_placeholder": "라이선스 키를 입력하세요",
  "form.submit": "제출",
  "form.verifying": "확인 중...",
  "banner.upgrade_title": "프로로 업그레이드",
  "banner.upgrade_description": "무제한 기능과 혜택을 누리세요",
  "banner.upgrade_button": "지금 업그레이드",
  "feature.title": "고급 기능",
  "feature.description": "프리미엄 기능에 액세스하세요",
  "feature.benefit1": "무제한 사용",
  "feature.benefit2": "우선 지원",
  "feature.benefit3": "고급 분석",
  "feedback.selected_count": "3개 선택됨",
  "feedback.limit_warning": "무료 사용자는 3개까지만 선택할 수 있습니다",
  "feedback.success_save": "성공적으로 저장되었습니다",
  "feedback.error_message": "선택 오류",
  "language.korean": "한국어",
  "language.english": "English",
  "language.japanese": "日本語",
  "payment.license_key_label": "라이선스 키",
  "payment.activations_remaining": "활성",
  "payment.spots_remaining": "자리 남음",
  "payment.deactivating": "비활성화중...",
  "payment.deactivate_license": "라이선스 비활성화"
}
```

## 4. 값이 있는 번역

```tsx
// 값이 있는 번역 키 사용
<DonationBadge 
  text={{ 
    key: 'donation.buy_me_a_coffee_with_count', 
    values: { count: 3 } 
  }} 
  t={t}
/>
```

번역 리소스:
```json
{
  "donation.buy_me_a_coffee_with_count": "Buy me {{count}} coffees"
}
```

## 5. 혼합 사용

```tsx
// 일부는 문자열, 일부는 키 사용 가능
<FormWithSubmit
  label="License Key"  // 문자열
  placeholder={{ key: 'form.license_placeholder' }}  // 키
  submitText={{ key: 'form.submit' }}  // 키
  t={t}
/>
```

## 6. 장점

1. **유연성**: 문자열과 키를 자유롭게 혼합 사용 가능
2. **점진적 마이그레이션**: 기존 코드를 단계적으로 변경 가능
3. **의존성 분리**: 라이브러리가 react-i18next에 직접 의존하지 않음
4. **번들 크기**: 불필요한 i18n 라이브러리가 번들에 포함되지 않음
5. **호환성**: 어떤 i18n 솔루션을 사용하든 상관없음
