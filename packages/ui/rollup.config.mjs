/**
 * Rollup 빌드 설정 - UI 패키지
 * 
 * 목적: React UI 컴포넌트를 다양한 형식으로 번들링
 * 기능: ESM, CJS, UMD 형식으로 출력
 * 최적화: Tree-shaking 지원, 외부 React 종속성
 */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

// SCSS와 CSS 파일을 처리하는 플러그인
const handleScssPlugin = () => ({
    name: 'handle-scss',
    resolveId(id) {
        if (id.endsWith('.scss') || id.endsWith('.css')) {
            return { id, external: true };
        }
        return null;
    }
});

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
                sourcemap: true,
                exports: 'named', // ⚠️ named export 경고 제거
            },
            {
                file: 'dist/index.esm.js',
                format: 'esm',
                sourcemap: true,
            },
            {
                file: 'dist/index.umd.js',
                format: 'umd',
                name: 'DesignbaseUI',
                sourcemap: true,
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        ],
        external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime', '@designbasekorea/icons', '@designbasekorea/theme', '@designbasekorea/tokens'],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false, // ⚠️ 첫 빌드에서 d.ts 안 뽑음
                sourceMap: false,
            }),
            postcss({
                extract: true,
                modules: false,
                minimize: true,
                extensions: ['.css', '.scss'],
                use: ['sass'],
                inject: false,
                sourceMap: true,
            }),
        ],
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'esm',
        },
        external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime', '@designbasekorea/icons', '@designbasekorea/theme', '@designbasekorea/tokens'],
        plugins: [
            handleScssPlugin(),
            dts({
                respectExternal: true,
                compilerOptions: {
                    skipLibCheck: true,
                },
            }),
        ],
    },
];
