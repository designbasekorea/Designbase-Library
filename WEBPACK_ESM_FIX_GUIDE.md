# 🔧 Webpack ESM 모듈 에러 해결 가이드

## 🚨 에러 메시지:
```
Uncaught Error: Module parse failed: 'import' and 'export' may appear only with 'sourceType: module'
You may need an appropriate loader to handle this file type
```

---

## 🎯 원인:
- `@designbasekorea/icons`와 `@designbasekorea/ui`가 **ESM 형식**으로 빌드됨
- Webpack이 `node_modules` 내부의 ESM 파일을 처리하지 못함
- Babel 로더가 `node_modules`를 기본적으로 제외하기 때문

---

## ✅ 해결 방법

### 방법 1: Webpack 설정 수정 (추천) ⭐

**webpack.config.js** 파일을 수정하세요:

```javascript
module.exports = {
  // ... 기존 설정
  
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!(@designbasekorea)\/).*/,  // ⭐ 핵심!
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      // CSS 로더
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // ... 기타 규칙
    ]
  },
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    // ⭐ ESM 모듈 우선 사용
    mainFields: ['module', 'main']
  }
};
```

**핵심 포인트**:
```javascript
// ❌ 기존 (모든 node_modules 제외)
exclude: /node_modules/

// ✅ 수정 (@designbasekorea 패키지는 포함)
exclude: /node_modules\/(?!(@designbasekorea)\/).*/
```

---

### 방법 2: Vite 사용 (더 간단!)

Webpack 대신 Vite를 사용하면 ESM을 기본 지원합니다:

**vite.config.js**:
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        ui: './src/ui/index.html'
      }
    }
  }
});
```

**package.json** 스크립트 변경:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0"
  }
}
```

---

### 방법 3: Babel 설정 추가

**.babelrc** 또는 **babel.config.js**:
```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: 'auto',  // ⭐ ESM 자동 처리
      targets: {
        browsers: ['last 2 versions']
      }
    }],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};
```

**필요한 패키지 설치**:
```bash
npm install --save-dev \
  @babel/core \
  @babel/preset-env \
  @babel/preset-react \
  @babel/preset-typescript \
  @babel/plugin-transform-runtime \
  babel-loader
```

---

## 🔍 Figma 플러그인 전용 설정

### 완전한 webpack.config.js 예제:

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',
  
  // UI 코드 엔트리포인트
  entry: {
    ui: './src/ui/index.tsx',
    code: './src/code.ts'
  },
  
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  
  module: {
    rules: [
      // ⭐ TypeScript/JavaScript 처리
      {
        test: /\.(ts|tsx|js|jsx)$/,
        // @designbasekorea 패키지는 babel-loader로 처리
        exclude: /node_modules\/(?!(@designbasekorea)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', {
                runtime: 'automatic'  // React 17+ 자동 JSX
              }],
              '@babel/preset-typescript'
            ]
          }
        }
      },
      
      // ⭐ CSS 처리
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      
      // ⭐ SCSS 처리 (선택사항)
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      
      // ⭐ 이미지/폰트 처리
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
        type: 'asset/resource'
      }
    ]
  },
  
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    // ⭐ ESM 우선 사용
    mainFields: ['module', 'main'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ui/index.html',
      filename: 'ui.html',
      chunks: ['ui']
    })
  ],
  
  // Figma API는 외부로 처리
  externals: {
    'figma': 'figma'
  }
});
```

---

## 📦 필요한 패키지 설치

### Webpack + Babel 방식:

```bash
npm install --save-dev \
  webpack \
  webpack-cli \
  webpack-dev-server \
  html-webpack-plugin \
  babel-loader \
  @babel/core \
  @babel/preset-env \
  @babel/preset-react \
  @babel/preset-typescript \
  style-loader \
  css-loader \
  typescript \
  @types/react \
  @types/react-dom
```

### Vite 방식 (더 간단):

```bash
npm install --save-dev \
  vite \
  @vitejs/plugin-react \
  typescript
