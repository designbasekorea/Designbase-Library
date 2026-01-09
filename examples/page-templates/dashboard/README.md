# 📊 대시보드 페이지 템플릿

Designbase UI 라이브러리를 활용한 완전한 대시보드 페이지 템플릿입니다.

## 🎯 특징

- ✅ **완전한 페이지 구조** - 실제 프로덕션에서 사용할 수 있는 레이아웃
- ✅ **재사용 가능한 컴포넌트** - 각 섹션을 독립적으로 활용 가능
- ✅ **반응형 디자인** - 모바일부터 데스크톱까지 지원
- ✅ **Designbase UI 활용** - Navbar, Sidebar, Card, Stat, Table 등 다양한 컴포넌트 사용

## 📁 구조

```
dashboard/
├── src/
│   ├── App.tsx                    # 메인 앱 컴포넌트
│   ├── App.scss                   # 전역 스타일
│   ├── main.tsx                   # 엔트리 포인트
│   └── components/
│       ├── DashboardLayout.tsx    # 레이아웃 (Navbar + Sidebar)
│       ├── DashboardHeader.tsx    # 페이지 헤더
│       ├── StatCards.tsx          # 통계 카드 그리드
│       ├── ChartSection.tsx       # 차트 섹션
│       ├── RecentActivity.tsx     # 최근 활동 목록
│       └── QuickActions.tsx      # 빠른 작업 버튼들
├── package.json
├── vite.config.ts
└── README.md
```

## 🚀 실행 방법

### 빠른 시작

```bash
# 1. 대시보드 템플릿 폴더로 이동
cd examples/page-templates/dashboard

# 2. 의존성 설치 (처음 한 번만 실행)
npm install

# 3. 개발 서버 실행
npm run dev
```

개발 서버가 실행되면 브라우저가 자동으로 열리거나, 콘솔에 표시된 URL(예: `http://localhost:5175`)로 접속하세요.

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

> **참고**: 컴포넌트 예제(`examples/design-examples`)와는 별도의 포트(5175)에서 실행되므로 동시에 실행 가능합니다.

## 🎨 포함된 컴포넌트

### 레이아웃
- **Navbar** - 상단 네비게이션 바
- **Sidebar** - 사이드 메뉴 (토글 가능)

### 콘텐츠
- **StatCards** - 4개의 통계 카드 (사용자, 매출, 성장률, 활성 사용자)
- **ChartSection** - 월별 성장 추이 차트 (플레이스홀더)
- **RecentActivity** - 최근 활동 목록
- **QuickActions** - 빠른 작업 버튼 패널

## 🔧 커스터마이징

### 색상 변경
`src/components/StatCards.tsx`에서 각 통계 카드의 색상을 변경할 수 있습니다:

```tsx
{
  color: 'blue', // 'blue' | 'green' | 'purple' | 'orange'
}
```

### 메뉴 항목 추가
`src/components/DashboardLayout.tsx`의 `menuItems` 배열을 수정하세요:

```tsx
const menuItems = [
  { id: 'home', label: '홈', icon: <HomeIcon />, active: true },
  // 새 메뉴 항목 추가
];
```

### 데이터 수정
각 컴포넌트의 데이터는 하드코딩되어 있으므로, 실제 API와 연결하거나 상태 관리 라이브러리를 추가할 수 있습니다.

## 📦 사용된 Designbase UI 컴포넌트

- `Navbar` - 상단 네비게이션
- `Sidebar` - 사이드 메뉴
- `Card` - 카드 컨테이너
- `Stat` - 통계 표시
- `Button` - 버튼
- `Avatar` - 아바타
- `Badge` - 뱃지
- `Table` - 테이블 (참고용)

## 💡 활용 팁

1. **독립 실행**: 이 템플릿은 컴포넌트 예제와 별개로 실행됩니다
2. **재사용**: 각 컴포넌트를 복사하여 다른 프로젝트에서 사용 가능
3. **확장**: 실제 차트 라이브러리(Chart.js, Recharts 등)를 추가하여 차트 섹션을 완성할 수 있습니다
4. **API 연동**: 각 컴포넌트의 데이터를 실제 API와 연결하여 사용하세요

## 🎯 다음 단계

- [ ] 실제 차트 라이브러리 통합
- [ ] API 연동
- [ ] 상태 관리 라이브러리 추가 (Redux, Zustand 등)
- [ ] 라우팅 추가 (React Router)
- [ ] 다크 모드 지원

