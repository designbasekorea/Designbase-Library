# CDN 사용 가이드

Designbase Library를 CDN을 통해 빠르게 사용하는 방법입니다.

## 🚀 빠른 시작

### 완전한 예제

```html
<!DOCTYPE html>
<html lang="ko" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Designbase CDN 예제</title>
    
    <!-- 1. 토큰 CSS (필수 - 가장 먼저!) -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">
    
    <!-- 2. 테마 CSS (필수) -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/theme@latest/dist/css/theme.css">
    
    <!-- 3. 아이콘 웹폰트 (선택) -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/icons-webfont@latest/dist/css/designbase-icons.css">
    
    <style>
        body {
            font-family: var(--db-font-family);
            background: var(--db-bg-primary);
            color: var(--db-text-primary);
            padding: 40px;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        
        .btn {
            padding: var(--db-padding-m) var(--db-padding-l);
            font-size: var(--db-text-m);
            font-weight: var(--db-font-semibold);
            border-radius: var(--db-radius-button);
            border: none;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s ease;
        }
        
        .btn-primary {
            background: var(--db-color-primary);
            color: white;
        }
        
        .btn-primary:hover {
            opacity: 0.9;
            transform: translateY(-1px);
            box-shadow: var(--db-shadow-m);
        }
        
        .card {
            background: var(--db-bg-primary);
            border: 1px solid var(--db-border-primary);
            border-radius: var(--db-radius-card-m);
            padding: var(--db-padding-xl);
            margin-top: var(--db-margin-l);
            box-shadow: var(--db-shadow-s);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Designbase CDN 예제</h1>
        
        <button class="btn btn-primary" onclick="toggleTheme()">
            <i class="icon-moon"></i>
            테마 전환
        </button>
        
        <div class="card">
            <h2><i class="icon-star"></i> 카드 제목</h2>
            <p>이것은 Designbase 디자인 토큰과 테마를 사용한 예제입니다.</p>
        </div>
    </div>
    
    <!-- React & ReactDOM (UI 컴포넌트 사용 시 필요) -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- 테마 스크립트 -->
    <script src="https://unpkg.com/@designbasekorea/theme@latest/dist/index.umd.js"></script>
    
    <!-- UI 컴포넌트 (선택) -->
    <script src="https://unpkg.com/@designbasekorea/ui@latest/dist/index.umd.js"></script>
    
    <script>
        const { setTheme, getTheme } = DesignbaseTheme;
        
        function toggleTheme() {
            const current = getTheme();
            const newTheme = current === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        }
        
        // 초기 테마 설정
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') || 'light';
            setTheme(savedTheme);
        }
    </script>
</body>
</html>
```

## 📦 CDN 링크

### unpkg (권장)

```html
<!-- 토큰 -->
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@0.1.7/dist/css/tokens.css">
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">

<!-- 테마 -->
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/theme@0.1.11/dist/css/theme.css">
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/theme@latest/dist/css/theme.css">
<script src="https://unpkg.com/@designbasekorea/theme@latest/dist/index.umd.js"></script>

<!-- 아이콘 웹폰트 -->
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/icons-webfont@0.1.1/dist/css/designbase-icons.css">
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/icons-webfont@latest/dist/css/designbase-icons.css">

<!-- UI 컴포넌트 -->
<script src="https://unpkg.com/@designbasekorea/ui@0.1.0/dist/index.umd.js"></script>
<script src="https://unpkg.com/@designbasekorea/ui@latest/dist/index.umd.js"></script>
```

### jsDelivr (대체)

```html
<!-- 토큰 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@designbasekorea/tokens@0.1.7/dist/css/tokens.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@designbasekorea/tokens@latest/dist/css/tokens.css">

<!-- 테마 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@designbasekorea/theme@0.1.11/dist/css/theme.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@designbasekorea/theme@latest/dist/css/theme.css">
<script src="https://cdn.jsdelivr.net/npm/@designbasekorea/theme@latest/dist/index.umd.js"></script>

<!-- 아이콘 웹폰트 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@designbasekorea/icons-webfont@0.1.1/dist/css/designbase-icons.css">

<!-- UI 컴포넌트 -->
<script src="https://cdn.jsdelivr.net/npm/@designbasekorea/ui@0.1.0/dist/index.umd.js"></script>
```

## 🎯 사용 시나리오

### 1. HTML/CSS만 사용 (React 없이)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <!-- 토큰 + 테마 -->
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/theme@latest/dist/css/theme.css">
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/icons-webfont@latest/dist/css/designbase-icons.css">
</head>
<body>
    <button class="btn btn-primary">
        <i class="icon-check"></i>
        확인
    </button>
    
    <style>
        .btn {
            padding: var(--db-padding-m) var(--db-padding-l);
            background: var(--db-color-primary);
            color: white;
            border: none;
            border-radius: var(--db-radius-button);
            cursor: pointer;
        }
    </style>
</body>
</html>
```

### 2. React 컴포넌트 사용

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/theme@latest/dist/css/theme.css">
</head>
<body>
    <div id="root"></div>
    
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@designbasekorea/ui@latest/dist/index.umd.js"></script>
    
    <script>
        const { Button, Card } = DesignbaseUI;
        
        const App = () => {
            return React.createElement('div', null,
                React.createElement(Button, { 
                    variant: 'primary',
                    onClick: () => alert('클릭!')
                }, '클릭하세요'),
                
                React.createElement(Card, null, '카드 내용')
            );
        };
        
        ReactDOM.render(React.createElement(App), document.getElementById('root'));
    </script>
</body>
</html>
```

