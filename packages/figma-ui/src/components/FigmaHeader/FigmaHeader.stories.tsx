import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { FigmaHeader } from './FigmaHeader';
import { Input, SegmentControl } from '@designbasekorea/ui';
import { SettingsIcon, SearchIcon, PlusIcon, DownloadIcon } from '@designbasekorea/icons';

const meta: Meta<typeof FigmaHeader> = {
    title: 'Figma UI/FigmaHeader',
    component: FigmaHeader,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    '피그마 플러그인을 위한 상단 헤더 컴포넌트입니다. 탭, 검색바, 액션 버튼 등을 포함할 수 있습니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: false,
            description: '중앙 영역 (탭, 세그먼트 컨트롤 등)',
        },
        searchBar: {
            control: false,
            description: '검색바 컴포넌트 (헤더 아래에 표시)',
        },
        actions: {
            control: false,
            description: '우측 액션 버튼들 (아이콘만 전달)',
        },
        sticky: {
            control: 'boolean',
            description: '고정 여부',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        sticky: true,
    },
};

export const WithSegmentControl: Story = {
    render: () => {
        const [activeTab, setActiveTab] = useState('design');

        const options = [
            { value: 'design', label: '디자인' },
            { value: 'prototype', label: '프로토타입' },
            { value: 'dev', label: '개발' },
        ];

        return (
            <FigmaHeader>
                <SegmentControl
                    options={options}
                    value={activeTab}
                    onChange={setActiveTab}
                    size="s"
                />
            </FigmaHeader>
        );
    },
};

export const WithSearch: Story = {
    args: {
        searchBar: (
            <Input
                placeholder="검색..."
                size="s"
                icon={<SearchIcon size={16} />}
            />
        ),
    },
};

export const WithActions: Story = {
    render: () => {
        return (
            <FigmaHeader
                actions={[
                    <PlusIcon key="plus" size={16} />,
                    <DownloadIcon key="download" size={16} />,
                    <SettingsIcon key="settings" size={16} />,
                ]}
            />
        );
    },
};

export const Complete: Story = {
    render: () => {
        const [activeTab, setActiveTab] = useState('design');
        const [searchValue, setSearchValue] = useState('');

        const options = [
            { value: 'design', label: '디자인' },
            { value: 'prototype', label: '프로토타입' },
            { value: 'dev', label: '개발' },
        ];

        return (
            <FigmaHeader
                searchBar={
                    <Input
                        placeholder="검색..."
                        size="s"
                        icon={<SearchIcon size={16} />}
                        value={searchValue}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
                    />
                }
                actions={[
                    <PlusIcon key="plus" size={16} />,
                    <DownloadIcon key="download" size={16} />,
                    <SettingsIcon key="settings" size={16} />,
                ]}
            >
                <SegmentControl
                    options={options}
                    value={activeTab}
                    onChange={setActiveTab}
                    size="s"
                />
            </FigmaHeader>
        );
    },
};


export const WithCustomTabs: Story = {
    render: () => {
        const [activeTab, setActiveTab] = useState('design');

        const tabs = [
            { value: 'design', label: '디자인' },
            { value: 'prototype', label: '프로토타입' },
            { value: 'dev', label: '개발' },
        ];

        return (
            <FigmaHeader>
                <div style={{
                    display: 'flex',
                    gap: '4px',
                    backgroundColor: 'var(--db-surface-subtle)',
                    borderRadius: 'var(--db-radius-s)',
                    padding: '2px'
                }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            style={{
                                padding: '6px 12px',
                                border: 'none',
                                borderRadius: 'var(--db-radius-xs)',
                                backgroundColor: activeTab === tab.value ? 'var(--db-surface-base)' : 'transparent',
                                color: activeTab === tab.value ? 'var(--db-text-primary)' : 'var(--db-text-secondary)',
                                cursor: 'pointer',
                                fontSize: 'var(--db-text-sm)',
                                fontWeight: 'var(--db-weight-medium)',
                                transition: 'all 0.2s ease',
                                boxShadow: activeTab === tab.value ? 'var(--db-shadow-xs)' : 'none',
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </FigmaHeader>
        );
    },
};

export const NonSticky: Story = {
    render: () => {
        return (
            <FigmaHeader
                sticky={false}
                actions={[
                    <SettingsIcon key="settings" size={16} />,
                ]}
            />
        );
    },
};
