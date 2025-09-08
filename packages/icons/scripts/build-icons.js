/**
 * 개선된 아이콘 빌드 스크립트 (CJS/ESM 호환 + 템플릿 주입 안정화)
 * - 동적 import로 @svgr/core 사용 (ESM 전용 버전 대응)
 * - 템플릿에서 기본 export 보장
 * - svgProps 대신 템플릿에서 <svg ...>에 직접 주입 (width/height/style/props)
 * - 상세 로깅/통계 동일 유지
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const { optimize } = require('svgo');

const PKG_DIR = path.join(__dirname, '..');
const SVG_DIR = path.join(PKG_DIR, 'svg');
const OUTPUT_DIR = path.join(PKG_DIR, 'src/icons');
const INDEX_FILE = path.join(PKG_DIR, 'src/index.ts');

// 빌드 통계
const buildStats = {
  total: 0,
  success: 0,
  failed: 0,
  errors: [],
  warnings: [],
};

// SVGO 설정
const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          removeTitle: false,
          removeDesc: false,
        },
      },
    },
    { name: 'inlineStyles', params: { onlyMatchedOnce: false } },
    { name: 'convertStyleToAttrs' },
    { name: 'removeStyleElement' },
    { name: 'removeDimensions' },
    { name: 'convertColors', params: { currentColor: true } },
    { name: 'cleanupAttrs' },
    { name: 'removeUnknownsAndDefaults' },
  ],
};

// SVGR transform 안전 로더 (ESM/CJS 모두 대응)
let transformFn = null;
async function getTransform() {
  if (transformFn) return transformFn;
  try {
    // ESM 우선 시도
    const mod = await import('@svgr/core');
    transformFn = mod.transform || mod.default?.transform || mod.default;
  } catch (e1) {
    try {
      // CJS fallback (일부 구버전)
      // eslint-disable-next-line global-require
      const mod = require('@svgr/core');
      transformFn = mod.transform || mod.default?.transform || mod.default;
    } catch (e2) {
      throw new Error(
        `@svgr/core 로딩 실패: ${e1?.message || e1} / ${e2?.message || e2}`
      );
    }
  }
  if (typeof transformFn !== 'function') {
    throw new Error('@svgr/core: transform 함수를 찾을 수 없습니다.');
  }
  return transformFn;
}

// 유틸 함수들
function toPascalCase(str) {
  return str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (c) => c.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '');
}

function getComponentName(file) {
  const name = path.basename(file, '.svg');
  let comp = `${toPascalCase(name)}Icon`;
  // 식별자 첫 글자가 숫자인 경우 대비
  if (/^\d/.test(comp)) comp = `I${comp}`;
  return comp;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function validateSvgFile(svgPath, content) {
  const issues = [];
  if (!content.includes('<svg')) issues.push('SVG 태그가 없습니다');
  if (!content.includes('viewBox')) issues.push('viewBox 속성이 없습니다');
  if (content.length < 50) issues.push('파일이 너무 작습니다 (손상 의심)');
  return issues;
}

// SVGR 설정 (템플릿에서 직접 <svg ...> 주입 처리)
const svgrConfig = {
  typescript: true,
  jsxRuntime: 'automatic',
  expandProps: 'end', // {...props}를 루트에 넣을 건데, 템플릿에서 최종 치환
  replaceAttrValues: {
    '#000': 'currentColor',
    '#000000': 'currentColor',
    black: 'currentColor',
  },
  // svgProps는 쓰지 않고 템플릿에서 루트 <svg>를 문자열 치환으로 제어
  template: ({ componentName, jsx }, { tpl }) => {
    // 루트 <svg ...>에 동적 속성 삽입
    // - width/height: sizeValue
    // - className: className
    // - style: { color: getColorValue(), ...styleSafe }
    // - {...props} 포함
    const injectedJsx = jsx.replace(
      /<svg([^>]*)>/,
      `<svg$1
  width={sizeValue}
  height={sizeValue}
  className={className}
  style={{ color: getColorValue(), ...styleSafe }}
  {...props}
>`
    );

    return tpl`
/**
 * ${componentName} 아이콘 컴포넌트
 * 자동 생성됨 - 수정하지 마세요
 */

