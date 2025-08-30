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
    ImageIcon,
    VideoIcon,
    MusicIcon,
    DownloadIcon,
    UploadIcon,
    RefreshIcon,
    SettingsIcon,
    UserIcon
} from '@designbase/icons';

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
            options: ['sm', 'md', 'lg'],
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

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', maxWidth: '800px' }}>
            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>No Data</h3>
                <EmptyState
                    variant="no-data"
                    title="아직 북마크가 없습니다"
                    description="관심 있는 페이지를 북마크에 추가하면 나중에 쉽게 찾을 수 있습니다."
                    icon={BookmarkIcon}
                    actionText="첫 번째 북마크 추가하기"
                    onAction={fn()}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>No Results</h3>
                <EmptyState
                    variant="no-results"
                    title="검색 결과가 없습니다"
                    description="다른 키워드로 검색하거나 필터를 조정해보세요."
                    actionText="검색 조건 변경하기"
                    secondaryActionText="필터 초기화"
                    onAction={fn()}
                    onSecondaryAction={fn()}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>No Access</h3>
                <EmptyState
                    variant="no-access"
                    title="로그인이 필요합니다"
                    description="이 기능을 사용하려면 계정에 로그인해주세요."
                    icon={UserIcon}
                    actionText="로그인하기"
                    onAction={fn()}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Error</h3>
                <EmptyState
                    variant="error"
                    title="데이터를 불러올 수 없습니다"
                    description="네트워크 연결을 확인하고 다시 시도해주세요."
                    actionText="다시 시도하기"
                    onAction={fn()}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Onboarding</h3>
                <EmptyState
                    variant="onboarding"
                    title="환영합니다!"
                    description="첫 번째 프로젝트를 생성하고 작업을 시작해보세요."
                    actionText="프로젝트 생성하기"
                    onAction={fn()}
                />
            </div>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Small Size</h3>
                <EmptyState
                    size="sm"
                    title="작은 빈 상태"
                    description="작은 크기의 빈 상태 예시입니다."
                    actionText="액션하기"
                    onAction={fn()}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Medium Size (Default)</h3>
                <EmptyState
                    size="md"
                    title="중간 크기 빈 상태"
                    description="기본 크기의 빈 상태 예시입니다."
                    actionText="액션하기"
                    onAction={fn()}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 16px 0' }}>Large Size</h3>
                <EmptyState
                    size="lg"
                    title="큰 크기 빈 상태"
                    description="큰 크기의 빈 상태 예시입니다."
                    actionText="액션하기"
                    onAction={fn()}
                />
            </div>
        </div>
    ),
};

export const WithCustomIcons: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '1200px' }}>
            <EmptyState
                title="즐겨찾기가 없습니다"
                description="좋아하는 항목을 즐겨찾기에 추가해보세요."
                icon={HeartIcon}
                actionText="즐겨찾기 추가하기"
                onAction={fn()}
            />

            <EmptyState
                title="별점 평가가 없습니다"
                description="첫 번째 별점 평가를 남겨보세요."
                icon={StarIcon}
                actionText="평가하기"
                onAction={fn()}
            />

            <EmptyState
                title="폴더가 없습니다"
                description="파일을 정리할 폴더를 만들어보세요."
                icon={FolderIcon}
                actionText="폴더 만들기"
                onAction={fn()}
            />

            <EmptyState
                title="메시지가 없습니다"
                description="새로운 메시지를 작성해보세요."
                icon={MessageIcon}
                actionText="메시지 작성하기"
                onAction={fn()}
            />

            <EmptyState
                title="일정이 없습니다"
                description="첫 번째 일정을 추가해보세요."
                icon={CalendarIcon}
                actionText="일정 추가하기"
                onAction={fn()}
            />

            <EmptyState
                title="사진이 없습니다"
                description="첫 번째 사진을 업로드해보세요."
                icon={CameraIcon}
                actionText="사진 업로드하기"
                onAction={fn()}
            />
        </div>
    ),
};

export const WithCustomActions: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '600px' }}>
            <EmptyState
                title="파일이 없습니다"
                description="문서, 이미지, 비디오 등 다양한 파일을 업로드할 수 있습니다."
                icon={BookIcon}
                action={
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <button
                            style={{
                                padding: '12px 24px',
                                backgroundColor: '#3b82f6',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '500',
                            }}
                            onClick={fn()}
                        >
                            파일 업로드
                        </button>
                        <button
                            style={{
                                padding: '12px 24px',
                                backgroundColor: 'transparent',
                                color: '#6b7280',
                                border: '1px solid #d1d5db',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '500',
                            }}
                            onClick={fn()}
                        >
                            템플릿 사용
                        </button>
                    </div>
                }
            />

            <EmptyState
                title="미디어 라이브러리가 비어있습니다"
                description="이미지, 비디오, 음악 파일을 추가하여 미디어 라이브러리를 구성해보세요."
                icon={ImageIcon}
                action={
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <button
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#10b981',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                            onClick={fn()}
                        >
                            <ImageIcon size={16} />
                            이미지 추가
                        </button>
                        <button
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#8b5cf6',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                            onClick={fn()}
                        >
                            <VideoIcon size={16} />
                            비디오 추가
                        </button>
                        <button
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#f59e0b',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                            }}
                            onClick={fn()}
                        >
                            <MusicIcon size={16} />
                            음악 추가
                        </button>
                    </div>
                }
            />
        </div>
    ),
};

export const WithImage: Story = {
    render: () => (
        <div style={{ maxWidth: '600px' }}>
            <EmptyState
                title="아직 다운로드가 없습니다"
                description="다운로드한 파일들이 여기에 표시됩니다."
                image="https://via.placeholder.com/200x150/f3f4f6/9ca3af?text=No+Downloads"
                imageAlt="다운로드 없음 일러스트"
                actionText="파일 다운로드하기"
                onAction={fn()}
            />
        </div>
    ),
};

export const ComplexDescription: Story = {
    render: () => (
        <div style={{ maxWidth: '600px' }}>
            <EmptyState
                title="설정을 완료해주세요"
                description={
                    <div>
                        <p style={{ margin: '0 0 12px 0' }}>
                            서비스를 원활하게 이용하기 위해 다음 설정을 완료해주세요:
                        </p>
                        <ul style={{
                            textAlign: 'left',
                            margin: '0 0 16px 0',
                            paddingLeft: '20px',
                            color: 'var(--color-semantic-text-secondary, #6b7280)'
                        }}>
                            <li>프로필 정보 입력</li>
                            <li>알림 설정 구성</li>
                            <li>보안 설정 확인</li>
                        </ul>
                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-semantic-text-muted, #9ca3af)' }}>
                            설정을 완료하면 더 나은 서비스 경험을 제공할 수 있습니다.
                        </p>
                    </div>
                }
                icon={SettingsIcon}
                actionText="설정 완료하기"
                secondaryActionText="나중에 하기"
                onAction={fn()}
                onSecondaryAction={fn()}
            />
        </div>
    ),
};
