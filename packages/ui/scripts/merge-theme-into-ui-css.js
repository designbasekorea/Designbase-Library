/*
 * merge-theme-into-ui-css.js
 * - 목적: @designbase/theme/dist/css/theme.css를 UI dist CSS 상단에 병합
 */

const fs = require('fs');
const path = require('path');

function resolveThemeCss() {
    try {
        // theme 패키지의 style 필드 또는 dist 경로 사용
        const pkgPath = require.resolve('@designbase/theme/package.json');
        const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
        const styleRel = pkg.style || 'dist/css/theme.css';
        const themeCssPath = path.resolve(path.dirname(pkgPath), styleRel);
        if (fs.existsSync(themeCssPath)) return themeCssPath;
    } catch (e) {
        // ignore
    }
    // 모노레포 로컬 경로 폴백
    const local = path.resolve(__dirname, '../../theme/dist/css/theme.css');
    if (fs.existsSync(local)) return local;
    throw new Error('Cannot resolve @designbase/theme dist css');
}

function main() {
    const uiCssCandidates = [
        path.resolve(__dirname, '../dist/index.css'),
        path.resolve(__dirname, '../dist/index.esm.css'),
        path.resolve(__dirname, '../dist/index.umd.css'),
    ];

    const themeCssPath = resolveThemeCss();
    const themeCssRaw = fs.readFileSync(themeCssPath, 'utf8');
    const themeCss = themeCssRaw.replace(/::root/g, ':root');

    uiCssCandidates.forEach((cssPath) => {
        if (!fs.existsSync(cssPath)) return;
        const current = fs.readFileSync(cssPath, 'utf8');
        const banner = '/* merged from @designbase/theme */\n';
        const merged = `${banner}${themeCss}\n${current}`;
        fs.writeFileSync(cssPath, merged, 'utf8');
        console.log(`[merge-theme] merged theme.css into ${path.basename(cssPath)}`);
    });
}

main();


