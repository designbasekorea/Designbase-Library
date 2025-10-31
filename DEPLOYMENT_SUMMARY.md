# 🎉 Designbase UI 라이브러리 배포 완료!

**배포 일시**: 2025-10-17  
**배포 버전**:
- `@designbasekorea/ui@0.1.9`
- `@designbasekorea/figma-ui@0.1.5`

---

## ✅ 배포된 패키지

### 📦 @designbasekorea/ui@0.1.9

**주요 변경사항**:
1. ✅ **실제 DesignBase 로고 SVG 추가**
   - `DesignBaseLogo`: 풀 로고 (DESIGNBASE 텍스트 포함)
   - `DesignBaseLogoMark`: 심볼 마크 (D 심볼만)
   
2. ✅ **Spinner 회전 수정**
   - `transform-origin: center` 적용
   - 모든 타입(circular, dots, pulse, bars, ripple)에서 정중앙 회전
   
3. ✅ **Progressbar 테마 변수 적용**
   - 하드코딩된 색상 → CSS 변수로 변경
   - `--db-brand-primary`, `--db-feedback-success-bg` 등 사용

4. ✅ **Logo 컴포넌트 개선**
   - `type` prop 추가: `'designbase' | 'designbase-mark' | 'custom'`
   - 크기별 자동 조정 (xs, s, m, l, xl)
   - variant별 색상 자동 매핑

**npm 페이지**: https://www.npmjs.com/package/@designbasekorea/ui

---

### 📦 @designbasekorea/figma-ui@0.1.5

**주요 변경사항**:
1. ✅ **PageLicense 개선**
   - Toast 의존성 제거 (console.log로 대체)
   - `paymentPageUrl` 선택사항으로 변경
   - 라이선스 키 입력란 활성화 (`disabled={false}`)
   - "라이센스" → "라이선스" 표기 통일
   - 닫기 버튼을 Button 컴포넌트로 교체
   - "라이선스 구매" 버튼에 ExternalLinkIcon 추가
   
2. ✅ **ProgressModal 스피너 수정**
   - 스피너가 왼쪽 위로 날아가는 문제 해결
   - `transform-origin: center` 명시적 적용
   
3. ✅ **Footer 자동 로고 적용**
   - `logoSrc` 선택사항으로 변경
   - 기본값: DesignBase 로고타입 자동 표시
   - `logoType`, `logoSize` props 추가
   
4. ✅ **LogoDropdown 자동 로고 적용**
   - `logoSrc` 선택사항으로 변경
   - 기본값: DesignBase 로고타입 자동 표시
   - `logoType`, `logoSize` props 추가

**npm 페이지**: https://www.npmjs.com/package/@designbasekorea/figma-ui

---

## 📖 기존 프로젝트 업데이트 시나리오

### 시나리오 1: Footer를 사용 중인 경우

**기존 코드**:
```tsx
<Footer 
  logoSrc="https://your-logo.png"
  logoLinks={links}
  paymentStatus="FREE"
/>
```

**업데이트 후 선택사항**:

**옵션 A: 그대로 사용** (권장 - 아무 수정 불필요)
```tsx
// 기존 코드 그대로 작동
<Footer 
  logoSrc="https://your-logo.png"
  logoLinks={links}
  paymentStatus="FREE"
/>
```

**옵션 B: DesignBase 로고 사용**
```tsx
// logoSrc 제거하면 자동으로 DesignBase 로고 표시
<Footer 
  logoLinks={links}
  paymentStatus="FREE"
/>

// 또는 명시적으로 지정
<Footer 
  logoType="designbase"
  logoSize="xs"
  logoLinks={links}
  paymentStatus="FREE"
/>
```

---

### 시나리오 2: PageLicense를 사용 중인 경우

**기존 코드**:
```tsx
<PageLicense 
  status="FREE"
  onLicenseSubmit={handleSubmit}
  paymentPageUrl="https://..."
/>
```

**업데이트 후 변경사항**:

**자동 적용** (코드 수정 불필요):
- ✅ 라이선스 키 입력란이 이제 항상 활성화됨
- ✅ "라이센스" → "라이선스" 표기 자동 변경
- ✅ "라이선스 구매" 버튼에 외부 링크 아이콘 자동 추가
- ✅ Toast 메시지 → console.log로 자동 변경

