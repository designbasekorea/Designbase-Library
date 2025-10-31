import React, { useState, useCallback, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ColorPicker from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
    title: 'Components/ColorPicker',
    component: ColorPicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
        type: {
            control: { type: 'select' },
            options: ['dropdown', 'modal'],
        },
        position: {
            control: { type: 'select' },
            options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
        },
        showEyedropper: {
            control: { type: 'boolean' },
        },
        showInput: {
            control: { type: 'boolean' },
        },
        showAlpha: {
            control: { type: 'boolean' },
        },
        showFormatSelector: {
            control: { type: 'boolean' },
        },
        showCopyButton: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        readonly: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'm',
        type: 'dropdown',
        showInput: true,
        showAlpha: false,
        showFormatSelector: true,
        showCopyButton: true,
        defaultValue: '#006FFF',
    },
};

// 모든 사이즈 (s, m, l)
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Small (s)</h4>
                <ColorPicker size="s" defaultValue="#FF5733" />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Medium (m) - 기본값</h4>
                <ColorPicker size="m" defaultValue="#33FF57" />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Large (l)</h4>
                <ColorPicker size="l" defaultValue="#3357FF" />
            </div>
        </div>
    ),
};

// 모든 타입 (dropdown, modal)
export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Dropdown Type</h4>
                <ColorPicker type="dropdown" defaultValue="#006FFF" />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Modal Type</h4>
                <ColorPicker type="modal" defaultValue="#FF6B00" />
            </div>
        </div>
    ),
};

// 모든 상태
export const AllStates: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>기본 (입력 필드 포함)</h4>
                <ColorPicker showInput={true} defaultValue="#006FFF" />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>입력 필드 없음</h4>
                <ColorPicker showInput={false} defaultValue="#FF6B00" />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>알파 채널 지원</h4>
                <ColorPicker showAlpha={true} defaultValue="#10B981" />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>포맷 선택 없음</h4>
                <ColorPicker showFormatSelector={false} defaultValue="#8B5CF6" />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>복사 버튼 없음</h4>
                <ColorPicker showCopyButton={false} defaultValue="#F59E0B" />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>아이드로퍼 숨김</h4>
                <ColorPicker showEyedropper={false} defaultValue="#0EA5E9" />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>비활성화</h4>
                <ColorPicker disabled={true} defaultValue="#EF4444" />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>읽기 전용</h4>
                <ColorPicker readonly={true} defaultValue="#EC4899" />
            </div>
        </div>
    ),
};

// 새로운 컬러피커 구조
export const NewDesign: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
                    새로운 컬러피커 디자인 (드롭다운)
                </h4>
                <ColorPicker
                    showAlpha={true}
                    showFormatSelector={true}
                    showCopyButton={true}
                    defaultValue="#57A095"
                />
                <p style={{
                    margin: '8px 0 0 0',
                    fontSize: '12px',
                    color: 'var(--db-text-secondary)',
                    lineHeight: '1.5'
                }}>
                    • 메인 컬러 선택 영역에서 직접 클릭하여 색상 선택<br />
                    • 좌측은 채도 낮고, 우측은 채도 최대치<br />
                    • 위로는 밝기 최대, 아래로는 밝기 어둡게<br />
                    • 스포이드 버튼으로 색상 추출 기능<br />
                    • Hue 슬라이더로 색상 변경<br />
                    • Alpha 슬라이더로 투명도 조절<br />
                    • Select 컴포넌트로 색상 형식 변경 (HEX, RGB, RGBA, HSL, HSLA)<br />
                    • 실시간 색상 값 표시 및 복사 기능
                </p>
            </div>
        </div>
    ),
};

export const ModalDesign: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
                    모달 컬러피커 디자인
                </h4>
                <ColorPicker
                    type="modal"
                    showAlpha={true}
                    showFormatSelector={true}
                    showCopyButton={true}
                    defaultValue="#57A095"
                    onApply={(color) => {
                        console.log('적용된 색상:', color);
                    }}
                    onCancel={() => {
                        console.log('취소됨');
                    }}
                />
                <p style={{
                    margin: '8px 0 0 0',
                    fontSize: '12px',
                    color: 'var(--db-text-secondary)',
                    lineHeight: '1.5'
                }}>
                    • 모달 형태로 색상 선택<br />
                    • 적용/취소 버튼으로 변경사항 확인<br />
                    • 취소 시 원래 색상으로 복원<br />
                    • 모든 기능이 모달 내에서 동일하게 작동
                </p>
            </div>
        </div>
    ),
};

