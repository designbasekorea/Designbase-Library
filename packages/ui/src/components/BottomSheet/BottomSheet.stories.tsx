/**
 * BottomSheet 컴포넌트 스토리
 * 
 * 목적: BottomSheet 컴포넌트의 다양한 상태와 사용법을 보여줌
 * 기능: 드래그 제스처, 스냅 포인트, 애니메이션 효과 등 다양한 설정 예제
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BottomSheet } from './BottomSheet';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import {
    HomeOutlineIcon,
    UserIcon,
    SettingsIcon,
    BellIcon,
    SearchIcon,
    PlusIcon,
    EditIcon,
    TrashIcon
} from '@designbase/icons';

const meta: Meta<typeof BottomSheet> = {
    title: 'Components/BottomSheet',
    component: BottomSheet,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            control: { type: 'boolean' },
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl', 'full'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'persistent', 'temporary', 'fullscreen'],
        },
        animation: {
            control: { type: 'select' },
            options: ['slide', 'fade', 'scale', 'none'],
        },
        onClose: {
            action: 'closed',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 모든 스타일을 보여주는 스토리
export const AllStyles: Story = {
    render: () => {
        const [openStyle, setOpenStyle] = useState<string | null>(null);

        return (
            <div style={{ padding: '20px' }}>
                <h2>BottomSheet 스타일 변형</h2>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <Button onClick={() => setOpenStyle('default')}>Default Style</Button>
                    <Button onClick={() => setOpenStyle('persistent')}>Persistent Style</Button>
                    <Button onClick={() => setOpenStyle('temporary')}>Temporary Style</Button>
                    <Button onClick={() => setOpenStyle('fullscreen')}>Fullscreen Style</Button>
                </div>

                <BottomSheet
                    open={openStyle === 'default'}
                    onClose={() => setOpenStyle(null)}
                    variant="default"
                    size="md"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>Default Style BottomSheet</h3>
                        <p>기본 스타일의 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>

                <BottomSheet
                    open={openStyle === 'persistent'}
                    onClose={() => setOpenStyle(null)}
                    variant="persistent"
                    size="md"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>Persistent Style BottomSheet</h3>
                        <p>배경 클릭으로 닫히지 않는 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>

                <BottomSheet
                    open={openStyle === 'temporary'}
                    onClose={() => setOpenStyle(null)}
                    variant="temporary"
                    size="md"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>Temporary Style BottomSheet</h3>
                        <p>임시 표시되는 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>

                <BottomSheet
                    open={openStyle === 'fullscreen'}
                    onClose={() => setOpenStyle(null)}
                    variant="fullscreen"
                    size="full"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>Fullscreen Style BottomSheet</h3>
                        <p>전체 화면을 차지하는 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>
            </div>
        );
    },
};

// 모든 크기를 보여주는 스토리
export const AllSizes: Story = {
    render: () => {
        const [openSize, setOpenSize] = useState<string | null>(null);

        return (
            <div style={{ padding: '20px' }}>
                <h2>BottomSheet 크기별</h2>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <Button onClick={() => setOpenSize('sm')}>Small</Button>
                    <Button onClick={() => setOpenSize('md')}>Medium</Button>
                    <Button onClick={() => setOpenSize('lg')}>Large</Button>
                    <Button onClick={() => setOpenSize('xl')}>Extra Large</Button>
                    <Button onClick={() => setOpenSize('full')}>Full</Button>
                </div>

                <BottomSheet
                    open={openSize === 'sm'}
                    onClose={() => setOpenSize(null)}
                    size="sm"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>Small Size (40vh)</h3>
                        <p>작은 크기의 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>

                <BottomSheet
                    open={openSize === 'md'}
                    onClose={() => setOpenSize(null)}
                    size="md"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>Medium Size (60vh)</h3>
                        <p>중간 크기의 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>

                <BottomSheet
                    open={openSize === 'lg'}
                    onClose={() => setOpenSize(null)}
                    size="lg"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>Large Size (80vh)</h3>
                        <p>큰 크기의 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>

                <BottomSheet
                    open={openSize === 'xl'}
                    onClose={() => setOpenSize(null)}
                    size="xl"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>Extra Large Size (90vh)</h3>
                        <p>매우 큰 크기의 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>

                <BottomSheet
                    open={openSize === 'full'}
                    onClose={() => setOpenSize(null)}
                    size="full"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>Full Size (100vh)</h3>
                        <p>전체 화면 크기의 BottomSheet입니다.</p>
                    </div>
                </BottomSheet>
            </div>
        );
    },
};

// 모든 타입을 보여주는 스토리
export const AllTypes: Story = {
    render: () => {
        const [openType, setOpenType] = useState<string | null>(null);

        return (
            <div style={{ padding: '20px' }}>
                <h2>BottomSheet 타입별</h2>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <Button onClick={() => setOpenType('basic')}>기본</Button>
                    <Button onClick={() => setOpenType('withHeader')}>헤더 포함</Button>
                    <Button onClick={() => setOpenType('withFooter')}>푸터 포함</Button>
                    <Button onClick={() => setOpenType('withSnapPoints')}>높이 조절</Button>
                    <Button onClick={() => setOpenType('withForm')}>폼 포함</Button>
                </div>

                {/* 기본 BottomSheet */}
                <BottomSheet
                    open={openType === 'basic'}
                    onClose={() => setOpenType(null)}
                    size="md"
                >
                    <div style={{ padding: '20px' }}>
                        <h3>기본 BottomSheet</h3>
                        <p>간단한 내용만 포함된 BottomSheet입니다.</p>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
                            <Button variant="primary">확인</Button>
                            <Button variant="secondary">취소</Button>
                        </div>
                    </div>
                </BottomSheet>

                {/* 헤더 포함 BottomSheet */}
                <BottomSheet
                    open={openType === 'withHeader'}
                    onClose={() => setOpenType(null)}
                    size="md"
                    title="헤더가 있는 BottomSheet"
                    subtitle="부제목도 포함되어 있습니다"
                >
                    <div style={{ padding: '20px' }}>
                        <p>헤더와 푸터가 포함된 BottomSheet입니다.</p>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
                            <Button variant="primary">확인</Button>
                            <Button variant="secondary">취소</Button>
                        </div>
                    </div>
                </BottomSheet>

                {/* 푸터 포함 BottomSheet */}
                <BottomSheet
                    open={openType === 'withFooter'}
                    onClose={() => setOpenType(null)}
                    size="md"
                    title="푸터가 있는 BottomSheet"
                    footer={
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                            <Button variant="secondary">취소</Button>
                            <Button variant="primary">저장</Button>
                        </div>
                    }
                >
                    <div style={{ padding: '20px' }}>
                        <p>푸터가 포함된 BottomSheet입니다.</p>
                        <p>푸터는 항상 하단에 고정되어 있습니다.</p>
                    </div>
                </BottomSheet>

                {/* 높이 조절 BottomSheet */}
                <BottomSheet
                    open={openType === 'withSnapPoints'}
                    onClose={() => setOpenType(null)}
                    size="md"
                    title="높이 조절 BottomSheet"
                    maxHeight={80}
                >
                    <div style={{ padding: '20px' }}>
                        <h3>높이 조절 기능</h3>
                        <p>드래그하여 높이를 직접 조절할 수 있습니다.</p>
                        <p>최대 80% 높이까지 조절 가능하며, 최소 높이에서 아래로 드래그하면 닫힙니다.</p>
                    </div>
                </BottomSheet>

                {/* 폼 포함 BottomSheet */}
                <BottomSheet
                    open={openType === 'withForm'}
                    onClose={() => setOpenType(null)}
                    size="lg"
                    title="폼이 포함된 BottomSheet"
                    footer={
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                            <Button variant="secondary">취소</Button>
                            <Button variant="primary">저장</Button>
                        </div>
                    }
                >
                    <div style={{ padding: '20px' }}>
                        <h3>사용자 정보 입력</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
                            <Input label="이름" placeholder="이름을 입력하세요" />
                            <Input label="이메일" type="email" placeholder="이메일을 입력하세요" />
                            <Input label="전화번호" placeholder="전화번호를 입력하세요" />
                            <Input label="주소" placeholder="주소를 입력하세요" />
                        </div>
                    </div>
                </BottomSheet>
            </div>
        );
    },
};

