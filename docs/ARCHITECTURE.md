# Designbase Library 아키텍처

Designbase Library의 전체 구조와 패키지 간 의존성 관계를 설명합니다.

## 📦 패키지 구조

```
@designbasekorea/
├── tokens          (Foundation Layer)
│   └── 디자인 토큰 (색상, 간격, 타이포그래피 등)
│
├── theme           (Semantic Layer)
│   └── 시맨틱 변수 + 테마 시스템
│   └── depends on: tokens
│
├── icons           (Component Layer - Standalone)
│   └── React 아이콘 컴포넌트
│
├── icons-webfont   (Component Layer - Standalone)
│   └── 아이콘 웹폰트 (HTML/CSS)
│
└── ui              (Application Layer)
    └── React UI 컴포넌트
    └── depends on: tokens, theme, icons
```

## 🔗 의존성 그래프

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Foundation Layer (기본 값)                             │
│  ┌─────────────────────────────────────────────────┐   │
│  │  @designbasekorea/tokens                        │   │
│  │  • 색상 스케일 (blue-500, gray-200 등)          │   │
│  │  • 간격 스케일 (xs, s, m, l, xl 등)            │   │
│  │  • 타이포그래피 (font-size, weight 등)         │   │
│  └─────────────────────────────────────────────────┘   │
│                        ↓                                │
│  Semantic Layer (의미)                                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │  @designbasekorea/theme                         │   │
│  │  • --db-color-primary                           │   │
│  │  • --db-padding-m                               │   │
│  │  • --db-text-m                                  │   │
│  │  • setTheme(), getTheme() 함수                 │   │
│  └─────────────────────────────────────────────────┘   │
│                        ↓                                │
│  Component Layer (컴포넌트)                             │
│  ┌─────────────────┐  ┌────────────────────────────┐   │
│  │  icons          │  │  icons-webfont             │   │
│  │  React 컴포넌트 │  │  HTML/CSS                  │   │
│  └─────────────────┘  └────────────────────────────┘   │
│                        ↓                                │
│  Application Layer (애플리케이션)                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │  @designbasekorea/ui                            │   │
│  │  • Button, Card, Input 등 UI 컴포넌트          │   │
│  │  • tokens + theme + icons 통합                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## 🎯 패키지별 역할

### 1. @designbasekorea/tokens (Foundation)

**역할**: 디자인 시스템의 기초 값 제공

**제공하는 것**:
- Foundation 토큰: 원시 색상, 간격, 폰트 크기 등
- Semantic 토큰: 의미를 가진 토큰
- 다크 테마 오버라이드

**Export**:
- CSS 변수 (`--color-foundation-blue-500`)
- SCSS 변수 (`$color-foundation-blue-500`)
- JSON 객체
- TypeScript 타입

**의존성**: 없음 (독립적)

### 2. @designbasekorea/theme (Semantic)

**역할**: 토큰을 사용하기 쉬운 시맨틱 변수로 변환 + 테마 관리

**제공하는 것**:
- 시맨틱 CSS 변수 (`--db-color-primary`, `--db-padding-m`)
- 테마 전환 함수 (`setTheme()`, `getTheme()`)
- 라이트/다크 테마 자동 전환

**Export**:
- CSS 변수 (`theme.css`)
- JavaScript 함수 (ESM, CJS, UMD)
- TypeScript 타입

**의존성**: `@designbasekorea/tokens`

### 3. @designbasekorea/icons (Component - Standalone)

**역할**: SVG 아이콘을 React 컴포넌트로 제공

**제공하는 것**:
- React 아이콘 컴포넌트
- Props로 크기, 색상, 두께 조절
- TypeScript 타입

**Export**:
- React 컴포넌트 (ESM, CJS)
- TypeScript 타입

**의존성**: React, React-DOM (peerDependencies)

### 4. @designbasekorea/icons-webfont (Component - Standalone)

**역할**: 아이콘을 웹폰트로 제공 (HTML/CSS 사용)

**제공하는 것**:
- WOFF2, WOFF, TTF, EOT 폰트 파일
- CSS 클래스 (`.icon-check`, `.icon-user`)
- HTML 미리보기

**Export**:
- CSS (`designbase-icons.css`)
- 폰트 파일들

**의존성**: 없음 (독립적)

### 5. @designbasekorea/ui (Application)

**역할**: 완성된 React UI 컴포넌트 라이브러리

**제공하는 것**:
- 20+ React 컴포넌트
- 테마 시스템 통합
- 접근성 준수

