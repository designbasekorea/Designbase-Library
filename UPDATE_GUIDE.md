# 📦 Designbase UI 라이브러리 업데이트 가이드

## 🎉 새로운 버전 배포 완료!

- **`@designbasekorea/ui@0.5.1`** (Latest) - AnimationBackground 레이어 구조, theme(light/dark), 그리드 오버레이(showGrid, gridSize, gridColor, gridOpacity), Light Aurora Mesh / Blueprint 스타일. 타입 정리(gradient, pulse, wave, particles, stars, aurora).
- **`@designbasekorea/ui@0.1.9`** - DesignBase 실제 로고 SVG 추가, Logo 컴포넌트 개선
- **`@designbasekorea/figma-ui@0.1.5`** - Footer, LogoDropdown에 DesignBase 로고 자동 적용

---

## 🔄 기존 프로젝트에서 업데이트하는 방법

### 방법 1: 간단한 업데이트 (추천) ⭐

기존 Figma 플러그인 프로젝트에서:

```bash
# 프로젝트 디렉토리로 이동
cd your-figma-plugin

# 최신 버전으로 업데이트
npm update @designbasekorea/figma-ui

# 또는 특정 버전 설치
npm install @designbasekorea/figma-ui@latest
```

이 명령어는 자동으로 의존성들도 함께 업데이트합니다:
- `@designbasekorea/ui` → 0.5.1 (최신)
- `@designbasekorea/icons` → 최신
- `@designbasekorea/theme` → 최신
- `@designbasekorea/tokens` → 최신

---

### 방법 2: 버전 확인 후 업데이트

```bash
# 현재 설치된 버전 확인
npm list @designbasekorea/figma-ui
npm list @designbasekorea/ui

# 최신 버전 확인
npm view @designbasekorea/figma-ui version
npm view @designbasekorea/ui version

# 특정 버전으로 업데이트
npm install @designbasekorea/figma-ui@latest
npm install @designbasekorea/ui@0.5.1
```

---

### 방법 3: package.json 직접 수정

**package.json**:
```json
{
  "dependencies": {
    "@designbasekorea/figma-ui": "^0.1.5",
    "@designbasekorea/ui": "^0.5.1"
  }
}
```

그 다음:
```bash
npm install
```

---

## 🚨 주의사항 (Breaking Changes 체크)

### v0.1.5 (figma-ui) 변경사항:

#### 1. **Footer 컴포넌트**
```tsx
// ❌ 이전 방식 (여전히 작동하지만 deprecated)
<Footer logoSrc="your-image.png" />

// ✅ 새로운 방식 (logoSrc 없이 자동으로 DesignBase 로고 표시)
<Footer />

// ✅ 커스텀 로고 사용 (여전히 가능)
<Footer logoSrc="your-custom-logo.png" />
```

**Migration Guide**:
- `logoSrc`는 이제 **선택사항**입니다
- `logoSrc`를 제거하면 자동으로 DesignBase 로고타입이 표시됩니다
- 기존 코드는 그대로 작동하므로 즉시 수정할 필요는 없습니다

#### 2. **LogoDropdown 컴포넌트**
```tsx
// ❌ 이전 방식
<LogoDropdown logoSrc="your-image.png" links={links} />

// ✅ 새로운 방식
<LogoDropdown links={links} />  // 자동으로 DesignBase 로고

// ✅ 로고 타입 선택
<LogoDropdown logoType="designbase" logoSize="xs" links={links} />
<LogoDropdown logoType="designbase-mark" logoSize="s" links={links} />
```

**Migration Guide**:
- `logoSrc`는 이제 **선택사항**입니다
- 새로운 props 추가: `logoType`, `logoSize`
- 기존 코드는 그대로 작동합니다

---

### v0.1.9 (ui) 변경사항:

#### 1. **Logo 컴포넌트** - 새로운 기능 추가
```tsx
// ✅ DesignBase 로고 사용
<Logo type="designbase" size="m" variant="primary" />
<Logo type="designbase-mark" size="s" variant="white" />

// ✅ 기존 방식도 여전히 작동
<Logo text="My Brand" size="m" />
<Logo src="my-logo.png" size="l" />
```

**새로운 Export**:
```tsx
// 직접 SVG 로고 컴포넌트 사용 가능
import { 
  Logo, 
  DesignBaseLogo, 
  DesignBaseLogoMark 
} from '@designbasekorea/ui';

<DesignBaseLogo width={200} height={42} color="#3B82F6" />
<DesignBaseLogoMark size={48} color="var(--db-brand-primary)" />
```

