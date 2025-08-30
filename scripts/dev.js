#!/usr/bin/env node

/**
 * 개발 환경 스크립트
 * 
 * 목적: 개발 중 파일 변경 감지 및 자동 빌드
 * 기능: 워치 모드, 핫 리로드, 의존성 연결
 * 사용법: npm run dev 또는 node scripts/dev.js
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const chokidar = require('chokidar');

// 패키지 경로
const PACKAGES_DIR = path.join(__dirname, '../packages');

// 개발 모드에서 워치할 패키지들
const WATCH_PACKAGES = [
    'tokens',
    'theme',
    'icons',
    'utils',
    'figma-bridge',
    'ui',
];

/**
 * 로그 유틸리티
 */
const logger = {
    info: (msg) => console.log(chalk.blue('ℹ'), msg),
    success: (msg) => console.log(chalk.green('✓'), msg),
    error: (msg) => console.log(chalk.red('✗'), msg),
    warn: (msg) => console.log(chalk.yellow('⚠'), msg),
    step: (msg) => console.log(chalk.cyan('→'), msg),
    watch: (msg) => console.log(chalk.magenta('👀'), msg),
};

/**
 * 활성 프로세스 추적
 */
const activeProcesses = new Map();

/**
 * 명령 실행 (비동기)
 */
