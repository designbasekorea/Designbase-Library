# 📋 새 예제 생성 가이드

새로운 웹 디자인 강좌 예제를 만들 때 참고하는 템플릿입니다.

## 🚀 빠른 시작

### 1. 예제 폴더 생성

```bash
cd examples
mkdir 13-your-example-name
cd 13-your-example-name
```

### 2. 기본 파일 생성

다음 파일들을 생성하세요:

- `package.json` - 프로젝트 설정
- `vite.config.ts` - Vite 설정
- `tsconfig.json` - TypeScript 설정
- `tsconfig.node.json` - Node용 TypeScript 설정
- `index.html` - HTML 엔트리 포인트
- `src/main.tsx` - React 엔트리 포인트
- `src/App.tsx` - 메인 컴포넌트
- `README.md` - 예제 설명

### 3. package.json 템플릿

```json
{
  "name": "example-your-example-name",
  "version": "1.0.0",
  "description": "예제 설명",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@designbasekorea/icons": "workspace:*",
    "@designbasekorea/theme": "workspace:*",
    "@designbasekorea/tokens": "workspace:*",
    "@designbasekorea/ui": "workspace:*",
    "react": "^19.2.3",
    "react-dom": "^19.2.3"
  },
  "devDependencies": {
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.2.2",
    "vite": "^5.0.0"
  }
}
```

### 4. vite.config.ts 템플릿

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
```

### 5. src/main.tsx 템플릿

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Designbase UI CSS 임포트 (필수!)
import '@designbasekorea/tokens/dist/css/tokens.css';
import '@designbasekorea/theme/dist/css/theme.css';
import '@designbasekorea/ui/dist/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 6. README.md 구조

```markdown
# 예제 번호. 예제 제목

## 🎯 학습 목표

- 목표 1
- 목표 2
- 목표 3

## 📚 핵심 개념

### 1. 개념 제목

설명...

```tsx
// 코드 예제
```

## 🚀 실행 방법

\`\`\`bash
npm install
npm run dev
\`\`\`

## 📝 예제 내용

이 예제에서는 다음을 다룹니다:

1. ✅ 항목 1
2. ✅ 항목 2
3. ✅ 항목 3
```

## 📁 폴더 구조

```
예제명/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── index.html
├── README.md
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── components/      # (선택) 예제별 컴포넌트
    └── styles/          # (선택) 추가 스타일
```

## 💡 팁

1. **예제 번호**: 순차적으로 증가 (01, 02, 03...)
2. **이름 규칙**: kebab-case 사용 (예: `basic-button`, `icon-gallery`)
3. **포트**: 각 예제는 다른 포트 사용 가능 (vite.config.ts에서 설정)
4. **의존성**: `workspace:*` 사용하여 로컬 패키지 참조
5. **CSS 임포트**: 반드시 3개 CSS 파일 모두 임포트

## ✅ 체크리스트

- [ ] 예제 폴더 생성
- [ ] package.json 생성
- [ ] Vite 설정 완료
- [ ] TypeScript 설정 완료
- [ ] 기본 파일들 생성
- [ ] README.md 작성
- [ ] 예제 코드 작성
- [ ] `npm install` 성공
- [ ] `npm run dev` 실행 확인
- [ ] 예제 목록에 추가 (examples/README.md)