**Export**:
- React 컴포넌트 (ESM, CJS, UMD)
- CSS 스타일 (자동으로 테마 포함)
- TypeScript 타입

**의존성**: 
- `@designbasekorea/tokens`
- `@designbasekorea/theme`
- `@designbasekorea/icons`
- React, React-DOM (peerDependencies)

## 🔄 토큰 플로우

### 1. 토큰 정의 (tokens 패키지)

```json
// tokens/tokens/foundation/colors.json
{
  "color": {
    "foundation": {
      "blue": {
        "500": { "value": "#3b82f6" }
      }
    }
  }
}
```

↓ Style Dictionary 빌드

```css
/* tokens/dist/css/tokens.css */
:root {
  --color-foundation-blue-500: #3b82f6;
}
```

### 2. 시맨틱 변수 정의 (theme 패키지)

```scss
// theme/scss/_variables.scss
:root {
  --db-color-primary: var(--color-foundation-blue-500);
}
```

### 3. 컴포넌트에서 사용 (ui 패키지)

```scss
// ui/src/components/Button/Button.scss
.db-button {
  background: var(--db-color-primary);
  padding: var(--db-padding-m);
  font-size: var(--db-text-m);
}
```

## 📂 파일 구조

```
Designbase Library/
├── packages/
│   ├── tokens/
│   │   ├── tokens/                    # 토큰 정의 (JSON)
│   │   │   ├── foundation/           # 기본 토큰
│   │   │   │   ├── colors.json
│   │   │   │   ├── spacing.json
│   │   │   │   └── typography.json
│   │   │   ├── semantic/             # 시맨틱 토큰
│   │   │   │   ├── colors.json
│   │   │   │   ├── border.json
│   │   │   │   └── spacing.json
│   │   │   └── dark/                 # 다크 테마
│   │   │       ├── colors.json
│   │   │       └── border.json
│   │   ├── dist/                     # 빌드 결과물
│   │   │   ├── css/tokens.css
│   │   │   ├── scss/_tokens.scss
│   │   │   ├── json/tokens.json
│   │   │   └── index.esm.js
│   │   └── style-dictionary.config.js
│   │
│   ├── theme/
│   │   ├── scss/                     # SCSS 소스
│   │   │   ├── _variables.scss       # 시맨틱 변수
│   │   │   ├── _semantic.scss        # 추가 시맨틱
│   │   │   └── index.scss
│   │   ├── src/                      # TypeScript 소스
│   │   │   ├── theme.ts              # setTheme, getTheme
│   │   │   └── index.ts
│   │   └── dist/                     # 빌드 결과물
│   │       ├── css/theme.css
│   │       └── index.esm.js
│   │
│   ├── icons/
│   │   ├── svg/                      # SVG 원본 파일
│   │   │   ├── check.svg
│   │   │   ├── user.svg
│   │   │   └── ...
│   │   ├── src/                      # 빌드 스크립트
│   │   └── dist/                     # React 컴포넌트
│   │       ├── CheckIcon.tsx
│   │       ├── UserIcon.tsx
│   │       └── index.esm.js
│   │
│   ├── icons-webfont/
│   │   ├── svg/                      # SVG 원본
│   │   ├── scripts/                  # 빌드 스크립트
│   │   └── dist/
│   │       ├── css/designbase-icons.css
│   │       ├── fonts/
│   │       │   ├── designbase-icons.woff2
│   │       │   ├── designbase-icons.woff
│   │       │   └── designbase-icons.ttf
│   │       └── html/preview.html
│   │
│   └── ui/
│       ├── src/
│       │   ├── components/           # React 컴포넌트
│       │   │   ├── Button/
│       │   │   │   ├── Button.tsx
│       │   │   │   ├── Button.scss
│       │   │   │   └── Button.stories.tsx
│       │   │   ├── Card/
│       │   │   └── ...
│       │   ├── theme/                # 복사된 테마 CSS
│       │   │   └── theme.css
│       │   └── index.ts
│       ├── scripts/
│       │   └── copy-theme-css.js     # 테마 CSS 복사
│       └── dist/
│           ├── index.esm.js
│           ├── index.umd.js
│           └── index.css
│
├── .storybook/                        # 전체 스토리북 설정
│   ├── main.ts
│   └── preview.tsx
│
└── docs/                              # 문서
    ├── README.md
    ├── CDN-GUIDE.md
    └── ARCHITECTURE.md (이 파일)
```

## 🚀 빌드 프로세스

### 1. Tokens 빌드

```bash
cd packages/tokens
npm run build
```