### 3. 테마 전환 기능

```html
<!DOCTYPE html>
<html lang="ko" data-theme="light">
<head>
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/theme@latest/dist/css/theme.css">
</head>
<body>
    <button onclick="toggleTheme()">테마 전환</button>
    
    <script src="https://unpkg.com/@designbasekorea/theme@latest/dist/index.umd.js"></script>
    <script>
        const { setTheme, getTheme } = DesignbaseTheme;
        
        function toggleTheme() {
            const current = getTheme();
            setTheme(current === 'light' ? 'dark' : 'light');
        }
    </script>
</body>
</html>
```

## ⚠️ 주의사항

### 1. 로드 순서

**반드시 이 순서를 지켜주세요:**

```html
<!-- 1. 토큰 CSS (Foundation) -->
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">

<!-- 2. 테마 CSS (Semantic) -->
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/theme@latest/dist/css/theme.css">

<!-- 3. 아이콘 (선택) -->
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/icons-webfont@latest/dist/css/designbase-icons.css">

<!-- 4. React 스크립트 (UI 사용 시) -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- 5. UI 컴포넌트 (선택) -->
<script src="https://unpkg.com/@designbasekorea/ui@latest/dist/index.umd.js"></script>
```

### 2. 버전 고정 vs Latest

```html
<!-- Latest: 항상 최신 버전 (권장하지 않음 - 예상치 못한 변경 가능) -->
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">

<!-- 버전 고정: 특정 버전 사용 (권장 - 안정적) -->
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@0.1.7/dist/css/tokens.css">
```

**프로덕션 환경에서는 버전을 고정하세요!**

### 3. 개발 vs 프로덕션

```html
<!-- 개발 환경: 디버깅 쉬운 비압축 버전 -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- 프로덕션: 최적화된 압축 버전 -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

### 4. CORS 이슈

React CDN을 사용할 때는 `crossorigin` 속성을 추가하세요:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
```

## 🔧 고급 사용법

### SRI (Subresource Integrity)

보안을 위해 SRI 해시를 사용할 수 있습니다:

```html
<link 
    rel="stylesheet" 
    href="https://unpkg.com/@designbasekorea/tokens@0.1.7/dist/css/tokens.css"
    integrity="sha384-..."
    crossorigin="anonymous"
>
```

### Preconnect

CDN 성능 향상을 위해 preconnect를 추가하세요:

```html
<head>
    <link rel="preconnect" href="https://unpkg.com">
    <link rel="dns-prefetch" href="https://unpkg.com">
    
    <link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@latest/dist/css/tokens.css">
</head>
```

### Async/Defer

JavaScript 로딩 최적화:

```html
<!-- 테마 스크립트는 먼저 로드 -->
<script src="https://unpkg.com/@designbasekorea/theme@latest/dist/index.umd.js"></script>

<!-- UI 컴포넌트는 defer로 -->
<script defer src="https://unpkg.com/@designbasekorea/ui@latest/dist/index.umd.js"></script>
```

## 📊 성능 최적화

### 1. 필요한 것만 로드

```html
<!-- ❌ 모든 것을 로드하지 마세요 -->
<link rel="stylesheet" href="...tokens.css">
<link rel="stylesheet" href="...theme.css">
<link rel="stylesheet" href="...icons-webfont.css">
<script src="...ui.umd.js"></script>

<!-- ✅ 필요한 것만 로드하세요 -->
<link rel="stylesheet" href="...tokens.css">
<link rel="stylesheet" href="...theme.css">
<!-- 아이콘이 필요없으면 생략 -->
<!-- UI 컴포넌트가 필요없으면 생략 -->
```

### 2. 캐싱 활용

```html
<!-- 버전을 고정하면 브라우저가 캐싱합니다 -->
<link rel="stylesheet" href="https://unpkg.com/@designbasekorea/tokens@0.1.7/dist/css/tokens.css">
```

### 3. 압축 파일 사용

```html
<!-- CSS는 자동으로 압축됨 -->
<link rel="stylesheet" href="...theme.css">

<!-- JS도 .min 버전 사용 -->
<script src="...react.production.min.js"></script>
```

## 🌐 CDN 비교

| CDN | 장점 | 단점 |
|-----|------|------|
| **unpkg** | • 간단한 URL<br>• 자동 버전 해결<br>• npm과 동기화 | • 중국에서 느릴 수 있음 |
| **jsDelivr** | • 글로벌 CDN<br>• 빠른 속도<br>• 중국 지원 | • URL이 조금 김 |

## 🔗 관련 문서

- [NPM 설치 가이드](../README.md)
- [Tokens 패키지](../packages/tokens/README.md)
- [Theme 패키지](../packages/theme/README.md)
- [Icons 패키지](../packages/icons/README.md)
- [UI 패키지](../packages/ui/README.md)

## 💡 예제 모음

전체 예제 코드는 [examples](./examples/) 폴더를 참고하세요:
- [기본 HTML 예제](./examples/basic-html.html)
- [React CDN 예제](./examples/react-cdn.html)
- [테마 전환 예제](./examples/theme-toggle.html)
- [아이콘 사용 예제](./examples/icons.html)

