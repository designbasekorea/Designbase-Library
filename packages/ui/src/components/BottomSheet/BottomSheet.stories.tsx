import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BottomSheet } from './BottomSheet';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

const meta: Meta<typeof BottomSheet> = {
    title: 'Components/BottomSheet',
    component: BottomSheet,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l', 'xl', 'full'],
        },
        showBackdrop: {
            control: { type: 'boolean' },
        },
        backdropBlur: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div style={{ padding: '20px' }}>
                <Button onClick={() => setIsOpen(true)}>BottomSheet 열기</Button>

                <BottomSheet
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="기본 BottomSheet"
                    subtitle="뒤에 딤 레이어가 표시됩니다"
                    size="m"
                    showBackdrop={true}
                >
                    <div style={{ padding: '20px' }}>
                        <p>기본 BottomSheet입니다.</p>
                        <p>뒤에 검은색 반투명 오버레이가 깔려 있습니다.</p>
                    </div>
                </BottomSheet>
            </div>
        );
    },
};

// 사이즈 (s, m, l, xl, full)
export const AllSizes: Story = {
    render: () => {
        const [openSize, setOpenSize] = useState<string | null>(null);

        return (
            <div style={{ padding: '20px' }}>
                <h2>BottomSheet 크기별</h2>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <Button onClick={() => setOpenSize('s')}>Small</Button>
                    <Button onClick={() => setOpenSize('m')}>Medium</Button>
                    <Button onClick={() => setOpenSize('l')}>Large</Button>
                    <Button onClick={() => setOpenSize('xl')}>Extra Large</Button>
                    <Button onClick={() => setOpenSize('full')}>Full</Button>
                </div>

                <BottomSheet
                    open={openSize === 's'}
                    onClose={() => setOpenSize(null)}
                    size="s"
                    title="Small (40vh)"
                >
                    <div style={{ padding: '20px' }}>
                        <p>작은 크기의 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>

                <BottomSheet
                    open={openSize === 'm'}
                    onClose={() => setOpenSize(null)}
                    size="m"
                    title="Medium (60vh)"
                >
                    <div style={{ padding: '20px' }}>
                        <p>중간 크기의 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>

                <BottomSheet
                    open={openSize === 'l'}
                    onClose={() => setOpenSize(null)}
                    size="l"
                    title="Large (80vh)"
                >
                    <div style={{ padding: '20px' }}>
                        <p>큰 크기의 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>

                <BottomSheet
                    open={openSize === 'xl'}
                    onClose={() => setOpenSize(null)}
                    size="xl"
                    title="Extra Large (90vh)"
                >
                    <div style={{ padding: '20px' }}>
                        <p>매우 큰 크기의 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>

                <BottomSheet
                    open={openSize === 'full'}
                    onClose={() => setOpenSize(null)}
                    size="full"
                    title="Full (100vh)"
                >
                    <div style={{ padding: '20px' }}>
                        <p>전체 화면 크기의 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>
            </div>
        );
    },
};

// Backdrop 옵션
export const BackdropOptions: Story = {
    render: () => {
        const [backdropType, setBackdropType] = useState<string | null>(null);

        return (
            <div style={{ padding: '20px' }}>
                <h2>Backdrop 옵션</h2>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <Button onClick={() => setBackdropType('with')}>With Backdrop (기본)</Button>
                    <Button onClick={() => setBackdropType('without')}>Without Backdrop</Button>
                    <Button onClick={() => setBackdropType('blur')}>With Blur</Button>
                </div>

                <BottomSheet
                    open={backdropType === 'with'}
                    onClose={() => setBackdropType(null)}
                    title="딤 레이어 있음"
                    size="m"
                    showBackdrop={true}
                    backdropBlur={false}
                >
                    <p>뒤에 검은색 반투명 오버레이가 표시됩니다. (기본값)</p>
                    <p>배경을 클릭하면 닫힙니다.</p>
                </BottomSheet>

                <BottomSheet
                    open={backdropType === 'without'}
                    onClose={() => setBackdropType(null)}
                    title="딤 레이어 없음"
                    size="m"
                    showBackdrop={false}
                >
                    <p>뒤에 오버레이가 표시되지 않습니다.</p>
                    <p>화면 뒤의 내용이 그대로 보입니다.</p>
                </BottomSheet>

                <BottomSheet
                    open={backdropType === 'blur'}
                    onClose={() => setBackdropType(null)}
                    title="블러 효과 포함"
                    size="m"
                    showBackdrop={true}
                    backdropBlur={true}
                >
                    <p>뒤에 블러 효과가 적용된 딤 레이어가 표시됩니다.</p>
                    <p>배경이 흐릿하게 보입니다.</p>
                </BottomSheet>
            </div>
        );
    },
};

// 폼 예시
export const WithForm: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div style={{ padding: '20px' }}>
                <Button onClick={() => setIsOpen(true)}>폼이 있는 BottomSheet</Button>

                <BottomSheet
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    size="l"
                    title="사용자 정보 입력"
                    subtitle="정보를 입력해주세요"
                    showBackdrop={true}
                    footer={
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                            <Button variant="tertiary" onClick={() => setIsOpen(false)}>취소</Button>
                            <Button variant="primary" onClick={() => setIsOpen(false)}>저장</Button>
                        </div>
                    }
                >
                    <div style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <Input label="이름" placeholder="이름을 입력하세요" fullWidth />
                            <Input label="이메일" type="email" placeholder="이메일을 입력하세요" fullWidth />
                            <Input label="전화번호" placeholder="전화번호를 입력하세요" fullWidth />
                        </div>
                    </div>
                </BottomSheet>
            </div>
        );
    },
};
