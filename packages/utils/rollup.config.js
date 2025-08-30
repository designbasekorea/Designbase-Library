/**
 * Rollup 빌드 설정 - Utils 패키지
 * 
 * 목적: 유틸리티 함수들을 다양한 형식으로 번들링
 * 기능: ESM, CJS, UMD 형식으로 출력
 * 최적화: Tree-shaking 지원, 외부 종속성 최소화
 */

import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

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
            name: 'DesignbaseUtils',
        },
    ],
    plugins: [
        resolve({
            browser: true,
        }),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist',
            rootDir: 'src',
        }),
    ],
};
