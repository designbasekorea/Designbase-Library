import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
    title: 'Components/Divider',
    component: Divider,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '구분선 컴포넌트입니다. 콘텐츠를 시각적으로 분리하는 데 사용됩니다.'
            }
        }
    },
    argTypes: {
        orientation: {
            control: { type: 'select' },
            options: ['horizontal', 'vertical'],
            description: '구분선의 방향'
        },
        thickness: {
            control: { type: 'number', min: 1, max: 10, step: 0.5 },
            description: '구분선의 두께 (px)'
        },
        color: {
            control: { type: 'color' },
            description: '구분선의 색상'
        },
        length: {
            control: { type: 'number', min: 10, max: 200, step: 10 },
            description: '구분선의 길이 (px) - vertical일 때만 적용'
        },
        variant: {
            control: { type: 'select' },
            options: ['solid', 'dashed', 'dotted'],
            description: '구분선의 스타일'
        },
        margin: {
            control: { type: 'text' },
            description: '마진 (숫자 또는 CSS 마진 값)'
        }
    },
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Horizontal Divider
export const Default: Story = {
    args: {
        orientation: 'horizontal'
    }
};

// 기본 Vertical Divider
export const Vertical: Story = {
    args: {
        orientation: 'vertical',
        length: 100
    },
    render: (args) => (
        <div style={{ height: '120px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>왼쪽 콘텐츠</span>
            <Divider {...args} />
            <span>오른쪽 콘텐츠</span>
        </div>
    )
};

// 다양한 두께
export const ThicknessVariants: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <h3>다양한 두께의 구분선</h3>
            <p>1px 두께</p>
            <Divider thickness={1} />
            <p>3px 두께</p>
            <Divider thickness={3} />
            <p>5px 두께</p>
            <Divider thickness={5} />
            <p>8px 두께</p>
            <Divider thickness={8} />
        </div>
    )
};

// 다양한 스타일
export const StyleVariants: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <h3>다양한 스타일의 구분선</h3>
            <p>Solid 스타일</p>
            <Divider variant="solid" />
            <p>Dashed 스타일</p>
            <Divider variant="dashed" />
            <p>Dotted 스타일</p>
            <Divider variant="dotted" />
        </div>
    )
};

// 다양한 색상
export const ColorVariants: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <h3>다양한 색상의 구분선</h3>
            <p>기본 색상</p>
            <Divider />
            <p>Primary 색상</p>
            <Divider color="#007bff" />
            <p>Success 색상</p>
            <Divider color="#28a745" />
            <p>Warning 색상</p>
            <Divider color="#ffc107" />
            <p>Danger 색상</p>
            <Divider color="#dc3545" />
            <p>Info 색상</p>
            <Divider color="#17a2b8" />
        </div>
    )
};

// 마진 예시
export const MarginExamples: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <h3>마진 예시</h3>
            <p>작은 마진</p>
            <Divider margin={8} />
            <p>기본 마진</p>
            <Divider margin={16} />
            <p>큰 마진</p>
            <Divider margin={32} />
            <p>커스텀 마진</p>
            <Divider margin="20px 0 40px 0" />
        </div>
    )
};

// Vertical 길이 예시
export const VerticalLengthExamples: Story = {
    render: () => (
        <div style={{ height: '200px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>짧은 구분선</span>
            <Divider orientation="vertical" length={50} />
            <span>기본 길이</span>
            <Divider orientation="vertical" length={100} />
            <span>긴 구분선</span>
            <Divider orientation="vertical" length={150} />
        </div>
    )
};

// 실제 사용 예시
export const RealWorldExample: Story = {
    render: () => (
        <div style={{ width: '500px', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            <h2>사용자 프로필</h2>
            <p>사용자 정보가 여기에 표시됩니다.</p>

            <Divider margin={24} />

            <h3>개인 정보</h3>
            <p>이름: 홍길동</p>
            <p>이메일: hong@example.com</p>

            <Divider variant="dashed" margin={16} />

            <h3>계정 설정</h3>
            <p>계정 관련 설정들이 여기에 표시됩니다.</p>

            <Divider color="#007bff" thickness={2} margin={24} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>저장</span>
                <Divider orientation="vertical" length={20} />
                <span>취소</span>
                <Divider orientation="vertical" length={20} />
                <span>삭제</span>
            </div>
        </div>
    )
};

// 반응형 예시
export const ResponsiveExample: Story = {
    render: () => (
        <div style={{ width: '100%', maxWidth: '600px' }}>
            <h3>반응형 구분선</h3>
            <p>화면 크기에 따라 마진이 자동으로 조정됩니다.</p>

            <Divider />

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span>메뉴 1</span>
                <Divider orientation="vertical" length={16} />
                <span>메뉴 2</span>
                <Divider orientation="vertical" length={16} />
                <span>메뉴 3</span>
            </div>

            <Divider margin={24} />

            <p>모바일에서는 vertical 구분선의 마진이 줄어듭니다.</p>
        </div>
    )
};

// 접근성 예시
export const AccessibilityExample: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <h3>접근성 고려사항</h3>
            <p>구분선은 role="separator"와 aria-orientation 속성을 가집니다.</p>

            <Divider />

            <p>키보드 포커스 시 아웃라인이 표시됩니다.</p>

            <Divider />

            <p>스크린 리더 사용자에게 적절한 의미를 전달합니다.</p>
        </div>
    )
};
