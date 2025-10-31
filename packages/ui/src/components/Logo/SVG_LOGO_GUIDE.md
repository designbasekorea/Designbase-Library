# SVG 로고 관리 가이드

## 📋 목차
1. [개요](#개요)
2. [SVG 로고 구조](#svg-로고-구조)
3. [실제 SVG 파일 추가하기](#실제-svg-파일-추가하기)
4. [사용 방법](#사용-방법)
5. [색상 제어](#색상-제어)
6. [크기 조정](#크기-조정)

---

## 개요

DesignBase 로고는 React 컴포넌트로 관리됩니다. 이를 통해:
- ✅ **색상을 동적으로 제어** 가능 (CSS 변수 또는 props)
- ✅ **크기를 유연하게 조정** 가능
- ✅ **번들 사이즈 최적화** (외부 이미지 로드 불필요)
- ✅ **타입 안전성** 보장 (TypeScript)

---

## SVG 로고 구조

현재 프로젝트 구조:

```
packages/ui/src/components/Logo/
├── Logo.tsx                      # 메인 Logo 컴포넌트
├── Logo.scss                     # 스타일
├── Logo.stories.tsx              # Storybook 예제
├── index.ts                      # 엔트리포인트
└── logos/                        # SVG 로고 컴포넌트들
    ├── DesignBaseLogo.tsx        # 풀 로고 (텍스트 포함)
    ├── DesignBaseLogoMark.tsx    # 심볼 마크 (아이콘만)
    └── index.ts                  # SVG 로고 export
```

---

## 실제 SVG 파일 추가하기

### 방법 1: Figma/Illustrator에서 SVG 내보내기

1. **Figma에서 내보내기**:
   - 로고 레이어 선택 → 우클릭 → "Copy as SVG"
   - 또는 Export → SVG 선택 → Outline stroke 체크

2. **SVG 코드 정리**:
   ```xml
   <!-- 원본 SVG -->
   <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
     <path d="M10 10 L30 30..." fill="#3B82F6"/>
     <text x="40" y="25" font-family="Arial">DesignBase</text>
   </svg>
   ```

3. **React 컴포넌트로 변환**:

### 📝 DesignBaseLogo.tsx 수정하기

```tsx
import React from 'react';

export interface DesignBaseLogoProps {
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}

export const DesignBaseLogo: React.FC<DesignBaseLogoProps> = ({
    width = 120,
    height = 40,
    color = 'currentColor',
    className,
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 120 40"  // ⚠️ 원본 SVG의 viewBox와 동일하게
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="DesignBase Logo"
        >
            {/* 👇 여기에 실제 SVG 경로 붙여넣기 */}
            
            {/* 예시: 로고 배경 */}
            <rect 
                x="0" 
                y="0" 
                width="35" 
                height="40" 
                rx="4" 
                fill={color}  // ⚠️ 동적 색상 제어
            />
            
            {/* 예시: 로고 텍스트 */}
            <path 
                d="M45 15 L50 15 L50 25 L45 25 Z"
                fill={color}  // ⚠️ 동적 색상 제어
            />
            
            {/* 실제 DesignBase 로고 경로로 대체하세요 */}
        </svg>
    );
};
```

### 🎨 색상 제어를 위한 팁

SVG에서 색상을 동적으로 제어하려면:

1. **단일 색상 로고**:
   ```tsx
   <path d="..." fill={color} />
   ```

2. **다중 색상 로고**:
   ```tsx
   <path d="..." fill={color} />  {/* 메인 색상 */}
   <path d="..." fill={`${color}80`} />  {/* 투명도 50% */}
   <path d="..." fill="white" />  {/* 고정 색상 */}
   ```

3. **그라디언트 사용**:
   ```tsx
   <defs>
     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
       <stop offset="0%" stopColor={color} />
       <stop offset="100%" stopColor={color} stopOpacity="0.5" />
     </linearGradient>
   </defs>
   <path d="..." fill="url(#gradient)" />
   ```

---

## 사용 방법

### 기본 사용

```tsx
import { Logo } from '@designbasekorea/ui';

// DesignBase 풀 로고
<Logo type="designbase" size="m" />

// DesignBase 심볼 마크
<Logo type="designbase-mark" size="m" />

// 커스텀 로고
<Logo type="custom" text="My Brand" />
```

### 직접 SVG 컴포넌트 사용

```tsx
import { DesignBaseLogo, DesignBaseLogoMark } from '@designbasekorea/ui';

// 더 세밀한 제어가 필요한 경우
<DesignBaseLogo 
  width={150} 
  height={50} 
  color="#3B82F6" 
/>

<DesignBaseLogoMark 
  size={40} 
  color="var(--db-brand-primary)" 
/>
```

---

## 색상 제어

### 방법 1: variant prop 사용 (추천)

```tsx
<Logo type="designbase" variant="primary" />    // 브랜드 컬러
<Logo type="designbase" variant="white" />      // 흰색 (다크 배경용)
<Logo type="designbase" variant="secondary" />  // 보조 컬러
```

### 방법 2: CSS로 제어

```css
.my-logo {
  color: #3B82F6;  /* SVG의 currentColor가 이 값을 사용 */
}
```

```tsx
<Logo 
  type="designbase" 
  className="my-logo" 
/>
```

### 방법 3: 직접 SVG 컴포넌트에 color 전달

```tsx
<DesignBaseLogo color="#FF6B6B" />
```

---

## 크기 조정

### 방법 1: size prop 사용 (추천)

```tsx
<Logo type="designbase" size="xs" />   // 60x20px
<Logo type="designbase" size="s" />    // 80x26px
<Logo type="designbase" size="m" />    // 120x40px (기본)
<Logo type="designbase" size="l" />    // 160x53px
<Logo type="designbase" size="xl" />   // 200x66px
```

### 방법 2: 직접 크기 지정

```tsx
<DesignBaseLogo width={180} height={60} />
<DesignBaseLogoMark size={48} />
```

### 방법 3: CSS로 제어

```css
.my-logo {
  width: 150px;
  height: auto;  /* 비율 유지 */
}
```

---

## 실전 예제

### 헤더에서 사용

```tsx
function Header() {
  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '16px 24px',
      backgroundColor: '#fff'
    }}>
      <Logo 
        type="designbase" 
        size="l" 
        variant="primary"
        href="/"
        clickable
      />
      <nav>{/* 네비게이션 */}</nav>
    </header>
  );
}
```

### 다크 모드 대응

```tsx
function LogoWithTheme() {
  const isDark = useTheme();
  
  return (
    <Logo 
      type="designbase" 
      variant={isDark ? 'white' : 'default'}
      size="l"
    />
  );
}
```

### 로딩 스피너와 함께

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <Logo type="designbase-mark" size="s" variant="primary" />
  <Spinner size="s" />
</div>
```

---

## 추가 SVG 로고 추가하기

다른 브랜드 로고를 추가하려면:

1. **새 파일 생성**: `logos/AcmeLogo.tsx`
2. **컴포넌트 작성**:
   ```tsx
   export const AcmeLogo: React.FC<Props> = ({ width, height, color }) => (
     <svg>{ /* SVG 경로 */ }</svg>
   );
   ```
3. **export 추가**: `logos/index.ts`
   ```tsx
   export { AcmeLogo } from './AcmeLogo';
   ```
4. **Logo.tsx에 통합** (선택사항):
   ```tsx
   import { AcmeLogo } from './logos';
   
   // type에 'acme' 추가
   export type LogoType = 'designbase' | 'designbase-mark' | 'acme' | 'custom';
   
   // renderLogo 함수에 케이스 추가
   if (type === 'acme') {
     return <AcmeLogo width={width} height={height} color={color} />;
   }
   ```

---

## 자주 묻는 질문

### Q: SVG 파일 크기가 너무 큰데요?

A: SVG 최적화 도구를 사용하세요:
- [SVGOMG](https://jakearchibald.github.io/svgomg/)
- [SVGO CLI](https://github.com/svg/svgo)

```bash
npx svgo input.svg -o output.svg
```

### Q: 로고가 흐릿하게 보여요

A: `viewBox`가 올바른지 확인하세요:
```tsx
<svg 
  viewBox="0 0 120 40"  // ✅ 원본 디자인 크기
  preserveAspectRatio="xMidYMid meet"
>
```

### Q: 애니메이션을 추가하고 싶어요

A: CSS나 GSAP 같은 라이브러리를 사용하세요:
```css
.designbase-logo__svg {
  transition: transform 0.3s ease;
}

.designbase-logo--clickable:hover .designbase-logo__svg {
  transform: scale(1.05);
}
```

---

## 참고 자료

- [SVG 최적화 가이드](https://web.dev/svg/)
- [React SVG 컴포넌트 패턴](https://www.robinwieruch.de/react-svg-icon-components/)
- [CSS 변수와 SVG](https://css-tricks.com/css-custom-properties-and-svg/)

---

**💡 팁**: 실제 DesignBase 로고를 추가한 후에는 이 가이드의 예시 코드를 실제 로고 경로로 대체하세요!

