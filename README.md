# Designbase Library

피그마 플러그인을 위한 공통 디자인시스템 및 컴포넌트 라이브러리입니다.

## 개요

여러 개의 리액트 기반 피그마 플러그인에서 디자인 일관성과 유지보수성, 코드 재사용성을 극대화하기 위해 디자인시스템(토큰·스타일·컴포넌트·아이콘·패턴)을 **단일 소스 오브 트루스(SSoT)**로 묶어 npm 패키지로 배포합니다.

## 목표 지표 (KPI)

- 플러그인 간 UI 컴포넌트 코드 중복 70% 이상 축소
- 공통 패키지 업데이트 후 플러그인 10개 반영 소요 시간 1/3 이하
- 디자인 토큰 변경 후 UI 스냅샷 회귀 테스트 100% 자동화
- 새 플러그인 스캐폴딩 시간 1시간 → 10분 이하

## 프로젝트 구조

```
designbase-library/
├─ apps/                     # 실제 피그마 플러그인 앱들
│  ├─ plugin-detach-master/
│  ├─ plugin-variables-doc/
│  └─ plugin-.../
├─ packages/                 # 재사용 가능한 라이브러리 묶음
│  ├─ tokens/                # @designbase/tokens
│  ├─ theme/                 # @designbase/theme
│  ├─ ui/                    # @designbase/ui
│  ├─ icons/                 # @designbase/icons
│  ├─ motion/                # @designbase/motion
│  ├─ utils/                 # @designbase/utils
│  ├─ i18n/                  # @designbase/i18n
│  ├─ figma-bridge/          # @designbase/figma-bridge
│  └─ plugin-kit/            # @designbase/plugin-kit
├─ docs/                     # 문서 사이트
└─ scripts/                  # 레포 관리 스크립트
```

## 패키지 설명

### Core Packages

- **@designbase/tokens**: 디자인 토큰(원천 JSON) 및 빌드 아티팩트
- **@designbase/theme**: 테마 프리셋(라이트/다크/브랜드), CSS 변수
- **@designbase/ui**: 플러그인용 React UI 컴포넌트 라이브러리
- **@designbase/icons**: 아이콘(소스 SVG + React 래퍼)

### Utility Packages

- **@designbase/motion**: 모션 프리셋(애니메이션 토큰, 트랜지션 패턴)
- **@designbase/utils**: 공통 유틸(날짜·숫자·포맷·검증·에러 등)
- **@designbase/i18n**: 언어 리소스 및 i18n 초기화 헬퍼
- **@designbase/figma-bridge**: UI <-> main 간 타입 세이프 메시징 브리지
- **@designbase/plugin-kit**: 피그마 플러그인 보일러플레이트

## 시작하기

### 설치

```bash
npm install
```

### 개발

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 테스트

```bash
npm run test
```

## 문서

- [컴포넌트 카탈로그](./docs/components)
- [디자인 토큰 가이드](./docs/tokens)
- [테마 사용법](./docs/theme)
- [아이콘 가이드](./docs/icons)

## 라이선스

MIT
