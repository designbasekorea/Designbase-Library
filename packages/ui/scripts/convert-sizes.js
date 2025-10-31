#!/usr/bin/env node

/**
 * 모든 UI 컴포넌트의 사이즈를 s, m, l로 통일하는 스크립트
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const componentsDir = path.join(__dirname, '../src/components');

// 변환 규칙
const replacements = [
    // TypeScript 타입 정의
    { from: /'sm' \| 'md' \| 'lg'/g, to: "'s' | 'm' | 'l'" },
    { from: /"sm" \| "md" \| "lg"/g, to: '"s" | "m" | "l"' },

    // 기본값
    { from: /size = 'sm'/g, to: "size = 's'" },
    { from: /size = 'md'/g, to: "size = 'm'" },
    { from: /size = 'lg'/g, to: "size = 'l'" },
    { from: /size = "sm"/g, to: 'size = "s"' },
    { from: /size = "md"/g, to: 'size = "m"' },
    { from: /size = "lg"/g, to: 'size = "l"' },

    // Props
    { from: /size="sm"/g, to: 'size="s"' },
    { from: /size="md"/g, to: 'size="m"' },
    { from: /size="lg"/g, to: 'size="l"' },
    { from: /size='sm'/g, to: "size='s'" },
    { from: /size='md'/g, to: "size='m'" },
    { from: /size='lg'/g, to: "size='l'" },

    // as const
    { from: /size: 'sm' as const/g, to: "size: 's' as const" },
    { from: /size: 'md' as const/g, to: "size: 'm' as const" },
    { from: /size: 'lg' as const/g, to: "size: 'l' as const" },
    { from: /size: "sm" as const/g, to: 'size: "s" as const' },
    { from: /size: "md" as const/g, to: 'size: "m" as const' },
    { from: /size: "lg" as const/g, to: 'size: "l" as const' },

    // argTypes options
    { from: /options: \['sm', 'md', 'lg'\]/g, to: "options: ['s', 'm', 'l']" },
    { from: /options: \["sm", "md", "lg"\]/g, to: 'options: ["s", "m", "l"]' },

    // SCSS 클래스
    { from: /&--sm {/g, to: '&--s {' },
    { from: /&--md {/g, to: '&--m {' },
    { from: /&--lg {/g, to: '&--l {' },

    // 조건문
    { from: /size === 'sm'/g, to: "size === 's'" },
    { from: /size === 'md'/g, to: "size === 'm'" },
    { from: /size === 'lg'/g, to: "size === 'l'" },
    { from: /size === "sm"/g, to: 'size === "s"' },
    { from: /size === "md"/g, to: 'size === "m"' },
    { from: /size === "lg"/g, to: 'size === "l"' },
];

// 파일 패턴
const patterns = [
    '**/*.tsx',
    '**/*.ts',
    '**/*.scss',
];

let totalFiles = 0;
let totalChanges = 0;

patterns.forEach(pattern => {
    const files = glob.sync(pattern, {
        cwd: componentsDir,
        absolute: true,
        ignore: ['**/node_modules/**']
    });

    files.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;
        let fileChanges = 0;

        replacements.forEach(({ from, to }) => {
            const matches = content.match(from);
            if (matches) {
                content = content.replace(from, to);
                changed = true;
                fileChanges += matches.length;
            }
        });

        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
            totalFiles++;
            totalChanges += fileChanges;
            console.log(`✅ ${path.relative(componentsDir, file)} (${fileChanges} changes)`);
        }
    });
});

console.log(`\n✨ 완료! ${totalFiles}개 파일에서 ${totalChanges}개 변경사항 적용됨\n`);

