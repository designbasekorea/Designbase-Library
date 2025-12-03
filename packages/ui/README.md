# @designbasekorea/ui

Designbase UI 컴포넌트 라이브러리 - 피그마 플러그인에 최적화된 React 컴포넌트입니다.

![npm](https://img.shields.io/npm/v/@designbasekorea/ui)
![license](https://img.shields.io/npm/l/@designbasekorea/ui)

## 📦 설치

### NPM
```bash
# UI 컴포넌트 + 필수 의존성
npm install @designbasekorea/ui @designbasekorea/tokens @designbasekorea/theme
```

### Yarn
```bash
yarn add @designbasekorea/ui @designbasekorea/tokens @designbasekorea/theme
```

### pnpm
```bash
pnpm add @designbasekorea/ui @designbasekorea/tokens @designbasekorea/theme
```

⚠️ **필수 의존성**:
- `@designbasekorea/tokens` - 디자인 토큰
- `@designbasekorea/theme` - 테마 시스템

## 🚀 빠른 시작

### React/Next.js에서

```tsx
// 1. 토큰 CSS (필수 - 가장 먼저!)
import '@designbasekorea/tokens/dist/css/tokens.css';

// 2. 테마 CSS (필수)
import '@designbasekorea/theme/dist/css/theme.css';

// 3. UI 컴포넌트 import
import { Button, Card, Input, Accordion } from '@designbasekorea/ui';

function App() {
  return (
    <div>
      <Button variant="primary" size="l">
        클릭하세요
      </Button>
      
      <Card>
        <Card.Header>카드 제목</Card.Header>
        <Card.Body>
          <Input placeholder="이름을 입력하세요" />
        </Card.Body>
      </Card>
      
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Header>제목 1</Accordion.Header>
          <Accordion.Content>내용 1</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;
```

### CDN 사용

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- 1. 토큰 CSS (필수 - 가장 먼저!) -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">
    
    <!-- 2. 테마 CSS (필수) -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/theme@latest/dist/css/theme.css">
    
    <title>Designbase UI</title>
</head>
<body>
    <div id="root"></div>
    
    <!-- React & ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- Designbase UI -->
    <script src="https://unpkg.com/@designbasekorea/ui@latest/dist/index.umd.js"></script>
    
    <script>
        const { Button, Card, Input } = DesignbaseUI;
        
        const App = () => {
            return React.createElement('div', { style: { padding: '20px' } },
                React.createElement(Button, { 
                    variant: 'primary',
                    onClick: () => alert('클릭!')
                }, '클릭하세요'),
                
                React.createElement(Card, null,
                    React.createElement('h2', null, '카드 제목'),
                    React.createElement(Input, { placeholder: '입력하세요' })
                )
            );
        };
        
        ReactDOM.render(React.createElement(App), document.getElementById('root'));
    </script>
</body>
</html>
```

## 📚 컴포넌트 목록

### Form 컴포넌트
- **Button** - 버튼
- **Input** - 텍스트 입력
- **Textarea** - 여러 줄 텍스트 입력
- **Checkbox** - 체크박스
- **Radio** - 라디오 버튼
- **Toggle** - 토글 스위치
- **Select** - 선택 박스

### Layout 컴포넌트
- **Card** - 카드
- **Modal** - 모달
- **Drawer** - 드로어
- **Tabs** - 탭
- **Accordion** - 아코디언
- **Divider** - 구분선

### Feedback 컴포넌트
- **Alert** - 알림
- **Toast** - 토스트 알림
- **Tooltip** - 툴팁
- **Badge** - 뱃지
- **Spinner** - 로딩 스피너
- **Progress** - 진행 표시줄
- **Skeleton** - 스켈레톤 로더

### Navigation 컴포넌트
- **Breadcrumb** - 브레드크럼
- **Pagination** - 페이지네이션
- **Dropdown** - 드롭다운

### Data Display 컴포넌트
- **Table** - 테이블
- **Chip** - 칩
- **Avatar** - 아바타

### Date & Time 컴포넌트
- **Calendar** - 캘린더
- **DatePicker** - 날짜 선택기
- **TimePicker** - 시간 선택기

### 기타
- **Rating** - 별점
- **Stepper** - 단계 표시
- **Popover** - 팝오버

## 🎯 컴포넌트 사용 예시

### Button

```tsx
import { Button } from '@designbasekorea/ui';

<Button variant="primary" size="l" onClick={() => console.log('클릭!')}>
  Primary 버튼
</Button>

<Button variant="secondary" size="m" disabled>
  비활성 버튼
</Button>

<Button variant="outline" size="s" fullWidth>
  전체 너비 버튼
</Button>
```

**Props**:
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `disabled`: boolean
- `onClick`: () => void

### Input

```tsx
import { Input } from '@designbasekorea/ui';

<Input 
  placeholder="이름을 입력하세요"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<Input 
  type="email"
  label="이메일"
  error="올바른 이메일을 입력하세요"
/>

<Input 
  prefix={<SearchIcon />}
  suffix={<ClearIcon onClick={clearInput} />}
/>
```

**Props**:
- `type`: 'text' | 'email' | 'password' | 'number' | ...
- `label`: string
- `placeholder`: string
- `error`: string
- `disabled`: boolean
- `prefix`: ReactNode
- `suffix`: ReactNode

### Card

```tsx
import { Card } from '@designbasekorea/ui';

<Card>
  <Card.Header>
    <h2>카드 제목</h2>
  </Card.Header>
  <Card.Body>
    <p>카드 내용입니다.</p>
  </Card.Body>
  <Card.Footer>
    <Button>확인</Button>
  </Card.Footer>
</Card>
```

### Modal

```tsx
import { Modal } from '@designbasekorea/ui';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        모달 열기
      </Button>
      
      <Modal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="모달 제목"
      >
        <p>모달 내용입니다.</p>
        
        <Modal.Footer>
          <Button onClick={() => setIsOpen(false)}>닫기</Button>
          <Button variant="primary">확인</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

### Accordion

```tsx
import { Accordion } from '@designbasekorea/ui';

<Accordion>
  <Accordion.Item value="item-1">
    <Accordion.Header>첫 번째 항목</Accordion.Header>
    <Accordion.Content>
      첫 번째 항목의 내용입니다.
    </Accordion.Content>
  </Accordion.Item>
  
  <Accordion.Item value="item-2">
    <Accordion.Header>두 번째 항목</Accordion.Header>
    <Accordion.Content>
      두 번째 항목의 내용입니다.
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Toast

```tsx
import { toast } from '@designbasekorea/ui';

// 성공 토스트
toast.success('저장되었습니다!');

// 에러 토스트
toast.error('오류가 발생했습니다.');

// 경고 토스트
toast.warning('주의하세요!');

// 정보 토스트
toast.info('새로운 알림이 있습니다.');

// 커스텀 토스트
toast({
  title: '제목',
  description: '설명',
  duration: 5000,
  variant: 'success'
});
```

## 🎨 테마 커스터마이징

### CSS 변수 오버라이드

```css
:root {
  /* 버튼 색상 변경 */
  --db-color-primary: #ff6b6b;
  --db-color-primary-hover: #ff5252;
  
  /* 모서리 둥글기 변경 */
  --db-radius-button: 16px;
  --db-radius-card-m: 20px;
  
  /* 간격 변경 */
  --db-padding-m: 20px;
}
```

### 컴포넌트별 스타일 오버라이드

```css
/* Button 커스터마이징 */
.db-button {
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Card 커스터마이징 */
.db-card {
  border-width: 2px;
}
```

## 📦 Export 형식

| 형식 | 경로 | 설명 |
|------|------|------|
| ESM | `dist/index.esm.js` | ES Module (React) |
| CJS | `dist/index.js` | CommonJS |
| UMD | `dist/index.umd.js` | Universal (CDN) |
| CSS | `dist/index.css` | 컴포넌트 스타일 |
| Types | `dist/index.d.ts` | TypeScript 타입 |

## 🔧 고급 사용법

### Tree Shaking

```tsx
// 개별 import로 번들 크기 최적화
import Button from '@designbasekorea/ui/dist/components/Button';
import Card from '@designbasekorea/ui/dist/components/Card';
```

### TypeScript

```tsx
import { ButtonProps, CardProps } from '@designbasekorea/ui';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

### 접근성 (a11y)

모든 컴포넌트는 WCAG 2.1 AA 수준을 준수합니다:
- 키보드 네비게이션 지원
- ARIA 속성 포함
- 스크린 리더 호환
- 포커스 관리

```tsx
<Button aria-label="검색">
  <SearchIcon />
</Button>

<Input 
  aria-describedby="email-error"
  aria-invalid={!!error}
/>
```

## 🔗 관련 패키지

- [@designbasekorea/tokens](../tokens) - 디자인 토큰 (필수)
- [@designbasekorea/theme](../theme) - 테마 시스템 (필수)
- [@designbasekorea/icons](../icons) - 아이콘 컴포넌트
- [@designbasekorea/icons-webfont](../icons-webfont) - 아이콘 웹폰트

## 📖 문서 및 예제

### Storybook

모든 컴포넌트의 라이브 예제를 확인하세요:

```bash
npm run storybook
```

브라우저에서 `http://localhost:6006` 접속

### 온라인 문서

- [Storybook (배포됨)]() - 모든 컴포넌트 예제
- [GitHub Repository]() - 소스 코드

## 🔄 버전 히스토리

### 0.1.0 (Latest)
- ✅ 20+ React 컴포넌트 제공
- ✅ 테마 시스템 통합
- ✅ TypeScript 지원
- ✅ 접근성 준수

## ⚠️ 주의사항

### 1. CSS 로드 순서

반드시 이 순서대로 CSS를 로드하세요:

```tsx
// 1. 토큰 (필수 - 가장 먼저!)
import '@designbasekorea/tokens/dist/css/tokens.css';

// 2. 테마 (필수)
import '@designbasekorea/theme/dist/css/theme.css';

// 3. UI 컴포넌트 (자동으로 테마 CSS 포함)
import { Button } from '@designbasekorea/ui';
```

### 2. 버전 호환성

| UI | Tokens | Theme |
|----|--------|-------|
| 0.1.0+ | 0.1.7+ | 0.1.11+ |

호환되는 버전을 함께 사용하세요.

### 3. React 버전

- React `18.0.0+` 필요
- React DOM `18.0.0+` 필요

## 🤝 기여

버그 리포트나 기능 제안은 GitHub Issues로 부탁드립니다.

## 📄 라이선스

MIT

