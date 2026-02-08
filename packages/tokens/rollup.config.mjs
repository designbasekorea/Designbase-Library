/**
 * Rollup 빌드 설정
 * 
 * 목적: TypeScript 토큰 모듈을 다양한 형식으로 번들링
 * 기능: ESM, CJS, UMD 형식으로 출력
 * 최적화: Tree-shaking 지원, 타입 선언 파일 생성
 */

import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs.js',
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
            name: 'DesignbaseTokens',
            globals: {
                react: 'React',
            },
        },
    ],
    external: ['react', 'react-dom'],
    plugins: [
        json(),
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
