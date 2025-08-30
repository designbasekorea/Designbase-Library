#!/usr/bin/env node

/**
 * 전체 프로젝트 빌드 스크립트
 * 
 * 목적: 모든 패키지를 올바른 순서로 빌드하고 의존성 관리
 * 기능: 병렬/순차 빌드, 에러 처리, 진행상황 표시
 * 사용법: npm run build 또는 node scripts/build.js
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

// 빌드 순서 (의존성 순서대로)
const BUILD_ORDER = [
    'tokens',
    'theme',
    'icons',
    'utils',
    'figma-bridge',
    'ui',
];

// 패키지 경로
const PACKAGES_DIR = path.join(__dirname, '../packages');

/**
 * 로그 유틸리티
 */
const logger = {
    info: (msg) => console.log(chalk.blue('ℹ'), msg),
    success: (msg) => console.log(chalk.green('✓'), msg),
    error: (msg) => console.log(chalk.red('✗'), msg),
    warn: (msg) => console.log(chalk.yellow('⚠'), msg),
    step: (msg) => console.log(chalk.cyan('→'), msg),
};

/**
 * 명령 실행
 */
function runCommand(command, cwd) {
    return new Promise((resolve, reject) => {
        const [cmd, ...args] = command.split(' ');
        const process = spawn(cmd, args, {
            cwd,
            stdio: 'inherit',
            shell: true,
        });

        process.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Command failed with code ${code}: ${command}`));
            }
        });

        process.on('error', reject);
    });
}

/**
 * 패키지 존재 확인
 */
function packageExists(packageName) {
    const packagePath = path.join(PACKAGES_DIR, packageName);
    const packageJsonPath = path.join(packagePath, 'package.json');
    return fs.existsSync(packageJsonPath);
}

/**
 * 패키지 빌드
 */
async function buildPackage(packageName) {
    const packagePath = path.join(PACKAGES_DIR, packageName);

    if (!packageExists(packageName)) {
        logger.warn(`Package ${packageName} does not exist, skipping...`);
        return;
    }

    logger.step(`Building ${packageName}...`);

    try {
        // Clean first
        try {
            await runCommand('npm run clean', packagePath);
        } catch (error) {
            // Clean might not exist, continue
        }

        // Build
        await runCommand('npm run build', packagePath);
        logger.success(`Built ${packageName}`);
    } catch (error) {
        logger.error(`Failed to build ${packageName}: ${error.message}`);
        throw error;
    }
}

/**
 * 의존성 설치
 */
async function installDependencies() {
    logger.step('Installing dependencies...');

    try {
        await runCommand('npm install', path.join(__dirname, '..'));
        logger.success('Dependencies installed');
    } catch (error) {
        logger.error(`Failed to install dependencies: ${error.message}`);
        throw error;
    }
}

/**
 * 타입 체크
 */
async function typeCheck() {
    logger.step('Running type check...');

    try {
        await runCommand('npm run type-check', path.join(__dirname, '..'));
        logger.success('Type check passed');
    } catch (error) {
        logger.error(`Type check failed: ${error.message}`);
        throw error;
    }
}

/**
 * 린트 체크
 */
async function lint() {
    logger.step('Running linter...');

    try {
        await runCommand('npm run lint', path.join(__dirname, '..'));
        logger.success('Linting passed');
    } catch (error) {
        logger.error(`Linting failed: ${error.message}`);
        throw error;
    }
}

/**
 * 메인 빌드 함수
 */
async function build() {
    const startTime = Date.now();

    logger.info('Starting build process...');
    logger.info(`Build order: ${BUILD_ORDER.join(' → ')}`);

    try {
        // 의존성 설치
        await installDependencies();

        // 타입 체크 (선택적)
        if (process.argv.includes('--type-check')) {
            await typeCheck();
        }

        // 린트 체크 (선택적)
        if (process.argv.includes('--lint')) {
            await lint();
        }

        // 패키지들을 순서대로 빌드
        for (const packageName of BUILD_ORDER) {
            await buildPackage(packageName);
        }

        const endTime = Date.now();
        const duration = ((endTime - startTime) / 1000).toFixed(1);

        logger.success(`✨ Build completed successfully in ${duration}s`);

    } catch (error) {
        logger.error('Build failed');
        process.exit(1);
    }
}

/**
 * 병렬 빌드 (실험적)
 */
async function buildParallel() {
    logger.info('Starting parallel build (experimental)...');

    // 의존성이 없는 패키지들을 먼저 병렬로 빌드
    const independentPackages = ['tokens', 'utils'];
    const dependentPackages = ['theme', 'icons', 'figma-bridge', 'ui'];

    try {
        await installDependencies();

        // 1단계: 독립적인 패키지들 병렬 빌드
        logger.step('Building independent packages...');
        await Promise.all(
            independentPackages.map(pkg => buildPackage(pkg))
        );

        // 2단계: 의존성이 있는 패키지들 순차 빌드
        logger.step('Building dependent packages...');
        for (const packageName of dependentPackages) {
            await buildPackage(packageName);
        }

        logger.success('✨ Parallel build completed successfully');

    } catch (error) {
        logger.error('Parallel build failed');
        process.exit(1);
    }
}

/**
 * 특정 패키지만 빌드
 */
async function buildSpecific(packageName) {
    logger.info(`Building specific package: ${packageName}`);

    try {
        await buildPackage(packageName);
        logger.success(`✨ Package ${packageName} built successfully`);
    } catch (error) {
        logger.error(`Failed to build ${packageName}`);
        process.exit(1);
    }
}

/**
 * 도움말 표시
 */
function showHelp() {
    console.log(`
${chalk.bold('Designbase Build Script')}

Usage:
  node scripts/build.js [options]

Options:
  --help              Show this help message
  --parallel          Use parallel build (experimental)
  --package <name>    Build specific package only
  --type-check        Run type checking before build
  --lint              Run linting before build
  --clean             Clean all packages before build

Examples:
  node scripts/build.js
  node scripts/build.js --parallel
  node scripts/build.js --package ui
  node scripts/build.js --type-check --lint
  `);
}

/**
 * 스크립트 시작점
 */
async function main() {
    const args = process.argv.slice(2);

    if (args.includes('--help')) {
        showHelp();
        return;
    }

    const packageIndex = args.indexOf('--package');
    if (packageIndex !== -1 && args[packageIndex + 1]) {
        await buildSpecific(args[packageIndex + 1]);
        return;
    }

    if (args.includes('--parallel')) {
        await buildParallel();
        return;
    }

    await build();
}

// 스크립트 실행
if (require.main === module) {
    main().catch((error) => {
        logger.error(error.message);
        process.exit(1);
    });
}

module.exports = {
    buildPackage,
    build,
    buildParallel,
};
