/**
 * Grid 컴포넌트 스토리
 * 
 * 목적: Grid 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: 12컬럼 시스템, 반응형 브레이크포인트, 고정 너비, 정렬 등
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridRow, GridCol } from './Grid';

const meta: Meta<typeof Grid> = {
    title: 'Components/Grid',
    component: Grid,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        fixed: {
            control: { type: 'boolean' },
        },
        noPadding: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Grid
export const Default: Story = {
    render: () => (
        <Grid>
            <GridRow>
                <GridCol>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        1
                    </div>
                </GridCol>
                <GridCol>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        2
                    </div>
                </GridCol>
                <GridCol>
                    <div style={{ padding: '16px', backgroundColor: '#fff3e0', textAlign: 'center' }}>
                        3
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    ),
};

// 고정 너비 Grid
export const FixedGrid: Story = {
    render: () => (
        <Grid fixed>
            <GridRow>
                <GridCol>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        고정 너비 Grid
                    </div>
                </GridCol>
                <GridCol>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        화면 크기에 따라 너비가 변경됩니다
                    </div>
                </GridCol>
                <GridCol>
                    <div style={{ padding: '16px', backgroundColor: '#fff3e0', textAlign: 'center' }}>
                        xs: 100%, sm: 540px, md: 720px, lg: 960px, xl: 1140px
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    ),
};

// 컬럼 크기 지정
export const ColumnSizes: Story = {
    render: () => (
        <Grid>
            <GridRow>
                <GridCol size={4}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        size="4" (1/3)
                    </div>
                </GridCol>
                <GridCol size={8}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        size="8" (2/3)
                    </div>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#fff3e0', textAlign: 'center' }}>
                        size="3"
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#fce4ec', textAlign: 'center' }}>
                        size="3"
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#f3e5f5', textAlign: 'center' }}>
                        size="3"
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e0f2f1', textAlign: 'center' }}>
                        size="3"
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    ),
};

// 자동 크기 컬럼
export const AutoSizeColumns: Story = {
    render: () => (
        <Grid>
            <GridRow>
                <GridCol size="auto">
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center', width: '150px' }}>
                        자동 크기 (150px)
                    </div>
                </GridCol>
                <GridCol>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        나머지 공간 채움
                    </div>
                </GridCol>
                <GridCol>
                    <div style={{ padding: '16px', backgroundColor: '#fff3e0', textAlign: 'center' }}>
                        나머지 공간 채움
                    </div>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol>
                    <div style={{ padding: '16px', backgroundColor: '#fce4ec', textAlign: 'center' }}>
                        일반 컬럼
                    </div>
                </GridCol>
                <GridCol size="auto">
                    <div style={{ padding: '16px', backgroundColor: '#f3e5f5', textAlign: 'center' }}>
                        <input type="text" placeholder="자동 크기 입력" style={{ width: '200px', padding: '8px' }} />
                    </div>
                </GridCol>
                <GridCol>
                    <div style={{ padding: '16px', backgroundColor: '#e0f2f1', textAlign: 'center' }}>
                        일반 컬럼
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    ),
};

// 반응형 크기
export const ResponsiveSizes: Story = {
    render: () => (
        <Grid>
            <GridRow>
                <GridCol size={12} sizeSm={6} sizeMd={4} sizeLg={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        xs: 12, sm: 6, md: 4, lg: 3
                    </div>
                </GridCol>
                <GridCol size={12} sizeSm={6} sizeMd={4} sizeLg={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        xs: 12, sm: 6, md: 4, lg: 3
                    </div>
                </GridCol>
                <GridCol size={12} sizeSm={6} sizeMd={4} sizeLg={3}>
                    <div style={{ padding: '16px', backgroundColor: '#fff3e0', textAlign: 'center' }}>
                        xs: 12, sm: 6, md: 4, lg: 3
                    </div>
                </GridCol>
                <GridCol size={12} sizeSm={6} sizeMd={4} sizeLg={3}>
                    <div style={{ padding: '16px', backgroundColor: '#fce4ec', textAlign: 'center' }}>
                        xs: 12, sm: 6, md: 4, lg: 3
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    ),
};

// 컬럼 오프셋
export const ColumnOffsets: Story = {
    render: () => (
        <Grid>
            <GridRow>
                <GridCol size={4} offset={4}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        오프셋 4, 크기 4
                    </div>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol size={3} offset={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        오프셋 3
                    </div>
                </GridCol>
                <GridCol size={3} offset={3}>
                    <div style={{ padding: '16px', backgroundColor: '#fff3e0', textAlign: 'center' }}>
                        오프셋 3
                    </div>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol size={2} offset={5}>
                    <div style={{ padding: '16px', backgroundColor: '#fce4ec', textAlign: 'center' }}>
                        오프셋 5
                    </div>
                </GridCol>
                <GridCol size={2} offset={3}>
                    <div style={{ padding: '16px', backgroundColor: '#f3e5f5', textAlign: 'center' }}>
                        오프셋 3
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    ),
};

// 반응형 오프셋
export const ResponsiveOffsets: Story = {
    render: () => (
        <Grid>
            <GridRow>
                <GridCol size={12} offsetSm={2} offsetMd={4} offsetLg={6}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        xs: 오프셋 없음, sm: 오프셋 2, md: 오프셋 4, lg: 오프셋 6
                    </div>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol size={6} offset={6} offsetMd={0}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        xs: 오프셋 6, md: 오프셋 없음
                    </div>
                </GridCol>
                <GridCol size={6} offsetMd={6}>
                    <div style={{ padding: '16px', backgroundColor: '#fff3e0', textAlign: 'center' }}>
                        xs: 오프셋 없음, md: 오프셋 6
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    ),
};

// 컬럼 푸시 & 풀
export const PushAndPull: Story = {
    render: () => (
        <Grid>
            <GridRow>
                <GridCol size={4} push={4}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        푸시 4 (원래 위치에서 오른쪽으로 4칸)
                    </div>
                </GridCol>
                <GridCol size={4} pull={4}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        풀 4 (원래 위치에서 왼쪽으로 4칸)
                    </div>
                </GridCol>
                <GridCol size={4}>
                    <div style={{ padding: '16px', backgroundColor: '#fff3e0', textAlign: 'center' }}>
                        일반 컬럼
                    </div>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol size={9} push={3}>
                    <div style={{ padding: '16px', backgroundColor: '#fce4ec', textAlign: 'center' }}>
                        크기 9, 푸시 3
                    </div>
                </GridCol>
                <GridCol size={3} pull={9}>
                    <div style={{ padding: '16px', backgroundColor: '#f3e5f5', textAlign: 'center' }}>
                        크기 3, 풀 9
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    ),
};

// 세로 정렬
export const VerticalAlignment: Story = {
    render: () => (
        <Grid>
            <GridRow align="start">
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        1
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        2
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#fff3e0', textAlign: 'center', height: '100px' }}>
                        3<br />#<br />#<br />#
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#fce4ec', textAlign: 'center' }}>
                        4
                    </div>
                </GridCol>
            </GridRow>

            <GridRow align="center">
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        1
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        2
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#fff3e0', textAlign: 'center', height: '100px' }}>
                        3<br />#<br />#<br />#
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#fce4ec', textAlign: 'center' }}>
                        4
                    </div>
                </GridCol>
            </GridRow>

            <GridRow align="end">
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        1
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        2
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#fff3e0', textAlign: 'center', height: '100px' }}>
                        3<br />#<br />#<br />#
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#fce4ec', textAlign: 'center' }}>
                        4
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    ),
};

// 가로 정렬
export const HorizontalAlignment: Story = {
    render: () => (
        <Grid>
            <GridRow justify="start">
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        1
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        2
                    </div>
                </GridCol>
            </GridRow>

            <GridRow justify="center">
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        1
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        2
                    </div>
                </GridCol>
            </GridRow>

            <GridRow justify="end">
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        1
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        2
                    </div>
                </GridCol>
            </GridRow>

            <GridRow justify="around">
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        1
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        2
                    </div>
                </GridCol>
            </GridRow>

            <GridRow justify="between">
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        1
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        2
                    </div>
                </GridCol>
            </GridRow>

            <GridRow justify="evenly">
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
                        1
                    </div>
                </GridCol>
                <GridCol size={3}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center' }}>
                        2
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    ),
};

// 복합 예제
export const ComplexExample: Story = {
    render: () => (
        <Grid fixed>
            <GridRow>
                <GridCol size={12}>
                    <div style={{ padding: '16px', backgroundColor: '#e3f2fd', textAlign: 'center', marginBottom: '16px' }}>
                        <h2>복합 Grid 예제</h2>
                        <p>고정 너비, 반응형 크기, 정렬을 모두 사용한 예제입니다.</p>
                    </div>
                </GridCol>
            </GridRow>

            <GridRow align="center" justify="between">
                <GridCol size={12} sizeMd={6} sizeLg={4}>
                    <div style={{ padding: '16px', backgroundColor: '#e8f5e8', textAlign: 'center', height: '120px' }}>
                        <h3>카드 1</h3>
                        <p>xs: 12, md: 6, lg: 4</p>
                    </div>
                </GridCol>
                <GridCol size={12} sizeMd={6} sizeLg={4}>
                    <div style={{ padding: '16px', backgroundColor: '#fff3e0', textAlign: 'center', height: '120px' }}>
                        <h3>카드 2</h3>
                        <p>xs: 12, md: 6, lg: 4</p>
                    </div>
                </GridCol>
                <GridCol size={12} sizeLg={4}>
                    <div style={{ padding: '16px', backgroundColor: '#fce4ec', textAlign: 'center', height: '120px' }}>
                        <h3>카드 3</h3>
                        <p>xs: 12, lg: 4</p>
                    </div>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol size={12} sizeMd={8} offsetMd={2}>
                    <div style={{ padding: '16px', backgroundColor: '#f3e5f5', textAlign: 'center', marginTop: '16px' }}>
                        <h3>중앙 정렬된 컨텐츠</h3>
                        <p>xs: 전체 너비, md: 8컬럼 + 2컬럼 오프셋</p>
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    ),
};
