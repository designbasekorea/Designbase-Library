/**
 * Rollup 빌드 설정 - Icons 패키지
 */
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
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
            declaration: true,
            declarationDir: 'dist/types',
            rootDir: 'src',
        }),
    ],
};
