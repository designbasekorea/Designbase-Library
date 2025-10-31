# @designbasekorea/icons

Designbase SVG 아이콘 React 컴포넌트 라이브러리입니다.

![npm](https://img.shields.io/npm/v/@designbasekorea/icons)
![license](https://img.shields.io/npm/l/@designbasekorea/icons)

## 📦 설치

### NPM
```bash
npm install @designbasekorea/icons
```

### Yarn
```bash
yarn add @designbasekorea/icons
```

### pnpm
```bash
pnpm add @designbasekorea/icons
```

## 🚀 사용법

### React 컴포넌트로 사용

```tsx
import { 
  CheckIcon, 
  UserIcon, 
  HomeIcon, 
  SettingsIcon,
  SearchIcon 
} from '@designbasekorea/icons';

function App() {
  return (
    <div>
      <CheckIcon size={24} />
      <UserIcon size={20} color="#3b82f6" />
      <HomeIcon className="my-icon" />
      <SettingsIcon size={32} color="var(--color-semantic-primary)" />
      <SearchIcon size={16} strokeWidth={2} />
    </div>
  );
}
```

### Props

모든 아이콘 컴포넌트는 다음 props를 지원합니다:

```tsx
interface IconProps {
  size?: number | string;           // 기본값: 24
  color?: string;                    // 기본값: 'currentColor'
  strokeWidth?: number;              // 기본값: 1.5
  className?: string;                // 커스텀 CSS 클래스
  style?: React.CSSProperties;       // 인라인 스타일
  onClick?: () => void;              // 클릭 이벤트
}
```

### 예시

```tsx
// 크기 조정
<CheckIcon size={32} />
<CheckIcon size="2rem" />

// 색상 변경
<UserIcon color="#ff6b6b" />
<UserIcon color="var(--db-color-primary)" />

// 선 두께 조정
<SearchIcon strokeWidth={2} />

// CSS 클래스 추가
<HomeIcon className="nav-icon" />

// 인라인 스타일
<SettingsIcon style={{ margin: '8px' }} />

// 클릭 이벤트
<CheckIcon onClick={() => console.log('클릭!')} />

// 조합
<UserIcon 
  size={28}
  color="var(--db-color-primary)"
  strokeWidth={2}
  className="user-avatar-icon"
  onClick={handleUserClick}
/>
```

## 🎨 사용 가능한 아이콘

### 일반 아이콘
- `HomeIcon` / `HomeFilledIcon`
- `UserIcon` / `UserFilledIcon`
- `SettingsIcon` / `SettingsFilledIcon`
- `SearchIcon`
- `BellIcon` / `BellFilledIcon`
- `HeartIcon` / `HeartFilledIcon`
- `StarIcon` / `StarFilledIcon`
- `BookmarkIcon` / `BookmarkFilledIcon`

### 액션 아이콘
- `CheckIcon`
- `CloseIcon` (X)
- `PlusIcon`
- `MinusIcon`
- `EditIcon` (Pencil)
- `DeleteIcon` (Trash)
- `DownloadIcon`
- `UploadIcon`
- `RefreshIcon`
- `CopyIcon`

### 화살표/네비게이션
- `ChevronUpIcon`
- `ChevronDownIcon`
- `ChevronLeftIcon`
- `ChevronRightIcon`
- `ArrowUpIcon`
- `ArrowDownIcon`
- `ArrowLeftIcon`
- `ArrowRightIcon`

### 미디어/통신
- `ImageIcon`
- `VideoIcon`
- `MusicIcon`
- `FileIcon`
- `FolderIcon`
- `MailIcon`
- `PhoneIcon`
- `MessageIcon`

### 기타
- `InfoIcon`
- `WarningIcon`
- `ErrorIcon`
- `SuccessIcon`
- `LockIcon` / `UnlockIcon`
- `EyeIcon` / `EyeOffIcon`
- `MenuIcon`
- `MoreIcon` (3점)
- `FilterIcon`
- `CalendarIcon`
- `ClockIcon`

## 💡 사용 팁

### 1. 테마 색상과 함께 사용

```tsx
import { CheckIcon } from '@designbasekorea/icons';

<CheckIcon color="var(--db-color-primary)" />
<CheckIcon color="var(--db-color-success)" />
<CheckIcon color="var(--db-text-primary)" />
```

### 2. 버튼과 함께 사용

```tsx
import { SearchIcon, PlusIcon } from '@designbasekorea/icons';
import { Button } from '@designbasekorea/ui';

<Button>
  <SearchIcon size={16} />
  검색
</Button>

<Button variant="primary">
  <PlusIcon size={18} />
  추가
</Button>
```

### 3. 입력 필드 prefix/suffix

```tsx
import { SearchIcon, CloseIcon } from '@designbasekorea/icons';
import { Input } from '@designbasekorea/ui';

<Input 
  prefix={<SearchIcon size={16} />}
  suffix={<CloseIcon size={16} onClick={clearInput} />}
  placeholder="검색..."
/>
```

### 4. 아이콘 버튼

```tsx
import { SettingsIcon } from '@designbasekorea/icons';

<button className="icon-button">
  <SettingsIcon size={20} />
</button>

<style>
  .icon-button {
    padding: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  .icon-button:hover {
    background: var(--db-bg-secondary);
  }
</style>
```

### 5. 애니메이션

```tsx
import { RefreshIcon } from '@designbasekorea/icons';

<RefreshIcon 
  size={24} 
  className="rotating-icon"
/>

<style>
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .rotating-icon {
    animation: rotate 1s linear infinite;
  }
</style>
```

## 🎯 실전 예제

### 네비게이션 메뉴

```tsx
import { HomeIcon, UserIcon, SettingsIcon } from '@designbasekorea/icons';

function Navigation() {
  return (
    <nav>
      <a href="/">
        <HomeIcon size={20} />
        홈
      </a>
      <a href="/profile">
        <UserIcon size={20} />
        프로필
      </a>
      <a href="/settings">
        <SettingsIcon size={20} />
        설정
      </a>
    </nav>
  );
}
```

### 상태 표시

```tsx
import { CheckIcon, CloseIcon, WarningIcon } from '@designbasekorea/icons';

function StatusBadge({ status }) {
  const icons = {
    success: <CheckIcon size={16} color="var(--db-color-success)" />,
    error: <CloseIcon size={16} color="var(--db-color-danger)" />,
    warning: <WarningIcon size={16} color="var(--db-color-warning)" />
  };
  
  return <div className="status-badge">{icons[status]}</div>;
}
```

### 알림 아이콘 (Badge)

```tsx
import { BellIcon } from '@designbasekorea/icons';

function NotificationIcon({ count }) {
  return (
    <div style={{ position: 'relative' }}>
      <BellIcon size={24} />
      {count > 0 && (
        <span style={{
          position: 'absolute',
          top: -4,
          right: -4,
          background: 'var(--db-color-danger)',
          color: 'white',
          borderRadius: '50%',
          width: 18,
          height: 18,
          fontSize: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {count}
        </span>
      )}
    </div>
  );
}
```

## 📦 Export 형식

| 형식 | 경로 | 설명 |
|------|------|------|
| ESM | `dist/index.esm.js` | ES Module (React 컴포넌트) |
| CJS | `dist/index.js` | CommonJS |
| Types | `dist/index.d.ts` | TypeScript 타입 정의 |
| SVG 원본 | `svg/` | 원본 SVG 파일들 |

## 🔗 관련 패키지

- [@designbasekorea/icons-webfont](../icons-webfont) - 아이콘 웹폰트 (HTML/CSS 사용)
- [@designbasekorea/ui](../ui) - UI 컴포넌트 (아이콘 함께 사용)

## 🆚 React vs Webfont

### React 컴포넌트 (@designbasekorea/icons) - 현재 패키지
**장점**:
- ✅ TypeScript 지원
- ✅ Props로 동적 제어 (size, color, strokeWidth)
- ✅ Tree shaking 지원 (번들 최적화)
- ✅ React 이벤트 핸들러 사용 가능

**단점**:
- ❌ React 프로젝트에서만 사용 가능

```tsx
<CheckIcon size={24} color="red" onClick={handleClick} />
```

### Webfont (@designbasekorea/icons-webfont)
**장점**:
- ✅ 순수 HTML/CSS에서 사용 가능
- ✅ React 없이 사용 가능
- ✅ CSS로 스타일링

**단점**:
- ❌ 동적 제어 제한적
- ❌ 전체 폰트 로드 필요

```html
<i class="icon-check"></i>
```

## 🔄 버전 히스토리

### 0.1.1 (Latest)
- ✅ 100+ SVG 아이콘 제공
- ✅ React 컴포넌트 형태로 제공
- ✅ TypeScript 타입 정의 포함
- ✅ Tree shaking 지원

## 📄 라이선스

MIT

