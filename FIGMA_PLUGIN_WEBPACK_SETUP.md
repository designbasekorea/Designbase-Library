# 🚀 Figma 플러그인 + React + Webpack 완전 설정 가이드

Figma 플러그인에서 `@designbasekorea/figma-ui`를 사용하는 **완전한 설정 방법**입니다.

---

## 📋 목차
1. [프로젝트 구조](#프로젝트-구조)
2. [필수 패키지 설치](#필수-패키지-설치)
3. [Webpack 설정](#webpack-설정)
4. [TypeScript 설정](#typescript-설정)
5. [Figma 매니페스트](#figma-매니페스트)
6. [실제 코드 예제](#실제-코드-예제)
7. [빌드 및 실행](#빌드-및-실행)

---

## 프로젝트 구조

```
your-figma-plugin/
├── src/
│   ├── ui.tsx                 # UI 코드 (React)
│   ├── ui.html                # UI HTML 템플릿
│   └── code.ts                # 플러그인 메인 로직 (Figma API)
├── dist/                      # 빌드 결과물
│   ├── ui.js
│   ├── ui.html
│   └── code.js
├── manifest.json              # Figma 플러그인 매니페스트
├── webpack.config.js          # Webpack 설정
├── tsconfig.json              # TypeScript 설정
├── package.json
└── README.md
```

---

## 필수 패키지 설치

### 1. 프로젝트 초기화

```bash
mkdir my-figma-plugin
cd my-figma-plugin
npm init -y
```

### 2. Designbase UI 라이브러리 설치

```bash
npm install @designbasekorea/figma-ui@latest
```

이 명령어로 다음이 자동 설치됩니다:
- `@designbasekorea/ui`
- `@designbasekorea/icons`
- `@designbasekorea/theme`
- `@designbasekorea/tokens`

### 3. React 설치

```bash
npm install react react-dom
npm install --save-dev @types/react @types/react-dom
```

### 4. Webpack 및 빌드 도구 설치

```bash
npm install --save-dev \
  webpack \
  webpack-cli \
  html-webpack-plugin \
  html-inline-script-webpack-plugin \
  css-loader \
  style-loader \
  ts-loader \
  typescript
```

### 5. Figma 타입 정의 설치

```bash
npm install --save-dev @figma/plugin-typings
```

---

## Webpack 설정

**webpack.config.js** (완전한 설정):

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',
  devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    ui: './src/ui.tsx',      // UI 코드
    code: './src/code.ts',   // Figma 플러그인 코드
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      // TypeScript 및 TSX 파일 처리
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      // CSS 파일 처리 (⭐ 중요!)
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      // SVG를 인라인으로 처리
      {
        test: /\.svg$/,
        type: 'asset/source',
      },

      // 이미지 파일 처리
      {
        test: /\.(png|jpg|gif|webp)$/i,
        type: 'asset',
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  plugins: [
    // UI HTML 생성
    new HtmlWebpackPlugin({
      template: './src/ui.html',
      filename: 'ui.html',
      chunks: ['ui'],
      inject: 'body',
    }),
    // 스크립트를 인라인으로 삽입 (Figma 플러그인 요구사항)
    new HtmlInlineScriptPlugin({
      htmlMatchPattern: [/ui.html$/],
    }),
  ],
});
```

---

## TypeScript 설정

**tsconfig.json**:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "declaration": true,
    "outDir": "./dist",
    "typeRoots": ["./node_modules/@types", "./node_modules/@figma"]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## Figma 매니페스트

**manifest.json**:

```json
{
  "name": "My Figma Plugin",
  "id": "your-plugin-id",
  "api": "1.0.0",
  "main": "dist/code.js",
  "ui": "dist/ui.html",
  "editorType": ["figma"],
  "networkAccess": {
    "allowedDomains": ["*"]
  }
}
```

---

## 실제 코드 예제

### 1. **src/ui.html** (UI 템플릿)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    #root {
      width: 100%;
      height: 100vh;
    }
  </style>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

### 2. **src/ui.tsx** (UI 메인 코드)

```tsx
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Footer, 
  PageLicense, 
  ProgressModal 
} from '@designbasekorea/figma-ui';
import { 
  GlobeIcon, 
  MailIcon, 
  CodeIcon 
} from '@designbasekorea/icons';

// ⭐ CSS 임포트 필수!
import '@designbasekorea/figma-ui/dist/index.css';

const App = () => {
  const [showLicense, setShowLicense] = useState(false);
  const [status, setStatus] = useState<'PAID' | 'FREE' | 'UNPAID'>('FREE');
  const [usageCount, setUsageCount] = useState(5);
  const [processing, setProcessing] = useState(false);

  // Figma 플러그인과 통신
  useEffect(() => {
    // 메시지 수신
    window.onmessage = (event) => {
      const { type, status, usageCount, licenseKey } = event.data.pluginMessage || {};

      if (type === 'init-status') {
        setStatus(status || 'FREE');
        setUsageCount(usageCount || 0);
      }

      if (type === 'license-verified') {
        setStatus('PAID');
        setShowLicense(false);
      }

      if (type === 'processing-complete') {
        setProcessing(false);
      }
    };

    // 초기 상태 요청
    parent.postMessage({ 
      pluginMessage: { type: 'init' } 
    }, '*');
  }, []);

  // Footer 로고 링크
  const logoLinks = [
    {
      name: 'officialWebsite',
      url: 'https://designbase.co.kr',
      icon: <GlobeIcon size={20} />,
    },
    {
      name: 'figmaCommunity',
      url: 'https://www.figma.com/@designbasekorea',
      icon: <CodeIcon size={20} />,
    },
    {
      name: 'contact',
      url: 'mailto:designbasekorea@gmail.com',
      icon: <MailIcon size={20} />,
    },
  ];

  // 라이선스 제출
  const handleLicenseSubmit = async (licenseKey: string) => {
    parent.postMessage({ 
      pluginMessage: { 
        type: 'verify-license', 
        licenseKey 
      } 
    }, '*');
  };

  // 번역 함수
  const t = (key: string) => {
    const translations: Record<string, string> = {
      officialWebsite: '공식 웹사이트',
      figmaCommunity: '피그마 커뮤니티',
      contact: '문의하기',
      unlimitedUsage: '무제한 사용',
      perDay: '하루',
      resetsDaily: '매일 리셋',
      premium: '프리미엄',
      free: '무료',
      // ... 더 많은 번역
    };
    return translations[key] || key;
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 메인 컨텐츠 */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>내 Figma 플러그인</h1>
        <p>현재 상태: {status}</p>
        <p>사용 횟수: {usageCount}/20</p>
        
        <button onClick={() => setProcessing(true)}>
          작업 실행
        </button>
      </div>

      {/* Footer */}
      <Footer 
        logoLinks={logoLinks}
        paymentStatus={status}
        usageCount={usageCount}
        maxDailyUsage={20}
        showPaymentStatus={true}
        onLicensePageClick={() => setShowLicense(true)}
        t={t}
      />

      {/* PageLicense 모달 */}
      {showLicense && (
        <PageLicense 
          status={status}
          usageCount={usageCount}
          onClose={() => setShowLicense(false)}
          onLicenseSubmit={handleLicenseSubmit}
          setPaymentStatus={setStatus}
          setUsageCount={setUsageCount}
          setShowLicensePage={setShowLicense}
          paymentPageUrl="https://designbasekorea.lemonsqueezy.com/buy/..."
          t={t}
        />
      )}

      {/* 처리 중 모달 */}
      {processing && (
        <ProgressModal 
          status="loading"
          message="처리 중입니다..."
        />
      )}
    </div>
  );
};

// React 18 렌더링
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
```

### 3. **src/code.ts** (Figma 플러그인 메인 코드)

```typescript
// Figma API 코드

figma.showUI(__html__, { 
  width: 480, 
  height: 640,
  themeColors: true 
});

// 초기 상태 전송
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'init') {
    // 저장된 상태 불러오기
    const savedStatus = await figma.clientStorage.getAsync('paymentStatus');
    const savedUsageCount = await figma.clientStorage.getAsync('usageCount');

    figma.ui.postMessage({
      type: 'init-status',
      status: savedStatus || 'FREE',
      usageCount: savedUsageCount || 0,
    });
  }

  if (msg.type === 'verify-license') {
    const { licenseKey } = msg;
    
    // 라이선스 검증 로직
    try {
      const response = await fetch('https://your-api.com/verify-license', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ licenseKey }),
      });

      const result = await response.json();

      if (result.valid) {
        // 라이선스 저장
        await figma.clientStorage.setAsync('paymentStatus', 'PAID');
        await figma.clientStorage.setAsync('licenseKey', licenseKey);

        figma.ui.postMessage({
          type: 'license-verified',
          status: 'PAID',
        });

        figma.notify('라이선스가 활성화되었습니다! ✅');
      } else {
        figma.notify('유효하지 않은 라이선스 키입니다. ❌');
      }
    } catch (error) {
      figma.notify('라이선스 검증 중 오류가 발생했습니다.');
    }
  }

  if (msg.type === 'process') {
    // 실제 플러그인 작업 수행
    figma.ui.postMessage({
      type: 'processing-complete',
    });
  }
};
```

---

## package.json 설정

**package.json**:

```json
{
  "name": "my-figma-plugin",
  "version": "1.0.0",
  "description": "My awesome Figma plugin",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development --watch",
    "clean": "rm -rf dist"
  },
  "dependencies": {
    "@designbasekorea/figma-ui": "^0.1.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@figma/plugin-typings": "^1.90.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "css-loader": "^6.8.1",
    "html-inline-script-webpack-plugin": "^3.2.0",
    "html-webpack-plugin": "^5.5.3",
    "style-loader": "^3.3.3",
    "ts-loader": "^9.5.0",
    "typescript": "^5.2.2",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4"
  }
}
```

---

## Webpack 설정 (복사해서 사용)

**webpack.config.js**:

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',
  devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    ui: './src/ui.tsx',
    code: './src/code.ts',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      // TypeScript/TSX 파일 처리
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      // ⭐ CSS 파일 처리 (중요!)
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      // SVG 인라인 처리
      {
        test: /\.svg$/,
        type: 'asset/source',
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    // ⭐ mainFields 순서 중요!
    mainFields: ['main', 'module'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ui.html',
      filename: 'ui.html',
      chunks: ['ui'],
      inject: 'body',
    }),
    new HtmlInlineScriptPlugin({
      htmlMatchPattern: [/ui.html$/],
    }),
  ],
});
```

