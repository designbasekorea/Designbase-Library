/*
 * merge-tokens-into-theme.js
 * - 목적: @designbase/tokens의 tokens.css를 theme.css 상단에 병합
 * - 실행 시점: npm run build:css 직후
 */

const fs = require('fs');
const path = require('path');

function resolveTokensCss() {
    // 1) 정식 export 경로 시도 (package.json exports { "./css": "./dist/css/tokens.css" })
    try {
        const resolved = require.resolve('@designbase/tokens/css');
        return resolved;
    } catch (e) {
        // 2) 모노레포 로컬 경로 폴백
        const localPath = path.resolve(__dirname, '../../tokens/dist/css/tokens.css');
        if (fs.existsSync(localPath)) return localPath;
        throw new Error('Cannot resolve tokens.css from @designbase/tokens');
    }
}

function main() {
    const themeCssPath = path.resolve(__dirname, '../dist/css/theme.css');
    if (!fs.existsSync(themeCssPath)) {
        console.warn('[merge-tokens] dist/css/theme.css not found. Skip.');
        return;
    }

    const tokensCssPath = resolveTokensCss();
    const tokensCssRaw = fs.readFileSync(tokensCssPath, 'utf8');
    // normalize selector in case tokens.css contains '::root'
    const tokensCss = tokensCssRaw.replace(/::root/g, ':root');
    const themeCss = fs.readFileSync(themeCssPath, 'utf8');

    const banner = '/* merged from @designbase/tokens/css */\n';
    const merged = `${banner}${tokensCss}\n${themeCss}`;

    fs.writeFileSync(themeCssPath, merged, 'utf8');
    console.log('[merge-tokens] merged tokens.css into theme.css');
}

main();