import React, { type CSSProperties } from 'react';

export interface ${componentName}Props {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'muted' | 'inverse';
}

const ${componentName}: React.FC<${componentName}Props> = ({
  size = 16,
  className,
  color,
  style,
  variant = 'primary',
  ...props
}) => {
  const styleSafe = (style && typeof style === 'object') ? style : undefined;
  const sizeValue = typeof size === 'number' ? \`\${size}px\` : size;

  // 디자인 토큰 기반 색상 결정
  const getColorValue = () => {
    if (color) return color;

    const colorMap = {
      primary: 'var(--db-icon-primary)',
      secondary: 'var(--db-icon-secondary)',
      success: 'var(--db-icon-success)',
      warning: 'var(--db-icon-warning)',
      danger: 'var(--db-icon-danger)',
      info: 'var(--db-icon-info)',
      muted: 'var(--db-icon-muted)',
      inverse: 'var(--db-icon-inverse)'
    };

    return colorMap[variant] || colorMap.primary;
  };

  return (
    ${injectedJsx}
  );
};

${componentName}.displayName = '${componentName}';
export default ${componentName};
`;
  },
};

async function processIcon(relPath) {
  const svgPath = path.join(SVG_DIR, relPath);
  const componentName = getComponentName(relPath);

  try {
    if (!fs.existsSync(svgPath)) {
      throw new Error('SVG 파일이 존재하지 않습니다');
    }

    const raw = fs.readFileSync(svgPath, 'utf8');

    const validationIssues = validateSvgFile(svgPath, raw);
    if (validationIssues.length > 0) {
      throw new Error(`SVG 검증 실패: ${validationIssues.join(', ')}`);
    }

    const optimized = optimize(raw, svgoConfig);
    if (optimized.error) {
      throw new Error(`SVGO 최적화 실패: ${optimized.error}`);
    }

    const transform = await getTransform();
    let tsx = await transform(
      optimized.data,
      { ...svgrConfig, componentName },
      { componentName }
    );

    // 혹시라도 기본 내보내기가 누락된 경우(버전/환경에 따른 예외) 방어 로직
    if (!/export\s+default\s+${componentName}\s*;?/.test(tsx)) {
      // 제안: 공백/개행/세미콜론 허용 폭 넓힘
      const defaultRe = new RegExp(`export\\s+default\\s+${componentName}\\s*;?\\s*$`, 'm');
      if (!defaultRe.test(tsx)) {
        tsx += `\n\nexport default ${componentName};\n`;
        buildStats.warnings.push(`${componentName}: export default를 수동으로 추가했습니다`);
      }
    }

    ensureDir(OUTPUT_DIR);

    const filePath = path.join(OUTPUT_DIR, `${componentName}.tsx`);
    fs.writeFileSync(filePath, tsx, 'utf8');

    buildStats.success++;
    console.log(`✅ ${componentName} - 성공`);
    return { componentName, originalName: path.basename(relPath, '.svg') };
  } catch (error) {
    buildStats.failed++;
    const errorMsg = `${componentName}: ${error.message}`;
    buildStats.errors.push(errorMsg);
    console.error(`❌ ${errorMsg}`);
    return null;
  }
}

