import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MarkdownEditor from './MarkdownEditor';

const meta: Meta<typeof MarkdownEditor> = {
    title: 'Components/MarkdownEditor',
    component: MarkdownEditor,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outlined', 'filled'],
        },
        mode: {
            control: { type: 'select' },
            options: ['edit', 'preview', 'split', 'code'],
        },
        theme: {
            control: { type: 'select' },
            options: ['light', 'dark'],
        },
        value: {
            control: { type: 'text' },
        },
        placeholder: {
            control: { type: 'text' },
        },
        minHeight: {
            control: { type: 'number' },
        },
        maxHeight: {
            control: { type: 'number' },
        },
        autoHeight: {
            control: { type: 'boolean' },
        },
        readonly: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        showToolbar: {
            control: { type: 'boolean' },
        },
        showStatus: {
            control: { type: 'boolean' },
        },
        showWordCount: {
            control: { type: 'boolean' },
        },
        showLineCount: {
            control: { type: 'boolean' },
        },
        autoSave: {
            control: { type: 'boolean' },
        },
        autoSaveInterval: {
            control: { type: 'number' },
        },
        onChange: { action: 'changed' },
        onSave: { action: 'saved' },
        onFocus: { action: 'focused' },
        onBlur: { action: 'blurred' },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'md',
        variant: 'default',
        mode: 'preview', // 기본값을 preview로 변경
        theme: 'light',
    },
};

export const WithSampleContent: Story = {
    args: {
        value: `# 마크다운 에디터 예시

이것은 **굵은 텍스트**이고, 이것은 *기울임 텍스트*입니다.

## 기능 목록

- 편집 모드
- 미리보기 모드
- 분할 모드
- 코드 보기 모드
- 툴바 지원
- 키보드 단축키

### 코드 예시

\`\`\`javascript
function hello() {
    console.log("Hello, Markdown!");
}
\`\`\`

> 이것은 인용구입니다.

[링크 예시](https://example.com)

---

| 기능 | 지원 여부 |
|------|-----------|
| 제목 | ✅ |
| 목록 | ✅ |
| 코드 | ✅ |
| 테이블 | ✅ |
`,
    },
};

export const AllModes: Story = {
    render: () => {
        const [mode, setMode] = useState<'edit' | 'preview' | 'split' | 'code'>('preview');
        const [value, setValue] = useState('# 마크다운 에디터\n\n다양한 모드를 확인해보세요.');

        return (
            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <div style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
                    <button
                        onClick={() => setMode('edit')}
                        style={{
                            padding: '8px 16px',
                            background: mode === 'edit' ? '#3b82f6' : '#e5e7eb',
                            color: mode === 'edit' ? 'white' : '#374151',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                        }}
                    >
                        편집 모드
                    </button>
                    <button
                        onClick={() => setMode('preview')}
                        style={{
                            padding: '8px 16px',
                            background: mode === 'preview' ? '#3b82f6' : '#e5e7eb',
                            color: mode === 'preview' ? 'white' : '#374151',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                        }}
                    >
                        미리보기 모드
                    </button>
                    <button
                        onClick={() => setMode('split')}
                        style={{
                            padding: '8px 16px',
                            background: mode === 'split' ? '#3b82f6' : '#e5e7eb',
                            color: mode === 'split' ? 'white' : '#374151',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                        }}
                    >
                        분할 모드
                    </button>
                    <button
                        onClick={() => setMode('code')}
                        style={{
                            padding: '8px 16px',
                            background: mode === 'code' ? '#3b82f6' : '#e5e7eb',
                            color: mode === 'code' ? 'white' : '#374151',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                        }}
                    >
                        코드 보기
                    </button>
                </div>
                <MarkdownEditor
                    mode={mode}
                    value={value}
                    onChange={setValue}
                    minHeight={400}
                />
            </div>
        );
    },
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <h3>작은 크기</h3>
                <MarkdownEditor size="sm" value="# 작은 크기" />
            </div>
            <div>
                <h3>중간 크기</h3>
                <MarkdownEditor size="md" value="# 중간 크기" />
            </div>
            <div>
                <h3>큰 크기</h3>
                <MarkdownEditor size="lg" value="# 큰 크기" />
            </div>
        </div>
    ),
};

export const DifferentVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <h3>기본 스타일</h3>
                <MarkdownEditor variant="default" value="# 기본 스타일" />
            </div>
            <div>
                <h3>아웃라인 스타일</h3>
                <MarkdownEditor variant="outlined" value="# 아웃라인 스타일" />
            </div>
            <div>
                <h3>채워진 스타일</h3>
                <MarkdownEditor variant="filled" value="# 채워진 스타일" />
            </div>
        </div>
    ),
};

export const DarkTheme: Story = {
    args: {
        theme: 'dark',
        value: `# 다크 테마

다크 테마에서도 완벽하게 작동합니다.

## 코드 블록

\`\`\`javascript
const darkMode = true;
console.log("다크 테마 지원!");
\`\`\`

> 다크 테마는 눈의 피로를 줄여줍니다.
`,
    },
};

export const WithoutToolbar: Story = {
    args: {
        showToolbar: false,
        value: '# 툴바 없는 버전\n\n키보드 단축키만 사용할 수 있습니다.',
    },
};

