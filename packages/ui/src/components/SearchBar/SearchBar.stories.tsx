/**
 * SearchBar 컴포넌트 스토리
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
    title: 'Components/SearchBar',
    component: SearchBar,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '검색 기능을 위한 전용 입력 컴포넌트입니다. 검색 아이콘과 클리어 버튼이 포함되어 있습니다.',
            },
        },
    },
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
            description: '검색바의 크기',
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'outlined', 'filled'],
            description: '검색바의 스타일',
        },
        disabled: {
            control: { type: 'boolean' },
            description: '비활성화 상태',
        },
        readOnly: {
            control: { type: 'boolean' },
            description: '읽기 전용 상태',
        },
        fullWidth: {
            control: { type: 'boolean' },
            description: '전체 너비 여부',
        },
        placeholder: {
            control: { type: 'text' },
            description: '플레이스홀더 텍스트',
        },
        value: {
            control: { type: 'text' },
            description: '검색어 값',
        },
        onChange: {
            action: 'changed',
            description: '검색어 변경 핸들러',
        },
        onSearch: {
            action: 'searched',
            description: '검색 실행 핸들러',
        },
    },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
    args: {
        placeholder: '검색어를 입력하세요...',
    },
};

export const WithValue: Story = {
    args: {
        value: '검색어',
        placeholder: '검색어를 입력하세요...',
    },
};

export const Small: Story = {
    args: {
        size: 's',
        placeholder: '작은 검색바',
    },
};

export const Large: Story = {
    args: {
        size: 'l',
        placeholder: '큰 검색바',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        placeholder: '아웃라인 스타일',
    },
};

export const Filled: Story = {
    args: {
        variant: 'filled',
        placeholder: '채워진 스타일',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        value: '비활성화된 검색바',
        placeholder: '검색어를 입력하세요...',
    },
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
        value: '읽기 전용 검색바',
        placeholder: '검색어를 입력하세요...',
    },
};

export const FullWidth: Story = {
    args: {
        fullWidth: true,
        placeholder: '전체 너비 검색바',
    },
    parameters: {
        layout: 'padded',
    },
};

export const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState('');

        const handleChange = (newValue: string) => {
            setValue(newValue);
        };

        const handleSearch = (searchValue: string) => {
            console.log('검색 실행:', searchValue);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
                <SearchBar
                    value={value}
                    onChange={handleChange}
                    onSearch={handleSearch}
                    placeholder="제어된 검색바"
                />
                <div style={{ fontSize: '14px', color: '#666' }}>
                    현재 값: {value || '(없음)'}
                </div>
            </div>
        );
    },
};

export const WithCustomIcons: Story = {
    args: {
        placeholder: '커스텀 아이콘',
        searchIcon: () => (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
            </svg>
        ),
        clearIcon: () => (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        ),
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
            <div>
                <h4>Default</h4>
                <SearchBar placeholder="기본 스타일" />
            </div>
            <div>
                <h4>Outlined</h4>
                <SearchBar variant="outlined" placeholder="아웃라인 스타일" />
            </div>
            <div>
                <h4>Filled</h4>
                <SearchBar variant="filled" placeholder="채워진 스타일" />
            </div>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
            <div>
                <h4>Small</h4>
                <SearchBar size="s" placeholder="작은 크기" />
            </div>
            <div>
                <h4>Medium</h4>
                <SearchBar size="m" placeholder="중간 크기" />
            </div>
            <div>
                <h4>Large</h4>
                <SearchBar size="l" placeholder="큰 크기" />
            </div>
        </div>
    ),
};

export const WithRecentSearches: Story = {
    args: {
        enableRecentSearches: true,
        placeholder: '최근 검색어 기능',
    },
};

export const WithSuggestedSearches: Story = {
    args: {
        suggestedSearches: ['React 컴포넌트', 'TypeScript 가이드', 'CSS 스타일링'],
        placeholder: '추천 검색어 롤링',
    },
};

export const WithBothFeatures: Story = {
    args: {
        enableRecentSearches: true,
        suggestedSearches: ['최신 트렌드', '인기 키워드', '추천 콘텐츠'],
        placeholder: '모든 기능 활성화',
    },
};

export const SuggestionClickDemo: Story = {
    render: () => {
        const [value, setValue] = useState('');

        const handleSearch = (searchValue: string) => {
            console.log('검색 실행:', searchValue);
            alert(`검색: ${searchValue}`);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
                <SearchBar
                    value={value}
                    onChange={setValue}
                    onSearch={handleSearch}
                    suggestedSearches={['React 컴포넌트', 'TypeScript 가이드', 'CSS 스타일링']}
                    placeholder="추천 검색어를 클릭해보세요"
                />
                <div style={{ fontSize: '14px', color: '#666' }}>
                    현재 값: {value || '(없음)'} - 추천 검색어 클릭 시 value로 들어갑니다
                </div>
            </div>
        );
    },
};
