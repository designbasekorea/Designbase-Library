#!/usr/bin/env node
/**
 * 모든 컴포넌트 폴더에 index.ts 파일을 자동 생성하는 스크립트
 * 
 * 실행 방법:
 * node scripts/generate-component-index.js packages/ui
 * node scripts/generate-component-index.js packages/figma-ui
 */

const fs = require('fs');
const path = require('path');

// 명령줄 인자에서 패키지 경로 가져오기
const packagePath = process.argv[2];

if (!packagePath) {
    console.error('❌ 패키지 경로를 지정해주세요.');
    console.log('예시: node scripts/generate-component-index.js packages/ui');
    process.exit(1);
}

const componentsDir = path.join(process.cwd(), packagePath, 'src/components');

if (!fs.existsSync(componentsDir)) {
    console.error(`❌ 컴포넌트 디렉토리를 찾을 수 없습니다: ${componentsDir}`);
    process.exit(1);
}

// 컴포넌트 폴더 목록 가져오기
const componentFolders = fs.readdirSync(componentsDir).filter(file => {
    const fullPath = path.join(componentsDir, file);
    return fs.statSync(fullPath).isDirectory();
});

let created = 0;
let skipped = 0;
let updated = 0;

componentFolders.forEach(componentName => {
    const componentDir = path.join(componentsDir, componentName);
    const indexPath = path.join(componentDir, 'index.ts');

    // 컴포넌트 파일 찾기 (.tsx 또는 .ts)
    const componentFile = `${componentName}.tsx`;
    const componentPath = path.join(componentDir, componentFile);

    if (!fs.existsSync(componentPath)) {
        console.log(`⚠️  Warning: ${componentName}.tsx not found, skipping`);
        return;
    }

    // 파일 내용 읽어서 export된 타입들 찾기
    const content = fs.readFileSync(componentPath, 'utf8');

    // export default 체크
    const hasDefaultExport = content.includes('export default');

    // export interface 또는 export type 찾기
    const typeMatches = content.match(/export (?:interface|type) (\w+)/g) || [];
    const types = typeMatches.map(match => {
        const typeMatch = match.match(/export (?:interface|type) (\w+)/);
        return typeMatch ? typeMatch[1] : null;
    }).filter(Boolean);

    // named export 체크 (export const ComponentName 또는 export function ComponentName)
    const hasNamedExport = content.match(new RegExp(`export (?:const|function) ${componentName}`));

    // index.ts 내용 생성
    let indexContent = '';

    if (hasDefaultExport && !hasNamedExport) {
        // default export만 있는 경우
        indexContent = `export { default as ${componentName}`;
        if (types.length > 0) {
            indexContent += `, type ${types.join(', type ')}`;
        }
        indexContent += ` } from './${componentName}';\n`;
        indexContent += `export { default } from './${componentName}';\n`;
    } else {
        // named export가 있는 경우 (또는 둘 다 있는 경우)
        indexContent = `export { ${componentName}`;
        if (types.length > 0) {
            indexContent += `, type ${types.join(', type ')}`;
        }
        indexContent += ` } from './${componentName}';\n`;
        if (hasDefaultExport) {
            indexContent += `export { default } from './${componentName}';\n`;
        }
    }

    // 기존 index.ts가 있으면 비교
    if (fs.existsSync(indexPath)) {
        const existingContent = fs.readFileSync(indexPath, 'utf8');
        if (existingContent === indexContent) {
            console.log(`⏭️  Skipped: ${componentName} (already up to date)`);
            skipped++;
            return;
        } else {
            console.log(`🔄 Updated: ${componentName}/index.ts`);
            updated++;
        }
    } else {
        console.log(`✅ Created: ${componentName}/index.ts`);
        created++;
    }

    // index.ts 파일 생성/업데이트
    fs.writeFileSync(indexPath, indexContent, 'utf8');
});

console.log('\n📊 Summary:');
console.log(`✅ Created: ${created} files`);
console.log(`🔄 Updated: ${updated} files`);
console.log(`⏭️  Skipped: ${skipped} files`);
console.log(`📁 Total: ${componentFolders.length} components`);