function generateIndex(icons) {
  if (icons.length === 0) {
    console.error('생성할 아이콘이 없습니다!');
    return;
  }

  const imports = icons
    .map((i) => `import ${i.componentName} from './icons/${i.componentName}';`)
    .join('\n');
  const exports = icons.map((i) => `  ${i.componentName},`).join('\n');
  const typeExports = icons
    .map((i) => `export type { ${i.componentName}Props } from './icons/${i.componentName}';`)
    .join('\n');
  const iconMap = icons.map((i) => `  '${i.originalName}': ${i.componentName},`).join('\n');

  const content = `/**
 * Designbase 아이콘 라이브러리 메인 엔트리 포인트
 * 자동 생성됨 - 수정하지 마세요
 * 생성 시간: ${new Date().toISOString()}
 */

${imports}

// 모든 아이콘 컴포넌트 내보내기
export {
${exports}
};

// 타입 내보내기
${typeExports}

// 아이콘 맵 (동적 접근용)
export const iconMap = {
${iconMap}
} as const;

// 아이콘 이름 타입
export type IconName = keyof typeof iconMap;

// 모든 아이콘 목록
export const iconNames = Object.keys(iconMap) as IconName[];

// 아이콘 컴포넌트 가져오기 헬퍼
export const getIcon = (name: IconName) => iconMap[name];

// 기본 아이콘 Props 인터페이스
import type { CSSProperties } from 'react';
export interface BaseIconProps {
  size?: string | number;
  className?: string;
  color?: string;
  style?: CSSProperties;
}

// 아이콘 개수
export const iconCount = ${icons.length};
`;

  fs.writeFileSync(INDEX_FILE, content, 'utf8');
  console.log(`📝 index.ts 생성 완료 (${icons.length}개 아이콘)`);
}

function printBuildSummary() {
  console.log('\n' + '='.repeat(60));
  console.log('🏗️  아이콘 빌드 완료 요약');
  console.log('='.repeat(60));
  console.log(`📊 총 SVG 파일: ${buildStats.total}`);
  console.log(`✅ 성공: ${buildStats.success}`);
  console.log(`❌ 실패: ${buildStats.failed}`);
  console.log(`📈 성공률: ${((buildStats.success / buildStats.total) * 100).toFixed(1)}%`);

  if (buildStats.errors.length > 0) {
    console.log('\n🚨 에러 목록:');
    buildStats.errors.forEach((error) => console.log(`  - ${error}`));
  }

  if (buildStats.warnings.length > 0) {
    console.log('\n⚠️  경고 목록:');
    buildStats.warnings.forEach((warning) => console.log(`  - ${warning}`));
  }

  if (buildStats.success > 0) {
    console.log(`\n🎉 ${buildStats.success}개 아이콘이 성공적으로 생성되었습니다!`);
  }

  if (buildStats.failed > 0) {
    console.log(`\n💡 ${buildStats.failed}개 파일의 문제를 해결하고 다시 빌드해보세요.`);
  }
}

async function main() {
  console.log('🚀 아이콘 빌드 시작...');
  console.log(`📁 SVG 디렉토리: ${SVG_DIR}`);
  console.log(`📁 출력 디렉토리: ${OUTPUT_DIR}`);

  const svgFiles = await glob('**/*.svg', { cwd: SVG_DIR });
  buildStats.total = svgFiles.length;

  if (!svgFiles.length) {
    console.error('❌ SVG 파일을 찾을 수 없습니다!');
    console.log(`📁 확인된 디렉토리: ${SVG_DIR}`);
    console.log('💡 SVG 파일이 올바른 위치에 있는지 확인하세요.');
    process.exit(1);
  }

  console.log(`\n📋 발견된 SVG 파일: ${svgFiles.length}개`);
  svgFiles.forEach((file) => console.log(`  - ${file}`));

  if (fs.existsSync(OUTPUT_DIR)) {
    console.log(`\n🧹 기존 출력 디렉토리 정리 중...`);
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  }
  ensureDir(OUTPUT_DIR);

  console.log(`\n⚙️  아이콘 변환 중...`);
  const results = await Promise.all(svgFiles.map(processIcon));
  const icons = results.filter(Boolean);

  if (icons.length > 0) {
    generateIndex(icons);
  }

  printBuildSummary();

  if (buildStats.failed > 0) {
    console.log('\n⚠️  일부 아이콘 빌드에 실패했습니다.');
    process.exit(1);
  } else {
    console.log('\n🎯 모든 아이콘이 성공적으로 빌드되었습니다!');
    process.exit(0);
  }
}

if (require.main === module) {
  main().catch((err) => {
    console.error('💥 치명적인 오류 발생:', err);
    process.exit(1);
  });
}
