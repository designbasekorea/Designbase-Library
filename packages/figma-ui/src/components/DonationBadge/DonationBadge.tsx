import React from 'react';
import clsx from 'clsx';
import { HeartFilledIcon, CoffeeFilledIcon } from '@designbasekorea/icons';
import { Button } from '@designbasekorea/ui';
import { I18nText, TFunctionLite, resolveText } from '../../i18nTypes';
import './DonationBadge.scss';

export interface DonationBadgeProps {
    /** Buy Me a Coffee URL */
    donationUrl?: string;
    /** 뱃지 텍스트 - 문자열 또는 { key, values } */
    text?: I18nText;
    /** 아이콘 타입 */
    iconType?: 'heart' | 'coffee';
    /** 뱃지 크기 */
    size?: 's' | 'm' | 'l';
    /** 버튼 variant */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
    /** 전체 너비 여부 */
    fullWidth?: boolean;
    /** 비활성화 여부 */
    disabled?: boolean;
    /** 도네이션 프롬프트 텍스트 표시 여부 */
    showPrompt?: boolean;
    /** 도네이션 프롬프트 텍스트 - 문자열 또는 { key, values } */
    promptText?: I18nText;
    /** 추가 CSS 클래스 */
    className?: string;
    /** 클릭 핸들러 (선택사항) */
    onClick?: () => void;
    /** 소비자가 주입할 번역함수 (선택) */
    t?: TFunctionLite;
}

export const DonationBadge: React.FC<DonationBadgeProps> = ({
    donationUrl = 'https://buymeacoffee.com/designbase',
    text = { key: 'donation.buy_me_a_coffee' }, // 기본 키
    iconType = 'heart',
    size = 's',
    variant = 'tertiary',
    fullWidth = false,
    disabled = false,
    showPrompt = false,
    promptText = { key: 'donation.prompt' },
    className,
    onClick,
    t
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            // 새 창에서 열기
            window.open(donationUrl, '_blank', 'noopener,noreferrer');
        }
    };

    const Icon = iconType === 'heart' ? HeartFilledIcon : CoffeeFilledIcon;
    const displayText = resolveText(t, text, 'Buy me a coffee');
    const displayPromptText = resolveText(t, promptText, '도움이 되었다면 커피 한 잔 사주세요!');

    // Button 크기 매핑 (s -> s, m -> m, l -> l)
    const buttonSize = size;

    return (
        <div className={clsx('designbase-figma-donation-badge-container', className)}>
            {showPrompt && (
                <div className="designbase-figma-donation-badge__prompt">
                    {displayPromptText}
                </div>
            )}
            <Button
                variant={variant}
                size={buttonSize}
                fullWidth={fullWidth}
                disabled={disabled}
                onPress={handleClick}
                startIcon={Icon}
                className={clsx(
                    'designbase-figma-donation-badge',
                    `designbase-figma-donation-badge--${iconType}`
                )}
                aria-label={displayText}
                style={{
                    '--designbase-figma-donation-badge-icon-color': 'var(--db-brand-primary)'
                } as React.CSSProperties}
            >
                {displayText}
            </Button>
        </div>
    );
};

DonationBadge.displayName = 'DonationBadge';

export default DonationBadge;

