/**
 * Rollup 빌드 설정 - Theme 패키지
 * 
 * 목적: TypeScript 테마 모듈을 다양한 형식으로 번들링
 * 기능: ESM, CJS, UMD 형식으로 출력
 * 최적화: Tree-shaking 지원, 타입 선언 파일 생성
 */

import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import sass from 'sass';

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
            name: 'DesignbaseTheme',
        },
    ],
    plugins: [
        resolve({
            browser: true,
        }),
        commonjs(),
        postcss({
            extract: true,
            modules: false,
            use: ['sass'],
            // CSS import를 자동으로 해결
            inject: false,
            minimize: true,
            // 외부 CSS 파일 import 해결
            url: false
        }),
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist',
            rootDir: 'src',
        }),
    ],
};