---

## ✅ 업데이트 후 확인 사항

### 1. 빌드 테스트
```bash
npm run build
```

### 2. 타입 체크
```bash
npx tsc --noEmit
```

### 3. 개발 서버 실행
```bash
npm run dev
# 또는
npm start
```

### 4. 변경사항 확인
- Footer에 DesignBase 로고가 표시되는지 확인
- LogoDropdown 클릭 시 메뉴가 정상 작동하는지 확인
- 기존 커스텀 로고를 사용 중이라면 여전히 표시되는지 확인

---

## 🔧 문제 해결

### 문제 1: "Cannot find module '@designbasekorea/ui'"

**원인**: 의존성이 제대로 설치되지 않음

**해결**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### 문제 2: 로고가 표시되지 않음

**원인**: CSS가 임포트되지 않음

**해결**:
```tsx
import '@designbasekorea/figma-ui/dist/index.css';
import '@designbasekorea/ui/dist/index.css';
```

### 문제 3: TypeScript 타입 오류

**원인**: 새로운 props 타입 불일치

**해결**:
```bash
# node_modules 재설치
npm install

# 또는 타입 캐시 삭제
rm -rf node_modules/.cache
```

### 문제 4: 이전 버전의 캐시 문제

**원인**: npm 캐시에 이전 버전이 남아있음

**해결**:
```bash
# npm 캐시 삭제
npm cache clean --force

# 재설치
npm install @designbasekorea/figma-ui@latest
```

---

## 📋 업데이트 체크리스트

업데이트 전에 다음 사항들을 확인하세요:

- [ ] 현재 사용 중인 버전 확인
- [ ] package.json 백업
- [ ] 로컬 개발 환경에서 먼저 테스트
- [ ] 빌드 성공 확인
- [ ] UI 변경사항 확인
- [ ] 기존 기능 정상 작동 확인
- [ ] 배포 전 최종 테스트

---

## 🎯 주요 업데이트 내용

### ✨ 새로운 기능:

1. **실제 DesignBase 로고 SVG 추가**
   - 로고타입 (풀 로고)
   - 심볼 마크 (아이콘만)
   - 색상/크기 동적 제어

2. **Footer/LogoDropdown 자동 로고 적용**
   - `logoSrc` 없이도 자동으로 DesignBase 로고 표시
   - `logoType`, `logoSize` props로 세밀한 제어

3. **Logo 컴포넌트 개선**
   - SVG 로고 컴포넌트 직접 사용 가능
   - 완벽한 비율 유지
   - TypeScript 타입 안전성 강화

### 🐛 버그 수정:

1. Spinner 회전 중심점 수정
2. ProgressModal 스피너 회전 수정
3. Progressbar 테마 변수 적용
4. PageLicense Toast 의존성 제거
5. PageLicense 라이선스 키 입력 활성화
6. "라이센스" → "라이선스" 표기 통일

---

## 📚 추가 리소스

- **변경 로그**: [CHANGELOG.md](./CHANGELOG.md) (생성 예정)
- **마이그레이션 가이드**: [MIGRATION.md](./MIGRATION.md) (생성 예정)
- **GitHub Releases**: [GitHub](https://github.com/designbasekorea/Designbase-Library/releases)
- **npm 패키지**:
  - [@designbasekorea/ui](https://www.npmjs.com/package/@designbasekorea/ui)
  - [@designbasekorea/figma-ui](https://www.npmjs.com/package/@designbasekorea/figma-ui)

---

## 💬 질문이나 이슈가 있나요?

- **GitHub Issues**: [이슈 등록](https://github.com/designbasekorea/Designbase-Library/issues)
- **이메일**: designbasekorea@gmail.com

---

## 🚀 빠른 시작 (신규 프로젝트)

```bash
# 설치
npm install @designbasekorea/figma-ui@latest

# 사용
import { Footer, PageLicense, ProgressModal } from '@designbasekorea/figma-ui';
import '@designbasekorea/figma-ui/dist/index.css';

function App() {
  return (
    <>
      <PageLicense status="FREE" {...props} />
      <Footer logoLinks={links} {...props} />
    </>
  );
}
```

---

**마지막 업데이트**: 2025-10-17  
**현재 버전**: ui@0.1.9, figma-ui@0.1.5

