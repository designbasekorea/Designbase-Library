import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Testimonial, TestimonialProps } from './Testimonial';

const meta: Meta<typeof Testimonial> = {
    title: 'Components/Testimonial',
    component: Testimonial,
    tags: ['autodocs'],
    argTypes: {
        align: {
            control: 'select',
            options: ['left', 'center'],
        },
        size: {
            control: 'select',
            options: ['s', 'm', 'l'],
        },
        rating: {
            control: { type: 'number', min: 0, max: 5, step: 0.1 },
        },
        badgeProps: { control: 'object' },
        avatarProps: { control: 'object' },
        ratingProps: { control: 'object' },
    },
    args: {
        quote:
            '디자인베이스 라이브러리를 통해 새로운 기능을 빠르게 시각화할 수 있었고, 팀 전체의 생산성이 눈에 띄게 향상되었습니다.',
        author: '김디자인',
        role: 'Lead Product Designer',
        company: 'Designbase Korea',
        avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=160&h=160&fit=facearea&facepad=2',
        rating: 4.8,
        maxRating: 5,
        align: 'left',
        size: 'm',
        badge: 'Top pick',
        badgeProps: {
            variant: 'primary',
            size: 's',
            style: 'text',
        },
        ratingProps: {
            reviewCount: 128,
            display: 'both',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Testimonial>;

export const Default: Story = {};

export const Large: Story = {
    args: {
        size: 'l',
        align: 'center',
        badge: 'Featured',
        badgeProps: {
            size: 'm',
        },
        ratingProps: {
            reviewCount: 512,
            display: 'both',
        },
        children: (
            <div>
                “디자인 시스템 도입 이후 가장 성공적인 프로젝트”라고 평가받았습니다. 팀 내부 설문에서도 만족도가 96%로 나타났어요.
            </div>
        ),
    },
};

export const Compact: Story = {
    args: {
        size: 's',
        rating: 4.2,
        badge: undefined,
        avatarProps: {
            size: 's',
            initials: 'JD',
        },
        ratingProps: {
            reviewCount: 54,
            size: 's',
            display: 'both',
        },
        children: (
            <div>
                단 2주 만에 새로운 온보딩 플로우를 완성했습니다. 재사용 가능한 컴포넌트 덕분에 품질을 유지하면서도 일정에 맞출 수 있었어요.
            </div>
        ),
    },
};

export const WithoutAvatar: Story = {
    args: {
        avatar: undefined,
        rating: undefined,
        badge: undefined,
        ratingProps: undefined,
        children: (
            <div>
                라이브러리를 도입한 뒤로 QA 이슈가 35% 감소하고, 디자이너와 개발자의 커뮤니케이션 시간이 절반으로 줄었습니다.
            </div>
        ),
    },
};

