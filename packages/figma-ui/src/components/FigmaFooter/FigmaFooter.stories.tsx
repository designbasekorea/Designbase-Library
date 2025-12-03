import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FigmaFooter } from './FigmaFooter';
import { GlobeIcon, YoutubeIcon, InstagramIcon, MailIcon, CodeIcon } from '@designbasekorea/icons';

const meta: Meta<typeof FigmaFooter> = {
    title: 'Figma UI/FigmaFooter',
    component: FigmaFooter,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        paymentStatus: {
            control: { type: 'select' },
            options: ['PAID', 'FREE', 'TRIAL', 'BETA'],
        },
        showPaymentStatus: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 로고 이미지
const logoSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDA2NkZGIi8+Cjx0ZXh0IHg9IjUwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9nbzwvdGV4dD4KPC9zdmc+';

const defaultLogoLinks = [
    {
        name: 'officialWebsite',
        url: 'https://designbase.co.kr',
        icon: <GlobeIcon size={20} />,
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
        icon: <CodeIcon size={20} />,
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
        logoLinks: defaultLogoLinks,
        paymentStatus: 'FREE',
        usageCount: 5,
        maxDailyUsage: 20,
        showPaymentStatus: true,
        showDonation: true,
        showDonationText: true,
        donationText: 'Buy me a coffee',
        isLoading: false,
        onLicensePageClick: () => console.log('License page clicked'),
        t: (key: string) => {
            const translations: Record<string, string> = {
                officialWebsite: '공식 웹사이트',
                youtube: '유튜브',
                instagram: '인스타그램',
                figmaCommunity: '피그마 커뮤니티',
                contact: '문의하기',
                unlimitedUsage: '무제한 사용 가능',
                unlimitedUsageTooltip: '모든 기능을 제한 없이 사용할 수 있습니다',
                perDay: '하루',
                resetsDaily: '매일 리셋',
                loading: '로딩 중...',
                premium: '프리미엄',
                free: '무료',
                donationPrompt: '이 플러그인이 유용했나요?',
                betaStatus: 'BETA',
            };
            return translations[key] || key;
        },
    },
};

export const PremiumUser: Story = {
    args: {
        logoType: 'designbase',
        logoSize: 'xs',
        logoLinks: defaultLogoLinks,
        paymentStatus: 'PAID',
        usageCount: 0,
        maxDailyUsage: 20,
        showPaymentStatus: true,
        isLoading: false,
        onLicensePageClick: () => console.log('License page clicked'),
        t: (key: string) => {
            const translations: Record<string, string> = {
                officialWebsite: '공식 웹사이트',
                youtube: '유튜브',
                instagram: '인스타그램',
                figmaCommunity: '피그마 커뮤니티',
                contact: '문의하기',
                unlimitedUsage: '무제한 사용 가능',
                unlimitedUsageTooltip: '모든 기능을 제한 없이 사용할 수 있습니다',
                perDay: '하루',
                resetsDaily: '매일 리셋',
                loading: '로딩 중...',
                premium: '프리미엄',
                free: '무료',
                betaStatus: 'BETA',
            };
            return translations[key] || key;
        },
    },
};

export const BetaStatus: Story = {
    args: {
        logoType: 'designbase',
        logoSize: 'xs',
        logoLinks: defaultLogoLinks,
        paymentStatus: 'BETA',
        showPaymentStatus: true,
        showDonation: true,
        showDonationText: true,
        donationText: '피드백 보내기',
        onLicensePageClick: () => console.log('License page clicked (should not fire in beta)'),
        t: (key: string) => {
            const translations: Record<string, string> = {
                officialWebsite: '공식 웹사이트',
                youtube: '유튜브',
                instagram: '인스타그램',
                figmaCommunity: '피그마 커뮤니티',
                contact: '문의하기',
                betaStatus: 'BETA',
                donationPrompt: '베타 테스트에 참여해 주셔서 감사합니다!',
            };
            return translations[key] || key;
        },
    },
};

export const Loading: Story = {
    args: {
        logoType: 'designbase',
        logoSize: 'xs',
        logoLinks: defaultLogoLinks,
        paymentStatus: 'FREE',
        usageCount: 0,
        maxDailyUsage: 20,
        showPaymentStatus: true,
        isLoading: true,
        onLicensePageClick: () => console.log('License page clicked'),
        t: (key: string) => {
            const translations: Record<string, string> = {
                officialWebsite: '공식 웹사이트',
                youtube: '유튜브',
                instagram: '인스타그램',
                figmaCommunity: '피그마 커뮤니티',
                contact: '문의하기',
                unlimitedUsage: '무제한 사용 가능',
                unlimitedUsageTooltip: '모든 기능을 제한 없이 사용할 수 있습니다',
                perDay: '하루',
                resetsDaily: '매일 리셋',
                loading: '로딩 중...',
                premium: '프리미엄',
                free: '무료',
                betaStatus: 'BETA',
            };
            return translations[key] || key;
        },
    },
};

export const WithChildren: Story = {
    args: {
        logoType: 'designbase',
        logoSize: 'xs',
        logoLinks: defaultLogoLinks,
        paymentStatus: 'FREE',
        usageCount: 15,
        maxDailyUsage: 20,
        showPaymentStatus: true,
        isLoading: false,
        onLicensePageClick: () => console.log('License page clicked'),
        t: (key: string) => {
            const translations: Record<string, string> = {
                officialWebsite: '공식 웹사이트',
                youtube: '유튜브',
                instagram: '인스타그램',
                figmaCommunity: '피그마 커뮤니티',
                contact: '문의하기',
                unlimitedUsage: '무제한 사용 가능',
                unlimitedUsageTooltip: '모든 기능을 제한 없이 사용할 수 있습니다',
                perDay: '하루',
                resetsDaily: '매일 리셋',
                loading: '로딩 중...',
                premium: '프리미엄',
                free: '무료',
                betaStatus: 'BETA',
            };
            return translations[key] || key;
        },
        children: (
            <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                <p>추가 콘텐츠가 여기에 표시됩니다.</p>
            </div>
        ),
    },
};

export const WithoutPaymentStatus: Story = {
    args: {
        logoType: 'designbase',
        logoSize: 'xs',
        logoLinks: defaultLogoLinks,
        paymentStatus: 'FREE',
        usageCount: 0,
        maxDailyUsage: 20,
        showPaymentStatus: false,
        isLoading: false,
        t: (key: string) => {
            const translations: Record<string, string> = {
                officialWebsite: '공식 웹사이트',
                youtube: '유튜브',
                instagram: '인스타그램',
                figmaCommunity: '피그마 커뮤니티',
                contact: '문의하기',
                unlimitedUsage: '무제한 사용 가능',
                unlimitedUsageTooltip: '모든 기능을 제한 없이 사용할 수 있습니다',
                perDay: '하루',
                resetsDaily: '매일 리셋',
                loading: '로딩 중...',
                premium: '프리미엄',
                free: '무료',
                betaStatus: 'BETA',
            };
            return translations[key] || key;
        },
    },
};

export const WithDonation: Story = {
    args: {
        logoType: 'designbase',
        logoSize: 'xs',
        logoLinks: defaultLogoLinks,
        paymentStatus: 'FREE',
        usageCount: 0,
        maxDailyUsage: 20,
        showPaymentStatus: false,
        showDonation: true,
        donationUrl: 'https://buymeacoffee.com/designbase',
        donationText: '커피 한 잔 사주기',
        isLoading: false,
        t: (key: string) => {
            const translations: Record<string, string> = {
                officialWebsite: '공식 웹사이트',
                youtube: '유튜브',
                instagram: '인스타그램',
                figmaCommunity: '피그마 커뮤니티',
                contact: '문의하기',
                betaStatus: 'BETA',
            };
            return translations[key] || key;
        },
    },
};

export const FreePluginWithDonation: Story = {
    args: {
        logoType: 'designbase',
        logoSize: 'xs',
        logoLinks: defaultLogoLinks,
        showPaymentStatus: false,
        showDonation: true,
        donationUrl: 'https://buymeacoffee.com/designbase',
        donationText: '기부하기',
        t: (key: string) => {
            const translations: Record<string, string> = {
                officialWebsite: '공식 웹사이트',
                youtube: '유튜브',
                instagram: '인스타그램',
                figmaCommunity: '피그마 커뮤니티',
                contact: '문의하기',
                betaStatus: language === 'ko' ? 'BETA' : 'BETA',
            };
            return translations[key] || key;
        },
    },
};

export const WithLanguageSelector: Story = {
    render: () => {
        const [language, setLanguage] = React.useState('ko');

        return (
            <FigmaFooter
                logoType="designbase"
                logoSize="xs"
                logoLinks={defaultLogoLinks}
                showPaymentStatus={false}
                showDonation={true}
                donationText={language === 'ko' ? '커피 한 잔 사주기' : 'Buy me a coffee'}
                showLanguageSelector={true}
                currentLanguage={language}
                onLanguageChange={(lang) => {
                    setLanguage(lang);
                    console.log('Language changed to:', lang);
                }}
                t={(key: string) => {
                    const translations: Record<string, string> = {
                        officialWebsite: language === 'ko' ? '공식 웹사이트' : 'Official Website',
                        youtube: language === 'ko' ? '유튜브' : 'YouTube',
                        instagram: language === 'ko' ? '인스타그램' : 'Instagram',
                        figmaCommunity: language === 'ko' ? '피그마 커뮤니티' : 'Figma Community',
                        contact: language === 'ko' ? '문의하기' : 'Contact',
                    };
                    return translations[key] || key;
                }}
            />
        );
    },
};

export const IndependentControls: Story = {
    render: () => {
        const [language, setLanguage] = React.useState('ko');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
                <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
                        독립적인 제어 예제들
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div>
                            <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500' }}>
                                1. 무료 + 무제한 (사용량 표시 없음, PaymentBadge 없음)
                            </h4>
                            <FigmaFooter
                                logoType="designbase"
                                logoSize="xs"
                                logoLinks={defaultLogoLinks}
                                paymentStatus="FREE"
                                usageCount={0}
                                showPaymentStatus={true}
                                showUsageInfo={false}  // 사용량 표시 안함
                                showPaymentBadge={false}  // PaymentBadge 없음
                                showDonation={true}
                                donationText="커피 한 잔 사주기"
                                t={(key: string) => {
                                    const translations: Record<string, string> = {
                                        officialWebsite: '공식 웹사이트',
                                        youtube: '유튜브',
                                        instagram: '인스타그램',
                                        figmaCommunity: '피그마 커뮤니티',
                                        contact: '문의하기',
                                        unlimitedUsage: '무제한 사용 가능',
                                        unlimitedUsageTooltip: '모든 기능을 제한 없이 사용할 수 있습니다',
                                        perDay: '하루',
                                        resetsDaily: '매일 리셋',
                                        loading: '로딩 중...',
                                        premium: '프리미엄',
                                        free: '무료',
                                        betaStatus: 'BETA',
                                    };
                                    return translations[key] || key;
                                }}
                            />
                        </div>

                        <div>
                            <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500' }}>
                                2. 무료 + 제한 (사용량 표시 있음, PaymentBadge 있음)
                            </h4>
                            <FigmaFooter
                                logoType="designbase"
                                logoSize="xs"
                                logoLinks={defaultLogoLinks}
                                paymentStatus="FREE"
                                usageCount={15}
                                maxDailyUsage={20}
                                showPaymentStatus={true}
                                showUsageInfo={true}  // 사용량 표시
                                showPaymentBadge={true}  // PaymentBadge 있음
                                showDonation={true}
                                donationText="커피 한 잔 사주기"
                                onLicensePageClick={() => console.log('License page clicked')}
                                t={(key: string) => {
                                    const translations: Record<string, string> = {
                                        officialWebsite: '공식 웹사이트',
                                        youtube: '유튜브',
                                        instagram: '인스타그램',
                                        figmaCommunity: '피그마 커뮤니티',
                                        contact: '문의하기',
                                        unlimitedUsage: '무제한 사용 가능',
                                        unlimitedUsageTooltip: '모든 기능을 제한 없이 사용할 수 있습니다',
                                        perDay: '하루',
                                        resetsDaily: '매일 리셋',
                                        loading: '로딩 중...',
                                        premium: '프리미엄',
                                        free: '무료',
                                        betaStatus: 'BETA',
                                    };
                                    return translations[key] || key;
                                }}
                            />
                        </div>

                        <div>
                            <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500' }}>
                                3. 유료 + 무제한 (사용량 표시 없음, PaymentBadge 있음)
                            </h4>
                            <FigmaFooter
                                logoType="designbase"
                                logoSize="xs"
                                logoLinks={defaultLogoLinks}
                                paymentStatus="PAID"
                                usageCount={0}
                                showPaymentStatus={true}
                                showUsageInfo={false}  // 사용량 표시 안함
                                showPaymentBadge={true}  // PaymentBadge 있음 (비활성화 버튼)
                                showDonation={false}
                                onLicensePageClick={() => console.log('License page clicked')}
                                t={(key: string) => {
                                    const translations: Record<string, string> = {
                                        officialWebsite: '공식 웹사이트',
                                        youtube: '유튜브',
                                        instagram: '인스타그램',
                                        figmaCommunity: '피그마 커뮤니티',
                                        contact: '문의하기',
                                        unlimitedUsage: '무제한 사용 가능',
                                        unlimitedUsageTooltip: '모든 기능을 제한 없이 사용할 수 있습니다',
                                        perDay: '하루',
                                        resetsDaily: '매일 리셋',
                                        loading: '로딩 중...',
                                        premium: '프리미엄',
                                        free: '무료',
                                        betaStatus: 'BETA',
                                    };
                                    return translations[key] || key;
                                }}
                            />
                        </div>

                        <div>
                            <h4 style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: '500' }}>
                                4. 유료 + 제한 (사용량 표시 있음, PaymentBadge 있음)
                            </h4>
                            <FigmaFooter
                                logoType="designbase"
                                logoSize="xs"
                                logoLinks={defaultLogoLinks}
                                paymentStatus="PAID"
                                usageCount={8}
                                maxDailyUsage={30}
                                showPaymentStatus={true}
                                showUsageInfo={true}  // 사용량 표시
                                showPaymentBadge={true}  // PaymentBadge 있음
                                showDonation={false}
                                onLicensePageClick={() => console.log('License page clicked')}
                                t={(key: string) => {
                                    const translations: Record<string, string> = {
                                        officialWebsite: '공식 웹사이트',
                                        youtube: '유튜브',
                                        instagram: '인스타그램',
                                        figmaCommunity: '피그마 커뮤니티',
                                        contact: '문의하기',
                                        unlimitedUsage: '무제한 사용 가능',
                                        unlimitedUsageTooltip: '모든 기능을 제한 없이 사용할 수 있습니다',
                                        perDay: '하루',
                                        resetsDaily: '매일 리셋',
                                        loading: '로딩 중...',
                                        premium: '프리미엄',
                                        free: '무료',
                                        betaStatus: 'BETA',
                                    };
                                    return translations[key] || key;
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    },
};
