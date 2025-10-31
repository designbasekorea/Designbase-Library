#!/usr/bin/env node

/**
 * 라이트/다크 모드 토큰 빌드 스크립트
 * 
 * 1. 라이트 모드 빌드 (foundation + semantic)
 * 2. 다크 모드 빌드 (dark 폴더만)
 * 3. CSS 파일 병합
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');

console.log('\n🔨 Designbase Tokens 빌드 시작...\n');

// Temp 디렉토리 생성
const tempDir = path.join(__dirname, '../dist/temp');
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
}

try {
    // 1. 라이트 모드 빌드
    console.log('☀️  라이트 모드 빌드...');
    execSync('npx style-dictionary build --config sd.config.light.js', {
        cwd: path.join(__dirname, '..'),
        stdio: 'inherit'
    });

    // 2. 다크 모드 빌드
    console.log('\n🌙 다크 모드 빌드...');
    execSync('npx style-dictionary build --config sd.config.dark.js', {
        cwd: path.join(__dirname, '..'),
        stdio: 'inherit'
    });

    // 3. CSS 파일 병합
    console.log('\n🔀 CSS 파일 병합...');
    const lightCss = fs.readFileSync(path.join(tempDir, 'light.css'), 'utf8');
    const darkCss = fs.readFileSync(path.join(tempDir, 'dark.css'), 'utf8');

    const header = `/**
 * Designbase Korea Design Tokens
 * Generated: ${new Date().toISOString()}
 * Version: ${pkg.version}
 *
 * Structure:
 * - Foundation: Raw scales (global)
 * - Aliases: Human-friendly labels (global)
 * - Semantic: Product meaning (light theme = :root)
 * - Dark: Overrides only (dark theme = [data-theme="dark"])
 */

`;

    const stripHeader = (s) => s.replace(/\/\*\*[\s\S]*?\*\/\s*/m, '');
    const merged = header + stripHeader(lightCss).trim() + '\n\n' + stripHeader(darkCss).trim() + '\n';

    // CSS 디렉토리 생성 및 저장
    const cssDir = path.join(__dirname, '../dist/css');
    if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir, { recursive: true });
    }
    fs.writeFileSync(path.join(cssDir, 'tokens.css'), merged);

    // Temp 파일 정리
    fs.unlinkSync(path.join(tempDir, 'light.css'));
    fs.unlinkSync(path.join(tempDir, 'dark.css'));
    fs.rmdirSync(tempDir);

    console.log('✅ tokens.css 생성 완료!');

    // 4. SCSS, TS, JSON 빌드
    console.log('\n📦 기타 포맷 빌드 (SCSS, TS, JSON)...');
    execSync('npx style-dictionary build --config style-dictionary.config.js', {
        cwd: path.join(__dirname, '..'),
        stdio: 'inherit'
    });

    console.log('\n✨ 모든 토큰 빌드 완료!\n');

} catch (error) {
    console.error('\n❌ 빌드 실패:', error.message);
    process.exit(1);
}

