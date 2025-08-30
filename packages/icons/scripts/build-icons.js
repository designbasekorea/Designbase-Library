/**
 * 아이콘 빌드 스크립트
 * - SVGO: inline style → 개별 속성으로 변환, <style> 제거, 차원 제거, currentColor 적용
 * - SVGR: React TSX 변환 (자동 JSX 런타임)
 * - index.ts 생성 (imports/exports/iconMap 등)
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const { optimize } = require('svgo');
const { transform } = require('@svgr/core');

const PKG_DIR = path.join(__dirname, '..');
const SVG_DIR = path.join(PKG_DIR, 'svg');
const OUTPUT_DIR = path.join(PKG_DIR, 'src/icons');
const INDEX_FILE = path.join(PKG_DIR, 'src/index.ts');

// SVGO: style 속성/스타일 태그 제거 + 속성으로 변환
const svgoConfig = {
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false,   // viewBox 보존 (사이즈 스케일)
                    removeTitle: false,
                    removeDesc: false,
                },
            },
        },
        { name: 'inlineStyles', params: { onlyMatchedOnce: false } }, // style → 속성
        { name: 'convertStyleToAttrs' },   // style 속성 → 개별 속성들
        { name: 'removeStyleElement' },    // <style> 태그 제거
        { name: 'removeDimensions' },      // width/height 제거 (viewBox만)
        { name: 'convertColors', params: { currentColor: true } }, // 색상 → currentColor
        { name: 'cleanupAttrs' },
        { name: 'removeUnknownsAndDefaults' },
    ],
};

// SVGR: 템플릿에서만 동적 props 처리 (svgProps에 문자열 JSX 금지)
const svgrConfig = {
    typescript: true,
    jsxRuntime: 'automatic',
    expandProps: 'end',
    // 혹시 남아있는 절대색 → currentColor
    replaceAttrValues: {
        '#000': 'currentColor',
        '#000000': 'currentColor',
        black: 'currentColor',
    },
    template: ({ componentName, jsx }, { tpl }) => {
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
      primary: 'var(--color-semantic-component-icon-primary)',
      secondary: 'var(--color-semantic-component-icon-secondary)',
      success: 'var(--color-semantic-component-icon-success)',
      warning: 'var(--color-semantic-component-icon-warning)',
      danger: 'var(--color-semantic-component-icon-danger)',
      info: 'var(--color-semantic-component-icon-info)',
      muted: 'var(--color-semantic-component-icon-muted)',
      inverse: 'var(--color-semantic-component-icon-inverse)'
    };
    
    return colorMap[variant] || colorMap.primary;
  };

  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      className={className}
      style={styleSafe}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      ${jsx}
    </svg>
  );
};

${componentName}.displayName = '${componentName}';
export default ${componentName};
`;
    },
};

// 유틸
function toPascalCase(str) {
    return str
        .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
        .replace(/^(.)/, (c) => c.toUpperCase());
}
function getComponentName(file) {
    const name = path.basename(file, '.svg');
    return `${toPascalCase(name)}Icon`;
}
function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function processIcon(relPath) {
    const svgPath = path.join(SVG_DIR, relPath);
    const raw = fs.readFileSync(svgPath, 'utf8');

    const optimized = optimize(raw, svgoConfig);
    if (optimized.error) throw new Error(`SVGO failed: ${optimized.error}`);

    const componentName = getComponentName(relPath);
    const tsx = await transform(
        optimized.data,
        { ...svgrConfig, componentName },
        { componentName }
    );

    ensureDir(OUTPUT_DIR);
    const filePath = path.join(OUTPUT_DIR, `${componentName}.tsx`);
    fs.writeFileSync(filePath, tsx, 'utf8');

    // 후처리: SVGR이 템플릿을 제대로 적용하지 않았을 경우 수정
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('export default')) {
        // SVG 태그만 있는 경우 React 컴포넌트로 변환
        if (content.trim().startsWith('<svg')) {
            const svgContent = content
                .replace(/xmlns="[^"]*"/g, '')
                .replace(/fill="none"/g, '')
                .replace(/viewBox="[^"]*"/g, '')
                .replace(/<svg[^>]*>/, '')
                .replace(/<\/svg>/, '')
                .trim()
                .replace(/fill-rule=/g, 'fillRule=')
                .replace(/clip-rule=/g, 'clipRule=');

            const newContent = `/**
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
      primary: 'var(--color-semantic-component-icon-primary)',
      secondary: 'var(--color-semantic-component-icon-secondary)',
      success: 'var(--color-semantic-component-icon-success)',
      warning: 'var(--color-semantic-component-icon-warning)',
      danger: 'var(--color-semantic-component-icon-danger)',
      info: 'var(--color-semantic-component-icon-info)',
      muted: 'var(--color-semantic-component-icon-muted)',
      inverse: 'var(--color-semantic-component-icon-inverse)'
    };
    
    return colorMap[variant] || colorMap.primary;
  };

  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      className={className}
      style={styleSafe}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      ${svgContent
                    .replace(/fill="currentColor"/g, `fill={getColorValue()}`)
                    .replace(/stroke="currentColor"/g, `stroke={getColorValue()}`)
                    .replace(/stroke-width=/g, 'strokeWidth=')
                    .replace(/stroke-linecap=/g, 'strokeLinecap=')
                    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
                    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')}
    </svg>
  );
};

${componentName}.displayName = '${componentName}';
export default ${componentName};
`;

            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Fixed: ${componentName}`);
        }
    }

    return { componentName, originalName: path.basename(relPath, '.svg') };
}

function generateIndex(icons) {
    const imports = icons.map(i => `import ${i.componentName} from './icons/${i.componentName}';`).join('\n');
    const exports = icons.map(i => `  ${i.componentName},`).join('\n');
    const typeExports = icons.map(i => `export type { ${i.componentName}Props } from './icons/${i.componentName}';`).join('\n');
    const iconMap = icons.map(i => `  '${i.originalName}': ${i.componentName},`).join('\n');

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
    console.log(`Generated index.ts with ${icons.length} icons`);
}

async function main() {
    console.log('Building icons...');
    ensureDir(OUTPUT_DIR);

    const svgFiles = await glob('**/*.svg', { cwd: SVG_DIR });
    if (!svgFiles.length) {
        console.warn('No SVG files found in /svg');
        process.exit(1);
    }

    const results = await Promise.all(svgFiles.map(processIcon));
    const icons = results.filter(Boolean);

    if (!icons.length) {
        console.error('No icons processed.');
        process.exit(1);
    }

    generateIndex(icons);
    console.log(`✅ Successfully built ${icons.length} icons`);
}

if (require.main === module) {
    main().catch((err) => {
        console.error(err);
        process.exit(1);
    });
}