**핵심 포인트**:
- ✅ `css-loader` + `style-loader`: CSS 파일 처리
- ✅ `ts-loader`: TypeScript 컴파일
- ✅ `mainFields: ['main', 'module']`: CJS 우선 사용 (Webpack에서 안정적)
- ✅ `HtmlInlineScriptPlugin`: Figma 요구사항 (스크립트 인라인화)

---

## TypeScript 설정

**tsconfig.json**:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "outDir": "./dist",
    "typeRoots": [
      "./node_modules/@types",
      "./node_modules/@figma"
    ]
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## Figma 매니페스트

**manifest.json**:

```json
{
  "name": "My Plugin",
  "id": "1234567890",
  "api": "1.0.0",
  "main": "dist/code.js",
  "ui": "dist/ui.html",
  "editorType": ["figma", "figjam"],
  "networkAccess": {
    "allowedDomains": [
      "https://your-api.com",
      "https://designbasekorea.lemonsqueezy.com"
    ]
  },
  "documentAccess": "dynamic-page",
  "permissions": []
}
```

---

## 빌드 및 실행

### 1. 개발 모드 (자동 재빌드)

```bash
npm run dev
```

Figma Desktop → Plugins → Development → Import plugin from manifest

### 2. 프로덕션 빌드

```bash
npm run build
```

