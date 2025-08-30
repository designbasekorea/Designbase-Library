/**
 * useContextMenu 훅
 * 
 * 목적: Context Menu를 쉽게 사용할 수 있는 커스텀 훅
 * 기능: 우클릭 이벤트 처리, 메뉴 상태 관리
 */

import { useState, useCallback, useRef } from 'react';
import type { ContextMenuItem } from './ContextMenu';

export interface UseContextMenuReturn {
    /** 메뉴 표시 여부 */
    isOpen: boolean;
    /** 메뉴 위치 X 좌표 */
    x: number;
    /** 메뉴 위치 Y 좌표 */
    y: number;
    /** 우클릭 이벤트 핸들러 */
    handleContextMenu: (event: React.MouseEvent) => void;
    /** 메뉴 닫기 핸들러 */
    handleClose: () => void;
    /** 메뉴 열기 핸들러 */
    handleOpen: (x: number, y: number) => void;
}

export const useContextMenu = (): UseContextMenuReturn => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const timeoutRef = useRef<NodeJS.Timeout>();

    const handleContextMenu = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();

        setPosition({ x: event.clientX, y: event.clientY });
        setIsOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleOpen = useCallback((x: number, y: number) => {
        setPosition({ x, y });
        setIsOpen(true);
    }, []);

    return {
        isOpen,
        x: position.x,
        y: position.y,
        handleContextMenu,
        handleClose,
        handleOpen,
    };
};

export default useContextMenu;
