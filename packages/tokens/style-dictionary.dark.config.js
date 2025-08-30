/**
 * Style Dictionary 설정 - 다크 테마
 * 
 * 목적: 다크 테마 토큰을 별도로 빌드
 * 기능: Foundation + Dark 토큰을 CSS 변수로 변환
 * 출력: 다크 테마 전용 CSS 파일
 */

const StyleDictionary = require('style-dictionary');

// 커스텀 변환 함수 등록
StyleDictionary.registerTransform({
    name: 'size/pxToRem',
    type: 'value',
    matcher: token => ['fontSize', 'spacing', 'borderRadius', 'borderWidth'].includes(token.type),
    transformer: token => {
        const value = parseFloat(token.value);
        return `${value / 16}rem`;
    }
});

StyleDictionary.registerTransform({
    name: 'shadow/css',
    type: 'value',
    matcher: token => token.type === 'boxShadow',
    transformer: token => {
        const { x, y, blur, spread, color } = token.value;
        return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
    }
});

module.exports = {
    source: ['tokens/foundation/**/*.json', 'tokens/dark/**/*.json'],
    platforms: {
        // 다크 테마 CSS 변수 출력
        css: {
            transformGroup: 'css',
            transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'size/pxToRem', 'color/css', 'shadow/css'],
            buildPath: 'dist/css/',
            files: [
                {
                    destination: 'tokens-dark.css',
                    format: 'css/variables',
                    options: {
                        selector: '[data-theme="dark"]'
                    }
                }
            ]
        }
    }
};
