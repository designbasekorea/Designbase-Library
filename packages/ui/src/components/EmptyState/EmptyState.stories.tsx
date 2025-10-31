import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { EmptyState } from './EmptyState';
import {
    BookmarkIcon,
    HeartIcon,
    StarIcon,
    FolderIcon,
    MessageIcon,
    CalendarIcon,
    CameraIcon,
    BookIcon,
    GalleryIcon,
    SearchIcon,
    RefreshIcon,
    BulbIcon,
    UserIcon
} from '@designbasekorea/icons';

const meta: Meta<typeof EmptyState> = {
    title: 'Components/EmptyState',
    component: EmptyState,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['no-data', 'no-results', 'no-access', 'error', 'onboarding'],
        },
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: '아직 저장된 항목이 없습니다',
        description: '저장된 항목은 이곳에 표시됩니다. 새로운 항목을 추가해보세요.',
        actionText: '첫 번째 항목 추가하기',
        onAction: fn(),
    },
};

// 모든 사이즈 (s, m, l)
export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Small (s)</h4>
                <EmptyState
                    size="s"
                    title="작은 빈 상태"
                    description="작은 크기의 빈 상태 예시입니다."
                    icon={FolderIcon}
                    actionText="항목 추가"
                    onAction={fn()}
                />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Medium (m) - 기본값</h4>
                <EmptyState
                    size="m"
                    title="중간 크기 빈 상태"
                    description="기본 크기의 빈 상태 예시입니다."
                    icon={FolderIcon}
                    actionText="항목 추가"
                    onAction={fn()}
                />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Large (l)</h4>
                <EmptyState
                    size="l"
                    title="큰 크기 빈 상태"
                    description="큰 크기의 빈 상태 예시입니다."
                    icon={FolderIcon}
                    actionText="항목 추가"
                    onAction={fn()}
                />
            </div>
        </div>
    ),
};

// 모든 Variants (no-data, no-results, no-access, error, onboarding)
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>
            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>No Data</h4>
                <EmptyState
                    variant="no-data"
                    title="아직 북마크가 없습니다"
                    description="관심 있는 페이지를 북마크에 추가하면 나중에 쉽게 찾을 수 있습니다."
                    icon={BookmarkIcon}
                    actionText="북마크 추가"
                    onAction={fn()}
                />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>No Results</h4>
                <EmptyState
                    variant="no-results"
                    title="검색 결과가 없습니다"
                    description="다른 키워드로 검색하거나 필터를 조정해보세요."
                    icon={SearchIcon}
                    actionText="검색 조건 변경"
                    secondaryActionText="필터 초기화"
                    onAction={fn()}
                    onSecondaryAction={fn()}
                />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>No Access</h4>
                <EmptyState
                    variant="no-access"
                    title="로그인이 필요합니다"
                    description="이 기능을 사용하려면 계정에 로그인해주세요."
                    icon={UserIcon}
                    actionText="로그인"
                    onAction={fn()}
                />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Error</h4>
                <EmptyState
                    variant="error"
                    title="데이터를 불러올 수 없습니다"
                    description="네트워크 연결을 확인하고 다시 시도해주세요."
                    icon={RefreshIcon}
                    actionText="다시 시도"
                    onAction={fn()}
                />
            </div>

            <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Onboarding</h4>
                <EmptyState
                    variant="onboarding"
                    title="환영합니다!"
                    description="첫 번째 프로젝트를 생성하고 작업을 시작해보세요."
                    icon={BulbIcon}
                    actionText="프로젝트 생성"
                    onAction={fn()}
                />
            </div>
        </div>
    ),
};

// 다양한 아이콘 예시
export const IconExamples: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '1200px' }}>
            <EmptyState
                size="s"
                title="즐겨찾기 없음"
                description="좋아하는 항목을 추가해보세요."
                icon={HeartIcon}
                actionText="추가"
                onAction={fn()}
            />

            <EmptyState
                size="s"
                title="별점 평가 없음"
                description="첫 번째 평가를 남겨보세요."
                icon={StarIcon}
                actionText="평가"
                onAction={fn()}
            />

            <EmptyState
                size="s"
                title="폴더 없음"
                description="새 폴더를 만들어보세요."
                icon={FolderIcon}
                actionText="만들기"
                onAction={fn()}
            />

            <EmptyState
                size="s"
                title="메시지 없음"
                description="새 메시지를 작성해보세요."
                icon={MessageIcon}
                actionText="작성"
                onAction={fn()}
            />

            <EmptyState
                size="s"
                title="일정 없음"
                description="일정을 추가해보세요."
                icon={CalendarIcon}
                actionText="추가"
                onAction={fn()}
            />

            <EmptyState
                size="s"
                title="사진 없음"
                description="사진을 업로드해보세요."
                icon={CameraIcon}
                actionText="업로드"
                onAction={fn()}
            />

            <EmptyState
                size="s"
                title="갤러리 없음"
                description="이미지를 추가해보세요."
                icon={GalleryIcon}
                actionText="추가"
                onAction={fn()}
            />

            <EmptyState
                size="s"
                title="책 없음"
                description="책을 추가해보세요."
                icon={BookIcon}
                actionText="추가"
                onAction={fn()}
            />
        </div>
    ),
};
