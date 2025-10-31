import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import { useState } from 'react';
import { UserIcon, CloseIcon, CircleCheckFilledIcon } from '@designbasekorea/icons';

const meta: Meta<typeof Chip> = {
    title: 'Components/Chip',
    component: Chip,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'success', 'warning', 'danger', 'info', 'neutral'],
        },
        disabled: {
            control: { type: 'boolean' },
        },
        selected: {
            control: { type: 'boolean' },
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
        onDelete: {
            action: 'deleted',
        },
        onClick: {
            action: 'clicked',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: '기본 칩',
    },
};

export const WithStartIcon: Story = {
    args: {
        label: '사용자',
        startIcon: <UserIcon />,
    },
};

export const WithEndIcon: Story = {
    args: {
        label: '완료됨',
        endIcon: <CircleCheckFilledIcon />,
    },
};

export const Deletable: Story = {
    args: {
        label: '삭제 가능한 칩',
        deletable: true,
    },
};

export const Clickable: Story = {
    args: {
        label: '클릭 가능한 칩',
        onClick: () => alert('칩이 클릭되었습니다!'),
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Chip label="Small" size="s" />
            <Chip label="Medium" size="m" />
            <Chip label="Large" size="l" />
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Chip label="Default" variant="default" />
            <Chip label="Primary" variant="primary" />
            <Chip label="Success" variant="success" />
            <Chip label="Warning" variant="warning" />
            <Chip label="Danger" variant="danger" />
            <Chip label="Info" variant="info" />
            <Chip label="Neutral" variant="neutral" />
        </div>
    ),
};


export const WithIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Chip label="사용자" startIcon={<UserIcon />} />
            <Chip label="완료됨" endIcon={<CircleCheckFilledIcon />} />
            <Chip label="삭제" startIcon={<UserIcon />} endIcon={<CloseIcon />} deletable />
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Chip label="기본" />
            <Chip label="선택됨" selected />
            <Chip label="비활성화" disabled />
            <Chip label="전체 너비" fullWidth />
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [chips, setChips] = useState([
            { id: '1', label: 'React', deletable: true },
            { id: '2', label: 'TypeScript', deletable: true },
            { id: '3', label: 'Storybook', deletable: true },
            { id: '4', label: 'SCSS', deletable: true },
        ]);

        const handleDelete = (id: string) => {
            setChips(chips.filter(chip => chip.id !== id));
        };

        return (
            <div>
                <p style={{ marginBottom: '16px' }}>클릭하여 삭제할 수 있습니다:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {chips.map(chip => (
                        <Chip
                            key={chip.id}
                            label={chip.label}
                            deletable={chip.deletable}
                            onDelete={() => handleDelete(chip.id)}
                        />
                    ))}
                </div>
            </div>
        );
    },
};

export const SelectableChips: Story = {
    render: () => {
        const [selectedChips, setSelectedChips] = useState<string[]>([]);

        const chips = [
            { id: 'react', label: 'React' },
            { id: 'typescript', label: 'TypeScript' },
            { id: 'storybook', label: 'Storybook' },
            { id: 'scss', label: 'SCSS' },
            { id: 'webpack', label: 'Webpack' },
        ];

        const handleChipClick = (id: string) => {
            setSelectedChips(prev =>
                prev.includes(id)
                    ? prev.filter(chipId => chipId !== id)
                    : [...prev, id]
            );
        };

        return (
            <div>
                <p style={{ marginBottom: '16px' }}>
                    선택된 칩: {selectedChips.join(', ') || '없음'}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {chips.map(chip => (
                        <Chip
                            key={chip.id}
                            label={chip.label}
                            selected={selectedChips.includes(chip.id)}
                            onClick={() => handleChipClick(chip.id)}
                        />
                    ))}
                </div>
            </div>
        );
    },
};

export const FilterChips: Story = {
    render: () => {
        const [activeFilters, setActiveFilters] = useState<string[]>([]);

        const filters = [
            { id: 'category', label: '카테고리' },
            { id: 'price', label: '가격' },
            { id: 'brand', label: '브랜드' },
            { id: 'size', label: '사이즈' },
            { id: 'color', label: '색상' },
        ];

        const handleFilterToggle = (id: string) => {
            setActiveFilters(prev =>
                prev.includes(id)
                    ? prev.filter(filterId => filterId !== id)
                    : [...prev, id]
            );
        };

        return (
            <div>
                <h3 style={{ marginBottom: '16px' }}>필터</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {filters.map(filter => (
                        <Chip
                            key={filter.id}
                            label={filter.label}
                            variant={activeFilters.includes(filter.id) ? 'primary' : 'default'}
                            onClick={() => handleFilterToggle(filter.id)}
                        />
                    ))}
                </div>
                <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
                    활성 필터: {activeFilters.length}개
                </p>
            </div>
        );
    },
};

export const TagCloud: Story = {
    render: () => {
        const tags = [
            { label: 'JavaScript', count: 150 },
            { label: 'React', count: 120 },
            { label: 'TypeScript', count: 95 },
            { label: 'Node.js', count: 80 },
            { label: 'CSS', count: 75 },
            { label: 'HTML', count: 65 },
            { label: 'Python', count: 60 },
            { label: 'Java', count: 55 },
            { label: 'C++', count: 45 },
            { label: 'Go', count: 40 },
        ];

        return (
            <div>
                <h3 style={{ marginBottom: '16px' }}>인기 태그</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={`${tag.label} (${tag.count})`}
                            variant={index < 3 ? 'primary' : 'default'}
                            size={index < 5 ? 'm' : 's'}
                        />
                    ))}
                </div>
            </div>
        );
    },
};

export const StatusChips: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Chip label="진행 중" variant="primary" startIcon={<UserIcon />} />
            <Chip label="완료됨" variant="success" endIcon={<CircleCheckFilledIcon />} />
            <Chip label="경고" variant="warning" />
            <Chip label="오류" variant="danger" />
            <Chip label="정보" variant="info" />
            <Chip label="대기 중" variant="neutral" />
        </div>
    ),
};

export const ResponsiveExample: Story = {
    args: {
        label: '반응형 칩',
        fullWidth: true,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};

export const LongLabel: Story = {
    args: {
        label: '매우 긴 라벨을 가진 칩 컴포넌트입니다',
    },
};

export const CustomColors: Story = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Chip
                label="커스텀"
                style={{
                    backgroundColor: '#f0f9ff',
                    color: '#0369a1',
                    borderColor: '#0ea5e9'
                }}
            />
            <Chip
                label="그라데이션"
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none'
                }}
            />
        </div>
    ),
};
