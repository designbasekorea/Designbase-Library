import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Confirm } from './Confirm';
import { Button } from '../Button/Button';

const meta: Meta<typeof Confirm> = {
    title: 'Components/Confirm',
    component: Confirm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['info', 'success', 'warning', 'danger'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>
                    확인 다이얼로그 열기
                </Button>
                <Confirm
                    open={open}
                    title="확인"
                    onClose={() => setOpen(false)}
                    onConfirm={() => {
                        console.log('확인됨');
                        setOpen(false);
                    }}
                    onCancel={() => {
                        console.log('취소됨');
                        setOpen(false);
                    }}
                >
                    정말로 이 작업을 수행하시겠습니까?
                </Confirm>
            </>
        );
    },
};

export const AllVariants: Story = {
    render: () => {
        const [openInfo, setOpenInfo] = useState(false);
        const [openSuccess, setOpenSuccess] = useState(false);
        const [openWarning, setOpenWarning] = useState(false);
        const [openDanger, setOpenDanger] = useState(false);

        return (
            <>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button onClick={() => setOpenInfo(true)}>
                        정보 확인
                    </Button>
                    <Button onClick={() => setOpenSuccess(true)}>
                        성공 확인
                    </Button>
                    <Button onClick={() => setOpenWarning(true)}>
                        경고 확인
                    </Button>
                    <Button onClick={() => setOpenDanger(true)}>
                        위험 확인
                    </Button>
                </div>

                <Confirm
                    open={openInfo}
                    title="정보 확인"
                    variant="info"
                    onClose={() => setOpenInfo(false)}
                    onConfirm={() => setOpenInfo(false)}
                    onCancel={() => setOpenInfo(false)}
                >
                    이것은 정보 확인 다이얼로그입니다.
                </Confirm>

                <Confirm
                    open={openSuccess}
                    title="성공 확인"
                    variant="success"
                    onClose={() => setOpenSuccess(false)}
                    onConfirm={() => setOpenSuccess(false)}
                    onCancel={() => setOpenSuccess(false)}
                >
                    작업이 성공적으로 완료되었습니다.
                </Confirm>

                <Confirm
                    open={openWarning}
                    title="경고 확인"
                    variant="warning"
                    onClose={() => setOpenWarning(false)}
                    onConfirm={() => setOpenWarning(false)}
                    onCancel={() => setOpenWarning(false)}
                >
                    주의가 필요한 작업입니다.
                </Confirm>

                <Confirm
                    open={openDanger}
                    title="위험 확인"
                    variant="danger"
                    onClose={() => setOpenDanger(false)}
                    onConfirm={() => setOpenDanger(false)}
                    onCancel={() => setOpenDanger(false)}
                >
                    이 작업은 되돌릴 수 없습니다.
                </Confirm>
            </>
        );
    },
};

export const AllSizes: Story = {
    render: () => {
        const [openSm, setOpenSm] = useState(false);
        const [openMd, setOpenMd] = useState(false);
        const [openLg, setOpenLg] = useState(false);

        return (
            <>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Button onClick={() => setOpenSm(true)}>
                        작은 크기
                    </Button>
                    <Button onClick={() => setOpenMd(true)}>
                        중간 크기
                    </Button>
                    <Button onClick={() => setOpenLg(true)}>
                        큰 크기
                    </Button>
                </div>

                <Confirm
                    open={openSm}
                    title="작은 확인"
                    size="sm"
                    onClose={() => setOpenSm(false)}
                    onConfirm={() => setOpenSm(false)}
                    onCancel={() => setOpenSm(false)}
                >
                    작은 크기의 확인 다이얼로그입니다.
                </Confirm>

                <Confirm
                    open={openMd}
                    title="중간 확인"
                    size="md"
                    onClose={() => setOpenMd(false)}
                    onConfirm={() => setOpenMd(false)}
                    onCancel={() => setOpenMd(false)}
                >
                    중간 크기의 확인 다이얼로그입니다.
                </Confirm>

                <Confirm
                    open={openLg}
                    title="큰 확인"
                    size="lg"
                    onClose={() => setOpenLg(false)}
                    onConfirm={() => setOpenLg(false)}
                    onCancel={() => setOpenLg(false)}
                >
                    큰 크기의 확인 다이얼로그입니다.
                </Confirm>
            </>
        );
    },
};

export const CustomButtons: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setOpen(true)}>
                    커스텀 버튼
                </Button>
                <Confirm
                    open={open}
                    title="커스텀 버튼"
                    confirmText="삭제"
                    cancelText="취소"
                    confirmVariant="danger"
                    onClose={() => setOpen(false)}
                    onConfirm={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                >
                    이 항목을 삭제하시겠습니까?
                </Confirm>
            </>
        );
    },
};
