import type { Meta, StoryObj } from '@storybook/react';
import { SplitView } from './SplitView';

const meta: Meta<typeof SplitView> = {
    title: 'Components/SplitView',
    component: SplitView,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: { type: 'select' },
            options: ['horizontal', 'vertical'],
        },
        mode: {
            control: { type: 'select' },
            options: ['ratio', 'fixed'],
        },
        splitterSize: {
            control: { type: 'number' },
        },
        splitterColor: {
            control: { type: 'color' },
        },
        splitterHoverColor: {
            control: { type: 'color' },
        },
        fullWidth: {
            control: { type: 'boolean' },
        },
        fullHeight: {
            control: { type: 'boolean' },
        },
        gap: {
            control: { type: 'number' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 패널 컨텐츠
const SamplePanel = ({ title, color, content }: { title: string; color: string; content: string }) => (
    <div
        style={{
            height: '100%',
            backgroundColor: color,
            color: 'white',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}
    >
        <h3 style={{ margin: '0 0 16px 0' }}>{title}</h3>
        <p style={{ margin: 0, lineHeight: 1.5 }}>{content}</p>
    </div>
);

const LongContentPanel = ({ title, color }: { title: string; color: string }) => (
    <div
        style={{
            height: '100%',
            backgroundColor: color,
            color: 'white',
            padding: '20px',
            overflow: 'auto',
        }}
    >
        <h3 style={{ margin: '0 0 16px 0' }}>{title}</h3>
        {Array.from({ length: 20 }, (_, i) => (
            <div key={i} style={{ marginBottom: '12px', padding: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                항목 {i + 1} - 이것은 스크롤 테스트를 위한 긴 컨텐츠입니다.
            </div>
        ))}
    </div>
);

export const Default: Story = {
    args: {
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="왼쪽 패널" color="#3b82f6" content="이것은 첫 번째 패널입니다. 분할선을 드래그하여 크기를 조절할 수 있습니다." />,
                size: 0.5,
                resizable: true,
            },
            {
                content: <SamplePanel title="오른쪽 패널" color="#10b981" content="이것은 두 번째 패널입니다. 각 패널은 독립적으로 스크롤할 수 있습니다." />,
            },
        ],
    },
};

export const RatioMode: Story = {
    args: {
        mode: 'ratio',
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="작은 패널 (30%)" color="#8b5cf6" content="이것은 작은 패널입니다. 초기 비율이 30%로 설정되어 있습니다." />,
                size: 0.3,
                resizable: true,
            },
            {
                content: <SamplePanel title="큰 패널 (70%)" color="#06b6d4" content="이것은 큰 패널입니다. 초기 비율이 70%로 설정되어 있습니다." />,
            },
        ],
    },
};

export const FixedSizeMode: Story = {
    args: {
        mode: 'fixed',
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="고정 크기 패널" color="#f59e0b" content="이 패널은 200px 고정 크기입니다. 분할선을 드래그하여 크기를 조절할 수 있습니다." />,
                size: 200,
                resizable: true,
            },
            {
                content: <SamplePanel title="유연한 패널" color="#ef4444" content="이 패널은 남은 공간을 모두 차지합니다." />,
            },
        ],
    },
};

export const VerticalSplit: Story = {
    args: {
        direction: 'vertical',
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="상단 패널" color="#f59e0b" content="이것은 상단 패널입니다. 세로 분할을 사용합니다." />,
                size: 0.5,
                resizable: true,
            },
            {
                content: <SamplePanel title="하단 패널" color="#ef4444" content="이것은 하단 패널입니다. 분할선을 드래그하여 크기를 조절할 수 있습니다." />,
            },
        ],
    },
};

export const VerticalFixedSize: Story = {
    args: {
        direction: 'vertical',
        mode: 'fixed',
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="고정 높이 패널" color="#8b5cf6" content="이 패널은 150px 고정 높이입니다." />,
                size: 150,
                resizable: true,
            },
            {
                content: <SamplePanel title="유연한 높이 패널" color="#06b6d4" content="이 패널은 남은 높이를 모두 차지합니다." />,
            },
        ],
    },
};

export const WithScrollableContent: Story = {
    args: {
        fullHeight: true,
        panels: [
            {
                content: <LongContentPanel title="스크롤 가능한 패널" color="#3b82f6" />,
                size: 0.5,
                resizable: true,
            },
            {
                content: <LongContentPanel title="또 다른 스크롤 패널" color="#10b981" />,
            },
        ],
    },
};

export const CustomSplitter: Story = {
    args: {
        splitterSize: 8,
        splitterColor: '#3b82f6',
        splitterHoverColor: '#1d4ed8',
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="커스텀 분할선" color="#f59e0b" content="분할선의 크기와 색상을 커스터마이징했습니다." />,
                size: 0.5,
                resizable: true,
            },
            {
                content: <SamplePanel title="호버 효과" color="#ef4444" content="분할선에 마우스를 올리면 색상이 변경됩니다." />,
            },
        ],
    },
};

