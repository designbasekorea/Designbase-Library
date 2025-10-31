import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badge';

const meta: Meta<typeof Section> = {
    title: 'Components/Section',
    component: Section,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'elevated', 'outlined', 'filled'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 콘텐츠
const SampleContent = () => (
    <div style={{ lineHeight: 1.6 }}>
        <p>이것은 섹션의 메인 콘텐츠입니다. 여기에 실제 콘텐츠가 들어갑니다.</p>
        <p>여러 줄의 텍스트나 다른 컴포넌트들을 포함할 수 있습니다.</p>
        <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <strong>예시 콘텐츠:</strong> 폼, 테이블, 카드, 또는 기타 UI 컴포넌트들이 여기에 들어갈 수 있습니다.
        </div>
    </div>
);

const SampleActions = () => (
    <>
        <Button variant="outlined" size="s">취소</Button>
        <Button variant="primary" size="s">저장</Button>
    </>
);

const SampleFooter = () => (
    <>
        <span style={{ fontSize: '14px', color: '#64748b' }}>마지막 수정: 2024년 1월 15일</span>
        <div style={{ display: 'flex', gap: '8px' }}>
            <Badge variant="info" style="text">초안</Badge>
            <Button variant="ghost" size="s">더보기</Button>
        </div>
    </>
);

export const Default: Story = {
    args: {
        title: '기본 섹션',
        description: '이것은 기본 섹션입니다. 제목과 설명이 포함되어 있습니다.',
        children: <SampleContent />,
    },
};

export const WithSubtitle: Story = {
    args: {
        title: '섹션 제목',
        subtitle: '부제목',
        description: '이 섹션은 제목, 부제목, 설명을 모두 포함합니다.',
        children: <SampleContent />,
    },
};

export const WithActions: Story = {
    args: {
        title: '액션이 있는 섹션',
        description: '헤더에 액션 버튼들이 포함된 섹션입니다.',
        actions: <SampleActions />,
        children: <SampleContent />,
    },
};

export const WithFooter: Story = {
    args: {
        title: '푸터가 있는 섹션',
        description: '푸터 영역이 포함된 섹션입니다.',
        footer: <SampleFooter />,
        children: <SampleContent />,
    },
};

export const CompleteSection: Story = {
    args: {
        title: '완전한 섹션',
        subtitle: '모든 요소 포함',
        description: '제목, 부제목, 설명, 액션, 푸터가 모두 포함된 완전한 섹션입니다.',
        actions: <SampleActions />,
        footer: <SampleFooter />,
        children: <SampleContent />,
    },
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Section size="s" title="작은 크기" description="sm 크기의 섹션입니다.">
                <SampleContent />
            </Section>

            <Section size="m" title="중간 크기" description="md 크기의 섹션입니다.">
                <SampleContent />
            </Section>

            <Section size="l" title="큰 크기" description="lg 크기의 섹션입니다.">
                <SampleContent />
            </Section>

            <Section size="xl" title="매우 큰 크기" description="xl 크기의 섹션입니다.">
                <SampleContent />
            </Section>
        </div>
    ),
};

export const DifferentVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Section variant="default" title="기본 변형" description="기본 스타일의 섹션입니다.">
                <SampleContent />
            </Section>

            <Section variant="elevated" title="들어올린 변형" description="그림자와 테두리가 있는 섹션입니다.">
                <SampleContent />
            </Section>

            <Section variant="outlined" title="테두리 변형" description="테두리만 있는 섹션입니다.">
                <SampleContent />
            </Section>

            <Section variant="filled" title="채워진 변형" description="배경색이 채워진 섹션입니다.">
                <SampleContent />
            </Section>
        </div>
    ),
};

export const NoPadding: Story = {
    args: {
        title: '패딩 없는 섹션',
        description: '콘텐츠 영역에 패딩이 없는 섹션입니다.',
        noPadding: true,
        children: (
            <div style={{ padding: '20px', backgroundColor: '#f1f5f9', borderRadius: '8px' }}>
                <SampleContent />
            </div>
        ),
    },
};

export const CustomHeader: Story = {
    args: {
        header: (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                    S
                </div>
                <div>
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>커스텀 헤더</h3>
                    <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>완전히 커스터마이징된 헤더입니다.</p>
                </div>
            </div>
        ),
        children: <SampleContent />,
    },
};

export const FullWidth: Story = {
    args: {
        title: '전체 너비 섹션',
        description: '전체 너비를 사용하는 섹션입니다.',
        fullWidth: true,
        variant: 'elevated',
        children: <SampleContent />,
    },
    parameters: {
        layout: 'fullscreen',
    },
};

export const ResponsiveExample: Story = {
    args: {
        title: '반응형 섹션',
        description: '모바일에서 레이아웃이 조정되는 섹션입니다.',
        actions: <SampleActions />,
        footer: <SampleFooter />,
        children: <SampleContent />,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};
