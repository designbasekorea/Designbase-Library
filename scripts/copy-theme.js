const fs = require('fs');
const path = require('path');

const THEME_SOURCE = path.resolve(__dirname, '../packages/theme/dist/css');
const UI_THEME = path.resolve(__dirname, '../packages/ui/src/theme');

// 대상 디렉토리 생성
if (!fs.existsSync(UI_THEME)) {
    fs.mkdirSync(UI_THEME, { recursive: true });
    console.log('📁 UI theme 디렉토리 생성:', UI_THEME);
}

// theme.css 복사
const themeSource = path.join(THEME_SOURCE, 'theme.css');
const themeDest = path.join(UI_THEME, 'theme.css');

if (fs.existsSync(themeSource)) {
    fs.copyFileSync(themeSource, themeDest);
    console.log('✅ theme.css 복사 완료');
} else {
    console.error('❌ theme.css 파일을 찾을 수 없습니다:', themeSource);
}

console.log('🎉 Theme 복사 완료!');
