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
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../Modal/Modal';
import { Spinner } from '../Spinner/Spinner';

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

// 기본 Backdrop + Modal
export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div>
                <Button onClick={() => setIsOpen(true)}>모달 열기</Button>

                <Backdrop
                    open={isOpen}
                    opacity={0.5}
                    animation="fade"
                    onClick={() => setIsOpen(false)}
                >
                    <Modal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        title="기본 모달"
                        size="m"
                        closeOnOutsideClick={false}
                    >
                        <ModalBody>
                            <p>Backdrop과 Modal을 함께 사용하는 기본 예시입니다.</p>
                            <p>Backdrop이 배경을 어둡게 하고, Modal이 내용을 표시합니다.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="primary" onClick={() => setIsOpen(false)}>확인</Button>
                        </ModalFooter>
                    </Modal>
                </Backdrop>
            </div>
        );
    },
};

// 애니메이션 효과별 Backdrop + Modal
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
                    <Modal
                        isOpen={!!openAnimation}
                        onClose={closeBackdrop}
                        title={`${currentAnimation} 애니메이션`}
                        size="m"
                        closeOnOutsideClick={false}
                    >
                        <ModalBody>
                            <p>현재 {currentAnimation} 애니메이션이 적용된 Backdrop입니다.</p>
                            <p>각 애니메이션 효과를 비교해보세요.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="primary" onClick={closeBackdrop}>닫기</Button>
                        </ModalFooter>
                    </Modal>
                </Backdrop>
            </div>
        );
    },
};

// 블러 효과 Backdrop + Modal
export const BlurEffects: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        const [blurAmount, setBlurAmount] = useState(4);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button onClick={() => setOpen(true)}>블러 효과 Backdrop 열기</Button>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        블러 강도: {blurAmount}px
                        <input
                            type="range"
                            min="0"
                            max="20"
                            value={blurAmount}
                            onChange={(e) => setBlurAmount(Number(e.target.value))}
                        />
                    </label>
                </div>

                <Backdrop
                    open={open}
                    blur={true}
                    blurAmount={blurAmount}
                    onClick={() => setOpen(false)}
                >
                    <Modal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                        title="블러 효과"
                        size="m"
                        closeOnOutsideClick={false}
                    >
                        <ModalBody>
                            <p>현재 블러 강도: {blurAmount}px</p>
                            <p>슬라이더로 블러 강도를 조절하면서 효과를 확인해보세요.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="primary" onClick={() => setOpen(false)}>닫기</Button>
                        </ModalFooter>
                    </Modal>
                </Backdrop>
            </div>
        );
    },
};

// 투명도 조절 Backdrop + Modal
export const OpacityControl: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        const [opacity, setOpacity] = useState(0.5);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button onClick={() => setOpen(true)}>투명도 조절 Backdrop 열기</Button>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        투명도: {opacity}
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={opacity}
                            onChange={(e) => setOpacity(Number(e.target.value))}
                        />
                    </label>
                </div>

                <Backdrop
                    open={open}
                    opacity={opacity}
                    onClick={() => setOpen(false)}
                >
                    <Modal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                        title="투명도 조절"
                        size="m"
                        closeOnOutsideClick={false}
                    >
                        <ModalBody>
                            <p>현재 투명도: {opacity}</p>
                            <p>슬라이더로 투명도를 조절하면서 배경의 밝기 변화를 확인해보세요.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="primary" onClick={() => setOpen(false)}>닫기</Button>
                        </ModalFooter>
                    </Modal>
                </Backdrop>
            </div>
        );
    },
};

// 커스텀 색상 Backdrop + Modal
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
                    <Modal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                        title="커스텀 색상"
                        size="m"
                        closeOnOutsideClick={false}
                    >
                        <ModalBody>
                            <p>현재 배경색: {backgroundColor}</p>
                            <p>색상 버튼을 클릭하여 배경색을 변경해보세요.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="primary" onClick={() => setOpen(false)}>닫기</Button>
                        </ModalFooter>
                    </Modal>
                </Backdrop>
            </div>
        );
    },
};

// 접근성 예제 + Modal
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
                    <Modal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                        title="접근성 고려 다이얼로그"
                        size="m"
                        closeOnOutsideClick={false}
                        closeOnEscape={true}
                    >
                        <ModalBody>
                            <p>
                                이 다이얼로그는 스크린 리더와 키보드 네비게이션을 지원합니다.
                                ESC 키를 눌러 닫을 수 있습니다.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                                <Button variant="tertiary" onClick={() => setOpen(false)}>취소</Button>
                                <Button variant="primary" onClick={() => setOpen(false)}>확인</Button>
                            </div>
                        </ModalFooter>
                    </Modal>
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
                        <Modal
                            isOpen={modalOpen}
                            onClose={() => setModalOpen(false)}
                            title="모달 제목"
                            size="m"
                            closeOnOutsideClick={false}
                        >
                            <ModalBody>
                                <p>이것은 모달 다이얼로그의 예제입니다.</p>
                                <p>배경을 클릭하거나 ESC 키를 눌러 닫을 수 있습니다.</p>
                            </ModalBody>
                            <ModalFooter>
                                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                                    <Button variant="tertiary" onClick={() => setModalOpen(false)}>취소</Button>
                                    <Button variant="primary" onClick={() => setModalOpen(false)}>확인</Button>
                                </div>
                            </ModalFooter>
                        </Modal>
                    </Backdrop>
                </div>

                {/* 로딩 오버레이 예제 */}
                <div>
                    <h3>로딩 오버레이 (Backdrop + Spinner)</h3>
                    <Button onClick={() => setLoadingOpen(true)}>로딩 시작</Button>

                    <Backdrop
                        open={loadingOpen}
                        disableBackdropClick={true}
                        disableEscapeKeyDown={true}
                        animation="fade"
                        blur={true}
                        blurAmount={8}
                    >
                        <Modal
                            isOpen={loadingOpen}
                            onClose={() => setLoadingOpen(false)}
                            title="로딩 중"
                            size="s"
                            closeOnOutsideClick={false}
                            closeOnEscape={false}
                        >
                            <ModalBody>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                                    <Spinner type="circular" size="l" />
                                    <p>데이터를 불러오는 중입니다...</p>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="tertiary" onClick={() => setLoadingOpen(false)}>취소</Button>
                            </ModalFooter>
                        </Modal>
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
