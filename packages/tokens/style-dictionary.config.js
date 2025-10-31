/**
 * Style Dictionary 설정 - SCSS, TS, JSON용 (CSS는 별도 스크립트 사용)
 */

const StyleDictionary = require('style-dictionary');

// ---------- 유틸 ----------
const isPx = (val) => typeof val === 'string' && /^\d+(\.\d+)?px$/.test(val);
const pxToRem = (px) => `${parseFloat(px) / 16}rem`;

// ---------- 변환 ----------
StyleDictionary.registerTransform({
    name: 'size/pxToRem-safe',
    type: 'value',
    matcher: (token) => {
        const hit = ['fontSize', 'spacing', 'borderRadius', 'borderWidth', 'dimension'].includes(token.type);
        return hit && typeof token.value === 'string' && isPx(token.value);
    },
    transformer: (token) => pxToRem(token.value),
});

// ---------- 메인 설정 (SCSS, TS, JSON만) ----------
module.exports = {
    source: [
        'tokens/foundation/**/*.json',
        'tokens/aliases/**/*.json',
        'tokens/semantic/**/*.json',
    ],
    platforms: {
        scss: {
            transformGroup: 'scss',
            transforms: [
                'attribute/cti',
                'name/cti/kebab',
                'time/seconds',
                'size/pxToRem-safe',
                'color/css',
            ],
            buildPath: 'dist/scss/',
            files: [
                {
                    destination: '_tokens.scss',
                    format: 'scss/variables',
                    options: { outputReferences: true },
                },
            ],
        },
        ts: {
            transformGroup: 'js',
            transforms: [
                'attribute/cti',
                'name/cti/constant',
                'size/pxToRem-safe',
                'color/hex',
            ],
            buildPath: 'dist/ts/',
            files: [
                {
                    destination: 'tokens.ts',
                    format: 'javascript/es6',
                    options: { outputReferences: true },
                },
            ],
        },
        json: {
            transformGroup: 'js',
            transforms: [
                'attribute/cti',
                'name/cti/kebab',
                'size/pxToRem-safe',
                'color/hex',
            ],
            buildPath: 'dist/json/',
            files: [
                {
                    destination: 'tokens.json',
                    format: 'json/nested',
                },
            ],
        },
    },
};
