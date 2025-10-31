import React, { useState, useCallback, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Input } from '../Input/Input';
import { Dropdown } from '../Dropdown/Dropdown';
import {
    MailIcon,
    LinkIcon,
    CopyIcon,
    ShareAltIcon,
    CloseIcon,
    FacebookIcon,
    XIcon,
    InstagramIcon,
    LinkedinIcon,
    WhatsappIcon,
    PinterestIcon,
    TelegramIcon,
    ScanQrcodeIcon,
} from '@designbasekorea/icons';
import './Share.scss';

export type SharePlatform =
    | 'facebook'
    | 'x'
    | 'instagram'
    | 'linkedin'
    | 'pinterest'
    | 'whatsapp'
    | 'telegram'
    | 'email'
    | 'link'
    | 'qr';

export type ShareVariant = 'button' | 'dropdown' | 'modal' | 'inline';
export type ShareSize = 's' | 'm' | 'l';
export type SharePosition = 'top' | 'bottom' | 'left' | 'right';

export interface SharePlatformConfig {
    /** 플랫폼 이름 */
    name: string;
    /** 플랫폼 아이콘 */
    icon: React.ComponentType<any>;
    /** 플랫폼 색상 */
    color: string;
    /** 공유 URL 템플릿 */
    shareUrl: string;
    /** 활성화 여부 */
    enabled?: boolean;
    /** 커스텀 공유 함수 */
    customShare?: (url: string, title: string, description?: string) => void;
}

export interface ShareProps {
    /** 공유할 URL */
    url: string;
    /** 공유할 제목 */
    title: string;
    /** 공유할 설명 */
    description?: string;
    /** 공유할 이미지 URL */
    imageUrl?: string;
    /** 공유할 해시태그 */
    hashtags?: string[];
    /** 공유 변형 */
    variant?: ShareVariant;
    /** 공유 크기 */
    size?: ShareSize;
    /** 드롭다운 위치 (dropdown 변형용) */
    position?: SharePosition;
    /** 활성화할 플랫폼들 */
    platforms?: SharePlatform[];
    /** 커스텀 플랫폼 설정 */
    customPlatforms?: Partial<Record<SharePlatform, Partial<SharePlatformConfig>>>;
    /** 공유 버튼 텍스트 */
    buttonText?: string;
    /** 공유 버튼 아이콘 */
    buttonIcon?: React.ComponentType<any>;
    /** 모달 제목 */
    modalTitle?: string;
    /** 링크 복사 성공 메시지 */
    copySuccessMessage?: string;
    /** QR 코드 표시 여부 */
    showQrCode?: boolean;
    /** QR 코드 크기 */
    qrCodeSize?: number;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 추가 스타일 */
    style?: React.CSSProperties;
    /** 공유 성공 콜백 */
    onShare?: (platform: SharePlatform, url: string) => void;
    /** 공유 실패 콜백 */
    onShareError?: (platform: SharePlatform, error: Error) => void;
    /** 링크 복사 성공 콜백 */
    onCopySuccess?: (url: string) => void;
    /** 링크 복사 실패 콜백 */
    onCopyError?: (error: Error) => void;
}

