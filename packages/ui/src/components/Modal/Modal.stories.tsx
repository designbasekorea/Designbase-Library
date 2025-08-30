import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './Modal';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl', 'full'],
        },
        closeOnOutsideClick: {
            control: { type: 'boolean' },
        },
        closeOnEscape: {
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
            <>
                <Button onPress={() => setIsOpen(true)}>모달 열기</Button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="기본 모달"
                >
                    <ModalBody>
                        <p>이것은 기본 모달입니다. 내용을 여기에 추가할 수 있습니다.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="secondary" onPress={() => setIsOpen(false)}>
                            취소
                        </Button>
                        <Button onPress={() => setIsOpen(false)}>
                            확인
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
};

export const Sizes: Story = {
    render: () => {
        const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
        const [isOpen, setIsOpen] = useState(false);

        const sizes = [
            { value: 'sm', label: 'Small' },
            { value: 'md', label: 'Medium' },
            { value: 'lg', label: 'Large' },
            { value: 'xl', label: 'Extra Large' },
            { value: 'full', label: 'Full' },
        ] as const;

        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {sizes.map((size) => (
                            <Button
                                key={size.value}
                                variant={selectedSize === size.value ? 'primary' : 'secondary'}
                                onPress={() => setSelectedSize(size.value)}
                            >
                                {size.label}
                            </Button>
                        ))}
                    </div>
                    <Button onPress={() => setIsOpen(true)}>
                        {selectedSize} 모달 열기
                    </Button>
                </div>

                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title={`${sizes.find(s => s.value === selectedSize)?.label} 모달`}
                    size={selectedSize}
                >
                    <ModalBody>
                        <p>이것은 {selectedSize} 크기의 모달입니다.</p>
                        <p>모달의 크기를 변경하려면 위의 버튼을 클릭하세요.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="secondary" onPress={() => setIsOpen(false)}>
                            취소
                        </Button>
                        <Button onPress={() => setIsOpen(false)}>
                            확인
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
};

export const WithoutHeader: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>헤더 없는 모달 열기</Button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    <ModalBody>
                        <h3 style={{ marginTop: 0 }}>커스텀 헤더</h3>
                        <p>이 모달은 기본 헤더가 없고, 내용에서 직접 제목을 표시합니다.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="secondary" onPress={() => setIsOpen(false)}>
                            취소
                        </Button>
                        <Button onPress={() => setIsOpen(false)}>
                            확인
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
};

export const CustomHeader: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>커스텀 헤더 모달 열기</Button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    <ModalHeader showCloseButton={false}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontSize: '20px' }}>🚀</span>
                            <h2 style={{ margin: 0 }}>커스텀 헤더</h2>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <p>이 모달은 커스텀 헤더를 가지고 있습니다.</p>
                        <p>닫기 버튼이 없고, 이모지와 함께 제목이 표시됩니다.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="secondary" onPress={() => setIsOpen(false)}>
                            취소
                        </Button>
                        <Button onPress={() => setIsOpen(false)}>
                            확인
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
};

export const LongContent: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>긴 내용 모달 열기</Button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="긴 내용 모달"
                >
                    <ModalBody>
                        <p>이 모달은 스크롤이 가능한 긴 내용을 포함합니다.</p>
                        {Array.from({ length: 20 }, (_, i) => (
                            <p key={i}>
                                문단 {i + 1}: 이것은 긴 내용을 시뮬레이션하기 위한 텍스트입니다. 
                                모달의 스크롤 기능을 테스트할 수 있습니다.
                            </p>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="secondary" onPress={() => setIsOpen(false)}>
                            취소
                        </Button>
                        <Button onPress={() => setIsOpen(false)}>
                            확인
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
};

export const DisabledOutsideClick: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>바깥쪽 클릭 비활성화 모달 열기</Button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="바깥쪽 클릭 비활성화"
                    closeOnOutsideClick={false}
                >
                    <ModalBody>
                        <p>이 모달은 바깥쪽을 클릭해도 닫히지 않습니다.</p>
                        <p>ESC 키나 닫기 버튼을 사용해서만 닫을 수 있습니다.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onPress={() => setIsOpen(false)}>
                            닫기
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
};

export const DisabledEscape: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onPress={() => setIsOpen(true)}>ESC 키 비활성화 모달 열기</Button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="ESC 키 비활성화"
                    closeOnEscape={false}
                >
                    <ModalBody>
                        <p>이 모달은 ESC 키로 닫을 수 없습니다.</p>
                        <p>바깥쪽 클릭이나 닫기 버튼을 사용해서만 닫을 수 있습니다.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onPress={() => setIsOpen(false)}>
                            닫기
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    },
};
