import React, { useState, useRef, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import {
    UploadIcon,
    ShowIcon,
    HideIcon,
    CodeIcon,
    WriteIcon,
    SettingsIcon,
    TagIcon,
    VideoIcon,
    StarIcon,
    SortAscendingIcon,
    SortDescendingIcon,
    RefreshIcon,
    SearchIcon,
    ShareAltIcon,
    SunIcon,
    MoonIcon,
    UserIcon,
    UsersIcon,
    WorldIcon,
} from '@designbasekorea/icons';
import './MarkdownEditor.scss';

// 타입 정의
export type MarkdownEditorSize = 's' | 'm' | 'l';
export type MarkdownEditorVariant = 'default' | 'outlined' | 'filled';
export type MarkdownEditorMode = 'edit' | 'preview' | 'split' | 'code';
export type MarkdownEditorTheme = 'light' | 'dark';

export interface MarkdownToolbarItem {
    /** 툴바 아이템 ID */
    id: string;
    /** 아이콘 */
    icon: React.ReactNode;
    /** 툴팁 */
    tooltip?: string;
    /** 단축키 */
    shortcut?: string;
    /** 클릭 핸들러 */
    onClick: () => void;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 활성화 여부 */
    active?: boolean;
}

export interface MarkdownEditorProps {
    /** 마크다운 에디터 크기 */
    size?: MarkdownEditorSize;
    /** 마크다운 에디터 스타일 변형 */
    variant?: MarkdownEditorVariant;
    /** 에디터 모드 */
    mode?: MarkdownEditorMode;
    /** 테마 */
    theme?: MarkdownEditorTheme;
    /** 초기 값 */
    value?: string;
    /** 플레이스홀더 */
    placeholder?: string;
    /** 최소 높이 */
    minHeight?: number;
    /** 최대 높이 */
    maxHeight?: number;
    /** 자동 높이 조정 */
    autoHeight?: boolean;
    /** 읽기 전용 */
    readonly?: boolean;
    /** 비활성화 */
    disabled?: boolean;
    /** 툴바 표시 여부 */
    showToolbar?: boolean;
    /** 커스텀 툴바 아이템 */
    toolbarItems?: MarkdownToolbarItem[];
    /** 상태 표시 여부 */
    showStatus?: boolean;
    /** 단어 수 표시 여부 */
    showWordCount?: boolean;
    /** 라인 수 표시 여부 */
    showLineCount?: boolean;
    /** 자동 저장 */
    autoSave?: boolean;
    /** 자동 저장 간격 (ms) */
    autoSaveInterval?: number;
    /** 파일 업로드 핸들러 */
    onFileUpload?: (file: File) => Promise<string>;
    /** 값 변경 핸들러 */
    onChange?: (value: string) => void;
    /** 저장 핸들러 */
    onSave?: (value: string) => void;
    /** 포커스 핸들러 */
    onFocus?: (event: React.FocusEvent) => void;
    /** 블러 핸들러 */
    onBlur?: (event: React.FocusEvent) => void;
    /** 추가 CSS 클래스 */
    className?: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
    size = 'm',
    variant = 'default',
    mode = 'preview', // 기본값을 preview로 변경
    theme = 'light',
    value = '',
    placeholder = '마크다운을 입력하세요...',
    minHeight = 200,
    maxHeight = 600,
    autoHeight = false,
    readonly = false,
    disabled = false,
    showToolbar = true,
    toolbarItems = [],
    showStatus = true,
    showWordCount = true,
    showLineCount = true,
    autoSave = false,
    autoSaveInterval = 30000, // 30초
    onFileUpload,
    onChange,
    onSave,
    onFocus,
    onBlur,
    className,
}) => {
    const [internalValue, setInternalValue] = useState(value);
    const [currentMode, setCurrentMode] = useState<MarkdownEditorMode>(mode);
    const [isFocused, setIsFocused] = useState(false);
    const [selection, setSelection] = useState({ start: 0, end: 0 });
    const [wordCount, setWordCount] = useState(0);
    const [lineCount, setLineCount] = useState(0);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    // 값 동기화
    useEffect(() => {
        setInternalValue(value);
    }, [value]);

    // 모드 동기화
    useEffect(() => {
        setCurrentMode(mode);
    }, [mode]);

    // 단어 수 및 라인 수 계산
    useEffect(() => {
        const words = internalValue.trim() ? internalValue.trim().split(/\s+/).length : 0;
        const lines = internalValue ? internalValue.split('\n').length : 0;
        setWordCount(words);
        setLineCount(lines);
    }, [internalValue]);

    // 자동 저장
    useEffect(() => {
        if (!autoSave || !onSave) return;

        const interval = setInterval(async () => {
            if (internalValue && internalValue !== value) {
                setIsSaving(true);
                try {
                    await onSave(internalValue);
                    setLastSaved(new Date());
                } catch (error) {
                    console.error('Auto save failed:', error);
                } finally {
                    setIsSaving(false);
                }
            }
        }, autoSaveInterval);

        return () => clearInterval(interval);
    }, [autoSave, autoSaveInterval, internalValue, value, onSave]);

    // 값 변경 핸들러
    const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        setInternalValue(newValue);
        onChange?.(newValue);
    }, [onChange]);

    // 포커스 핸들러
    const handleFocus = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(true);
        onFocus?.(event);
    }, [onFocus]);

    // 블러 핸들러
    const handleBlur = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(false);
        onBlur?.(event);
    }, [onBlur]);

    // 선택 변경 핸들러
    const handleSelect = useCallback(() => {
        if (textareaRef.current) {
            const { selectionStart, selectionEnd } = textareaRef.current;
            setSelection({ start: selectionStart, end: selectionEnd });
        }
    }, []);

    // 텍스트 삽입
    const insertText = useCallback((text: string, before = '', after = '') => {
        if (!textareaRef.current || disabled || readonly) return;

        const textarea = textareaRef.current;
        const { selectionStart, selectionEnd } = textarea;
        const selectedText = internalValue.substring(selectionStart, selectionEnd);

        const newText = before + (selectedText || text) + after;
        const newValue = internalValue.substring(0, selectionStart) + newText + internalValue.substring(selectionEnd);

        setInternalValue(newValue);
        onChange?.(newValue);

        // 커서 위치 조정
        setTimeout(() => {
            if (textareaRef.current) {
                const newCursorPos = selectionStart + before.length + (selectedText ? selectedText.length : text.length);
                textareaRef.current.setSelectionRange(newCursorPos, newCursorPos);
                textareaRef.current.focus();
            }
        }, 0);
    }, [internalValue, onChange, disabled, readonly]);

    // 모드 변경 핸들러
    const handleModeChange = useCallback((newMode: MarkdownEditorMode) => {
        setCurrentMode(newMode);
    }, []);

    // 기본 툴바 아이템
    const defaultToolbarItems: MarkdownToolbarItem[] = [
        {
            id: 'bold',
            icon: <strong>B</strong>,
            tooltip: '굵게 (Ctrl+B)',
            shortcut: 'Ctrl+B',
            onClick: () => insertText('**', '**', '**'),
        },
        {
            id: 'italic',
            icon: <em>I</em>,
            tooltip: '기울임 (Ctrl+I)',
            shortcut: 'Ctrl+I',
            onClick: () => insertText('*', '*', '*'),
        },
        {
            id: 'strikethrough',
            icon: <span style={{ textDecoration: 'line-through' }}>S</span>,
            tooltip: '취소선 (Ctrl+Shift+S)',
            shortcut: 'Ctrl+Shift+S',
            onClick: () => insertText('~~', '~~', '~~'),
        },
        { id: 'separator1', icon: <span>|</span>, onClick: () => { } },
        {
            id: 'heading1',
            icon: <span>H1</span>,
            tooltip: '제목 1',
            onClick: () => insertText('# ', '', ''),
        },
        {
            id: 'heading2',
            icon: <span>H2</span>,
            tooltip: '제목 2',
            onClick: () => insertText('## ', '', ''),
        },
        {
            id: 'heading3',
            icon: <span>H3</span>,
            tooltip: '제목 3',
            onClick: () => insertText('### ', '', ''),
        },
        { id: 'separator2', icon: <span>|</span>, onClick: () => { } },
        {
            id: 'link',
            icon: <ShareAltIcon size={16} />,
            tooltip: '링크 (Ctrl+K)',
            shortcut: 'Ctrl+K',
            onClick: () => insertText('[', '](', ')'),
        },
        {
            id: 'image',
            icon: <VideoIcon size={16} />,
            tooltip: '이미지',
            onClick: () => insertText('![', '](', ')'),
        },
        {
            id: 'code',
            icon: <CodeIcon size={16} />,
            tooltip: '인라인 코드 (Ctrl+`)',
            shortcut: 'Ctrl+`',
            onClick: () => insertText('`', '`', '`'),
        },
        {
            id: 'codeBlock',
            icon: <span>```</span>,
            tooltip: '코드 블록',
            onClick: () => insertText('\n```\n', '', '\n```\n'),
        },
        { id: 'separator3', icon: <span>|</span>, onClick: () => { } },
        {
            id: 'list',
            icon: <span>•</span>,
            tooltip: '순서 없는 목록',
            onClick: () => insertText('- ', '', ''),
        },
        {
            id: 'orderedList',
            icon: <span>1.</span>,
            tooltip: '순서 있는 목록',
            onClick: () => insertText('1. ', '', ''),
        },
        {
            id: 'quote',
            icon: <span>"</span>,
            tooltip: '인용구',
            onClick: () => insertText('> ', '', ''),
        },
        { id: 'separator4', icon: <span>|</span>, onClick: () => { } },
        {
            id: 'table',
            icon: <span>⊞</span>,
            tooltip: '테이블',
            onClick: () => insertText('\n| 헤더1 | 헤더2 | 헤더3 |\n|-------|-------|-------|\n| 셀1   | 셀2   | 셀3   |\n', '', ''),
        },
        {
            id: 'horizontalRule',
            icon: <span>—</span>,
            tooltip: '수평선',
            onClick: () => insertText('\n---\n', '', ''),
        },
    ];

    // 키보드 단축키 처리
    const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
        if (disabled || readonly) return;

        const { ctrlKey, shiftKey, key } = event;

        // Ctrl+B: 굵게
        if (ctrlKey && key === 'b') {
            event.preventDefault();
            insertText('**', '**', '**');
        }
        // Ctrl+I: 기울임
        else if (ctrlKey && key === 'i') {
            event.preventDefault();
            insertText('*', '*', '*');
        }
        // Ctrl+K: 링크
        else if (ctrlKey && key === 'k') {
            event.preventDefault();
            insertText('[', '](', ')');
        }
        // Ctrl+`: 인라인 코드
        else if (ctrlKey && key === '`') {
            event.preventDefault();
            insertText('`', '`', '`');
        }
        // Ctrl+Shift+S: 취소선
        else if (ctrlKey && shiftKey && key === 'S') {
            event.preventDefault();
            insertText('~~', '~~', '~~');
        }
        // Tab: 들여쓰기
        else if (key === 'Tab') {
            event.preventDefault();
            insertText('    ', '', '');
        }
    }, [disabled, readonly, insertText]);

    // 마크다운을 HTML로 변환
    const markdownToHtml = useCallback((markdown: string): string => {
        // 간단한 마크다운 파서 (실제 프로덕션에서는 marked.js 같은 라이브러리 사용 권장)
        return markdown
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*)\*/gim, '<em>$1</em>')
            .replace(/~~(.*)~~/gim, '<del>$1</del>')
            .replace(/`(.*)`/gim, '<code>$1</code>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
            .replace(/!\[([^\]]*)\]\(([^)]+)\)/gim, '<img alt="$1" src="$2" />')
            .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
            .replace(/^- (.*$)/gim, '<ul><li>$1</li></ul>')
            .replace(/^(\d+)\. (.*$)/gim, '<ol><li>$2</li></ol>')
            .replace(/\n/gim, '<br />');
    }, []);

    // 파일 업로드 처리
    const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || !onFileUpload) return;

        try {
            const url = await onFileUpload(file);
            insertText(`![${file.name}](${url})`);
        } catch (error) {
            console.error('File upload failed:', error);
        }

        // 입력값 초기화
        event.target.value = '';
    }, [onFileUpload, insertText]);

    // 툴바 렌더링
    const renderToolbar = () => {
        if (!showToolbar) return null;

        const items = toolbarItems.length > 0 ? toolbarItems : defaultToolbarItems;

        return (
            <div className="designbase-markdown-editor__toolbar">
                {/* 모드 전환 버튼들 */}
                <div className="designbase-markdown-editor__mode-buttons">
                    <button
                        className={clsx(
                            'designbase-markdown-editor__mode-button',
                            { 'designbase-markdown-editor__mode-button--active': currentMode === 'edit' }
                        )}
                        onClick={() => handleModeChange('edit')}
                        title="편집 모드"
                        type="button"
                    >
                        <WriteIcon size={16} />
                    </button>
                    <button
                        className={clsx(
                            'designbase-markdown-editor__mode-button',
                            { 'designbase-markdown-editor__mode-button--active': currentMode === 'preview' }
                        )}
                        onClick={() => handleModeChange('preview')}
                        title="미리보기 모드"
                        type="button"
                    >
                        <ShowIcon size={16} />
                    </button>
                    <button
                        className={clsx(
                            'designbase-markdown-editor__mode-button',
                            { 'designbase-markdown-editor__mode-button--active': currentMode === 'split' }
                        )}
                        onClick={() => handleModeChange('split')}
                        title="분할 모드"
                        type="button"
                    >
                        <HideIcon size={16} />
                    </button>
                    <button
                        className={clsx(
                            'designbase-markdown-editor__mode-button',
                            { 'designbase-markdown-editor__mode-button--active': currentMode === 'code' }
                        )}
                        onClick={() => handleModeChange('code')}
                        title="코드 보기"
                        type="button"
                    >
                        <CodeIcon size={16} />
                    </button>
                </div>

                {/* 구분선 */}
                <div className="designbase-markdown-editor__toolbar-separator" />

                {/* 편집 도구들 */}
                {currentMode !== 'code' && (
                    <>
                        {items.map((item, index) => (
                            <button
                                key={item.id}
                                className={clsx(
                                    'designbase-markdown-editor__toolbar-item',
                                    {
                                        'designbase-markdown-editor__toolbar-item--active': item.active,
                                        'designbase-markdown-editor__toolbar-item--disabled': item.disabled || disabled,
                                    }
                                )}
                                onClick={item.onClick}
                                disabled={item.disabled || disabled}
                                title={item.tooltip}
                                type="button"
                            >
                                {item.icon}
                                {item.shortcut && (
                                    <span className="designbase-markdown-editor__toolbar-shortcut">
                                        {item.shortcut}
                                    </span>
                                )}
                            </button>
                        ))}

                        {onFileUpload && (
                            <label className="designbase-markdown-editor__file-upload">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    style={{ display: 'none' }}
                                />
                                <UploadIcon size={16} />
                            </label>
                        )}
                    </>
                )}
            </div>
        );
    };

    // 상태 표시 렌더링
    const renderStatus = () => {
        if (!showStatus) return null;

        return (
            <div className="designbase-markdown-editor__status">
                {showWordCount && (
                    <span className="designbase-markdown-editor__word-count">
                        단어: {wordCount}
                    </span>
                )}
                {showLineCount && (
                    <span className="designbase-markdown-editor__line-count">
                        라인: {lineCount}
                    </span>
                )}
                {lastSaved && (
                    <span className="designbase-markdown-editor__last-saved">
                        저장됨: {lastSaved.toLocaleTimeString()}
                    </span>
                )}
                {isSaving && (
                    <span className="designbase-markdown-editor__saving">
                        저장 중...
                    </span>
                )}
            </div>
        );
    };

    return (
        <div
            className={clsx(
                'designbase-markdown-editor',
                `designbase-markdown-editor--size-${size}`,
                `designbase-markdown-editor--variant-${variant}`,
                `designbase-markdown-editor--mode-${currentMode}`,
                `designbase-markdown-editor--theme-${theme}`,
                {
                    'designbase-markdown-editor--focused': isFocused,
                    'designbase-markdown-editor--disabled': disabled,
                    'designbase-markdown-editor--readonly': readonly,
                },
                className
            )}
        >
            {renderToolbar()}

            <div className="designbase-markdown-editor__content">
                {/* 편집 모드 */}
                {(currentMode === 'edit' || currentMode === 'split') && (
                    <div className="designbase-markdown-editor__edit-panel">
                        <textarea
                            ref={textareaRef}
                            value={internalValue}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onSelect={handleSelect}
                            onKeyDown={handleKeyDown}
                            placeholder={placeholder}
                            disabled={disabled}
                            readOnly={readonly}
                            style={{
                                minHeight: autoHeight ? 'auto' : `${minHeight}px`,
                                maxHeight: autoHeight ? 'none' : `${maxHeight}px`,
                            }}
                            className="designbase-markdown-editor__textarea"
                        />
                    </div>
                )}

                {/* 미리보기 모드 */}
                {(currentMode === 'preview' || currentMode === 'split') && (
                    <div className="designbase-markdown-editor__preview-panel">
                        <div
                            ref={previewRef}
                            className="designbase-markdown-editor__preview"
                            dangerouslySetInnerHTML={{ __html: markdownToHtml(internalValue) }}
                        />
                    </div>
                )}

                {/* 코드 보기 모드 */}
                {currentMode === 'code' && (
                    <div className="designbase-markdown-editor__code-panel">
                        <pre className="designbase-markdown-editor__code-view">
                            <code>{internalValue}</code>
                        </pre>
                    </div>
                )}
            </div>

            {renderStatus()}
        </div>
    );
};

export default MarkdownEditor;