// 입력 필드 직접 수정 예시
export const DirectInput: Story = {
    render: () => {
        const handleColorChange = useCallback((color: string) => {
            console.log('Color changed:', color);
        }, []);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
                <h4 style={{ margin: '0', fontSize: '14px', fontWeight: '600' }}>
                    입력 필드에서 직접 색상 값 입력
                </h4>
                <ColorPicker
                    defaultValue="#006FFF"
                    showFormatSelector={true}
                    onChange={handleColorChange}
                />
                <p style={{
                    margin: '0',
                    fontSize: '12px',
                    color: 'var(--db-text-secondary)',
                    lineHeight: '1.5'
                }}>
                    입력 가능한 포맷 예시:<br />
                    • HEX: #FF5733, #33FF57<br />
                    • RGB: rgb(255, 87, 51), rgb(51, 255, 87)<br />
                    • RGBA: rgba(255, 87, 51, 0.5), rgba(51, 255, 87, 0.8)
                </p>
            </div>
        );
    },
};

// 위치별 예제
export const AllPositions: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', minWidth: '600px', minHeight: '400px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <ColorPicker position="bottom-left" defaultValue="#FF5733" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ColorPicker position="bottom-right" defaultValue="#33FF57" />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <ColorPicker position="top-left" defaultValue="#3357FF" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ColorPicker position="top-right" defaultValue="#F59E0B" />
                </div>
            </div>
        </div>
    ),
};

// 제어된 컴포넌트 (Controlled)
export const Controlled: Story = {
    render: () => {
        const [color, setColor] = useState('#006FFF');
        const colorRef = useRef(color);
        colorRef.current = color;

        // ✅ 동일 값이면 setState/로그 생략하여 리렌더 최소화
        const handleColorChange = useCallback((newColor: string) => {
            if (newColor?.toUpperCase() === colorRef.current.toUpperCase()) return;
            setColor(newColor);
            console.log('Color changed:', newColor);
        }, []); // color 의존성 제거로 무한 루프 방지

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
                <h4 style={{ margin: '0', fontSize: '14px', fontWeight: '600' }}>
                    제어된 컴포넌트 (현재 색상: {color})
                </h4>
                <ColorPicker
                    value={color}
                    showAlpha={true}
                    showFormatSelector={true}
                    onChange={handleColorChange}
                />
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => setColor('#FF5733')}
                        style={{
                            padding: '6px 12px',
                            backgroundColor: '#FF5733',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                        }}
                    >
                        Red
                    </button>
                    <button
                        onClick={() => setColor('#33FF57')}
                        style={{
                            padding: '6px 12px',
                            backgroundColor: '#33FF57',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                        }}
                    >
                        Green
                    </button>
                    <button
                        onClick={() => setColor('#3357FF')}
                        style={{
                            padding: '6px 12px',
                            backgroundColor: '#3357FF',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                        }}
                    >
                        Blue
                    </button>
                    <button
                        onClick={() => setColor('#F59E0B')}
                        style={{
                            padding: '6px 12px',
                            backgroundColor: '#F59E0B',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                        }}
                    >
                        Orange
                    </button>
                    <button
                        onClick={() => setColor('#8B5CF6')}
                        style={{
                            padding: '6px 12px',
                            backgroundColor: '#8B5CF6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                        }}
                    >
                        Purple
                    </button>
                </div>
            </div>
        );
    },
};

// 기본값 설정 예제
export const CustomDefaultValue: Story = {
    render: () => {
        const handleColorChange = useCallback((color: string) => {
            console.log('Color changed:', color);
        }, []);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
                <div>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
                        기본값: #004FFF
                    </h4>
                    <ColorPicker
                        defaultValue="#004FFF"
                        onChange={handleColorChange}
                    />
                </div>

                <div>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
                        기본값: #FF6B35
                    </h4>
                    <ColorPicker
                        defaultValue="#FF6B35"
                        onChange={handleColorChange}
                    />
                </div>

                <div>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
                        기본값: #10B981 (알파 채널 포함)
                    </h4>
                    <ColorPicker
                        defaultValue="#10B981"
                        showAlpha={true}
                        onChange={handleColorChange}
                    />
                </div>
            </div>
        );
    },
};