// 실제 사용 예시들을 보여주는 스토리
export const Examples: Story = {
    render: () => {
        const [openExample, setOpenExample] = useState<string | null>(null);

        return (
            <div style={{ padding: '20px' }}>
                <h2>실제 사용 예시</h2>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <Button onClick={() => setOpenExample('settings')}>설정</Button>
                    <Button onClick={() => setOpenExample('profile')}>프로필</Button>
                    <Button onClick={() => setOpenExample('search')}>검색</Button>
                    <Button onClick={() => setOpenExample('actions')}>액션 메뉴</Button>
                </div>

                {/* 설정 BottomSheet */}
                <BottomSheet
                    open={openExample === 'settings'}
                    onClose={() => setOpenExample(null)}
                    size="lg"
                    title="설정"
                    variant="persistent"
                >
                    <div style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                                <BellIcon size={20} />
                                <span>알림 설정</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                                <UserIcon size={20} />
                                <span>계정 정보</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                                <SettingsIcon size={20} />
                                <span>일반 설정</span>
                            </div>
                        </div>
                    </div>
                </BottomSheet>

                {/* 프로필 BottomSheet */}
                <BottomSheet
                    open={openExample === 'profile'}
                    onClose={() => setOpenExample(null)}
                    size="md"
                    title="프로필"
                    subtitle="사용자 정보를 확인하고 편집하세요"
                >
                    <div style={{ padding: '20px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#e0e0e0', margin: '0 auto 16px' }}></div>
                            <h3>김철수</h3>
                            <p>kim@example.com</p>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <Button variant="primary" startIcon={EditIcon}>편집</Button>
                            <Button variant="secondary">로그아웃</Button>
                        </div>
                    </div>
                </BottomSheet>

                {/* 검색 BottomSheet */}
                <BottomSheet
                    open={openExample === 'search'}
                    onClose={() => setOpenExample(null)}
                    size="lg"
                    title="검색"
                    variant="temporary"
                >
                    <div style={{ padding: '20px' }}>
                        <Input
                            startIcon={SearchIcon}
                            placeholder="검색어를 입력하세요..."
                            fullWidth
                        />
                        <div style={{ marginTop: '20px' }}>
                            <h4>최근 검색어</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                                <span style={{ padding: '8px 12px', backgroundColor: '#f0f0f0', borderRadius: '16px', fontSize: '14px' }}>React</span>
                                <span style={{ padding: '8px 12px', backgroundColor: '#f0f0f0', borderRadius: '16px', fontSize: '14px' }}>TypeScript</span>
                                <span style={{ padding: '8px 12px', backgroundColor: '#f0f0f0', borderRadius: '16px', fontSize: '14px' }}>UI 컴포넌트</span>
                            </div>
                        </div>
                    </div>
                </BottomSheet>

                {/* 액션 메뉴 BottomSheet */}
                <BottomSheet
                    open={openExample === 'actions'}
                    onClose={() => setOpenExample(null)}
                    size="sm"
                    title="액션 메뉴"
                >
                    <div style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <button style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', width: '100%', textAlign: 'left' }}>
                                <PlusIcon size={20} />
                                <span>새로 만들기</span>
                            </button>
                            <button style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', width: '100%', textAlign: 'left' }}>
                                <EditIcon size={20} />
                                <span>편집</span>
                            </button>
                            <button style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', width: '100%', textAlign: 'left', color: '#dc2626' }}>
                                <TrashIcon size={20} />
                                <span>삭제</span>
                            </button>
                        </div>
                    </div>
                </BottomSheet>
            </div>
        );
    },
};
