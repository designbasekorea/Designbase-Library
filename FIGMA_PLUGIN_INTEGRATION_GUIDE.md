# Figma 플러그인에서 Designbase UI 라이브러리 사용 가이드

## 📦 배포 완료!

다음 패키지들이 npm에 성공적으로 배포되었습니다:
- `@designbasekorea/ui@0.1.7` - Spinner, Progressbar 수정 포함
- `@designbasekorea/figma-ui@0.1.4` - PageLicense, ProgressModal 등 수정 포함

---

## 🚀 Figma 플러그인 프로젝트에서 설치하기

### 1. 패키지 설치

Figma 플러그인 프로젝트 디렉토리에서 다음 명령어를 실행하세요:

```bash
npm install @designbasekorea/figma-ui@latest
```

이 명령어는 자동으로 필요한 의존성들도 함께 설치합니다:
- `@designbasekorea/ui@^0.1.7`
- `@designbasekorea/icons@^0.2.0`
- `@designbasekorea/theme@^0.1.19`
- `@designbasekorea/tokens@^0.1.13`

---

## 🏗️ Figma 플러그인 프로젝트 구조

일반적인 Figma 플러그인 프로젝트 구조:

```
your-figma-plugin/
├── src/
│   ├── code.ts          # 플러그인 메인 로직 (Figma API)
│   └── ui/
│       ├── index.html   # UI HTML
│       ├── index.tsx    # UI React 엔트리포인트
│       └── App.tsx      # UI 메인 컴포넌트
├── manifest.json        # Figma 플러그인 매니페스트
├── package.json
├── tsconfig.json
└── webpack.config.js    # 또는 vite.config.js
```

---

## 💻 사용 방법

### 방법 1: PageLicense 컴포넌트 사용 (라이선스 관리)

**src/ui/App.tsx**:

```tsx
import React, { useState } from 'react';
import { PageLicense } from '@designbasekorea/figma-ui';
import '@designbasekorea/figma-ui/dist/index.css'; // CSS 임포트 필수!

function App() {
  const [showLicensePage, setShowLicensePage] = useState(true);
  const [status, setStatus] = useState<'PAID' | 'FREE' | 'UNPAID'>('FREE');
  const [usageCount, setUsageCount] = useState(5);

  const handleLicenseSubmit = async (licenseKey: string) => {
    // 백엔드로 라이선스 키 검증 요청
    parent.postMessage({
      pluginMessage: {
        type: 'verify-license',
        licenseKey
      }
    }, '*');
  };

  const handleClose = () => {
    setShowLicensePage(false);
  };

  if (!showLicensePage) {
    return <div>메인 플러그인 UI</div>;
  }

  return (
    <PageLicense
      status={status}
      usageCount={usageCount}
      onClose={handleClose}
      onLicenseSubmit={handleLicenseSubmit}
      setPaymentStatus={setStatus}
      setUsageCount={setUsageCount}
      setShowLicensePage={setShowLicensePage}
      licenseKey=""
      paymentPageUrl="https://your-payment-page.com"
      t={(key: string) => {
        // 다국어 번역 함수 (옵션)
        const translations: Record<string, string> = {
          proAccount: '프로 계정',
          upgradeToPro: '프로로 업그레이드',
          // ... 더 많은 번역
        };
        return translations[key] || key;
      }}
    />
  );
}

export default App;
```

### 방법 2: ProgressModal 사용 (로딩 상태)

```tsx
import React, { useState } from 'react';
import { ProgressModal } from '@designbasekorea/figma-ui';
import '@designbasekorea/figma-ui/dist/index.css';

function App() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleProcess = async () => {
    setIsProcessing(true);
    
    // 진행률 시뮬레이션
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    setIsProcessing(false);
  };

  return (
    <>
      <button onClick={handleProcess}>처리 시작</button>
      
      {isProcessing && (
        <ProgressModal
          status="loading"
          message="처리 중입니다..."
          progress={progress}
          showProgress={true}
        />
      )}
    </>
  );
}

export default App;
```

### 방법 3: UI 컴포넌트 사용 (Button, Input, Spinner 등)

```tsx
import React, { useState } from 'react';
import { Button, Input, Spinner, Progressbar } from '@designbasekorea/ui';
import '@designbasekorea/ui/dist/index.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(60);

  return (
    <div style={{ padding: '20px' }}>
      <h1>내 플러그인</h1>
      
      {/* 버튼 */}
      <Button 
        variant="primary" 
        size="m"
        onClick={() => setLoading(!loading)}
      >
        실행
      </Button>
      
      {/* 로딩 스피너 */}
      {loading && (
        <Spinner 
          type="circular" 
          size="m" 
          color="primary" 
        />
      )}
      
      {/* 진행률 바 */}
      <Progressbar 
        value={progress} 
        size="m" 
        variant="primary"
        showLabel={true}
      />
      
      {/* 입력 필드 */}
      <Input 
        placeholder="텍스트 입력"
        size="m"
      />
    </div>
  );
}

export default App;
```