**선택사항**:
```tsx
// paymentPageUrl을 생략하면 "구매" 버튼이 표시되지 않음
<PageLicense 
  status="FREE"
  onLicenseSubmit={handleSubmit}
  // paymentPageUrl 생략 가능
/>
```

---

### 시나리오 3: Spinner/Progressbar를 사용 중인 경우

**기존 코드**:
```tsx
<Spinner type="circular" size="m" />
<Progressbar value={60} variant="primary" />
```

**업데이트 후**:
```tsx
// 아무 변경 없이 그대로 사용
// 자동으로 개선된 회전 및 테마 색상 적용됨
<Spinner type="circular" size="m" />
<Progressbar value={60} variant="primary" />
```

---

## 🚀 업데이트 단계별 가이드

### Step 1: 백업
```bash
# package.json 백업
cp package.json package.json.backup

# node_modules 백업 (선택사항)
cp -r node_modules node_modules.backup
```

### Step 2: 업데이트
```bash
# 최신 버전 설치
npm install @designbasekorea/figma-ui@latest

# 의존성 정리
npm dedupe
```

### Step 3: 테스트
```bash
# 빌드 테스트
npm run build

# 개발 서버 실행
npm run dev
```

### Step 4: 확인
- [ ] Footer에 로고가 정상 표시됨
- [ ] PageLicense가 정상 작동함
- [ ] Spinner가 정중앙에서 회전함
- [ ] Progressbar 색상이 테마와 일치함
- [ ] 빌드 에러 없음

### Step 5: 배포
```bash
# Figma 플러그인 빌드
npm run build

# Figma에 업로드
# (Figma Desktop → Plugins → Development → 플러그인 선택 → Update)
```

---

## 💡 업데이트 꿀팁

### 1. 점진적 업데이트
```bash
# 먼저 ui만 업데이트해서 테스트
npm install @designbasekorea/ui@latest

# 테스트 후 figma-ui 업데이트
npm install @designbasekorea/figma-ui@latest
```

### 2. 버전 고정
안정성이 중요한 프로덕션 환경이라면:
```json
{
  "dependencies": {
    "@designbasekorea/figma-ui": "0.1.5",  // ^ 제거 (정확한 버전)
    "@designbasekorea/ui": "0.1.9"
  }
}
```

### 3. 개발 환경에서만 먼저 테스트
```bash
# 개발 환경
npm install @designbasekorea/figma-ui@latest

# 테스트 후 문제없으면 프로덕션에 적용
```

---

## 📊 버전 비교

| 항목 | 이전 버전 | 현재 버전 | 변경사항 |
|------|-----------|-----------|----------|
| ui | 0.1.6 | 0.1.9 | Logo SVG, Spinner 수정, Progressbar 테마 |
| figma-ui | 0.1.3 | 0.1.5 | PageLicense 개선, Footer/LogoDropdown 로고 |
| 호환성 | - | ✅ | 후방 호환성 유지 |
| Breaking Changes | - | ❌ | 없음 (안전한 업데이트) |

---

## 🎨 새로운 기능 활용하기

### DesignBase 로고 사용
```tsx
import { Logo } from '@designbasekorea/ui';

// 풀 로고
<Logo type="designbase" size="m" variant="primary" />

// 심볼 마크
<Logo type="designbase-mark" size="s" variant="white" />
```

### Footer 간소화
```tsx
// Before (여전히 작동)
<Footer logoSrc="..." logoLinks={links} {...props} />

// After (더 간단)
<Footer logoLinks={links} {...props} />
```

### PageLicense 개선된 UX
```tsx
// paymentPageUrl 선택사항
<PageLicense 
  status="FREE"
  onLicenseSubmit={handleSubmit}
  // paymentPageUrl 없으면 구매 버튼 안 보임
/>
```

---

## 📞 지원

업데이트 중 문제가 발생하면:
1. [GitHub Issues](https://github.com/designbasekorea/Designbase-Library/issues)에 등록
2. [UPDATE_GUIDE.md](./UPDATE_GUIDE.md)의 문제 해결 섹션 참고
3. 이메일: designbasekorea@gmail.com

---

**즐거운 개발 되세요!** 🚀

