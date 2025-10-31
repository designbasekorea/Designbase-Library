#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 테마 패키지의 CSS를 UI 패키지로 복사하는 스크립트
 */

function copyThemeCSS() {
    try {
        // 테마 패키지의 CSS 파일 경로
        const themeCSSPath = path.resolve(__dirname, '../../theme/dist/css/theme.css');

        // UI 패키지의 테마 디렉토리 경로
        const uiThemeDir = path.resolve(__dirname, '../src/theme');
        const uiThemeCSSPath = path.join(uiThemeDir, 'theme.css');

        // 테마 CSS 파일이 존재하는지 확인
        if (!fs.existsSync(themeCSSPath)) {
            console.error('❌ 테마 CSS 파일을 찾을 수 없습니다:', themeCSSPath);
            process.exit(1);
        }

        // UI 테마 디렉토리가 없으면 생성
        if (!fs.existsSync(uiThemeDir)) {
            fs.mkdirSync(uiThemeDir, { recursive: true });
            console.log('📁 UI 테마 디렉토리를 생성했습니다:', uiThemeDir);
        }

        // 테마 CSS 파일을 UI 패키지로 복사
        fs.copyFileSync(themeCSSPath, uiThemeCSSPath);

        console.log('✅ 테마 CSS 파일을 복사했습니다:');
        console.log('   From:', themeCSSPath);
        console.log('   To:', uiThemeCSSPath);

        // 복사된 파일 크기 확인
        const stats = fs.statSync(uiThemeCSSPath);
        console.log('   Size:', (stats.size / 1024).toFixed(2) + 'KB');

    } catch (error) {
        console.error('❌ 테마 CSS 복사 중 오류가 발생했습니다:', error.message);
        process.exit(1);
    }
}

// 스크립트 실행
if (require.main === module) {
    copyThemeCSS();
}

module.exports = copyThemeCSS;