### 3. 배포

Figma Desktop → Plugins → Development → Publish

---

## 🎯 중요 포인트

### ✅ CSS 임포트 필수!

```tsx
// ⭐ 반드시 CSS를 임포트해야 스타일이 적용됨
import '@designbasekorea/figma-ui/dist/index.css';
```

### ✅ React 18 사용 (권장)

```tsx
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
```

### ✅ Figma 통신

```tsx
// UI → Code
parent.postMessage({ 
  pluginMessage: { type: 'action', data: 'value' } 
}, '*');

// Code → UI
figma.ui.postMessage({ 
  type: 'response', 
  data: 'value' 
});
```

---

## 🔧 문제 해결

### 문제 1: CSS가 적용되지 않음

**해결책**:
```tsx
// src/ui.tsx 최상단에
import '@designbasekorea/figma-ui/dist/index.css';
```

### 문제 2: 빌드 에러 "Cannot find module"

**해결책**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### 문제 3: Figma에서 플러그인이 로드되지 않음

**해결책**:
1. `dist/ui.html`과 `dist/code.js`가 생성되었는지 확인
2. `manifest.json`의 경로가 올바른지 확인
3. Figma Desktop 재시작

### 문제 4: TypeScript 타입 오류

**해결책**:
```json
// tsconfig.json
{
  "compilerOptions": {
    "skipLibCheck": true  // 외부 라이브러리 타입 체크 스킵
  }
}
```

