/**
 * Rollup 빌드 설정 - UI 패키지
 * 
 * 목적: React UI 컴포넌트를 다양한 형식으로 번들링
 * 기능: ESM, CJS, UMD 형식으로 출력
 * 최적화: Tree-shaking 지원, 외부 React 종속성
 */

import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            exports: 'auto',
        },
        {
            file: 'dist/index.esm.js',
            format: 'es',
        },
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'DesignbaseUI',
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                clsx: 'clsx',
                'react-aria': 'ReactAria',
                'react-stately': 'ReactStately',
            },
        },
    ],
    external: [
        'react',
        'react-dom',
        'clsx',
        'react-aria',
        'react-stately',
        '@react-aria/utils',
        '@designbase/icons',
        '@designbase/theme',
        '@designbase/tokens',
    ],
    plugins: [
        resolve({
            browser: true,
        }),
        commonjs(),
        postcss({
            extract: false,
            inject: true,
        }),
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist',
            rootDir: 'src',
        }),
    ],
};