const Share: React.FC<ShareProps> = ({
    url,
    title,
    description = '',
    imageUrl,
    hashtags = [],
    variant = 'button',
    size = 'm',
    position = 'bottom',
    platforms = ['facebook', 'x', 'linkedin', 'whatsapp', 'email', 'link'],
    customPlatforms = {},
    buttonText = '공유',
    buttonIcon = ShareAltIcon,
    modalTitle = '공유하기',
    copySuccessMessage = '링크가 클립보드에 복사되었습니다!',
    showQrCode = true,
    qrCodeSize = 200,
    className,
    style,
    onShare,
    onShareError,
    onCopySuccess,
    onCopyError,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [qrCodeData, setQrCodeData] = useState<string>('');

    // 기본 플랫폼 설정
    const defaultPlatforms: Record<SharePlatform, SharePlatformConfig> = {
        facebook: {
            name: 'Facebook',
            icon: FacebookIcon,
            color: '#1877f2',
            shareUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',
        },
        x: {
            name: 'X',
            icon: XIcon,
            color: '#000000',
            shareUrl: 'https://twitter.com/intent/tweet?url={url}&text={title}&hashtags={hashtags}',
        },
        instagram: {
            name: 'Instagram',
            icon: InstagramIcon,
            color: '#e4405f',
            shareUrl: 'https://www.instagram.com/',
            customShare: () => {
                // Instagram은 직접 공유가 제한적이므로 링크 복사 안내
                alert('Instagram에 직접 공유하려면 링크를 복사하여 사용하세요.');
            },
        },
        linkedin: {
            name: 'LinkedIn',
            icon: LinkedinIcon,
            color: '#0077b5',
            shareUrl: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
        },
        pinterest: {
            name: 'Pinterest',
            icon: PinterestIcon,
            color: '#bd081c',
            shareUrl: 'https://pinterest.com/pin/create/button/?url={url}&description={title}&media={imageUrl}',
        },
        whatsapp: {
            name: 'WhatsApp',
            icon: WhatsappIcon,
            color: '#25d366',
            shareUrl: 'https://wa.me/?text={title}%20{url}',
        },
        telegram: {
            name: 'Telegram',
            icon: TelegramIcon,
            color: '#0088cc',
            shareUrl: 'https://t.me/share/url?url={url}&text={title}',
        },
        email: {
            name: '이메일',
            icon: MailIcon,
            color: '#ea4335',
            shareUrl: 'mailto:?subject={title}&body={description}%20{url}',
        },
        link: {
            name: '링크 복사',
            icon: LinkIcon,
            color: '#6c757d',
            shareUrl: '',
            customShare: () => handleCopyLink(),
        },
        qr: {
            name: 'QR 코드',
            icon: ScanQrcodeIcon,
            color: '#6c757d',
            shareUrl: '',
            customShare: () => handleShowQrCode(),
        },
    };

    // 플랫폼 설정 병합
    const platformConfigs = Object.keys(defaultPlatforms).reduce((acc, platform) => {
        const platformKey = platform as SharePlatform;
        const defaultConfig = defaultPlatforms[platformKey];
        const customConfig = customPlatforms[platformKey] || {};

        acc[platformKey] = {
            ...defaultConfig,
            ...customConfig,
            enabled: customConfig.enabled !== false,
        };

        return acc;
    }, {} as Record<SharePlatform, SharePlatformConfig>);

    // 활성화된 플랫폼들
    const activePlatforms = platforms.filter(platform =>
        platformConfigs[platform]?.enabled !== false
    );

    // URL 템플릿 변수 치환
    const replaceUrlVariables = useCallback((template: string): string => {
        return template
            .replace('{url}', encodeURIComponent(url))
            .replace('{title}', encodeURIComponent(title))
            .replace('{description}', encodeURIComponent(description))
            .replace('{imageUrl}', encodeURIComponent(imageUrl || ''))
            .replace('{hashtags}', hashtags.join(','));
    }, [url, title, description, imageUrl, hashtags]);

    // 링크 복사
    const handleCopyLink = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(url);
            setIsCopied(true);
            onCopySuccess?.(url);

            // 3초 후 복사 상태 초기화
            setTimeout(() => setIsCopied(false), 3000);
        } catch (error) {
            console.error('링크 복사 실패:', error);
            onCopyError?.(error as Error);
        }
    }, [url, onCopySuccess, onCopyError]);

    // QR 코드 표시
    const handleShowQrCode = useCallback(() => {
        setQrCodeData(url);
        setIsOpen(true);
    }, [url]);

    // 플랫폼별 공유
    const handlePlatformShare = useCallback((platform: SharePlatform) => {
        const config = platformConfigs[platform];
        if (!config) return;

        try {
            if (config.customShare) {
                config.customShare(url, title, description);
            } else if (config.shareUrl) {
                const shareUrl = replaceUrlVariables(config.shareUrl);
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }

            onShare?.(platform, url);
        } catch (error) {
            console.error(`${platform} 공유 실패:`, error);
            onShareError?.(platform, error as Error);
        }
    }, [platformConfigs, url, title, description, replaceUrlVariables, onShare, onShareError]);



    // QR 코드 생성 (간단한 구현)
    const generateQrCode = useCallback(() => {
        // 실제 프로덕션에서는 qrcode 라이브러리 사용 권장
        return `https://api.qrserver.com/v1/create-qr-code/?size=${qrCodeSize}x${qrCodeSize}&data=${encodeURIComponent(qrCodeData)}`;
    }, [qrCodeData, qrCodeSize]);

    // 공유 버튼 렌더링
    const renderShareButton = () => {
        const ButtonIcon = buttonIcon;

        return (
            <Button
                variant="secondary"
                size={size}
                onPress={() => setIsOpen(!isOpen)}
                className="designbase-share__trigger"
                startIcon={ButtonIcon}
            >
                {buttonText}
            </Button>
        );
    };

    // 플랫폼 버튼 렌더링
    const renderPlatformButton = (platform: SharePlatform) => {
        const config = platformConfigs[platform];
        if (!config) return null;

        const PlatformIcon = config.icon;
        const isLinkCopy = platform === 'link';
        const isQrCode = platform === 'qr';

        return (
            <button
                key={platform}
                type="button"
                className={clsx(
                    'designbase-share__platform-button',
                    `designbase-share__platform-button--${platform}`,
                    {
                        'designbase-share__platform-button--copied': isLinkCopy && isCopied,
                    }
                )}
                style={{ '--platform-color': config.color } as React.CSSProperties}
                onClick={() => handlePlatformShare(platform)}
                title={config.name}
                aria-label={`${config.name}에 공유하기`}
            >
                <PlatformIcon className="designbase-share__platform-icon" />
                <span className="designbase-share__platform-name">{config.name}</span>
                {isLinkCopy && isCopied && (
                    <span className="designbase-share__copy-success">
                        <CopyIcon />
                        복사됨!
                    </span>
                )}
            </button>
        );
    };

    // 공유 영역 렌더링
    const renderShareContent = () => (
        <div className="designbase-share__content">
            {/* 플랫폼 버튼들 */}
            <div className="designbase-share__platforms">
                {activePlatforms.map(renderPlatformButton)}
            </div>

            {/* QR 코드 영역 */}
            {showQrCode && qrCodeData && (
                <div className="designbase-share__qr-section">
                    <h4 className="designbase-share__qr-title">QR 코드</h4>
                    <div className="designbase-share__qr-code">
                        <img
                            src={generateQrCode()}
                            alt="QR Code"
                            width={qrCodeSize}
                            height={qrCodeSize}
                        />
                    </div>
                    <p className="designbase-share__qr-description">
                        QR 코드를 스캔하여 링크에 접속하세요
                    </p>
                </div>
            )}

            {/* 링크 미리보기 */}
            <div className="designbase-share__link-preview">
                <h4 className="designbase-share__link-title">공유 링크</h4>
                <div className="designbase-share__link-container">
                    <Input
                        type="text"
                        value={url}
                        readOnly
                        size="s"
                        fullWidth
                        className="designbase-share__link-input"
                    />
                    <Button
                        size="s"
                        variant="primary"
                        onPress={handleCopyLink}
                        className="designbase-share__copy-button"
                        startIcon={isCopied ? CopyIcon : LinkIcon}
                    >
                        {isCopied ? '복사됨!' : '복사'}
                    </Button>
                </div>
            </div>
        </div>
    );

    // 변형별 렌더링
    switch (variant) {
        case 'dropdown':
            return (
                <div className={clsx('designbase-share', `designbase-share--${variant}`, className)} style={style}>
                    <Dropdown
                        items={activePlatforms.map(platform => {
                            const config = platformConfigs[platform];
                            const PlatformIcon = config?.icon;
                            return {
                                id: platform,
                                label: config?.name || platform,
                                icon: PlatformIcon,
                                onClick: () => handlePlatformShare(platform)
                            };
                        })}
                        trigger={renderShareButton()}
                        isOpen={isOpen}
                        onToggle={() => setIsOpen(!isOpen)}
                        placement={position === 'top' ? 'top-left' :
                            position === 'bottom' ? 'bottom-left' :
                                position === 'left' ? 'top-left' : 'bottom-right'}
                        className="designbase-share__dropdown"
                    />
                </div>
            );

        case 'modal':
            return (
                <>
                    {renderShareButton()}
                    <Modal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        title={modalTitle}
                        size="m"
                        className="designbase-share__modal"
                    >
                        {renderShareContent()}
                    </Modal>
                </>
            );

        case 'inline':
            return (
                <div className={clsx('designbase-share', `designbase-share--${variant}`, className)} style={style}>
                    {renderShareContent()}
                </div>
            );

        default: // button
            return (
                <div className={clsx('designbase-share', `designbase-share--${variant}`, className)} style={style}>
                    {renderShareButton()}
                </div>
            );
    }
};

export { Share };
export default Share;
