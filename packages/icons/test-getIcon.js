/**
 * getIcon 함수 테스트 스크립트
 */

// 빌드된 아이콘 패키지 import
const { getIcon, iconNames, iconCount } = require('./dist/index.cjs.js');

console.log('=== getIcon 함수 테스트 ===');
console.log(`총 아이콘 개수: ${iconCount}`);
console.log(`iconNames 길이: ${iconNames.length}`);

// 첫 번째 아이콘 테스트
if (iconNames.length > 0) {
    const firstIconName = iconNames[0];
    console.log(`\n첫 번째 아이콘 이름: ${firstIconName}`);

    try {
        const icon = getIcon(firstIconName);
        console.log(`getIcon('${firstIconName}') 결과:`, icon ? '성공' : '실패');
        console.log('아이콘 타입:', typeof icon);
        console.log('아이콘 이름:', icon?.displayName || 'undefined');
    } catch (error) {
        console.error('getIcon 에러:', error.message);
    }
}

// 올바른 아이콘 이름으로 테스트
console.log('\n=== 올바른 아이콘 이름 테스트 ===');
const testIcons = ['user', 'search', 'settings', 'home-outline', 'home-filled'];
testIcons.forEach(iconName => {
    try {
        const icon = getIcon(iconName);
        console.log(`${iconName}: ${icon ? '✅ 성공' : '❌ 실패'}`);
    } catch (error) {
        console.log(`${iconName}: ❌ 에러 - ${error.message}`);
    }
});

// 사용 가능한 아이콘 이름 몇 개 출력
console.log('\n=== 사용 가능한 아이콘 이름 예시 ===');
iconNames.slice(0, 10).forEach(name => {
    console.log(`- ${name}`);
});

console.log('\n=== 테스트 완료 ===');
