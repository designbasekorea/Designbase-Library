const fs = require('fs');
const path = require('path');

const TOKENS_SOURCE = path.resolve(__dirname, '../packages/tokens/dist/css');
const THEME_SRC_TOKENS = path.resolve(__dirname, '../packages/theme/src/tokens');
const THEME_DIST_TOKENS = path.resolve(__dirname, '../packages/theme/dist/css/tokens');

// src/tokens 디렉토리 생성 및 복사
if (!fs.existsSync(THEME_SRC_TOKENS)) {
    fs.mkdirSync(THEME_SRC_TOKENS, { recursive: true });
    console.log('📁 src/tokens 디렉토리 생성:', THEME_SRC_TOKENS);
}

// dist/css/tokens 디렉토리 생성 및 복사
if (!fs.existsSync(THEME_DIST_TOKENS)) {
    fs.mkdirSync(THEME_DIST_TOKENS, { recursive: true });
    console.log('📁 dist/css/tokens 디렉토리 생성:', THEME_DIST_TOKENS);
}

// 복사 함수
function copyTokenFile(sourceFile, destDir, description) {
    if (fs.existsSync(sourceFile)) {
        const fileName = path.basename(sourceFile);
        const destFile = path.join(destDir, fileName);
        fs.copyFileSync(sourceFile, destFile);
        console.log(`✅ ${description}: ${fileName}`);
        return true;
    } else {
        console.error(`❌ ${description} 파일을 찾을 수 없습니다:`, sourceFile);
        return false;
    }
}

// tokens.css 복사 (src와 dist 모두)
const tokensSource = path.join(TOKENS_SOURCE, 'tokens.css');
copyTokenFile(tokensSource, THEME_SRC_TOKENS, 'src/tokens - tokens.css');
copyTokenFile(tokensSource, THEME_DIST_TOKENS, 'dist/css/tokens - tokens.css');

// tokens-dark.css 복사 (src와 dist 모두)
const tokensDarkSource = path.join(TOKENS_SOURCE, 'tokens-dark.css');
copyTokenFile(tokensDarkSource, THEME_SRC_TOKENS, 'src/tokens - tokens-dark.css');
copyTokenFile(tokensDarkSource, THEME_DIST_TOKENS, 'dist/css/tokens - tokens-dark.css');

console.log('🎉 토큰 파일 복사 완료! (src + dist)');
