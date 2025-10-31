/**
 * Style Dictionary - Dark Mode Only
 */

const StyleDictionary = require('style-dictionary');

const isPx = (val) => typeof val === 'string' && /^\d+(\.\d+)?px$/.test(val);
const pxToRem = (px) => `${parseFloat(px) / 16}rem`;

StyleDictionary.registerTransform({
    name: 'size/pxToRem-safe',
    type: 'value',
    matcher: (token) => {
        const hit = ['fontSize', 'spacing', 'borderRadius', 'borderWidth', 'dimension'].includes(token.type);
        return hit && typeof token.value === 'string' && isPx(token.value);
    },
    transformer: (token) => pxToRem(token.value),
});

StyleDictionary.registerTransform({
    name: 'shadow/css-array-safe',
    type: 'value',
    matcher: (token) => token.type === 'boxShadow',
    transformer: (token) => {
        const v = token.value;
        const toCss = (s) => {
            const { x = 0, y = 0, blur = 0, spread = 0, color = 'rgba(0,0,0,0.2)' } = s || {};
            const numToPx = (n) => (typeof n === 'number' ? `${n}px` : n);
            return `${numToPx(x)} ${numToPx(y)} ${numToPx(blur)} ${numToPx(spread)} ${color}`;
        };
        if (Array.isArray(v)) return v.map(toCss).join(', ');
        return toCss(v);
    },
});

module.exports = {
    source: ['tokens/dark/**/*.json'],
    include: [
        'tokens/foundation/**/*.json',
        'tokens/aliases/**/*.json',
        'tokens/semantic/**/*.json',
    ],
    platforms: {
        css: {
            transformGroup: 'css',
            transforms: [
                'attribute/cti',
                'name/cti/kebab',
                'time/seconds',
                'size/pxToRem-safe',
                'color/css',
                'shadow/css-array-safe',
            ],
            buildPath: 'dist/temp/',
            files: [{
                destination: 'dark.css',
                format: 'css/variables',
                options: {
                    selector: '[data-theme="dark"]',
                    outputReferences: true,
                },
                filter: (token) => {
                    // color.aliases로 시작하는 토큰만 포함
                    return token.path[0] === 'color' && token.path[1] === 'aliases';
                },
            }],
        },
    },
};