export const WithoutStatus: Story = {
    args: {
        showStatus: false,
        value: '# 상태 표시 없는 버전\n\n하단의 상태 정보가 표시되지 않습니다.',
    },
};

export const Readonly: Story = {
    args: {
        readonly: true,
        value: `# 읽기 전용 모드

이 에디터는 읽기 전용입니다.

- 편집할 수 없습니다
- 툴바가 비활성화됩니다
- 내용을 복사할 수 있습니다
`,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        value: '# 비활성화된 에디터\n\n이 에디터는 비활성화되어 있습니다.',
    },
};

export const AutoSave: Story = {
    render: () => {
        const [value, setValue] = useState('# 자동 저장 테스트\n\n30초마다 자동으로 저장됩니다.');
        const [lastSaved, setLastSaved] = useState<Date | null>(null);

        const handleSave = async (content: string) => {
            // 시뮬레이션된 저장 지연
            await new Promise(resolve => setTimeout(resolve, 1000));
            setLastSaved(new Date());
            console.log('자동 저장됨:', content);
        };

        return (
            <div style={{ width: '100%', maxWidth: '800px' }}>
                <MarkdownEditor
                    value={value}
                    onChange={setValue}
                    onSave={handleSave}
                    autoSave={true}
                    autoSaveInterval={30000}
                    minHeight={300}
                />
                {lastSaved && (
                    <p style={{ marginTop: '8px', fontSize: '14px', color: '#6b7280' }}>
                        마지막 저장: {lastSaved.toLocaleTimeString()}
                    </p>
                )}
            </div>
        );
    },
};

export const CustomToolbar: Story = {
    render: () => {
        const [value, setValue] = useState('# 커스텀 툴바\n\n커스텀 툴바 아이템을 사용합니다.');

        const customToolbarItems = [
            {
                id: 'custom1',
                icon: <span>🎨</span>,
                tooltip: '커스텀 기능 1',
                onClick: () => console.log('커스텀 기능 1'),
            },
            {
                id: 'custom2',
                icon: <span>⚡</span>,
                tooltip: '커스텀 기능 2',
                onClick: () => console.log('커스텀 기능 2'),
            },
            {
                id: 'separator',
                icon: <span>|</span>,
                onClick: () => { },
            },
            {
                id: 'custom3',
                icon: <span>🚀</span>,
                tooltip: '커스텀 기능 3',
                onClick: () => console.log('커스텀 기능 3'),
            },
        ];

        return (
            <MarkdownEditor
                value={value}
                onChange={setValue}
                toolbarItems={customToolbarItems}
                minHeight={300}
            />
        );
    },
};

export const FileUpload: Story = {
    render: () => {
        const [value, setValue] = useState('# 파일 업로드 테스트\n\n이미지를 업로드할 수 있습니다.');

        const handleFileUpload = async (file: File): Promise<string> => {
            // 시뮬레이션된 파일 업로드
            await new Promise(resolve => setTimeout(resolve, 2000));
            const url = `https://example.com/uploads/${file.name}`;
            console.log('파일 업로드됨:', url);
            return url;
        };

        return (
            <MarkdownEditor
                value={value}
                onChange={setValue}
                onFileUpload={handleFileUpload}
                minHeight={300}
            />
        );
    },
};

export const CodeViewMode: Story = {
    args: {
        mode: 'code',
        value: `# 마크다운 코드 보기

이 모드에서는 순수 마크다운 코드를 볼 수 있습니다.

## 텍스트 스타일링

**굵은 텍스트**와 *기울임 텍스트*를 사용할 수 있습니다.

## 목록

- 순서 없는 목록
- 두 번째 항목
- 세 번째 항목

1. 순서 있는 목록
2. 두 번째 항목
3. 세 번째 항목

## 코드

\`\`\`javascript
function example() {
    console.log("Hello, World!");
}
\`\`\`

## 링크와 이미지

[링크 예시](https://example.com)
![이미지 예시](https://example.com/image.jpg)

## 테이블

| 제목1 | 제목2 | 제목3 |
|-------|-------|-------|
| 셀1   | 셀2   | 셀3   |
| 셀4   | 셀5   | 셀6   |

## 인용구

> 이것은 인용구입니다.
> 여러 줄로 작성할 수 있습니다.

## 수평선

---

위의 내용은 모두 마크다운 문법으로 작성되었습니다.
`,
    },
};

export const ResponsiveExample: Story = {
    render: () => (
        <div style={{ width: '100%', maxWidth: '1000px' }}>
            <h3>반응형 마크다운 에디터</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
                화면 크기에 따라 자동으로 레이아웃이 조정됩니다.
            </p>
            <MarkdownEditor
                mode="split"
                value={`# 반응형 마크다운 에디터

이 에디터는 다양한 화면 크기에서 최적화된 경험을 제공합니다.

## 모바일에서

- 분할 모드가 세로로 변경됩니다
- 툴바가 컴팩트해집니다
- 상태 정보가 세로로 정렬됩니다

## 데스크톱에서

- 분할 모드가 가로로 표시됩니다
- 모든 기능이 완전히 활용됩니다

\`\`\`javascript
// 반응형 예시
const isMobile = window.innerWidth < 768;
if (isMobile) {
    console.log("모바일 모드");
} else {
    console.log("데스크톱 모드");
}
\`\`\`
`}
                minHeight={400}
            />
        </div>
    ),
};