export const WithMinMaxConstraints: Story = {
    args: {
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="최소/최대 제한" color="#8b5cf6" content="이 패널은 최소 200px, 최대 400px로 제한됩니다." />,
                size: 0.5,
                minSize: 200,
                maxSize: 400,
                resizable: true,
            },
            {
                content: <SamplePanel title="제한된 크기" color="#06b6d4" content="분할선을 드래그해도 제한 범위를 벗어나지 않습니다." />,
            },
        ],
    },
};

export const FixedSizeWithConstraints: Story = {
    args: {
        mode: 'fixed',
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="고정 크기 + 제한" color="#f59e0b" content="이 패널은 250px로 시작하지만 150-350px 범위로 제한됩니다." />,
                size: 250,
                minSize: 150,
                maxSize: 350,
                resizable: true,
            },
            {
                content: <SamplePanel title="유연한 패널" color="#ef4444" content="이 패널은 남은 공간을 모두 차지합니다." />,
            },
        ],
    },
};

export const FullHeight: Story = {
    args: {
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="전체 높이" color="#3b82f6" content="이 컴포넌트는 전체 높이를 사용합니다." />,
                size: 0.5,
                resizable: true,
            },
            {
                content: <SamplePanel title="전체 높이" color="#10b981" content="부모 컨테이너의 높이에 맞춰 조정됩니다." />,
            },
        ],
    },
};

export const ResponsiveExample: Story = {
    args: {
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="반응형" color="#f59e0b" content="모바일에서는 세로 분할로 변경됩니다." />,
                size: 0.5,
                resizable: true,
            },
            {
                content: <SamplePanel title="반응형" color="#ef4444" content="화면 크기에 따라 분할선 크기가 조정됩니다." />,
            },
        ],
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};

export const ThreePanels: Story = {
    args: {
        mode: 'fixed',
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="사이드바" color="#3b82f6" content="고정 크기 사이드바 (200px)" />,
                size: 200,
                minSize: 150,
                maxSize: 300,
                resizable: true,
            },
            {
                content: <SamplePanel title="메인 컨텐츠" color="#10b981" content="유동적인 메인 영역" />,
                size: 400,
                minSize: 200,
                resizable: true,
            },
            {
                content: <SamplePanel title="속성 패널" color="#f59e0b" content="마지막 패널 (자동 채움)" />,
                resizable: false,
            },
        ],
    },
};

export const FourPanelsVertical: Story = {
    args: {
        direction: 'vertical',
        mode: 'ratio',
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="헤더" color="#8b5cf6" content="고정 비율 (10%)" />,
                size: 0.1,
                minSize: 50,
                resizable: true,
            },
            {
                content: <SamplePanel title="툴바" color="#06b6d4" content="고정 비율 (10%)" />,
                size: 0.1,
                minSize: 50,
                resizable: true,
            },
            {
                content: <SamplePanel title="메인 컨텐츠" color="#10b981" content="유동적인 영역 (60%)" />,
                size: 0.6,
                minSize: 100,
                resizable: true,
            },
            {
                content: <SamplePanel title="푸터" color="#f59e0b" content="마지막 패널 (자동 채움)" />,
                resizable: false,
            },
        ],
    },
};

export const NonResizablePanels: Story = {
    args: {
        direction: 'horizontal',
        mode: 'fixed',
        fullHeight: true,
        panels: [
            {
                content: <SamplePanel title="고정 패널 1" color="#3b82f6" content="리사이징 불가능 (200px)" />,
                size: 200,
                resizable: false,
            },
            {
                content: <SamplePanel title="고정 패널 2" color="#10b981" content="리사이징 불가능 (300px)" />,
                size: 300,
                resizable: false,
            },
            {
                content: <SamplePanel title="유연한 패널" color="#f59e0b" content="마지막 패널 (자동 채움)" />,
                resizable: false,
            },
        ],
    },
};

export const WithGap: Story = {
    args: {
        direction: 'horizontal',
        mode: 'fixed',
        fullHeight: true,
        gap: 20,
        panels: [
            {
                content: <SamplePanel title="사이드바" color="#3b82f6" content="gap: 20px로 패널 간 간격 생성" />,
                size: 200,
                resizable: false,
            },
            {
                content: <SamplePanel title="메인 컨텐츠" color="#10b981" content="패널 사이에 20px 간격이 있습니다" />,
                resizable: false,
            },
        ],
    },
};

export const VerticalWithGap: Story = {
    args: {
        direction: 'vertical',
        mode: 'fixed',
        fullHeight: true,
        gap: 16,
        panels: [
            {
                content: <SamplePanel title="헤더" color="#8b5cf6" content="gap: 16px 간격" />,
                size: 100,
                resizable: false,
            },
            {
                content: <SamplePanel title="메인 컨텐츠" color="#10b981" content="세로 방향도 gap 적용" />,
                size: 300,
                resizable: false,
            },
            {
                content: <SamplePanel title="푸터" color="#f59e0b" content="패널 간 균일한 간격" />,
                resizable: false,
            },
        ],
    },
};
