/**
 * Style Dictionary 설정 (라이트+다크 한 파일 동시 출력, 표준 css/variables 재사용)
 * - :root / [data-theme="dark"]를 한 파일에 출력
 * - 기본 css/variables 포맷을 그대로 호출 → `--name: value;`와 `var(...)` 참조가 정확히 생성
 */

const StyleDictionary = require('style-dictionary');

// ---------- 유틸 ----------
const isPx = (val) => typeof val === 'string' && /^\d+(\.\d+)?px$/.test(val);
const pxToRem = (px) => `${parseFloat(px) / 16}rem`;
const isDarkToken = (token) => /[/\\]dark[/\\]/.test(token.filePath);

// ---------- 커스텀 변환 ----------
StyleDictionary.registerTransform({
    name: 'size/pxToRem-safe',
    type: 'value',
    matcher: (token) => {
        const typeHit = ['fontSize', 'spacing', 'borderRadius', 'borderWidth', 'dimension'].includes(token.type);
        return typeHit && typeof token.value === 'string' && isPx(token.value);
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

// ---------- 기본 포맷 재사용한 멀티 스코프 포맷 ----------
const { fileHeader } = StyleDictionary.formatHelpers;
const baseCssVariables = StyleDictionary.format['css/variables'];

StyleDictionary.registerFormat({
    name: 'css/variables-multi-scope',
    formatter: ({ dictionary, options = {}, file, platform }) => {
        const lightSelector = options.lightSelector || ':root';
        const darkSelector = options.darkSelector || '[data-theme="dark"]';
        const outputReferences = options.outputReferences !== false;

        const header = fileHeader({ file });

        // 라이트/다크 토큰 분리
        const lightAll = dictionary.allTokens.filter((t) => !isDarkToken(t));
        const darkAll = dictionary.allTokens.filter((t) => isDarkToken(t));

        // 기본 css/variables 포맷을 "그대로" 호출하여 블록 생성
        const lightCss = baseCssVariables({
            dictionary: { ...dictionary, allTokens: lightAll },
            options: { ...options, selector: lightSelector, outputReferences },
            file,
            platform,
        });

        const darkCss = baseCssVariables({
            dictionary: { ...dictionary, allTokens: darkAll },
            options: { ...options, selector: darkSelector, outputReferences },
            file,
            platform,
        });

        // fileHeader + 두 블록 합치기 (중복 헤더 제거)
        const stripHeader = (s) => s.replace(/\/\*\*[\s\S]*?\*\/\s*/m, '');
        return [
            header,
            stripHeader(lightCss).trim(),
            '',
            stripHeader(darkCss).trim(),
            '',
        ].join('\n');
    },
});

// ---------- 메인 설정 ----------
module.exports = {
    source: [
        'tokens/foundation/**/*.json',
        'tokens/semantic/**/*.json',
        'tokens/dark/**/*.json',
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
            buildPath: 'dist/css/',
            files: [
                {
                    destination: 'tokens.css',
                    format: 'css/variables-multi-scope',
                    options: {
                        outputReferences: true,
                        lightSelector: ':root',
                        darkSelector: '[data-theme="dark"]',
                    },
                },
            ],
        },

        // 선택: SCSS/TS/JSON 필요 시 유지
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
            files: [{ destination: '_tokens.scss', format: 'scss/variables' }],
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
                { destination: 'tokens.ts', format: 'javascript/es6', options: { outputReferences: true } },
            ],
        },
        json: {
            transformGroup: 'js',
            transforms: ['attribute/cti', 'name/cti/kebab', 'size/pxToRem-safe', 'color/hex'],
            buildPath: 'dist/json/',
            files: [{ destination: 'tokens.json', format: 'json/nested' }],
        },
    },
};
