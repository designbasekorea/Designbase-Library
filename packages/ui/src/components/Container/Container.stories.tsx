import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

const meta: Meta<typeof Container> = {
    title: 'Components/Container',
    component: Container,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl', 'full'],
        },
        padding: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl'],
        },
        margin: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl'],
        },
        rounded: {
            control: { type: 'select' },
            options: [true, false, 'sm', 'md', 'lg'],
        },
        shadow: {
            control: { type: 'select' },
            options: [true, false, 'sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 콘텐츠 컴포넌트
const SampleContent = ({ title, description }: { title: string; description: string }) => (
    <div style={{
        padding: '24px',
        backgroundColor: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        textAlign: 'center'
    }}>
        <h2 style={{ margin: '0 0 12px 0', color: '#1e293b' }}>{title}</h2>
        <p style={{ margin: 0, color: '#64748b' }}>{description}</p>
    </div>
);

export const Default: Story = {
    args: {
        children: <SampleContent title="기본 Container" description="기본 크기 (lg: 1200px)와 기본 패딩이 적용된 컨테이너입니다." />,
    },
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '24px 0' }}>
            <Container size="sm" margin="md">
                <SampleContent
                    title="Small Container (640px)"
                    description="작은 화면이나 좁은 콘텐츠에 적합한 컨테이너입니다."
                />
            </Container>

            <Container size="md" margin="md">
                <SampleContent
                    title="Medium Container (768px)"
                    description="중간 크기의 콘텐츠에 적합한 컨테이너입니다."
                />
            </Container>

            <Container size="lg" margin="md">
                <SampleContent
                    title="Large Container (1200px)"
                    description="기본 크기로 대부분의 콘텐츠에 적합한 컨테이너입니다."
                />
            </Container>

            <Container size="xl" margin="md">
                <SampleContent
                    title="Extra Large Container (1400px)"
                    description="넓은 화면에서 더 많은 콘텐츠를 표시할 수 있는 컨테이너입니다."
                />
            </Container>

            <Container size="full" margin="md">
                <SampleContent
                    title="Full Width Container"
                    description="전체 너비를 사용하는 컨테이너입니다."
                />
            </Container>
        </div>
    ),
};

export const PaddingOptions: Story = {
    render: () => (
        <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '24px 0' }}>
            <Container size="lg" padding="none" margin="md">
                <SampleContent
                    title="No Padding"
                    description="패딩이 없는 컨테이너입니다."
                />
            </Container>

            <Container size="lg" padding="sm" margin="md">
                <SampleContent
                    title="Small Padding"
                    description="작은 패딩이 적용된 컨테이너입니다."
                />
            </Container>

            <Container size="lg" padding="md" margin="md">
                <SampleContent
                    title="Medium Padding (기본)"
                    description="기본 패딩이 적용된 컨테이너입니다."
                />
            </Container>

            <Container size="lg" padding="lg" margin="md">
                <SampleContent
                    title="Large Padding"
                    description="큰 패딩이 적용된 컨테이너입니다."
                />
            </Container>

            <Container size="lg" padding="xl" margin="md">
                <SampleContent
                    title="Extra Large Padding"
                    description="매우 큰 패딩이 적용된 컨테이너입니다."
                />
            </Container>
        </div>
    ),
};

export const MarginOptions: Story = {
    render: () => (
        <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '24px 0' }}>
            <Container size="lg" margin="none">
                <SampleContent
                    title="No Margin"
                    description="마진이 없는 컨테이너입니다."
                />
            </Container>

            <Container size="lg" margin="sm">
                <SampleContent
                    title="Small Margin"
                    description="작은 마진이 적용된 컨테이너입니다."
                />
            </Container>

            <Container size="lg" margin="md">
                <SampleContent
                    title="Medium Margin"
                    description="중간 마진이 적용된 컨테이너입니다."
                />
            </Container>

            <Container size="lg" margin="lg">
                <SampleContent
                    title="Large Margin"
                    description="큰 마진이 적용된 컨테이너입니다."
                />
            </Container>

            <Container size="lg" margin="xl">
                <SampleContent
                    title="Extra Large Margin"
                    description="매우 큰 마진이 적용된 컨테이너입니다."
                />
            </Container>
        </div>
    ),
};

export const StyledContainers: Story = {
    render: () => (
        <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '24px 0' }}>
            <Container size="lg" border rounded shadow="sm" margin="md">
                <SampleContent
                    title="Bordered Container"
                    description="테두리, 둥근 모서리, 그림자가 적용된 컨테이너입니다."
                />
            </Container>

            <Container
                size="lg"
                backgroundColor="#ffffff"
                border
                rounded="lg"
                shadow="md"
                margin="md"
            >
                <SampleContent
                    title="Styled Container"
                    description="배경색, 테두리, 큰 둥근 모서리, 중간 그림자가 적용된 컨테이너입니다."
                />
            </Container>

            <Container
                size="lg"
                backgroundColor="#3b82f6"
                rounded="lg"
                shadow="lg"
                margin="md"
            >
                <div style={{
                    padding: '24px',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <h2 style={{ margin: '0 0 12px 0' }}>Colored Container</h2>
                    <p style={{ margin: 0, opacity: 0.9 }}>배경색이 적용된 컨테이너입니다.</p>
                </div>
            </Container>
        </div>
    ),
};

export const CustomMaxWidth: Story = {
    render: () => (
        <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '24px 0' }}>
            <Container size="lg" maxWidth={800} margin="md">
                <SampleContent
                    title="Custom Max Width (800px)"
                    description="사용자 정의 최대 폭이 설정된 컨테이너입니다."
                />
            </Container>

            <Container size="lg" maxWidth={1600} margin="md">
                <SampleContent
                    title="Custom Max Width (1600px)"
                    description="더 넓은 사용자 정의 최대 폭이 설정된 컨테이너입니다."
                />
            </Container>
        </div>
    ),
};

export const ResponsiveExample: Story = {
    render: () => (
        <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', padding: '24px 0' }}>
            <Container size="lg" padding="lg" margin="md">
                <div style={{
                    padding: '24px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <h2 style={{ margin: '0 0 12px 0', color: '#1e293b' }}>반응형 Container</h2>
                    <p style={{ margin: '0 0 16px 0', color: '#64748b' }}>
                        이 컨테이너는 화면 크기에 따라 패딩이 자동으로 조정됩니다.
                    </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '16px',
                        marginTop: '24px'
                    }}>
                        <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '4px' }}>
                            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>카드 1</h3>
                            <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>반응형 그리드 아이템</p>
                        </div>
                        <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '4px' }}>
                            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>카드 2</h3>
                            <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>반응형 그리드 아이템</p>
                        </div>
                        <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '4px' }}>
                            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>카드 3</h3>
                            <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>반응형 그리드 아이템</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    ),
};
