/**
 * Drawer 컴포넌트 스토리
 * 
 * 목적: Drawer 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: 다양한 위치, 크기, 애니메이션, 접근성 예제
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer, DrawerPosition, DrawerSize } from './Drawer';
import { Button } from '../Button/Button';

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: { type: 'select' },
            options: ['left', 'right', 'top', 'bottom'],
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl', 'full'],
        },
        showCloseButton: {
            control: { type: 'boolean' },
        },
        closeOnBackdropClick: {
            control: { type: 'boolean' },
        },
        closeOnEscape: {
            control: { type: 'boolean' },
        },
        showOverlay: {
            control: { type: 'boolean' },
        },
        overlayClosable: {
            control: { type: 'boolean' },
        },
        trapFocus: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Drawer
export const Default: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div style={{ padding: '20px' }}>
                <Button onClick={() => setIsOpen(true)}>
                    Drawer 열기
                </Button>
                <Drawer
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="기본 Drawer"
                    position="right"
                    size="md"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>Drawer 내용</h3>
                        <p>이것은 기본 Drawer 컴포넌트입니다.</p>
                        <p>다양한 위치와 크기로 설정할 수 있습니다.</p>
                        <Button onClick={() => setIsOpen(false)}>
                            닫기
                        </Button>
                    </div>
                </Drawer>
            </div>
        );
    },
};

// 위치별 Drawer
export const Positions: Story = {
    render: () => {
        const [openDrawer, setOpenDrawer] = useState<DrawerPosition | null>(null);

        const openDrawerHandler = (position: DrawerPosition) => {
            setOpenDrawer(position);
        };

        const closeDrawer = () => {
            setOpenDrawer(null);
        };

        return (
            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <Button onClick={() => openDrawerHandler('left')}>
                        왼쪽 Drawer
                    </Button>
                    <Button onClick={() => openDrawerHandler('right')}>
                        오른쪽 Drawer
                    </Button>
                    <Button onClick={() => openDrawerHandler('top')}>
                        위쪽 Drawer
                    </Button>
                    <Button onClick={() => openDrawerHandler('bottom')}>
                        아래쪽 Drawer
                    </Button>
                </div>

                {/* 왼쪽 Drawer */}
                <Drawer
                    isOpen={openDrawer === 'left'}
                    onClose={closeDrawer}
                    title="왼쪽 Drawer"
                    position="left"
                    size="md"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>왼쪽에서 열리는 Drawer</h3>
                        <p>왼쪽에서 슬라이드되어 나오는 Drawer입니다.</p>
                        <Button onClick={closeDrawer}>닫기</Button>
                    </div>
                </Drawer>

                {/* 오른쪽 Drawer */}
                <Drawer
                    isOpen={openDrawer === 'right'}
                    onClose={closeDrawer}
                    title="오른쪽 Drawer"
                    position="right"
                    size="md"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>오른쪽에서 열리는 Drawer</h3>
                        <p>오른쪽에서 슬라이드되어 나오는 Drawer입니다.</p>
                        <Button onClick={closeDrawer}>닫기</Button>
                    </div>
                </Drawer>

                {/* 위쪽 Drawer */}
                <Drawer
                    isOpen={openDrawer === 'top'}
                    onClose={closeDrawer}
                    title="위쪽 Drawer"
                    position="top"
                    size="md"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>위쪽에서 열리는 Drawer</h3>
                        <p>위쪽에서 슬라이드되어 나오는 Drawer입니다.</p>
                        <Button onClick={closeDrawer}>닫기</Button>
                    </div>
                </Drawer>

                {/* 아래쪽 Drawer */}
                <Drawer
                    isOpen={openDrawer === 'bottom'}
                    onClose={closeDrawer}
                    title="아래쪽 Drawer"
                    position="bottom"
                    size="md"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>아래쪽에서 열리는 Drawer</h3>
                        <p>아래쪽에서 슬라이드되어 나오는 Drawer입니다.</p>
                        <Button onClick={closeDrawer}>닫기</Button>
                    </div>
                </Drawer>
            </div>
        );
    },
};

