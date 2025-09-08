/**
 * Rollup 빌드 설정 - Icons 패키지 (CJS 버전)
 * - CJS/ESM/UMD 번들 생성
 * - 타입 선언은 rollup-plugin-dts로 단일 파일(dist/index.d.ts)로 번들
 */

const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const dts = require('rollup-plugin-dts').default;

const jsConfig = {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'auto',
            sourcemap: true,
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'react/jsx-runtime': 'ReactJSXRuntime',
            },
        },
        {
            file: 'dist/index.esm.js',
            format: 'es',
            sourcemap: true,
        },
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'DesignbaseIcons',
            sourcemap: true,
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'react/jsx-runtime': 'ReactJSXRuntime',
            },
        },
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    plugins: [
        resolve({ browser: true, extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'] }),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
            // 선언은 dts 번들에서 처리 -> 여기서는 생성하지 않음
            declaration: false,
            noEmit: false,
            rootDir: 'src',
        }),
    ],
};

const dtsConfig = {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
};

module.exports = [jsConfig, dtsConfig];
