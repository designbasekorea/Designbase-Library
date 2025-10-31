const fs = require('fs');
const path = require('path');

// 경로 설정
const themeCssSource = path.resolve(__dirname, '../../theme/dist/css/theme.css');
const themeCssDestination = path.resolve(__dirname, '../src/theme/theme.css');

// 디렉토리가 없으면 생성
const destDir = path.dirname(themeCssDestination);
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

try {
    // 파일 복사
    fs.copyFileSync(themeCssSource, themeCssDestination);

    // 파일 크기 확인
    const stats = fs.statSync(themeCssDestination);
    const fileSizeInKB = (stats.size / 1024).toFixed(2);

    console.log('✅ 테마 CSS 파일을 복사했습니다:');
    console.log(`   From: ${themeCssSource}`);
    console.log(`   To: ${themeCssDestination}`);
    console.log(`   Size: ${fileSizeInKB}KB`);
} catch (error) {
    console.error('❌ 테마 CSS 파일 복사 실패:', error.message);
    process.exit(1);
}

