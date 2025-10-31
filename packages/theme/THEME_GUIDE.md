# Designbase Theme 사용 가이드

> UI 컴포넌트 제작 시 참고할 디자인 토큰 및 CSS 변수 가이드

## 📚 목차

- [토큰 구조](#토큰-구조)
- [색상 변수](#색상-변수)
- [Spacing 변수](#spacing-변수)
- [Typography 변수](#typography-변수)
- [Border 변수](#border-변수)
- [Effects 변수](#effects-변수)
- [Size 변수](#size-변수)
- [다크 모드](#다크-모드)
- [사용 예시](#사용-예시)

---

## 토큰 구조

Designbase Theme은 3단계 토큰 시스템을 사용합니다:

```
Foundation (원시 값)
    ↓
Aliases (의미있는 이름)
    ↓
Semantic (컴포넌트별)
    ↓
Theme Variables (--db-*)  ← UI 컴포넌트는 여기를 사용!
```

### 🎯 UI 컴포넌트 제작 시 규칙

- ✅ **항상 `--db-*` 변수를 사용하세요**
- ✅ **다크 모드는 자동으로 적용됩니다** (추가 코드 불필요)
- ❌ 직접 색상 값(hex, rgb 등)을 사용하지 마세요
- ❌ Foundation 토큰(`--color-foundation-*`)을 직접 사용하지 마세요

---

## 색상 변수

### 📝 Text Colors

텍스트 색상에 사용합니다.

```css
--db-text-primary           /* 주요 텍스트 */
--db-text-secondary         /* 보조 텍스트 */
--db-text-tertiary          /* 부가 텍스트 */
--db-text-disabled          /* 비활성화된 텍스트 */
--db-text-link              /* 링크 텍스트 */
--db-text-link-hover        /* 링크 호버 */
--db-text-inverse-primary   /* 반전 주요 텍스트 (다크 배경용) */
--db-text-inverse-secondary /* 반전 보조 텍스트 */
--db-text-inverse-tertiary  /* 반전 부가 텍스트 */
```

**사용 예시:**
```css
.text {
  color: var(--db-text-primary);
}

.text-muted {
  color: var(--db-text-tertiary);
}

.link {
  color: var(--db-text-link);
}

.link:hover {
  color: var(--db-text-link-hover);
}
```

### 🎨 Brand Colors

브랜드 색상입니다.

```css
--db-brand-primary          /* 주요 브랜드 컬러 */
--db-brand-secondary        /* 보조 브랜드 컬러 */
--db-brand-tertiary         /* 부가 브랜드 컬러 */
--db-brand-accent           /* 강조 컬러 */
```

**사용 예시:**
```css
.brand-button {
  background-color: var(--db-brand-primary);
  color: var(--db-text-inverse-primary);
}
```

### 🏠 Surface/Background Colors

배경 색상에 사용합니다.

```css
--db-surface-base           /* 기본 배경 */
--db-surface-layer-1        /* 1단계 높이 */
--db-surface-layer-2        /* 2단계 높이 */
--db-surface-layer-3        /* 3단계 높이 */
--db-surface-muted          /* 약한 배경 */
--db-surface-inverse        /* 반전 배경 */
--db-surface-transparent    /* 투명 배경 */
--db-surface-alpha          /* 반투명 배경 */
--db-surface-alpha-inverse  /* 반투명 반전 배경 */
```

**기존 호환성 변수:**
```css
--db-bg-primary             /* = surface-base */
--db-bg-secondary           /* = surface-layer-1 */
--db-bg-tertiary            /* = surface-layer-2 */
--db-bg-inverse             /* = surface-inverse */
```

**사용 예시:**
```css
.card {
  background-color: var(--db-surface-base);
}

.card-elevated {
  background-color: var(--db-surface-layer-1);
}

.modal-backdrop {
  background-color: var(--db-surface-alpha);
}
```

### ✅ Feedback Colors

성공, 경고, 에러, 정보 색상입니다.

```css
/* Success (성공) */
--db-feedback-success-fg    /* 성공 텍스트/아이콘 */
--db-feedback-success-bg    /* 성공 배경 */

/* Warning (경고) */
--db-feedback-warning-fg    /* 경고 텍스트/아이콘 */
--db-feedback-warning-bg    /* 경고 배경 */

/* Error (에러) */
--db-feedback-error-fg      /* 에러 텍스트/아이콘 */
--db-feedback-error-bg      /* 에러 배경 */

/* Info (정보) */
--db-feedback-info-fg       /* 정보 텍스트/아이콘 */
--db-feedback-info-bg       /* 정보 배경 */
```

**기존 호환성 변수:**
```css
--db-text-success           /* = feedback-success-fg */
--db-text-warning           /* = feedback-warning-fg */
--db-text-error             /* = feedback-error-fg */
--db-text-info              /* = feedback-info-fg */
--db-bg-success             /* = feedback-success-bg */
--db-bg-warning             /* = feedback-warning-bg */
--db-bg-error               /* = feedback-error-bg */
--db-bg-info                /* = feedback-info-bg */
```

**사용 예시:**
```css
.alert-success {
  background-color: var(--db-feedback-success-bg);
  color: var(--db-feedback-success-fg);
  border-color: var(--db-feedback-success-fg);
}

.error-message {
  color: var(--db-feedback-error-fg);
}
```

### 🔲 Border Colors

테두리 색상에 사용합니다.

```css
--db-border-base            /* 기본 테두리 */
--db-border-layer-1         /* 1단계 테두리 */
--db-border-layer-2         /* 2단계 테두리 */
--db-border-layer-3         /* 3단계 테두리 */
--db-border-muted           /* 약한 테두리 */
--db-border-inverse         /* 반전 테두리 */
--db-border-transparent     /* 투명 테두리 */
--db-border-alpha           /* 반투명 테두리 */
--db-border-alpha-inverse   /* 반투명 반전 테두리 */
```

**기존 호환성 변수:**
```css
--db-border-primary         /* = border-base */
--db-border-secondary       /* = border-layer-1 */
--db-border-focus           /* = brand-primary */
--db-border-error           /* = feedback-error-fg */
--db-border-success         /* = feedback-success-fg */
--db-border-warning         /* = feedback-warning-fg */
--db-border-info            /* = feedback-info-fg */
```

**사용 예시:**
```css
.input {
  border: 1px solid var(--db-border-base);
}

.input:hover {
  border-color: var(--db-border-layer-1);
}

.input:focus {
  border-color: var(--db-border-focus);
}

.input.error {
  border-color: var(--db-border-error);
}
```

### 🎭 Overlay Colors

오버레이(모달 배경 등)에 사용합니다.

```css
--db-overlay-base           /* 기본 오버레이 (60% 불투명) */
--db-overlay-soft           /* 약한 오버레이 (30% 불투명) */
--db-overlay-inverse        /* 반전 오버레이 */
--db-bg-overlay             /* = overlay-base */
```

**사용 예시:**
```css
.modal-backdrop {
  background-color: var(--db-overlay-base);
}
```

### 🎯 Icon Colors (Semantic)

아이콘 색상에 사용합니다.

```css
--db-icon-default           /* 기본 아이콘 */
--db-icon-hover             /* 호버 아이콘 */
--db-icon-muted             /* 약한 아이콘 */
--db-icon-disabled          /* 비활성화 아이콘 */
--db-icon-primary           /* 주요 아이콘 */
--db-icon-success           /* 성공 아이콘 */
--db-icon-warning           /* 경고 아이콘 */
--db-icon-error             /* 에러 아이콘 */
--db-icon-info              /* 정보 아이콘 */
--db-icon-inverse           /* 반전 아이콘 */
--db-icon-inverse-hover     /* 반전 호버 아이콘 */
```

**기존 호환성 변수:**
```css
--db-icon-secondary         /* = icon-hover */
--db-icon-danger            /* = icon-error */
```

**사용 예시:**
```css
.icon {
  color: var(--db-icon-default);
}

.icon:hover {
  color: var(--db-icon-hover);
}

.icon-success {
  color: var(--db-icon-success);
}
```

### 🔘 Button Colors (Semantic)

버튼 컴포넌트에 사용합니다.

#### Primary Button
```css
--db-btn-primary-bg                 /* 배경 */
--db-btn-primary-bg-hover           /* 호버 배경 */
--db-btn-primary-bg-active          /* 클릭 배경 */
--db-btn-primary-bg-disabled        /* 비활성화 배경 */
--db-btn-primary-text               /* 텍스트 */
--db-btn-primary-text-disabled      /* 비활성화 텍스트 */
--db-btn-primary-border             /* 테두리 */
--db-btn-primary-border-hover       /* 호버 테두리 */
--db-btn-primary-border-active      /* 클릭 테두리 */
```

#### Secondary Button
```css
--db-btn-secondary-bg               /* 배경 */
--db-btn-secondary-bg-hover         /* 호버 배경 */
--db-btn-secondary-bg-active        /* 클릭 배경 */
--db-btn-secondary-bg-disabled      /* 비활성화 배경 */
--db-btn-secondary-text             /* 텍스트 */
--db-btn-secondary-text-hover       /* 호버 텍스트 */
--db-btn-secondary-text-disabled    /* 비활성화 텍스트 */
--db-btn-secondary-border           /* 테두리 */
--db-btn-secondary-border-hover     /* 호버 테두리 */
```

#### Tertiary Button
```css
--db-btn-tertiary-bg                /* 배경 */
--db-btn-tertiary-bg-hover          /* 호버 배경 */
--db-btn-tertiary-bg-active         /* 클릭 배경 */
--db-btn-tertiary-bg-disabled       /* 비활성화 배경 */
--db-btn-tertiary-text              /* 텍스트 */
--db-btn-tertiary-text-hover        /* 호버 텍스트 */
--db-btn-tertiary-text-disabled     /* 비활성화 텍스트 */
--db-btn-tertiary-border            /* 테두리 */
--db-btn-tertiary-border-hover      /* 호버 테두리 */
```

#### Disabled Button
```css
--db-btn-disabled-bg                /* 비활성화 배경 */
--db-btn-disabled-text              /* 비활성화 텍스트 */
```

**사용 예시:**
```css
.button-primary {
  background-color: var(--db-btn-primary-bg);
  color: var(--db-btn-primary-text);
  border: 1px solid var(--db-btn-primary-border);
}

.button-primary:hover {
  background-color: var(--db-btn-primary-bg-hover);
  border-color: var(--db-btn-primary-border-hover);
}

.button-primary:disabled {
  background-color: var(--db-btn-primary-bg-disabled);
  color: var(--db-btn-primary-text-disabled);
}
```

### 📝 Field/Input Colors (Semantic)

입력 필드에 사용합니다.

```css
--db-field-bg                       /* 배경 */
--db-field-bg-hover                 /* 호버 배경 */
--db-field-bg-disabled              /* 비활성화 배경 */
--db-field-border                   /* 테두리 */
--db-field-border-hover             /* 호버 테두리 */
--db-field-border-focus             /* 포커스 테두리 */
--db-field-border-error             /* 에러 테두리 */
--db-field-text                     /* 텍스트 */
--db-field-text-disabled            /* 비활성화 텍스트 */
--db-field-placeholder              /* Placeholder 텍스트 */
```

**사용 예시:**
```css
.input {
  background-color: var(--db-field-bg);
  border: 1px solid var(--db-field-border);
  color: var(--db-field-text);
}

.input:hover {
  background-color: var(--db-field-bg-hover);
  border-color: var(--db-field-border-hover);
}

.input:focus {
  border-color: var(--db-field-border-focus);
}

.input::placeholder {
  color: var(--db-field-placeholder);
}

.input.error {
  border-color: var(--db-field-border-error);
}

.input:disabled {
  background-color: var(--db-field-bg-disabled);
  color: var(--db-field-text-disabled);
}
```

### 🖱️ Interactive Colors (Semantic)

클릭 가능한 요소에 사용합니다.

```css
/* Text */
--db-interactive-text               /* 기본 텍스트 */
--db-interactive-text-hover         /* 호버 텍스트 */
--db-interactive-text-mute          /* 약한 텍스트 */
--db-interactive-text-disabled      /* 비활성화 텍스트 */
--db-interactive-text-inverse       /* 반전 텍스트 */
--db-interactive-text-primary       /* 주요 텍스트 */

/* Border */
--db-interactive-border             /* 기본 테두리 */
--db-interactive-border-hover       /* 호버 테두리 */
--db-interactive-border-muted       /* 약한 테두리 */
--db-interactive-border-success     /* 성공 테두리 */
--db-interactive-border-warning     /* 경고 테두리 */
--db-interactive-border-error       /* 에러 테두리 */
--db-interactive-border-info        /* 정보 테두리 */

/* Background */
--db-interactive-bg                 /* 기본 배경 */
--db-interactive-bg-hover           /* 호버 배경 */
--db-interactive-bg-muted           /* 약한 배경 */
--db-interactive-bg-success         /* 성공 배경 */
--db-interactive-bg-warning         /* 경고 배경 */
--db-interactive-bg-error           /* 에러 배경 */
--db-interactive-bg-info            /* 정보 배경 */
```

**사용 예시:**
```css
.clickable {
  color: var(--db-interactive-text);
  background-color: var(--db-interactive-bg);
  border: 1px solid var(--db-interactive-border);
}

.clickable:hover {
  color: var(--db-interactive-text-hover);
  background-color: var(--db-interactive-bg-hover);
  border-color: var(--db-interactive-border-hover);
}
```

---

## Spacing 변수

### 📏 Margin

```css
--db-margin-xs              /* 0.25rem (4px) */
--db-margin-s               /* 0.5rem (8px) */
--db-margin-m               /* 1rem (16px) */
--db-margin-l               /* 1.5rem (24px) */
--db-margin-xl              /* 2rem (32px) */
--db-margin-xxl             /* 2.5rem (40px) */
```

### 📦 Padding

```css
--db-padding-xxs            /* 0.25rem (4px) */
--db-padding-xs             /* 0.25rem (4px) */
--db-padding-s              /* 0.5rem (8px) */
--db-padding-m              /* 1rem (16px) */
--db-padding-l              /* 1.5rem (24px) */
--db-padding-xl             /* 2rem (32px) */
```

### 🔲 Gap

```css
--db-gap-xs                 /* 0.25rem (4px) */
--db-gap-s                  /* 0.5rem (8px) */
--db-gap-m                  /* 1rem (16px) */
--db-gap-l                  /* 1.5rem (24px) */
--db-gap-xl                 /* 2rem (32px) */
```

**사용 예시:**
```css
.card {
  padding: var(--db-padding-l);
  margin-bottom: var(--db-margin-m);
}

.button-group {
  display: flex;
  gap: var(--db-gap-s);
}
```

---

## Typography 변수

### 🔤 Font Family

```css
--db-font-primary           /* 기본 폰트 */
--db-font-mono              /* 모노스페이스 폰트 */
```

### 📐 Font Size

```css
--db-text-xs                /* 0.75rem (12px) */
--db-text-s                 /* 0.875rem (14px) */
--db-text-base              /* 1rem (16px) */
--db-text-l                 /* 1.125rem (18px) */
--db-text-xl                /* 1.25rem (20px) */
--db-text-2xl               /* 1.5rem (24px) */
--db-text-3xl               /* 1.875rem (30px) */
--db-text-4xl               /* 2.25rem (36px) */
--db-text-5xl               /* 3rem (48px) */
--db-text-6xl               /* 3.75rem (60px) */
```

### 💪 Font Weight

```css
--db-weight-light           /* 300 */
--db-weight-normal          /* 400 */
--db-weight-medium          /* 500 */
--db-weight-semibold        /* 600 */
--db-weight-bold            /* 700 */
--db-weight-extrabold       /* 800 */
```

### 📏 Line Height

```css
--db-leading-none           /* 1 */
--db-leading-tight          /* 1.25 */
--db-leading-snug           /* 1.375 */
--db-leading-normal         /* 1.5 */
--db-leading-relaxed        /* 1.625 */
--db-leading-loose          /* 2 */
```

**사용 예시:**
```css
.heading {
  font-family: var(--db-font-primary);
  font-size: var(--db-text-2xl);
  font-weight: var(--db-weight-bold);
  line-height: var(--db-leading-tight);
}

.body-text {
  font-size: var(--db-text-base);
  line-height: var(--db-leading-normal);
}
```

---

## Border 변수

### 🔲 Border Radius

#### 범용 Radius
```css
--db-radius-s               /* 0.25rem (4px) */
--db-radius-m               /* 0.375rem (6px) */
--db-radius-l               /* 0.5rem (8px) */
--db-radius-xl              /* 0.75rem (12px) */
--db-radius-2xl             /* 1rem (16px) */
--db-radius-3xl             /* 1.5rem (24px) */
--db-radius-full            /* 9999px (완전한 원) */
```

#### 컴포넌트별 Radius
```css
/* Button */
--db-radius-btn-s
--db-radius-btn-m
--db-radius-btn-l
--db-radius-btn-pill

/* Input */
--db-radius-input-s
--db-radius-input-m
--db-radius-input-l

/* Card */
--db-radius-card-s
--db-radius-card-m
--db-radius-card-l

/* Modal */
--db-radius-modal-s
--db-radius-modal-m
--db-radius-modal-l

/* Action */
--db-radius-action-s
--db-radius-action-m
--db-radius-action-l
--db-radius-action-pill
```

**사용 예시:**
```css
.button {
  border-radius: var(--db-radius-m);
}

.card {
  border-radius: var(--db-radius-card-m);
}

.avatar {
  border-radius: var(--db-radius-full);
}
```

---

## Effects 변수

### 🌟 Shadow

```css
/* Card Shadows */
--db-shadow-card            /* 기본 카드 그림자 */
--db-shadow-card-hover      /* 카드 호버 그림자 */
--db-shadow-card-elevated   /* 높은 카드 그림자 */

/* Button Shadows */
--db-shadow-button          /* 기본 버튼 그림자 */
--db-shadow-button-hover    /* 버튼 호버 그림자 */
--db-shadow-button-active   /* 버튼 클릭 그림자 */

/* Other Shadows */
--db-shadow-tooltip         /* 툴팁 그림자 */
--db-shadow-dropdown        /* 드롭다운 그림자 */
--db-shadow-modal           /* 모달 그림자 */
```

### 👻 Opacity

```css
--db-opacity-focus          /* 90% */
--db-opacity-hover          /* 80% */
--db-opacity-overlay-dark   /* 75% */
--db-opacity-overlay-medium /* 50% */
--db-opacity-overlay-light  /* 25% */
--db-opacity-disabled       /* 50% */
```

**사용 예시:**
```css
.card {
  box-shadow: var(--db-shadow-card);
}

.card:hover {
  box-shadow: var(--db-shadow-card-hover);
}

.disabled {
  opacity: var(--db-opacity-disabled);
}
```

---

## Size 변수

### 📦 Basic Sizes

```css
--db-size-xs                /* 1rem (16px) */
--db-size-s                 /* 1.25rem (20px) */
--db-size-m                 /* 1.5rem (24px) */
--db-size-l                 /* 2rem (32px) */
--db-size-xl                /* 2.5rem (40px) */
--db-size-2xl               /* 3rem (48px) */
```

### 🎯 Component Sizes

```css
/* Icon */
--db-size-icon-xs
--db-size-icon-s
--db-size-icon-m
--db-size-icon-l
--db-size-icon-xl

/* Button */
--db-size-button-xs
--db-size-button-s
--db-size-button-m
--db-size-button-l
--db-size-button-xl

/* Input */
--db-size-input-xs
--db-size-input-s
--db-size-input-m
--db-size-input-l
--db-size-input-xl

/* Avatar */
--db-size-avatar-xs
--db-size-avatar-s
--db-size-avatar-m
--db-size-avatar-l
--db-size-avatar-xl
--db-size-avatar-2xl
--db-size-avatar-3xl

/* Card */
--db-size-card-s
--db-size-card-m
--db-size-card-l

/* Modal */
--db-size-modal-s
--db-size-modal-m
--db-size-modal-l
--db-size-modal-xl

/* Checkbox */
--db-size-checkbox-xs
--db-size-checkbox-s
--db-size-checkbox-m
--db-size-checkbox-l
--db-size-checkbox-xl
```

**사용 예시:**
```css
.button-medium {
  height: var(--db-size-button-m);
}

.avatar-large {
  width: var(--db-size-avatar-l);
  height: var(--db-size-avatar-l);
}
```

---

## 다크 모드

### 🌙 자동 다크 모드 지원

모든 `--db-*` 변수는 **다크 모드를 자동으로 지원**합니다!

```html
<!-- 다크 모드 활성화 -->
<body data-theme="dark">
  <!-- 모든 컴포넌트가 자동으로 다크 모드로 전환됩니다 -->
</body>
```

### ⚡ 다크 모드에서 변경되는 것

다크 모드에서는 **color-aliases만** 자동으로 변경됩니다:
- Text colors (밝은 색으로 변경)
- Surface colors (어두운 색으로 변경)
- Border colors (적절한 대비로 변경)
- Feedback colors (동일하게 유지)

### 📝 다크 모드 사용 시 주의사항

- ❌ 다크 모드를 위한 별도의 CSS를 작성하지 마세요
- ✅ `--db-*` 변수만 사용하면 자동으로 다크 모드가 적용됩니다
- ✅ JavaScript로 `data-theme="dark"` 속성만 토글하면 됩니다

**사용 예시:**
```javascript
// 다크 모드 토글
const toggleDarkMode = () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
};
```

---

## 사용 예시

### 🔘 Button 컴포넌트

```css
.button {
  /* Primary Button */
  background-color: var(--db-btn-primary-bg);
  color: var(--db-btn-primary-text);
  border: 1px solid var(--db-btn-primary-border);
  border-radius: var(--db-radius-btn-m);
  padding: var(--db-padding-s) var(--db-padding-m);
  font-size: var(--db-text-base);
  font-weight: var(--db-weight-medium);
  box-shadow: var(--db-shadow-button);
  transition: all 0.2s ease;
}

.button:hover:not(:disabled) {
  background-color: var(--db-btn-primary-bg-hover);
  border-color: var(--db-btn-primary-border-hover);
  box-shadow: var(--db-shadow-button-hover);
}

.button:active {
  background-color: var(--db-btn-primary-bg-active);
  border-color: var(--db-btn-primary-border-active);
  box-shadow: var(--db-shadow-button-active);
}

.button:disabled {
  background-color: var(--db-btn-primary-bg-disabled);
  color: var(--db-btn-primary-text-disabled);
  opacity: var(--db-opacity-disabled);
  cursor: not-allowed;
}

/* Secondary Button */
.button-secondary {
  background-color: var(--db-btn-secondary-bg);
  color: var(--db-btn-secondary-text);
  border: 1px solid var(--db-btn-secondary-border);
}

.button-secondary:hover:not(:disabled) {
  background-color: var(--db-btn-secondary-bg-hover);
  color: var(--db-btn-secondary-text-hover);
  border-color: var(--db-btn-secondary-border-hover);
}
```

### 📝 Input 컴포넌트

```css
.input {
  background-color: var(--db-field-bg);
  border: 1px solid var(--db-field-border);
  border-radius: var(--db-radius-input-m);
  padding: var(--db-padding-s);
  color: var(--db-field-text);
  font-size: var(--db-text-base);
  transition: all 0.2s ease;
}

.input:hover:not(:disabled) {
  background-color: var(--db-field-bg-hover);
  border-color: var(--db-field-border-hover);
}

.input:focus {
  outline: none;
  border-color: var(--db-field-border-focus);
  box-shadow: 0 0 0 3px var(--color-aliases-brand-primary-alpha-10);
}

.input::placeholder {
  color: var(--db-field-placeholder);
}

.input:disabled {
  background-color: var(--db-field-bg-disabled);
  color: var(--db-field-text-disabled);
  cursor: not-allowed;
}

.input.error {
  border-color: var(--db-field-border-error);
}
```

### 🎴 Card 컴포넌트

```css
.card {
  background-color: var(--db-surface-base);
  border: 1px solid var(--db-border-base);
  border-radius: var(--db-radius-card-m);
  padding: var(--db-padding-l);
  box-shadow: var(--db-shadow-card);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--db-shadow-card-hover);
  border-color: var(--db-border-layer-1);
}

.card-elevated {
  background-color: var(--db-surface-layer-1);
  box-shadow: var(--db-shadow-card-elevated);
}

.card-title {
  color: var(--db-text-primary);
  font-size: var(--db-text-xl);
  font-weight: var(--db-weight-semibold);
  margin-bottom: var(--db-margin-m);
}

.card-description {
  color: var(--db-text-secondary);
  font-size: var(--db-text-base);
  line-height: var(--db-leading-relaxed);
}
```

### 🔔 Alert 컴포넌트

```css
.alert {
  padding: var(--db-padding-m);
  border-radius: var(--db-radius-m);
  border: 1px solid;
  display: flex;
  gap: var(--db-gap-s);
  align-items: flex-start;
}

.alert-success {
  background-color: var(--db-feedback-success-bg);
  color: var(--db-feedback-success-fg);
  border-color: var(--db-feedback-success-fg);
}

.alert-warning {
  background-color: var(--db-feedback-warning-bg);
  color: var(--db-feedback-warning-fg);
  border-color: var(--db-feedback-warning-fg);
}

.alert-error {
  background-color: var(--db-feedback-error-bg);
  color: var(--db-feedback-error-fg);
  border-color: var(--db-feedback-error-fg);
}

.alert-info {
  background-color: var(--db-feedback-info-bg);
  color: var(--db-feedback-info-fg);
  border-color: var(--db-feedback-info-fg);
}
```

### 🎯 Badge 컴포넌트

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--db-padding-xxs) var(--db-padding-xs);
  border-radius: var(--db-radius-full);
  font-size: var(--db-text-xs);
  font-weight: var(--db-weight-medium);
  line-height: var(--db-leading-tight);
}

.badge-primary {
  background-color: var(--db-brand-primary);
  color: var(--db-text-inverse-primary);
}

.badge-secondary {
  background-color: var(--db-surface-layer-2);
  color: var(--db-text-primary);
  border: 1px solid var(--db-border-base);
}

.badge-success {
  background-color: var(--db-feedback-success-bg);
  color: var(--db-feedback-success-fg);
}
```

### 🎭 Modal 컴포넌트

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: var(--db-overlay-base);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--db-z-modal);
}

.modal {
  background-color: var(--db-surface-base);
  border-radius: var(--db-radius-modal-m);
  box-shadow: var(--db-shadow-modal);
  max-width: var(--db-size-modal-m);
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  padding: var(--db-padding-l);
  border-bottom: 1px solid var(--db-border-muted);
}

.modal-title {
  color: var(--db-text-primary);
  font-size: var(--db-text-xl);
  font-weight: var(--db-weight-semibold);
}

.modal-body {
  padding: var(--db-padding-l);
  color: var(--db-text-primary);
}

.modal-footer {
  padding: var(--db-padding-l);
  border-top: 1px solid var(--db-border-muted);
  display: flex;
  gap: var(--db-gap-s);
  justify-content: flex-end;
}
```

---

## 💡 Best Practices

### ✅ DO (좋은 예시)

```css
/* 항상 --db-* 변수 사용 */
.component {
  color: var(--db-text-primary);
  background-color: var(--db-surface-base);
  border: 1px solid var(--db-border-base);
}

/* 적절한 semantic 변수 사용 */
.button {
  background-color: var(--db-btn-primary-bg);
  color: var(--db-btn-primary-text);
}

/* 일관된 spacing 사용 */
.card {
  padding: var(--db-padding-l);
  gap: var(--db-gap-m);
}
```

### ❌ DON'T (나쁜 예시)

```css
/* 직접 색상 값 사용하지 마세요 */
.component {
  color: #000000;  /* ❌ */
  background-color: #ffffff;  /* ❌ */
}

/* Foundation 토큰을 직접 사용하지 마세요 */
.component {
  color: var(--color-foundation-blue-600);  /* ❌ */
}

/* 다크 모드를 위한 별도 스타일 작성하지 마세요 */
[data-theme="dark"] .component {
  color: white;  /* ❌ 자동으로 적용됩니다 */
}

/* 픽셀 값을 직접 사용하지 마세요 */
.component {
  padding: 16px;  /* ❌ var(--db-padding-m) 사용 */
  margin: 24px;   /* ❌ var(--db-margin-l) 사용 */
}
```

---

## 🎯 요약

1. **항상 `--db-*` 변수를 사용하세요**
2. **다크 모드는 자동으로 적용됩니다**
3. **직접 색상/크기 값을 사용하지 마세요**
4. **컴포넌트에 맞는 semantic 변수를 우선 사용하세요**
5. **일관된 spacing과 sizing을 유지하세요**

---

## 📖 참고 문서

- [Style Dictionary 공식 문서](https://amzn.github.io/style-dictionary/)
- [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)

---

**마지막 업데이트**: 2025-10-16  
**버전**: 0.1.16

