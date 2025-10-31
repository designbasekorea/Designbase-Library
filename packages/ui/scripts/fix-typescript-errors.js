#!/usr/bin/env node

/**
 * TypeScript 에러 수정 스크립트
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const componentsDir = path.join(__dirname, '../src/components');

// 수정 규칙
const fixes = [
    // AnimationText stories
    {
        file: 'AnimationText/AnimationText.stories.tsx',
        search: /size: 'md',/g,
        replace: "size: 'm',"
    },

    // BottomSheet, Breadcrumbs - HomeOutlineIcon 제거
    {
        file: 'BottomSheet/BottomSheet.stories.tsx',
        search: /HomeOutlineIcon,\s*\n/g,
        replace: ''
    },
    {
        file: 'BottomSheet/BottomSheet.stories.tsx',
        search: /import { HomeOutlineIcon, /g,
        replace: 'import { '
    },
    {
        file: 'Breadcrumbs/Breadcrumbs.stories.tsx',
        search: /HomeOutlineIcon, /g,
        replace: ''
    },

    // Button - Spinner size 매핑 수정
    {
        file: 'Button/Button.tsx',
        search: /size={size === 'xs' \? 'xs' : size === 's' \? 'sm' : 'md'}/g,
        replace: "size={size === 'xs' ? 'xs' : size === 's' ? 's' : 'm'}"
    },

    // Carousel stories
    {
        file: 'Carousel/Carousel.stories.tsx',
        search: /size: 'md',/g,
        replace: "size: 'm',"
    },
    {
        file: 'Carousel/Carousel.stories.tsx',
        search: /useState<'s' \| 'm' \| 'l' \| 'xl'>\('md'\);/g,
        replace: "useState<'s' | 'm' | 'l' | 'xl'>('m');"
    },
    {
        file: 'Carousel/Carousel.stories.tsx',
        search: /setSize\('sm'\)/g,
        replace: "setSize('s')"
    },
    {
        file: 'Carousel/Carousel.stories.tsx',
        search: /setSize\('md'\)/g,
        replace: "setSize('m')"
    },
    {
        file: 'Carousel/Carousel.stories.tsx',
        search: /setSize\('lg'\)/g,
        replace: "setSize('l')"
    },

    // Lightbox stories
    {
        file: 'Lightbox/Lightbox.stories.tsx',
        search: /size: 'lg',/g,
        replace: "size: 'l',"
    },
    {
        file: 'Lightbox/Lightbox.stories.tsx',
        search: /useState<'s' \| 'm' \| 'l' \| 'xl'>\('lg'\);/g,
        replace: "useState<'s' | 'm' | 'l' | 'xl'>('l');"
    },
    {
        file: 'Lightbox/Lightbox.stories.tsx',
        search: /setSize\('sm'\)/g,
        replace: "setSize('s')"
    },
    {
        file: 'Lightbox/Lightbox.stories.tsx',
        search: /setSize\('md'\)/g,
        replace: "setSize('m')"
    },
    {
        file: 'Lightbox/Lightbox.stories.tsx',
        search: /setSize\('lg'\)/g,
        replace: "setSize('l')"
    },

    // Chip stories
    {
        file: 'Chip/Chip.stories.tsx',
        search: /size={index < 5 \? 'md' : 'sm'}/g,
        replace: "size={index < 5 ? 'm' : 's'}"
    },

    // Container - padding/margin 타입 수정
    {
        file: 'Container/Container.tsx',
        search: /ContainerPadding = 'none' \| 'sm' \| 'md' \| 'lg' \| 'xl';/g,
        replace: "ContainerPadding = 'none' | 's' | 'm' | 'l' | 'xl';"
    },

    // Container stories
    {
        file: 'Container/Container.stories.tsx',
        search: /margin="md"/g,
        replace: 'margin="m"'
    },
    {
        file: 'Container/Container.stories.tsx',
        search: /margin="sm"/g,
        replace: 'margin="s"'
    },
    {
        file: 'Container/Container.stories.tsx',
        search: /margin="lg"/g,
        replace: 'margin="l"'
    },
    {
        file: 'Container/Container.stories.tsx',
        search: /padding="md"/g,
        replace: 'padding="m"'
    },
    {
        file: 'Container/Container.stories.tsx',
        search: /padding="sm"/g,
        replace: 'padding="s"'
    },
    {
        file: 'Container/Container.stories.tsx',
        search: /padding="lg"/g,
        replace: 'padding="l"'
    },
    {
        file: 'Container/Container.stories.tsx',
        search: /shadow="sm"/g,
        replace: 'shadow="s"'
    },

    // Drawer stories
    {
        file: 'Drawer/Drawer.stories.tsx',
        search: /size={openSize \|\| 'md'}/g,
        replace: "size={openSize || 'm'}"
    },
    {
        file: 'Drawer/Drawer.stories.tsx',
        search: /useState<DrawerSize>\('md'\);/g,
        replace: "useState<DrawerSize>('m');"
    },

    // Image - rounded 타입 수정
    {
        file: 'Image/Image.tsx',
        search: /ImageRounded = 'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full';/g,
        replace: "ImageRounded = 'none' | 's' | 'm' | 'l' | 'xl' | 'full';"
    },

    // Image stories
    {
        file: 'Image/Image.stories.tsx',
        search: /rounded="sm"/g,
        replace: 'rounded="s"'
    },
    {
        file: 'Image/Image.stories.tsx',
        search: /rounded="md"/g,
        replace: 'rounded="m"'
    },
    {
        file: 'Image/Image.stories.tsx',
        search: /rounded="lg"/g,
        replace: 'rounded="l"'
    },

    // List - spacing 타입 수정
    {
        file: 'List/List.tsx',
        search: /spacing\?: 'none' \| 'sm' \| 'md' \| 'lg';/g,
        replace: "spacing?: 'none' | 's' | 'm' | 'l';"
    },

    // List stories
    {
        file: 'List/List.stories.tsx',
        search: /spacing="sm"/g,
        replace: 'spacing="s"'
    },
    {
        file: 'List/List.stories.tsx',
        search: /spacing="md"/g,
        replace: 'spacing="m"'
    },
    {
        file: 'List/List.stories.tsx',
        search: /spacing="lg"/g,
        replace: 'spacing="l"'
    },

    // Modal stories
    {
        file: 'Modal/Modal.stories.tsx',
        search: /useState<'s' \| 'm' \| 'l' \| 'xl' \| 'full'>\('md'\);/g,
        replace: "useState<'s' | 'm' | 'l' | 'xl' | 'full'>('m');"
    },
    {
        file: 'Modal/Modal.stories.tsx',
        search: /value: 'sm'/g,
        replace: "value: 's'"
    },
    {
        file: 'Modal/Modal.stories.tsx',
        search: /value: 'md'/g,
        replace: "value: 'm'"
    },
    {
        file: 'Modal/Modal.stories.tsx',
        search: /value: 'lg'/g,
        replace: "value: 'l'"
    },

    // Navbar - Logo, SearchBar, Avatar size 매핑 수정
    {
        file: 'Navbar/Navbar.tsx',
        search: /size={size === 's' \? 'sm' : size === 'l' \? 'lg' : 'md'}/g,
        replace: "size={size === 's' ? 's' : size === 'l' ? 'l' : 'm'}"
    },
    {
        file: 'Navbar/Navbar.tsx',
        search: /size={size === 's' \? 'sm' : size === 'l' \? 'lg' : 'md'}/g,
        replace: "size={size === 's' ? 's' : size === 'l' ? 'l' : 'm'}"
    },

    // Sidebar - Logo size 매핑 수정
    {
        file: 'Sidebar/Sidebar.tsx',
        search: /size={size === 's' \? 'sm' : size === 'l' \? 'lg' : 'md'}/g,
        replace: "size={size === 's' ? 's' : size === 'l' ? 'l' : 'm'}"
    },

    // ProgressStep stories
    {
        file: 'ProgressStep/ProgressStep.stories.tsx',
        search: /size: 'md',/g,
        replace: "size: 'm',"
    },

    // Rating stories
    {
        file: 'Rating/Rating.stories.tsx',
        search: /size: 'md',/g,
        replace: "size: 'm',"
    },

    // SearchBar stories
    {
        file: 'SearchBar/SearchBar.stories.tsx',
        search: /size: 'sm',/g,
        replace: "size: 's',"
    },
    {
        file: 'SearchBar/SearchBar.stories.tsx',
        search: /size: 'lg',/g,
        replace: "size: 'l',"
    },

    // Spinner stories - argTypes 수정
    {
        file: 'Spinner/Spinner.stories.tsx',
        search: /options: \['xs', 'sm', 'md', 'lg', 'xl'\]/g,
        replace: "options: ['xs', 's', 'm', 'l', 'xl']"
    },

    // Stack - spacing 타입 수정
    {
        file: 'Stack/Stack.tsx',
        search: /StackSpacing = 'none' \| 'sm' \| 'md' \| 'lg' \| 'xl';/g,
        replace: "StackSpacing = 'none' | 's' | 'm' | 'l' | 'xl';"
    },

    // Stack stories
    {
        file: 'Stack/Stack.stories.tsx',
        search: /spacing="sm"/g,
        replace: 'spacing="s"'
    },
    {
        file: 'Stack/Stack.stories.tsx',
        search: /spacing="md"/g,
        replace: 'spacing="m"'
    },
    {
        file: 'Stack/Stack.stories.tsx',
        search: /spacing="lg"/g,
        replace: 'spacing="l"'
    },

    // Stat stories
    {
        file: 'Stat/Stat.stories.tsx',
        search: /size: 'md',/g,
        replace: "size: 'm',"
    },

    // Timeline stories
    {
        file: 'Timeline/Timeline.stories.tsx',
        search: /size: 'md',/g,
        replace: "size: 'm',"
    },

    // VideoPlayer stories
    {
        file: 'VideoPlayer/VideoPlayer.stories.tsx',
        search: /size: 'md',/g,
        replace: "size: 'm',"
    }
];

let totalFiles = 0;
let totalChanges = 0;

fixes.forEach(({ file, search, replace }) => {
    const filePath = path.join(componentsDir, file);

    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        const matches = content.match(search);

        if (matches) {
            content = content.replace(search, replace);
            fs.writeFileSync(filePath, content, 'utf8');
            totalFiles++;
            totalChanges += matches.length;
            console.log(`✅ ${file} (${matches.length} changes)`);
        }
    } else {
        console.log(`⚠️  ${file} not found`);
    }
});

console.log(`\n✨ 완료! ${totalFiles}개 파일에서 ${totalChanges}개 변경사항 적용됨\n`);
