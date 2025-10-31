# Designbase Theme Variables - Quick Reference

> UI 컴포넌트 제작 시 빠르게 참고할 CSS 변수 목록

## 🎨 Colors

### Text
```css
--db-text-primary
--db-text-secondary
--db-text-tertiary
--db-text-disabled
--db-text-link
--db-text-link-hover
--db-text-inverse-primary
--db-text-inverse-secondary
--db-text-inverse-tertiary
```

### Brand
```css
--db-brand-primary
--db-brand-secondary
--db-brand-tertiary
--db-brand-accent
```

### Surface
```css
--db-surface-base
--db-surface-layer-1
--db-surface-layer-2
--db-surface-layer-3
--db-surface-muted
--db-surface-inverse
--db-surface-transparent
--db-surface-alpha
```

### Feedback
```css
--db-feedback-success-fg / --db-feedback-success-bg
--db-feedback-warning-fg / --db-feedback-warning-bg
--db-feedback-error-fg / --db-feedback-error-bg
--db-feedback-info-fg / --db-feedback-info-bg
```

### Border
```css
--db-border-base
--db-border-layer-1
--db-border-layer-2
--db-border-layer-3
--db-border-muted
--db-border-focus
--db-border-error
```

### Icon
```css
--db-icon-default
--db-icon-hover
--db-icon-muted
--db-icon-disabled
--db-icon-primary
--db-icon-success
--db-icon-warning
--db-icon-error
--db-icon-info
--db-icon-inverse
```

### Button
```css
/* Primary */
--db-btn-primary-bg
--db-btn-primary-bg-hover
--db-btn-primary-bg-active
--db-btn-primary-text
--db-btn-primary-border

/* Secondary */
--db-btn-secondary-bg
--db-btn-secondary-bg-hover
--db-btn-secondary-text
--db-btn-secondary-border

/* Tertiary */
--db-btn-tertiary-bg
--db-btn-tertiary-bg-hover
--db-btn-tertiary-text
--db-btn-tertiary-border
```

### Field
```css
--db-field-bg
--db-field-bg-hover
--db-field-bg-disabled
--db-field-border
--db-field-border-hover
--db-field-border-focus
--db-field-border-error
--db-field-text
--db-field-placeholder
```

## 📏 Spacing

```css
/* Margin */
--db-margin-xs / --db-margin-s / --db-margin-m
--db-margin-l / --db-margin-xl / --db-margin-xxl

/* Padding */
--db-padding-xs / --db-padding-s / --db-padding-m
--db-padding-l / --db-padding-xl

/* Gap */
--db-gap-xs / --db-gap-s / --db-gap-m
--db-gap-l / --db-gap-xl
```

## 🔤 Typography

```css
/* Font Size */
--db-text-xs / --db-text-s / --db-text-base
--db-text-l / --db-text-xl / --db-text-2xl
--db-text-3xl / --db-text-4xl / --db-text-5xl

/* Font Weight */
--db-weight-light / --db-weight-normal / --db-weight-medium
--db-weight-semibold / --db-weight-bold / --db-weight-extrabold

/* Line Height */
--db-leading-none / --db-leading-tight / --db-leading-snug
--db-leading-normal / --db-leading-relaxed / --db-leading-loose
```

## 🔲 Border & Effects

```css
/* Border Radius */
--db-radius-s / --db-radius-m / --db-radius-l
--db-radius-xl / --db-radius-2xl / --db-radius-full

/* Shadow */
--db-shadow-card / --db-shadow-card-hover
--db-shadow-button / --db-shadow-button-hover
--db-shadow-modal / --db-shadow-dropdown

/* Opacity */
--db-opacity-disabled
--db-opacity-hover
```

## 📦 Component Sizes

```css
/* Button */
--db-size-button-xs / s / m / l / xl

/* Icon */
--db-size-icon-xs / s / m / l / xl

/* Avatar */
--db-size-avatar-xs / s / m / l / xl / 2xl / 3xl
```

## 🎯 Quick Examples

### Button
```css
.button {
  background: var(--db-btn-primary-bg);
  color: var(--db-btn-primary-text);
  padding: var(--db-padding-s) var(--db-padding-m);
  border-radius: var(--db-radius-m);
}
```

### Input
```css
.input {
  background: var(--db-field-bg);
  border: 1px solid var(--db-field-border);
  color: var(--db-field-text);
  padding: var(--db-padding-s);
}
```

### Card
```css
.card {
  background: var(--db-surface-base);
  border: 1px solid var(--db-border-base);
  border-radius: var(--db-radius-card-m);
  padding: var(--db-padding-l);
  box-shadow: var(--db-shadow-card);
}
```

---

**💡 Tip**: 다크 모드는 `data-theme="dark"` 속성만으로 자동 적용됩니다!

