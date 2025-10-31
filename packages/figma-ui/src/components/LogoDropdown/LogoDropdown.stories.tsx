import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { LogoDropdown } from './LogoDropdown';
import { ExternalLinkIcon, AppWindowIcon, YoutubeIcon, InstagramIcon, MailIcon, FigmaIcon } from '@designbasekorea/icons';

const meta: Meta<typeof LogoDropdown> = {
    title: 'Figma UI/LogoDropdown',
    component: LogoDropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: { type: 'select' },
            options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 로고 이미지 (실제로는 SVG나 이미지 파일 사용)
const logoSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDA2NkZGIi8+Cjx0ZXh0IHg9IjUwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9nbzwvdGV4dD4KPC9zdmc+';

const defaultLinks = [
    {
        name: 'officialWebsite',
        url: 'https://designbase.co.kr',
        icon: <AppWindowIcon size={20} />,
    },
    {
        name: 'youtube',
        url: 'https://youtube.com/designbase',
        icon: <YoutubeIcon size={20} />,
    },
    {
        name: 'instagram',
        url: 'https://instagram.com/designbase',
        icon: <InstagramIcon size={20} />,
    },
    {
        name: 'figmaCommunity',
        url: 'https://www.figma.com/@designbasekorea',
        icon: <FigmaIcon size={20} />,
    },
    {
        name: 'contact',
        url: 'mailto:designbasekorea@gmail.com',
        icon: <MailIcon size={20} />,
    },
];

export const Default: Story = {
    args: {
        logoType: 'designbase',
        logoSize: 'xs',
        position: 'top-left',
        // links와 t는 기본값 사용
    },
};

export const WithDefaultLinks: Story = {
    args: {
        logoType: 'designbase',
        logoSize: 'xs',
        position: 'top-left',
        // 아무것도 전달하지 않으면 기본 링크와 번역 사용
    },
};

export const WithSymbolMark: Story = {
    args: {
        logoType: 'designbase-mark',
        logoSize: 's',
        links: defaultLinks,
        position: 'top-left',
        t: (key: string) => {
            const translations: Record<string, string> = {
                officialWebsite: '공식 웹사이트',
                youtube: '유튜브',
                instagram: '인스타그램',
                figmaCommunity: '피그마 커뮤니티',
                contact: '문의하기',
            };
            return translations[key] || key;
        },
    },
};

export const Positions: Story = {
    render: () => {
        const [position, setPosition] = useState<'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'>('top-left');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                    {(['bottom-left', 'bottom-right', 'top-left', 'top-right'] as const).map((pos) => (
                        <button
                            key={pos}
                            onClick={() => setPosition(pos)}
                            style={{
                                padding: '8px 16px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                background: position === pos ? '#0066FF' : 'white',
                                color: position === pos ? 'white' : 'black',
                                cursor: 'pointer',
                            }}
                        >
                            {pos}
                        </button>
                    ))}
                </div>

                <div style={{ position: 'relative', height: '200px', width: '300px', border: '1px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LogoDropdown
                        logoType="designbase"
                        logoSize="xs"
                        links={defaultLinks}
                        position={position}
                        t={(key: string) => {
                            const translations: Record<string, string> = {
                                officialWebsite: '공식 웹사이트',
                                youtube: '유튜브',
                                instagram: '인스타그램',
                                figmaCommunity: '피그마 커뮤니티',
                                contact: '문의하기',
                            };
                            return translations[key] || key;
                        }}
                    />
                </div>
            </div>
        );
    },
};

export const LargerSize: Story = {
    args: {
        logoType: 'designbase',
        logoSize: 's',
        links: defaultLinks,
        position: 'top-left',
        t: (key: string) => {
            const translations: Record<string, string> = {
                officialWebsite: '공식 웹사이트',
                youtube: '유튜브',
                instagram: '인스타그램',
                figmaCommunity: '피그마 커뮤니티',
                contact: '문의하기',
            };
            return translations[key] || key;
        },
    },
};

export const WithCustomLinks: Story = {
    args: {
        logoType: 'designbase',
        logoSize: 'xs',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/designbasekorea',
                icon: <ExternalLinkIcon size={20} />,
            },
            {
                name: 'Documentation',
                url: 'https://docs.designbase.co.kr',
                icon: <ExternalLinkIcon size={20} />,
            },
        ],
        position: 'bottom-right',
        t: (key: string) => key,
    },
};

export const WithCustomImage: Story = {
    args: {
        logoSrc,
        logoAlt: 'Custom Logo',
        links: defaultLinks,
        position: 'bottom-left',
        t: (key: string) => {
            const translations: Record<string, string> = {
                officialWebsite: '공식 웹사이트',
                youtube: '유튜브',
                instagram: '인스타그램',
                figmaCommunity: '피그마 커뮤니티',
                contact: '문의하기',
            };
            return translations[key] || key;
        },
    },
};
