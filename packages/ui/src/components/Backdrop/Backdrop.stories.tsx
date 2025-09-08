/**
 * Backdrop 컴포넌트 스토리
 * 
 * 목적: Backdrop 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: 애니메이션, 블러 효과, 투명도 등 다양한 설정 예제
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Backdrop } from './Backdrop';
import { Button } from '../Button/Button';

const meta: Meta<typeof Backdrop> = {
    title: 'Components/Backdrop',
    component: Backdrop,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: { type: 'boolean' },
        },
        opacity: {
            control: { type: 'range', min: 0, max: 1, step: 0.1 },
        },
        blur: {
            control: { type: 'boolean' },
        },
        blurAmount: {
            control: { type: 'range', min: 0, max: 20, step: 1 },
        },
        animation: {
            control: { type: 'select' },
            options: ['fade', 'slide', 'zoom', 'none'],
        },
        animationDuration: {
            control: { type: 'range', min: 100, max: 1000, step: 100 },
        },
        zIndex: {
            control: { type: 'number' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Backdrop
export const Default: Story = {
    args: {
        open: true,
        opacity: 0.5,
        animation: 'fade',
    },
    render: (args) => (
        <Backdrop {...args}>
            <div style={{
                background: 'white',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                maxWidth: '400px',
                textAlign: 'center'
            }}>
                <h3>모달 내용</h3>
                <p>이것은 Backdrop 위에 표시되는 모달 내용입니다.</p>
                <Button variant="primary">확인</Button>
            </div>
        </Backdrop>
    ),
};

// 애니메이션 효과별 Backdrop
export const Animations: Story = {
    render: () => {
        const [openAnimation, setOpenAnimation] = useState<string | null>(null);
        const [currentAnimation, setCurrentAnimation] = useState<'fade' | 'slide' | 'zoom' | 'none'>('fade');

        const openBackdrop = (animation: 'fade' | 'slide' | 'zoom' | 'none') => {
            setCurrentAnimation(animation);
            setOpenAnimation(animation);
        };

        const closeBackdrop = () => {
            setOpenAnimation(null);
        };

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Button onClick={() => openBackdrop('fade')}>Fade 애니메이션</Button>
                    <Button onClick={() => openBackdrop('slide')}>Slide 애니메이션</Button>
                    <Button onClick={() => openBackdrop('zoom')}>Zoom 애니메이션</Button>
                    <Button onClick={() => openBackdrop('none')}>애니메이션 없음</Button>
                </div>

                <Backdrop
                    open={!!openAnimation}
                    animation={currentAnimation}
                    onClick={closeBackdrop}
                >
                    <div style={{
                        background: 'white',
                        padding: '24px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        maxWidth: '400px',
                        textAlign: 'center'
                    }}>
                        <h3>{currentAnimation} 애니메이션</h3>
                        <p>현재 {currentAnimation} 애니메이션이 적용된 Backdrop입니다.</p>
                        <Button variant="primary" onClick={closeBackdrop}>닫기</Button>
                    </div>
                </Backdrop>
            </div>
        );
    },
};

// 블러 효과 Backdrop
export const BlurEffects: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        const [blurAmount, setBlurAmount] = useState(4);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Button onClick={() => setOpen(true)}>블러 효과 Backdrop 열기</Button>
                    <label>
                        블러 강도: {blurAmount}px
                        <input
                            type="range"
                            min="0"
                            max="20"
                            value={blurAmount}
                            onChange={(e) => setBlurAmount(Number(e.target.value))}
                            style={{ marginLeft: '8px' }}
                        />
                    </label>
                </div>

                <Backdrop
                    open={open}
                    blur={true}
                    blurAmount={blurAmount}
                    onClick={() => setOpen(false)}
                >
                    <div style={{
                        background: 'white',
                        padding: '24px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        maxWidth: '400px',
                        textAlign: 'center'
                    }}>
                        <h3>블러 효과</h3>
                        <p>블러 강도: {blurAmount}px</p>
                        <Button variant="primary" onClick={() => setOpen(false)}>닫기</Button>
                    </div>
                </Backdrop>
            </div>
        );
    },
};

// 투명도 조절 Backdrop
export const OpacityControl: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        const [opacity, setOpacity] = useState(0.5);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Button onClick={() => setOpen(true)}>투명도 조절 Backdrop 열기</Button>
                    <label>
                        투명도: {opacity}
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={opacity}
                            onChange={(e) => setOpacity(Number(e.target.value))}
                            style={{ marginLeft: '8px' }}
                        />
                    </label>
                </div>

                <Backdrop
                    open={open}
                    opacity={opacity}
                    onClick={() => setOpen(false)}
                >
                    <div style={{
                        background: 'white',
                        padding: '24px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        maxWidth: '400px',
                        textAlign: 'center'
                    }}>
                        <h3>투명도 조절</h3>
                        <p>현재 투명도: {opacity}</p>
                        <Button variant="primary" onClick={() => setOpen(false)}>닫기</Button>
                    </div>
                </Backdrop>
            </div>
        );
    },
};

// 커스텀 색상 Backdrop
export const CustomColors: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        const [backgroundColor, setBackgroundColor] = useState('rgba(255, 0, 0, 0.3)');

        const colors = [
            'rgba(255, 0, 0, 0.3)',
            'rgba(0, 255, 0, 0.3)',
            'rgba(0, 0, 255, 0.3)',
            'rgba(255, 255, 0, 0.3)',
            'rgba(255, 0, 255, 0.3)',
        ];

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button onClick={() => setOpen(true)}>커스텀 색상 Backdrop 열기</Button>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {colors.map((color, index) => (
                            <button
                                key={index}
                                onClick={() => setBackgroundColor(color)}
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    backgroundColor: color,
                                    border: '2px solid #ccc',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                                title={color}
                            />
                        ))}
                    </div>
                </div>

                <Backdrop
                    open={open}
                    backgroundColor={backgroundColor}
                    onClick={() => setOpen(false)}
                >
                    <div style={{
                        background: 'white',
                        padding: '24px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        maxWidth: '400px',
                        textAlign: 'center'
                    }}>
                        <h3>커스텀 색상</h3>
                        <p>현재 배경색: {backgroundColor}</p>
                        <Button variant="primary" onClick={() => setOpen(false)}>닫기</Button>
                    </div>
                </Backdrop>
            </div>
        );
    },
};

// 접근성 예제
export const Accessibility: Story = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Button onClick={() => setOpen(true)}>접근성 고려 Backdrop 열기</Button>

                <Backdrop
                    open={open}
                    onClick={() => setOpen(false)}
                    disableEscapeKeyDown={false}
                >
                    <div
                        style={{
                            background: 'white',
                            padding: '24px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                            maxWidth: '400px',
                            textAlign: 'center'
                        }}
                        role="dialog"
                        aria-labelledby="dialog-title"
                        aria-describedby="dialog-description"
                    >
                        <h3 id="dialog-title">접근성 고려 다이얼로그</h3>
                        <p id="dialog-description">
                            이 다이얼로그는 스크린 리더와 키보드 네비게이션을 지원합니다.
                            ESC 키를 눌러 닫을 수 있습니다.
                        </p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                            <Button variant="primary" onClick={() => setOpen(false)}>확인</Button>
                            <Button variant="secondary" onClick={() => setOpen(false)}>취소</Button>
                        </div>
                    </div>
                </Backdrop>
            </div>
        );
    },
};

// 실제 사용 예제
export const UsageExamples: Story = {
    render: () => {
        const [modalOpen, setModalOpen] = useState(false);
        const [loadingOpen, setLoadingOpen] = useState(false);
        const [overlayOpen, setOverlayOpen] = useState(false);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
                {/* 모달 다이얼로그 예제 */}
                <div>
                    <h3>모달 다이얼로그</h3>
                    <Button onClick={() => setModalOpen(true)}>모달 열기</Button>

                    <Backdrop
                        open={modalOpen}
                        onClick={() => setModalOpen(false)}
                        animation="fade"
                    >
                        <div style={{
                            background: 'white',
                            padding: '32px',
                            borderRadius: '12px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                            maxWidth: '500px',
                            width: '100%'
                        }}>
                            <h2>모달 제목</h2>
                            <p>이것은 모달 다이얼로그의 예제입니다. 배경을 클릭하거나 ESC 키를 눌러 닫을 수 있습니다.</p>
                            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
                                <Button variant="secondary" onClick={() => setModalOpen(false)}>취소</Button>
                                <Button variant="primary" onClick={() => setModalOpen(false)}>확인</Button>
                            </div>
                        </div>
                    </Backdrop>
                </div>

                {/* 로딩 오버레이 예제 */}
                <div>
                    <h3>로딩 오버레이</h3>
                    <Button onClick={() => setLoadingOpen(true)}>로딩 시작</Button>

                    <Backdrop
                        open={loadingOpen}
                        disableBackdropClick={true}
                        disableEscapeKeyDown={true}
                        animation="fade"
                        blur={true}
                        blurAmount={8}
                    >
                        <div style={{
                            background: 'white',
                            padding: '32px',
                            borderRadius: '12px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                border: '4px solid #f3f3f3',
                                borderTop: '4px solid #007bff',
                                borderRadius: '50%',
                                animation: 'spin 1s linear infinite',
                                margin: '0 auto 16px'
                            }} />
                            <p>로딩 중...</p>
                            <Button
                                variant="secondary"
                                onClick={() => setLoadingOpen(false)}
                                style={{ marginTop: '16px' }}
                            >
                                로딩 취소
                            </Button>
                        </div>
                    </Backdrop>
                </div>

                {/* 전체화면 오버레이 예제 */}
                <div>
                    <h3>전체화면 오버레이</h3>
                    <Button onClick={() => setOverlayOpen(true)}>전체화면 오버레이 열기</Button>

                    <Backdrop
                        open={overlayOpen}
                        onClick={() => setOverlayOpen(false)}
                        animation="zoom"
                        backgroundColor="rgba(0, 0, 0, 0.8)"
                    >
                        <div style={{
                            background: 'white',
                            padding: '48px',
                            borderRadius: '16px',
                            boxShadow: '0 16px 64px rgba(0, 0, 0, 0.3)',
                            maxWidth: '600px',
                            width: '100%',
                            textAlign: 'center'
                        }}>
                            <h2>전체화면 오버레이</h2>
                            <p>이것은 전체화면 오버레이의 예제입니다. 배경이 어둡게 처리되어 콘텐츠에 집중할 수 있습니다.</p>
                            <div style={{ marginTop: '32px' }}>
                                <Button variant="primary" onClick={() => setOverlayOpen(false)}>닫기</Button>
                            </div>
                        </div>
                    </Backdrop>
                </div>

                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    },
};