---

## 🔧 Figma 플러그인 코드 통신 (code.ts ↔ ui)

### code.ts (플러그인 메인)

```typescript
// 라이선스 검증 요청 받기
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'verify-license') {
    const { licenseKey } = msg;
    
    // 백엔드 API 호출 (예시)
    try {
      const response = await fetch('https://api.yourbackend.com/verify-license', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ licenseKey })
      });
      
      const result = await response.json();
      
      // UI로 결과 전송
      figma.ui.postMessage({
        type: 'license-verification-result',
        success: result.valid,
        paymentStatus: result.valid ? 'PAID' : 'UNPAID',
        message: result.message,
        licenseKey: result.valid ? licenseKey : '',
        activationLimit: result.activationLimit || 0,
        activationUsage: result.activationUsage || 0
      });
    } catch (error) {
      figma.ui.postMessage({
        type: 'license-verification-result',
        success: false,
        message: '라이선스 검증 중 오류가 발생했습니다.'
      });
    }
  }
  
  if (msg.type === 'initialize') {
    // 플러그인 초기 상태 전송
    const savedLicenseKey = await figma.clientStorage.getAsync('licenseKey');
    const paymentStatus = await figma.clientStorage.getAsync('paymentStatus');
    
    figma.ui.postMessage({
      type: 'update-plugin-status',
      paymentStatus: paymentStatus || 'FREE',
      licenseKey: savedLicenseKey || '',
      usageCount: 20
    });
  }
};

// UI 표시
figma.showUI(__html__, { width: 480, height: 640 });
```

---

## 📋 필수 설정

### 1. CSS 임포트

컴포넌트가 올바르게 표시되려면 CSS를 반드시 임포트해야 합니다:

```tsx
// Figma UI 컴포넌트 사용 시
import '@designbasekorea/figma-ui/dist/index.css';

// 기본 UI 컴포넌트 사용 시
import '@designbasekorea/ui/dist/index.css';
```

### 2. React 및 React-DOM 설치

```bash
npm install react react-dom
npm install -D @types/react @types/react-dom
```

### 3. Webpack/Vite 설정

CSS 파일을 처리하기 위한 로더가 필요합니다:

**Webpack (webpack.config.js)**:
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

**Vite (vite.config.js)**:
```javascript
export default {
  // CSS는 기본적으로 지원됨
  build: {
    rollupOptions: {
      input: {
        ui: 'src/ui/index.html'
      }
    }
  }
};
```

---

## 🎨 테마 커스터마이징

CSS 변수를 통해 테마를 커스터마이징할 수 있습니다:

```css
/* src/ui/styles.css */
:root {
  --db-brand-primary: #your-primary-color;
  --db-brand-secondary: #your-secondary-color;
  --db-surface-base: #your-background-color;
  /* ... 더 많은 변수들 */
}
```

사용 가능한 모든 CSS 변수는 `@designbasekorea/tokens` 패키지를 참고하세요.

---

## 🐛 트러블슈팅

### 문제 1: 스타일이 적용되지 않음
**해결책**: CSS 파일이 제대로 임포트되었는지 확인하세요.

```tsx
import '@designbasekorea/figma-ui/dist/index.css';
```

### 문제 2: 빌드 에러 - "Cannot find module"
**해결책**: 모든 의존성이 설치되었는지 확인하세요.

```bash
npm install
```

### 문제 3: TypeScript 타입 오류
**해결책**: 타입 정의가 자동으로 포함되어 있습니다. `tsconfig.json`에서 `moduleResolution`을 확인하세요.

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

---

## 📚 추가 리소스

- **컴포넌트 문서**: Storybook을 실행하여 모든 컴포넌트 예제 확인
  ```bash
  cd packages/figma-ui
  npm run storybook
  ```

- **GitHub**: [Designbase Library](https://github.com/designbasekorea/Designbase-Library)

- **npm 패키지**:
  - [@designbasekorea/ui](https://www.npmjs.com/package/@designbasekorea/ui)
  - [@designbasekorea/figma-ui](https://www.npmjs.com/package/@designbasekorea/figma-ui)

---

## 🎉 완료!

이제 Figma 플러그인에서 Designbase UI 라이브러리를 사용할 준비가 완료되었습니다!

질문이나 이슈가 있으면 GitHub Issues에 등록해주세요.