// 크기별 Drawer
export const Sizes: Story = {
    render: () => {
        const [openSize, setOpenSize] = useState<DrawerSize | null>(null);

        const openDrawerHandler = (size: DrawerSize) => {
            setOpenSize(size);
        };

        const closeDrawer = () => {
            setOpenSize(null);
        };

        return (
            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <Button onClick={() => openDrawerHandler('sm')}>
                        Small
                    </Button>
                    <Button onClick={() => openDrawerHandler('md')}>
                        Medium
                    </Button>
                    <Button onClick={() => openDrawerHandler('lg')}>
                        Large
                    </Button>
                    <Button onClick={() => openDrawerHandler('xl')}>
                        Extra Large
                    </Button>
                    <Button onClick={() => openDrawerHandler('full')}>
                        Full
                    </Button>
                </div>

                <Drawer
                    isOpen={openSize !== null}
                    onClose={closeDrawer}
                    title={`${openSize?.toUpperCase()} 크기 Drawer`}
                    position="right"
                    size={openSize || 'md'}
                >
                    <div style={{ padding: '20px' }}>
                        <h3>{openSize?.toUpperCase()} 크기 Drawer</h3>
                        <p>이 Drawer는 {openSize} 크기로 설정되어 있습니다.</p>
                        <p>다양한 크기 옵션을 통해 사용자 경험을 최적화할 수 있습니다.</p>
                        <Button onClick={closeDrawer}>닫기</Button>
                    </div>
                </Drawer>
            </div>
        );
    },
};

// 복잡한 내용이 있는 Drawer
export const ComplexContent: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div style={{ padding: '20px' }}>
                <Button onClick={() => setIsOpen(true)}>
                    복잡한 내용 Drawer 열기
                </Button>
                <Drawer
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="복잡한 내용 Drawer"
                    position="right"
                    size="lg"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>복잡한 내용 예제</h3>

                        <section style={{ marginBottom: '20px' }}>
                            <h4>섹션 1: 기본 정보</h4>
                            <p>이것은 Drawer 내부의 복잡한 내용을 보여주는 예제입니다.</p>
                            <ul>
                                <li>여러 섹션으로 구성</li>
                                <li>스크롤 가능한 내용</li>
                                <li>다양한 UI 요소들</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '20px' }}>
                            <h4>섹션 2: 폼 요소</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <input
                                    type="text"
                                    placeholder="이름을 입력하세요"
                                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                                />
                                <textarea
                                    placeholder="설명을 입력하세요"
                                    rows={3}
                                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                                />
                                <Button>저장</Button>
                            </div>
                        </section>

                        <section style={{ marginBottom: '20px' }}>
                            <h4>섹션 3: 긴 내용</h4>
                            <p>이 섹션은 스크롤을 테스트하기 위한 긴 내용입니다.</p>
                            {Array.from({ length: 10 }, (_, i) => (
                                <p key={i}>
                                    이것은 {i + 1}번째 문단입니다. Drawer의 스크롤 기능을 테스트하기 위한
                                    더미 텍스트입니다. 사용자가 내용을 스크롤할 수 있는지 확인해보세요.
                                </p>
                            ))}
                        </section>

                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                            <Button variant="secondary" onClick={() => setIsOpen(false)}>
                                취소
                            </Button>
                            <Button onClick={() => setIsOpen(false)}>
                                확인
                            </Button>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    },
};

