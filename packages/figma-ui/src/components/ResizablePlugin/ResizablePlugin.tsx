import React, { useState, useEffect, useRef } from 'react';
import { ResizableIcon } from '@designbasekorea/icons';
import './ResizablePlugin.scss';

export interface ResizablePluginProps {
    /** 플러그인 콘텐츠 */
    children: React.ReactNode;
    /** 최소 너비 */
    minWidth?: number;
    /** 최대 너비 */
    maxWidth?: number;
    /** 최소 높이 */
    minHeight?: number;
    /** 최대 높이 */
    maxHeight?: number;
    /** 리사이즈 핸들 아이콘 */
    icon?: React.ReactNode;
    /** 리사이즈 핸들 라벨 */
    ariaLabel?: string;
    /** 추가 CSS 클래스 */
    className?: string;
}

export const ResizablePlugin: React.FC<ResizablePluginProps> = ({
    children,
    minWidth = 360,
    maxWidth = 460,
    minHeight = 440,
    maxHeight = 700,
    icon,
    ariaLabel = 'Resize plugin',
    className
}) => {
    const [isResizing, setIsResizing] = useState(false);
    const resizeHandleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing) return;

            const newWidth = Math.max(minWidth, Math.min(maxWidth, e.clientX + 10));
            const newHeight = Math.max(minHeight, Math.min(maxHeight, e.clientY + 10));

            // 피그마 플러그인에 리사이즈 메시지 전송
            if (typeof parent !== 'undefined') {
                parent.postMessage(
                    {
                        pluginMessage: {
                            type: 'resize',
                            width: newWidth,
                            height: newHeight
                        }
                    },
                    '*'
                );
            }
        };

        const handleMouseUp = () => {
            setIsResizing(false);
        };

        if (isResizing) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, minWidth, maxWidth, minHeight, maxHeight]);

    return (
        <div className={`designbase-figma-resizable-plugin ${className || ''}`}>
            {children}
            <div
                ref={resizeHandleRef}
                className={`designbase-figma-resizable-plugin__handle ${isResizing ? 'resizing' : ''}`}
                onMouseDown={(e) => {
                    e.preventDefault();
                    setIsResizing(true);
                }}
                role="button"
                tabIndex={0}
                aria-label={ariaLabel}
            >
                {icon || <ResizableIcon size={16} />}
            </div>
        </div>
    );
};

ResizablePlugin.displayName = 'ResizablePlugin';

export default ResizablePlugin;