function runCommand(command, cwd, options = {}) {
    return new Promise((resolve, reject) => {
        const [cmd, ...args] = command.split(' ');
        const process = spawn(cmd, args, {
            cwd,
            stdio: options.silent ? 'ignore' : 'inherit',
            shell: true,
        });

        if (options.trackAs) {
            activeProcesses.set(options.trackAs, process);
        }

        process.on('close', (code) => {
            if (options.trackAs) {
                activeProcesses.delete(options.trackAs);
            }

            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Command failed with code ${code}: ${command}`));
            }
        });

        process.on('error', (error) => {
            if (options.trackAs) {
                activeProcesses.delete(options.trackAs);
            }
            reject(error);
        });
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
 * 패키지의 dev 스크립트 실행
 */
async function startPackageDev(packageName) {
    const packagePath = path.join(PACKAGES_DIR, packageName);

    if (!packageExists(packageName)) {
        logger.warn(`Package ${packageName} does not exist, skipping...`);
        return;
    }

    // 기존 프로세스가 있다면 종료
    const existingProcess = activeProcesses.get(packageName);
    if (existingProcess) {
        existingProcess.kill();
        activeProcesses.delete(packageName);
    }

    logger.step(`Starting dev mode for ${packageName}...`);

    try {
        // 패키지에 dev 스크립트가 있는지 확인
        const packageJson = JSON.parse(
            fs.readFileSync(path.join(packagePath, 'package.json'), 'utf8')
        );

        if (!packageJson.scripts || !packageJson.scripts.dev) {
            logger.warn(`Package ${packageName} has no dev script, using build instead`);
            await runCommand('npm run build', packagePath, { silent: false });
            return;
        }

        // dev 스크립트 실행 (백그라운드)
        runCommand('npm run dev', packagePath, {
            trackAs: packageName,
            silent: false
        }).catch((error) => {
            logger.error(`Dev mode failed for ${packageName}: ${error.message}`);
        });

        logger.success(`Dev mode started for ${packageName}`);
    } catch (error) {
        logger.error(`Failed to start dev mode for ${packageName}: ${error.message}`);
    }
}

/**
 * 모든 패키지 dev 모드 시작
 */
async function startAllDev() {
    logger.info('Starting development mode for all packages...');

    // 의존성 설치
    logger.step('Installing dependencies...');
    try {
        await runCommand('npm install', path.join(__dirname, '..'));
        logger.success('Dependencies installed');
    } catch (error) {
        logger.error(`Failed to install dependencies: ${error.message}`);
        return;
    }

    // 모든 패키지 dev 모드 시작
    for (const packageName of WATCH_PACKAGES) {
        await startPackageDev(packageName);
        // 패키지 간 간격 두기
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    logger.success('✨ All packages are now running in dev mode');
    logger.info('Press Ctrl+C to stop all processes');
}

/**
 * 특정 패키지 dev 모드 시작
 */
async function startSpecificDev(packageName) {
    logger.info(`Starting development mode for package: ${packageName}`);

    try {
        await startPackageDev(packageName);
        logger.success(`✨ Package ${packageName} is now running in dev mode`);
    } catch (error) {
        logger.error(`Failed to start dev mode for ${packageName}`);
        process.exit(1);
    }
}

/**
 * 파일 워처 설정
 */
function setupFileWatcher() {
    logger.step('Setting up file watcher...');

    const watchPaths = WATCH_PACKAGES.map(pkg =>
        path.join(PACKAGES_DIR, pkg, 'src/**/*')
    );

    const watcher = chokidar.watch(watchPaths, {
        ignored: [
            '**/node_modules/**',
            '**/dist/**',
            '**/.git/**',
            '**/coverage/**',
        ],
        persistent: true,
        ignoreInitial: true,
    });

    let debounceTimeout;

    watcher.on('change', (filePath) => {
        const relativePath = path.relative(PACKAGES_DIR, filePath);
        const packageName = relativePath.split(path.sep)[0];

        logger.watch(`File changed: ${relativePath}`);

        // 디바운스 적용 (같은 패키지의 여러 파일이 동시에 변경될 수 있음)
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            if (WATCH_PACKAGES.includes(packageName)) {
                logger.step(`Rebuilding ${packageName}...`);
                startPackageDev(packageName);
            }
        }, 500);
    });

    watcher.on('error', (error) => {
        logger.error(`Watcher error: ${error.message}`);
    });

    logger.success('File watcher is active');
    return watcher;
}

/**
 * Storybook 시작
 */
async function startStorybook() {
    logger.step('Starting Storybook...');

    try {
        const uiPackagePath = path.join(PACKAGES_DIR, 'ui');
        if (packageExists('ui')) {
            runCommand('npm run storybook', uiPackagePath, {
                trackAs: 'storybook',
                silent: false
            }).catch((error) => {
                logger.error(`Storybook failed: ${error.message}`);
            });

            logger.success('Storybook started at http://localhost:6006');
        } else {
            logger.warn('UI package not found, skipping Storybook');
        }
    } catch (error) {
        logger.error(`Failed to start Storybook: ${error.message}`);
    }
}

/**
 * 프로세스 정리
 */
function cleanup() {
    logger.info('Cleaning up processes...');

    activeProcesses.forEach((process, name) => {
        logger.step(`Stopping ${name}...`);
        process.kill();
    });

    activeProcesses.clear();
    logger.success('All processes stopped');
}

/**
 * 도움말 표시
 */
function showHelp() {
    console.log(`
${chalk.bold('Designbase Development Script')}

Usage:
  node scripts/dev.js [options]

Options:
  --help              Show this help message
  --package <name>    Start dev mode for specific package only
  --watch             Enable file watching (default)
  --no-watch          Disable file watching
  --storybook         Start Storybook along with packages
  --clean             Clean all packages before starting

Examples:
  node scripts/dev.js
  node scripts/dev.js --package ui
  node scripts/dev.js --storybook
  node scripts/dev.js --no-watch
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

    // 프로세스 종료 시 정리
    process.on('SIGINT', () => {
        logger.info('\\nReceived SIGINT, shutting down gracefully...');
        cleanup();
        process.exit(0);
    });

    process.on('SIGTERM', () => {
        logger.info('\\nReceived SIGTERM, shutting down gracefully...');
        cleanup();
        process.exit(0);
    });

    const packageIndex = args.indexOf('--package');
    if (packageIndex !== -1 && args[packageIndex + 1]) {
        await startSpecificDev(args[packageIndex + 1]);

        // 파일 워칭이 비활성화되지 않았다면 워처 시작
        if (!args.includes('--no-watch')) {
            setupFileWatcher();
        }

        // 무한 대기
        await new Promise(() => { });
        return;
    }

    // 전체 dev 모드 시작
    await startAllDev();

    // 스토리북 시작 (옵션)
    if (args.includes('--storybook')) {
        await startStorybook();
    }

    // 파일 워칭 (기본값)
    if (!args.includes('--no-watch')) {
        setupFileWatcher();
    }

    // 무한 대기
    await new Promise(() => { });
}

// 스크립트 실행
if (require.main === module) {
    main().catch((error) => {
        logger.error(error.message);
        cleanup();
        process.exit(1);
    });
}

module.exports = {
    startPackageDev,
    startAllDev,
    setupFileWatcher,
};