---

## 📦 완전한 설치 명령어 (복사해서 사용)

```bash
# 프로젝트 생성
mkdir my-figma-plugin && cd my-figma-plugin
npm init -y

# 의존성 설치
npm install @designbasekorea/figma-ui@latest react react-dom

# 개발 의존성 설치
npm install --save-dev \
  @figma/plugin-typings \
  @types/react \
  @types/react-dom \
  webpack \
  webpack-cli \
  html-webpack-plugin \
  html-inline-script-webpack-plugin \
  css-loader \
  style-loader \
  ts-loader \
  typescript

# 프로젝트 구조 생성
mkdir src dist
touch src/ui.tsx src/ui.html src/code.ts
touch webpack.config.js tsconfig.json manifest.json

# 빌드
npm run build
```

---

## 🎨 추가 예제

### Footer만 사용하는 간단한 예제:

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Footer } from '@designbasekorea/figma-ui';
import { GlobeIcon, MailIcon } from '@designbasekorea/icons';
import '@designbasekorea/figma-ui/dist/index.css';

const App = () => {
  const links = [
    { name: 'Website', url: 'https://designbase.co.kr', icon: <GlobeIcon size={20} /> },
    { name: 'Contact', url: 'mailto:hello@designbase.co.kr', icon: <MailIcon size={20} /> },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>내 플러그인</h1>
      </div>
      <Footer logoLinks={links} showPaymentStatus={false} />
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
```

---

## 🚀 시작하기

1. **위의 "완전한 설치 명령어" 실행**
2. **파일들 작성** (ui.tsx, ui.html, code.ts, webpack.config.js, tsconfig.json, manifest.json)
3. **빌드**: `npm run build`
4. **Figma에서 테스트**: Import plugin from manifest → `manifest.json` 선택

---

## 📚 참고 자료

- **Figma Plugin API**: https://www.figma.com/plugin-docs/
- **Webpack 문서**: https://webpack.js.org/
- **React 문서**: https://react.dev/

---

**이제 Figma 플러그인에서 Designbase UI를 완벽하게 사용할 수 있습니다!** 🎉

