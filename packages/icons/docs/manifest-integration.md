# Icon Manifest Integration Guide

`@designbasekorea/icons` 패키지에서 생성되는 `dist/icon-manifest.json`은 아이콘 메타데이터와 CDN 경로를 통합 관리하기 위한 핵심 자료입니다. 이 문서는 배포 파이프라인과 WordPress 웹, React 기반 Figma 플러그인에서 manifest를 활용하는 방법을 안내합니다.

## 1. 빌드 & 배포 플로우

1. 아이콘/메타 변경 후 로컬에서 전체 빌드를 실행합니다.
   ```bash
   cd packages/icons
   npm run build          # React 컴포넌트 번들
   npm run build:webfont  # 웹폰트 및 codepoints 갱신
   npm run build:manifest # dist/svg 복사 + manifest 생성
   ```
2. 변경 사항을 커밋하고 `changeset` 또는 수동 버전 업데이트로 `package.json` 버전을 올립니다.
3. `npm publish` 혹은 CI 파이프라인에서 배포하면 `dist` 폴더 내 산출물이 npm으로 전송됩니다.
4. 배포된 버전은 jsDelivr / unpkg 등 CDN에서 즉시 접근 가능합니다.
   ```
   https://cdn.jsdelivr.net/npm/@designbasekorea/icons@<version>/dist/icon-manifest.json
   https://unpkg.com/@designbasekorea/icons@<version>/dist/icon-manifest.json
   ```

> ⚠️ `npm run build:manifest`만 실행하면 manifest 파일만 갱신됩니다. 실제 배포 전에는 위 순서대로 `build → build:webfont → build:manifest`를 모두 실행하고 버전 업데이트/배포를 진행해야 합니다.

## 2. WordPress 웹사이트 연동

### 2.1. 기본 아이디어
- 클라이언트 혹은 서버에서 `icon-manifest.json`을 fetch
- 메모리에 `icons` 배열 저장 후 검색/필터 UI 구성
- 다운로드 버튼은 `variant.cdn.jsdelivr` 또는 `variant.distPath` 활용

### 2.2. 예시 코드 (WordPress Block / 플러그인 JS)
```html
<div id="db-icon-browser"></div>
<script type="module">
  const MANIFEST_URL = "https://cdn.jsdelivr.net/npm/@designbasekorea/icons@0.2.8/dist/icon-manifest.json";

  async function loadIcons() {
    const res = await fetch(MANIFEST_URL);
    const manifest = await res.json();
    return manifest.icons;
  }

  function renderIconList(container, icons) {
    container.innerHTML = icons
      .map(
        (icon) => `
          <div class="icon-card">
            <strong>${icon.name}</strong>
            <p>${icon.categoryName}</p>
            <button data-svg="${icon.variants[0].cdn.jsdelivr}">SVG 다운로드</button>
          </div>
        `
      )
      .join("");
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("db-icon-browser");
    const icons = await loadIcons();
    renderIconList(container, icons);
  });
</script>
```

### 2.3. 검색 & 필터 팁
- `icon.tags`, `icon.keywords`, `icon.searchText` 필드를 활용하여 `includes()` 검색
- 카테고리 필터는 `icon.categoryId` 비교
- 대량 데이터 렌더링 시 virtual scroll(예: `react-window`) 고려

### 2.4. 서버 캐싱 (선택)
- WordPress `transient` API 또는 자체 캐싱으로 manifest JSON을 주기적으로 저장하면 응답 속도 향상
- 새 버전 배포 시 캐싱 만료 처리를 위해 manifest `version` 값을 활용

## 3. React 기반 Figma 플러그인 연동

### 3.1. 네트워크 권한 설정
`manifest.json`에 CDN 도메인 허용:
```json
{
  "name": "Designbase Icons",
  "api": "1.0.0",
  "main": "build/code.js",
  "ui": "build/ui.html",
  "networkAccess": {
    "allowedDomains": [
      "https://cdn.jsdelivr.net",
      "https://unpkg.com"
    ]
  }
}
```

### 3.2. manifest 로딩 & 검색 Hook 예시
```ts
import { useEffect, useState } from "react";

const MANIFEST_URL =
  "https://cdn.jsdelivr.net/npm/@designbasekorea/icons@0.2.8/dist/icon-manifest.json";

export function useIconManifest() {
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(MANIFEST_URL);
      const manifest = await res.json();
      setIcons(manifest.icons);
      setLoading(false);
    })();
  }, []);

  return { icons, loading };
}
```

### 3.3. SVG 삽입 로직
```ts
async function insertSvg(svgUrl: string) {
  const res = await fetch(svgUrl);
  const svgText = await res.text();
  const node = figma.createNodeFromSvg(svgText);
  figma.currentPage.appendChild(node);
  figma.viewport.scrollAndZoomIntoView([node]);
}
```

### 3.4. 최적화 포인트
- manifest를 초기 1회만 로드하고 상태로 공유 (React context)
- 검색 입력값이 많을 경우 `fuse.js` 같은 fuzzy search 라이브러리 사용 가능
- CDN 캐시 갱신을 위해 사용자는 명시 버전 URL 사용, 개발 중에는 `@latest`로 빠른 확인 가능

## 4. 버전 전략 & QA 체크리스트
- **버전 태깅**: WordPress/Figma에서 동일 버전 manifest 사용 → 캐시 일관성 유지
- **QA**:
  - 새 아이콘 추가 시 `icon-meta.json`에 메타 필수 입력
  - `npm run build:webfont` 후 `codepoints.json`에 코드포인트 누락 없는지 확인
  - `npm run build:manifest` 결과에서 `dist/svg`에 SVG가 정상 복사됐는지 확인
  - manifest diff 리뷰로 카테고리/태그 오타 검증

이 가이드를 기반으로 아이콘 배포 및 소비 파이프라인을 통합 관리할 수 있습니다. WordPress 사이트나 Figma 플러그인 외의 다른 플랫폼에서도 manifest JSON을 동일하게 활용할 수 있습니다.


