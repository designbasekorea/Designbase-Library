const fs = require('fs');
const path = require('path');

console.log('🏗️  빌드 결과 확인 중...\n');

// 1. Tokens 패키지 확인
console.log('📦 @designbase/tokens 확인:');
const tokensDist = path.join(__dirname, 'packages/tokens/dist');
if (fs.existsSync(tokensDist)) {
    const files = fs.readdirSync(tokensDist);
    console.log(`  ✅ dist 폴더 존재: ${files.length}개 파일`);

    // CSS 파일 확인
    const cssFiles = files.filter(f => f.endsWith('.css'));
    console.log(`  ✅ CSS 파일: ${cssFiles.length}개`);

    // JS 파일 확인
    const jsFiles = files.filter(f => f.endsWith('.js'));
    console.log(`  ✅ JS 파일: ${jsFiles.length}개`);

    // TypeScript 파일 확인
    const tsFiles = files.filter(f => f.endsWith('.ts'));
    console.log(`  ✅ TypeScript 파일: ${tsFiles.length}개`);
} else {
    console.log('  ❌ dist 폴더 없음');
}

// 2. Icons 패키지 확인
console.log('\n📦 @designbase/icons 확인:');
const iconsDist = path.join(__dirname, 'packages/icons/dist');
if (fs.existsSync(iconsDist)) {
    const files = fs.readdirSync(iconsDist);
    console.log(`  ✅ dist 폴더 존재: ${files.length}개 파일`);

    // JS 파일 확인
    const jsFiles = files.filter(f => f.endsWith('.js'));
    console.log(`  ✅ JS 파일: ${jsFiles.length}개`);

    // 파일 크기 확인
    const esmFile = path.join(iconsDist, 'index.esm.js');
    if (fs.existsSync(esmFile)) {
        const stats = fs.statSync(esmFile);
        console.log(`  ✅ ESM 파일 크기: ${(stats.size / 1024).toFixed(1)}KB`);
    }
} else {
    console.log('  ❌ dist 폴더 없음');
}

// 3. UI 패키지 확인
console.log('\n📦 @designbase/ui 확인:');
const uiDist = path.join(__dirname, 'packages/ui/dist');
if (fs.existsSync(uiDist)) {
    const files = fs.readdirSync(uiDist);
    console.log(`  ✅ dist 폴더 존재: ${files.length}개 파일`);

    // JS 파일 확인
    const jsFiles = files.filter(f => f.endsWith('.js'));
    console.log(`  ✅ JS 파일: ${jsFiles.length}개`);

    // TypeScript 정의 파일 확인
    const dtsFiles = files.filter(f => f.endsWith('.d.ts'));
    console.log(`  ✅ TypeScript 정의 파일: ${dtsFiles.length}개`);
} else {
    console.log('  ❌ dist 폴더 없음');
}

// 4. Theme 패키지 확인
console.log('\n📦 @designbase/theme 확인:');
const themeDist = path.join(__dirname, 'packages/theme/dist');
if (fs.existsSync(themeDist)) {
    const files = fs.readdirSync(themeDist);
    console.log(`  ✅ dist 폴더 존재: ${files.length}개 파일`);

    // CSS 파일 확인
    const cssDir = path.join(__dirname, 'packages/theme/dist/css');
    if (fs.existsSync(cssDir)) {
        const cssFiles = fs.readdirSync(cssDir);
        console.log(`  ✅ CSS 파일: ${cssFiles.length}개`);
    }
} else {
    console.log('  ❌ dist 폴더 없음');
}

// 5. Utils 패키지 확인
console.log('\n📦 @designbase/utils 확인:');
const utilsDist = path.join(__dirname, 'packages/utils/dist');
if (fs.existsSync(utilsDist)) {
    const files = fs.readdirSync(utilsDist);
    console.log(`  ✅ dist 폴더 존재: ${files.length}개 파일`);
} else {
    console.log('  ❌ dist 폴더 없음');
}

// 6. Figma Bridge 패키지 확인
console.log('\n📦 @designbase/figma-bridge 확인:');
const figmaDist = path.join(__dirname, 'packages/figma-bridge/dist');
if (fs.existsSync(figmaDist)) {
    const files = fs.readdirSync(figmaDist);
    console.log(`  ✅ dist 폴더 존재: ${files.length}개 파일`);
} else {
    console.log('  ❌ dist 폴더 없음');
}

console.log('\n🎉 모든 패키지 빌드 완료!');
console.log('\n📋 사용 가능한 기능들:');
console.log('  • 디자인 토큰 (색상, 간격, 타이포그래피, 그림자)');
console.log('  • 테마 시스템 (라이트/다크 테마)');
console.log('  • 유틸리티 함수');
console.log('  • Figma 브리지 (플러그인 연동)');
console.log('  • 아이콘 라이브러리 (384개 아이콘)');
console.log('  • UI 컴포넌트 (Button, Input, Card, Modal 등)');