**과정**:
1. Style Dictionary가 JSON 토큰 읽기
2. CSS, SCSS, JSON 형식으로 변환
3. `dist/` 폴더에 출력
4. Rollup으로 JavaScript/TypeScript 빌드

### 2. Theme 빌드

```bash
cd packages/theme
npm run build
```

**과정**:
1. SCSS → CSS 컴파일 (Sass)
2. 토큰 CSS를 테마 CSS에 병합
3. Rollup으로 JavaScript 함수 빌드 (setTheme, getTheme)
4. `dist/` 폴더에 출력

### 3. Icons 빌드

```bash
cd packages/icons
npm run build
```

**과정**:
1. SVG 파일들을 읽기
2. React 컴포넌트로 변환 (SVGR)
3. Rollup으로 번들링
4. `dist/` 폴더에 출력

### 4. Icons Webfont 빌드

```bash
cd packages/icons-webfont
node scripts/build-and-copy.cjs
```

**과정**:
1. SVG 파일들을 읽기
2. Webfont 생성 (WOFF2, WOFF, TTF, EOT)
3. CSS 클래스 생성
4. HTML 미리보기 생성
5. `dist/` 폴더에 출력

### 5. UI 빌드

```bash
cd packages/ui
npm run build
```

**과정**:
1. **테마 CSS 복사**: `scripts/copy-theme-css.js` 실행
   - `packages/theme/dist/css/theme.css` → `src/theme/theme.css`
2. **Rollup 빌드**:
   - React 컴포넌트 번들링
   - SCSS → CSS 컴파일
   - 테마 CSS를 UI CSS에 통합
3. `dist/` 폴더에 출력

## 🔧 개발 워크플로우

### 토큰 변경 시

```bash
# 1. 토큰 수정
vi packages/tokens/tokens/foundation/colors.json

# 2. 토큰 빌드
cd packages/tokens && npm run build

# 3. 테마 빌드 (토큰 의존)
cd packages/theme && npm run build

# 4. UI 빌드 (테마 의존)
cd packages/ui && npm run build

# 5. 스토리북에서 확인
npm run storybook
```

### 테마 변경 시

```bash
# 1. 테마 수정
vi packages/theme/scss/_variables.scss

# 2. 테마 빌드
cd packages/theme && npm run build

# 3. UI 빌드
cd packages/ui && npm run build

# 4. 스토리북에서 확인
npm run storybook
```

### UI 컴포넌트 변경 시

```bash
# 1. 컴포넌트 수정
vi packages/ui/src/components/Button/Button.tsx

# 2. UI 빌드
cd packages/ui && npm run build

# 3. 스토리북에서 확인
npm run storybook
```

## 📦 배포 프로세스

### 순서

```bash
# 1. 토큰 배포 (기반)
cd packages/tokens
npm version patch
npm publish

# 2. 테마 배포 (토큰 의존)
cd packages/theme
npm version patch
npm publish

# 3. 아이콘 배포 (독립)
cd packages/icons
npm version patch
npm publish

cd packages/icons-webfont
npm version patch
npm publish

# 4. UI 배포 (모두 의존)
cd packages/ui
npm version patch
npm publish
```

## 🌐 CDN 배포

npm에 배포되면 자동으로 CDN에서 사용 가능:

- **unpkg**: `https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css`
- **jsDelivr**: `https://cdn.jsdelivr.net/npm/@designbasekorea/tokens@latest/dist/css/tokens.css`

## 📊 버전 호환성

| UI | Icons | Theme | Tokens |
|----|-------|-------|--------|
| 0.1.0+ | 0.1.1+ | 0.1.11+ | 0.1.7+ |

**규칙**:
- 토큰 변경 → 테마, UI 재빌드 필요
- 테마 변경 → UI 재빌드 필요
- 아이콘 변경 → UI 재빌드 필요
- UI 변경 → 독립적

## 🎯 핵심 원칙

1. **단방향 의존성**: 상위 레이어만 하위 레이어에 의존
2. **CSS 변수 기반**: 런타임 테마 전환 가능
3. **TypeScript 우선**: 모든 패키지에 타입 정의
4. **접근성**: WCAG 2.1 AA 준수
5. **모듈화**: Tree shaking 지원

## 🔗 관련 문서

- [메인 README](../README.md)
- [CDN 가이드](./CDN-GUIDE.md)
- [Tokens 문서](../packages/tokens/README.md)
- [Theme 문서](../packages/theme/README.md)
- [UI 문서](../packages/ui/README.md)

