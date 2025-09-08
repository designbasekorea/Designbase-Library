/**
 * Reorder 컴포넌트 스토리
 * 
 * 목적: Reorder 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: 드래그앤 드롭, 선택, 다양한 레이아웃과 스타일
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Reorder, ReorderItem } from './Reorder';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import {
    UserIcon,
    StarIcon,
    HeartIcon,
    BookIcon,
    CameraIcon,
    MusicIcon
} from '@designbase/icons';

const meta: Meta<typeof Reorder> = {
    title: 'Components/Reorder',
    component: Reorder,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'bordered', 'filled', 'minimal'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
        orientation: {
            control: { type: 'select' },
            options: ['vertical', 'horizontal'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 재정렬
export const Default: Story = {
    args: {
        items: [
            { id: '1', content: '첫 번째 아이템' },
            { id: '2', content: '두 번째 아이템' },
            { id: '3', content: '세 번째 아이템' },
            { id: '4', content: '네 번째 아이템' },
            { id: '5', content: '다섯 번째 아이템' },
        ],
        variant: 'default',
        size: 'md',
    },
};

// 카드 형태의 재정렬
export const CardItems: Story = {
    render: () => {
        const [items, setItems] = useState<ReorderItem[]>([
            {
                id: '1',
                content: (
                    <Card
                        title="React 개발"
                        description="React와 TypeScript를 사용한 프론트엔드 개발"
                        icon={StarIcon}
                        variant="filled"
                        size="sm"
                    />
                ),
            },
            {
                id: '2',
                content: (
                    <Card
                        title="UI/UX 디자인"
                        description="사용자 경험을 중심으로 한 인터페이스 디자인"
                        icon={HeartIcon}
                        variant="filled"
                        size="sm"
                    />
                ),
            },
            {
                id: '3',
                content: (
                    <Card
                        title="백엔드 개발"
                        description="Node.js와 Express를 사용한 서버 개발"
                        icon={BookIcon}
                        variant="filled"
                        size="sm"
                    />
                ),
            },
        ]);

        return (
            <Reorder
                items={items}
                onReorder={setItems}
                variant="minimal"
                size="lg"
            />
        );
    },
};

// 선택 가능한 재정렬
export const Selectable: Story = {
    render: () => {
        const [items, setItems] = useState<ReorderItem[]>([
            { id: '1', content: '선택 가능한 아이템 1' },
            { id: '2', content: '선택 가능한 아이템 2' },
            { id: '3', content: '선택 가능한 아이템 3' },
            { id: '4', content: '선택 가능한 아이템 4' },
        ]);
        const [selectedItems, setSelectedItems] = useState<ReorderItem[]>([]);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Reorder
                    items={items}
                    onReorder={setItems}
                    selectable={true}
                    multiSelect={true}
                    onSelect={setSelectedItems}
                    variant="bordered"
                    size="md"
                />

                {selectedItems.length > 0 && (
                    <div>
                        <h4>선택된 아이템들:</h4>
                        <ul>
                            {selectedItems.map(item => (
                                <li key={item.id}>{item.content}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    },
};

// 수평 재정렬
export const Horizontal: Story = {
    args: {
        items: [
            { id: '1', content: '왼쪽' },
            { id: '2', content: '중앙' },
            { id: '3', content: '오른쪽' },
        ],
        orientation: 'horizontal',
        variant: 'filled',
        size: 'md',
    },
};

// 크기별 비교
export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Small 크기</h3>
                <Reorder
                    items={[
                        { id: '1', content: 'Small 아이템 1' },
                        { id: '2', content: 'Small 아이템 2' },
                        { id: '3', content: 'Small 아이템 3' },
                    ]}
                    size="sm"
                    variant="default"
                />
            </div>

            <div>
                <h3>Medium 크기 (기본)</h3>
                <Reorder
                    items={[
                        { id: '1', content: 'Medium 아이템 1' },
                        { id: '2', content: 'Medium 아이템 2' },
                        { id: '3', content: 'Medium 아이템 3' },
                    ]}
                    size="md"
                    variant="default"
                />
            </div>

            <div>
                <h3>Large 크기</h3>
                <Reorder
                    items={[
                        { id: '1', content: 'Large 아이템 1' },
                        { id: '2', content: 'Large 아이템 2' },
                        { id: '3', content: 'Large 아이템 3' },
                    ]}
                    size="lg"
                    variant="default"
                />
            </div>
        </div>
    ),
};

// 변형별 비교
export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <h3>Default</h3>
                <Reorder
                    items={[
                        { id: '1', content: 'Default 아이템 1' },
                        { id: '2', content: 'Default 아이템 2' },
                    ]}
                    variant="default"
                />
            </div>

            <div>
                <h3>Bordered</h3>
                <Reorder
                    items={[
                        { id: '1', content: 'Bordered 아이템 1' },
                        { id: '2', content: 'Bordered 아이템 2' },
                    ]}
                    variant="bordered"
                />
            </div>

            <div>
                <h3>Filled</h3>
                <Reorder
                    items={[
                        { id: '1', content: 'Filled 아이템 1' },
                        { id: '2', content: 'Filled 아이템 2' },
                    ]}
                    variant="filled"
                />
            </div>

            <div>
                <h3>Minimal</h3>
                <Reorder
                    items={[
                        { id: '1', content: 'Minimal 아이템 1' },
                        { id: '2', content: 'Minimal 아이템 2' },
                    ]}
                    variant="minimal"
                />
            </div>
        </div>
    ),
};

// 드래그 핸들 없음
export const NoDragHandle: Story = {
    args: {
        items: [
            { id: '1', content: '드래그 핸들 없는 아이템 1' },
            { id: '2', content: '드래그 핸들 없는 아이템 2' },
            { id: '3', content: '드래그 핸들 없는 아이템 3' },
        ],
        showDragHandle: false,
        variant: 'default',
        size: 'md',
    },
};

// 비활성화된 아이템
export const DisabledItems: Story = {
    args: {
        items: [
            { id: '1', content: '활성 아이템 1' },
            { id: '2', content: '비활성 아이템', disabled: true },
            { id: '3', content: '활성 아이템 2' },
            { id: '4', content: '비활성 아이템 2', disabled: true },
        ],
        variant: 'bordered',
        size: 'md',
    },
};

// 복잡한 콘텐츠
export const ComplexContent: Story = {
    render: () => {
        const [items, setItems] = useState<ReorderItem[]>([
            {
                id: '1',
                content: (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <UserIcon style={{ width: '24px', height: '24px' }} />
                        <div>
                            <div style={{ fontWeight: 'bold' }}>김철수</div>
                            <div style={{ fontSize: '14px', color: '#666' }}>프론트엔드 개발자</div>
                        </div>
                        <Button size="sm" variant="outline">프로필 보기</Button>
                    </div>
                ),
            },
            {
                id: '2',
                content: (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <CameraIcon style={{ width: '24px', height: '24px' }} />
                        <div>
                            <div style={{ fontWeight: 'bold' }}>사진 갤러리</div>
                            <div style={{ fontSize: '14px', color: '#666' }}>24개의 사진</div>
                        </div>
                        <Button size="sm" variant="outline">보기</Button>
                    </div>
                ),
            },
            {
                id: '3',
                content: (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <MusicIcon style={{ width: '24px', height: '24px' }} />
                        <div>
                            <div style={{ fontWeight: 'bold' }}>음악 플레이리스트</div>
                            <div style={{ fontSize: '14px', color: '#666' }}>15곡</div>
                        </div>
                        <Button size="sm" variant="outline">재생</Button>
                    </div>
                ),
            },
        ]);

        return (
            <Reorder
                items={items}
                onReorder={setItems}
                variant="filled"
                size="lg"
            />
        );
    },
};

// 이벤트 콜백 예제
export const WithCallbacks: Story = {
    render: () => {
        const [items, setItems] = useState<ReorderItem[]>([
            { id: '1', content: '콜백 테스트 아이템 1' },
            { id: '2', content: '콜백 테스트 아이템 2' },
            { id: '3', content: '콜백 테스트 아이템 3' },
        ]);

        const handleReorder = (newItems: ReorderItem[]) => {
            console.log('순서 변경됨:', newItems.map(item => item.id));
            setItems(newItems);
        };

        const handleItemClick = (item: ReorderItem, index: number) => {
            console.log('아이템 클릭됨:', item.id, '인덱스:', index);
        };

        const handleDragStart = (item: ReorderItem, index: number) => {
            console.log('드래그 시작:', item.id, '인덱스:', index);
        };

        const handleDragEnd = (item: ReorderItem, fromIndex: number, toIndex: number) => {
            console.log('드래그 종료:', item.id, 'from:', fromIndex, 'to:', toIndex);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Reorder
                    items={items}
                    onReorder={handleReorder}
                    onItemClick={handleItemClick}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    variant="bordered"
                    size="md"
                />

                <div>
                    <h4>콘솔을 확인하여 이벤트를 확인하세요!</h4>
                    <p>아이템을 클릭하거나 드래그해보세요.</p>
                </div>
            </div>
        );
    },
};

// 전체 너비
export const FullWidth: Story = {
    args: {
        items: [
            { id: '1', content: '전체 너비 아이템 1' },
            { id: '2', content: '전체 너비 아이템 2' },
            { id: '3', content: '전체 너비 아이템 3' },
        ],
        fullWidth: true,
        variant: 'filled',
        size: 'md',
    },
};

// 터치 디바이스 최적화
export const TouchOptimized: Story = {
    args: {
        items: [
            { id: '1', content: '터치 최적화 아이템 1' },
            { id: '2', content: '터치 최적화 아이템 2' },
            { id: '3', content: '터치 최적화 아이템 3' },
        ],
        variant: 'default',
        size: 'lg',
        showDragHandle: true,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