```

---

## 🎯 즉시 해결 방법 (빠른 수정)

기존 Figma 플러그인 프로젝트의 `webpack.config.js`에서:

### 1. module.rules 섹션 찾기:
```javascript
module: {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,  // ❌ 이 부분을 수정!
      // ...
    }
  ]
}
```

### 2. exclude 수정:
```javascript
module: {
  rules: [
    {
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: /node_modules\/(?!(@designbasekorea)\/).*/,  // ✅ 수정!
      use: 'babel-loader'
    }
  ]
}
```

### 3. resolve.mainFields 추가:
```javascript
resolve: {
  extensions: ['.tsx', '.ts', '.jsx', '.js'],
  mainFields: ['module', 'main']  // ✅ 추가!
}
```

---

## 🔍 검증 방법

### 1. Webpack 설정 테스트:
```bash
npm run build
```

### 2. 에러 확인:
- ✅ "Module parse failed" 에러가 사라져야 함
- ✅ 빌드가 성공해야 함

### 3. 개발 서버 실행:
```bash
npm run dev
# 또는
npm start
```

---

## 🎨 전체 예제 프로젝트 구조

```
your-figma-plugin/
├── src/
│   ├── ui/
│   │   ├── index.html
│   │   ├── index.tsx          # import '@designbasekorea/figma-ui'
│   │   └── App.tsx
│   └── code.ts                 # Figma API 코드
├── webpack.config.js           # ⭐ 수정 필요!
├── babel.config.js             # ⭐ 추가 권장
├── tsconfig.json
├── package.json
└── manifest.json
```

---

## 📝 완전한 Webpack 설정 파일

**webpack.config.js** (복사해서 사용):
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',
  devtool: argv.mode === 'production' ? false : 'inline-source-map',
  
  entry: {
    ui: './src/ui/index.tsx',
    code: './src/code.ts'
  },
  
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules\/(?!(@designbasekorea)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    mainFields: ['module', 'main']
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ui/index.html',
      filename: 'ui.html',
      chunks: ['ui'],
      inject: 'body'
    })
  ]
});
```

---

## 🚀 빠른 해결 체크리스트

- [ ] `webpack.config.js`의 `exclude` 수정
- [ ] `resolve.mainFields` 추가
- [ ] `babel-loader` 설치 확인
- [ ] `@babel/preset-env`, `@babel/preset-react` 설치 확인
- [ ] CSS 로더 설치 확인 (`style-loader`, `css-loader`)
- [ ] `npm run build` 성공 확인
- [ ] 개발 서버 정상 작동 확인

---

## 💡 추가 팁

### 아이콘만 사용하는 경우:
```bash
# 아이콘 패키지만 설치
npm install @designbasekorea/icons@latest
```

```tsx
import { CloseIcon, CheckIcon } from '@designbasekorea/icons';

<CloseIcon size={24} />
```

### UI 컴포넌트 사용하는 경우:
```bash
# UI 패키지 (아이콘 자동 포함)
npm install @designbasekorea/ui@latest
```

### Figma UI 사용하는 경우:
```bash
# Figma UI 패키지 (모든 의존성 자동 포함)
npm install @designbasekorea/figma-ui@latest
```

**중요**: `@designbasekorea/figma-ui`를 설치하면 `@designbasekorea/ui`와 `@designbasekorea/icons`가 자동으로 함께 설치됩니다!

---

## 🔧 대안: Vite 사용

Webpack 설정이 복잡하다면 Vite로 전환하는 것을 추천합니다:

```bash
npm uninstall webpack webpack-cli html-webpack-plugin
npm install --save-dev vite @vitejs/plugin-react
```

**vite.config.js**:
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        ui: resolve(__dirname, 'src/ui/index.html')
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  }
});
```

Vite는 ESM을 기본적으로 지원하므로 추가 설정이 필요 없습니다!

---

## 📞 여전히 문제가 해결되지 않나요?

1. 현재 `webpack.config.js` 파일을 공유해주세요
2. `package.json`의 devDependencies 확인
3. 빌드 명령어 확인 (`npm run build` 스크립트)

GitHub Issues에 올려주시면 도와드리겠습니다!