// 접근성 예제
export const Accessibility: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div style={{ padding: '20px' }}>
                <Button onClick={() => setIsOpen(true)}>
                    접근성 테스트 Drawer 열기
                </Button>
                <Drawer
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="접근성 테스트 Drawer"
                    position="right"
                    size="md"
                    id="accessibility-drawer"
                    trapFocus={true}
                    closeOnEscape={true}
                >
                    <div style={{ padding: '20px' }}>
                        <h3>접근성 기능 테스트</h3>
                        <p>이 Drawer는 다양한 접근성 기능을 포함합니다:</p>
                        <ul>
                            <li>포커스 트랩 (Tab 키로 탐색)</li>
                            <li>ESC 키로 닫기</li>
                            <li>ARIA 속성 지원</li>
                            <li>키보드 네비게이션</li>
                        </ul>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                            <button style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
                                포커스 가능한 버튼 1
                            </button>
                            <button style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
                                포커스 가능한 버튼 2
                            </button>
                            <button style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
                                포커스 가능한 버튼 3
                            </button>
                        </div>

                        <p style={{ marginTop: '20px' }}>
                            <strong>테스트 방법:</strong>
                        </p>
                        <ol>
                            <li>Tab 키를 눌러 포커스가 Drawer 내부에 트랩되는지 확인</li>
                            <li>ESC 키를 눌러 Drawer가 닫히는지 확인</li>
                            <li>스크린 리더로 ARIA 속성이 제대로 읽히는지 확인</li>
                        </ol>

                        <Button onClick={() => setIsOpen(false)} style={{ marginTop: '20px' }}>
                            닫기
                        </Button>
                    </div>
                </Drawer>
            </div>
        );
    },
};

// 인터랙티브 예제
export const Interactive: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [position, setPosition] = useState<DrawerPosition>('right');
        const [size, setSize] = useState<DrawerSize>('md');
        const [showCloseButton, setShowCloseButton] = useState(true);
        const [closeOnBackdropClick, setCloseOnBackdropClick] = useState(true);

        return (
            <div style={{ padding: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h3>Drawer 설정</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                        <div>
                            <label>위치: </label>
                            <select
                                value={position}
                                onChange={(e) => setPosition(e.target.value as DrawerPosition)}
                                style={{ marginLeft: '10px', padding: '4px' }}
                            >
                                <option value="left">왼쪽</option>
                                <option value="right">오른쪽</option>
                                <option value="top">위쪽</option>
                                <option value="bottom">아래쪽</option>
                            </select>
                        </div>

                        <div>
                            <label>크기: </label>
                            <select
                                value={size}
                                onChange={(e) => setSize(e.target.value as DrawerSize)}
                                style={{ marginLeft: '10px', padding: '4px' }}
                            >
                                <option value="sm">Small</option>
                                <option value="md">Medium</option>
                                <option value="lg">Large</option>
                                <option value="xl">Extra Large</option>
                                <option value="full">Full</option>
                            </select>
                        </div>

                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={showCloseButton}
                                    onChange={(e) => setShowCloseButton(e.target.checked)}
                                    style={{ marginRight: '8px' }}
                                />
                                닫기 버튼 표시
                            </label>
                        </div>

                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={closeOnBackdropClick}
                                    onChange={(e) => setCloseOnBackdropClick(e.target.checked)}
                                    style={{ marginRight: '8px' }}
                                />
                                배경 클릭 시 닫기
                            </label>
                        </div>
                    </div>
                </div>

                <Button onClick={() => setIsOpen(true)}>
                    설정된 옵션으로 Drawer 열기
                </Button>

                <Drawer
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="인터랙티브 Drawer"
                    position={position}
                    size={size}
                    showCloseButton={showCloseButton}
                    closeOnBackdropClick={closeOnBackdropClick}
                >
                    <div style={{ padding: '20px' }}>
                        <h3>현재 설정</h3>
                        <ul>
                            <li>위치: {position}</li>
                            <li>크기: {size}</li>
                            <li>닫기 버튼: {showCloseButton ? '표시' : '숨김'}</li>
                            <li>배경 클릭 닫기: {closeOnBackdropClick ? '활성화' : '비활성화'}</li>
                        </ul>

                        <p>설정을 변경하고 Drawer를 다시 열어보세요!</p>

                        <Button onClick={() => setIsOpen(false)}>
                            닫기
                        </Button>
                    </div>
                </Drawer>
            </div>
        );
    },
};
