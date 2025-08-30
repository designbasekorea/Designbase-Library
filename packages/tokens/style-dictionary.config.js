/**
 * Style Dictionary 설정
 * 
 * 목적: 디자인 토큰을 다양한 플랫폼 형식으로 변환
 * 기능: JSON 토큰을 CSS 변수, TypeScript 상수, SCSS 변수로 변환
 * 출력: CSS, TypeScript, SCSS, JSON 포맷 지원
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
    source: ['tokens/foundation/**/*.json', 'tokens/semantic/**/*.json'],
    platforms: {
        // CSS 변수 출력
        css: {
            transformGroup: 'css',
            transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'size/pxToRem', 'color/css', 'shadow/css'],
            buildPath: 'dist/css/',
            files: [
                {
                    destination: 'tokens.css',
                    format: 'css/variables',
                    options: {
                        selector: ':root'
                    }
                },
                {
                    destination: 'tokens-dark.css',
                    format: 'css/variables',
                    filter: token => token.filePath.includes('dark'),
                    options: {
                        selector: '[data-theme="dark"]'
                    }
                }
            ]
        },

        // TypeScript 상수 출력
        ts: {
            transformGroup: 'js',
            transforms: ['attribute/cti', 'name/cti/constant', 'size/pxToRem', 'color/hex'],
            buildPath: 'dist/ts/',
            files: [
                {
                    destination: 'tokens.ts',
                    format: 'javascript/es6',
                    options: {
                        outputReferences: true
                    }
                }
            ]
        },

        // SCSS 변수 출력
        scss: {
            transformGroup: 'scss',
            transforms: ['attribute/cti', 'name/cti/kebab', 'time/seconds', 'size/pxToRem', 'color/css'],
            buildPath: 'dist/scss/',
            files: [
                {
                    destination: '_tokens.scss',
                    format: 'scss/variables'
                }
            ]
        },

        // JSON 출력 (런타임 참조용)
        json: {
            transformGroup: 'js',
            buildPath: 'dist/json/',
            files: [
                {
                    destination: 'tokens.json',
                    format: 'json/nested'
                }
            ]
        }
    }
};
