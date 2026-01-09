import React, { useState } from 'react';
import { ContextMenu, Button } from '@designbasekorea/ui';
import { EditIcon, DeleteIcon, CopyIcon, ShareAltIcon, DownloadIcon } from '@designbasekorea/icons';

export default function ContextMenuExample() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuPos2, setMenuPos2] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuPos({ x: e.clientX, y: e.clientY });
    setMenuOpen(true);
  };

  const handleContextMenu2 = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuPos2({ x: e.clientX, y: e.clientY });
    setMenuOpen2(true);
  };

  const basicItems = [
    {
      id: 'edit',
      label: '편집',
      icon: EditIcon,
      onClick: () => {
        console.log('Edit');
        setMenuOpen(false);
      },
    },
    {
      id: 'copy',
      label: '복사',
      icon: CopyIcon,
      onClick: () => {
        console.log('Copy');
        setMenuOpen(false);
      },
    },
    {
      id: 'delete',
      label: '삭제',
      icon: DeleteIcon,
      onClick: () => {
        console.log('Delete');
        setMenuOpen(false);
      },
      variant: 'danger',
    },
  ];

  const extendedItems = [
    {
      id: 'edit',
      label: '편집',
      icon: EditIcon,
      onClick: () => {
        console.log('Edit');
        setMenuOpen2(false);
      },
    },
    {
      id: 'copy',
      label: '복사',
      icon: CopyIcon,
      onClick: () => {
        console.log('Copy');
        setMenuOpen2(false);
      },
    },
    {
      id: 'share',
      label: '공유',
      icon: ShareAltIcon,
      onClick: () => {
        console.log('Share');
        setMenuOpen2(false);
      },
    },
    {
      id: 'download',
      label: '다운로드',
      icon: DownloadIcon,
      onClick: () => {
        console.log('Download');
        setMenuOpen2(false);
      },
    },
    {
      isDivider: true,
    },
    {
      id: 'delete',
      label: '삭제',
      icon: DeleteIcon,
      onClick: () => {
        console.log('Delete');
        setMenuOpen2(false);
      },
      variant: 'danger',
    },
  ];

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 ContextMenu</h3>
        <div className="example-list">
          <div 
            onContextMenu={handleContextMenu} 
            style={{ 
              padding: '40px', 
              border: '1px dashed var(--db-border-base)',
              borderRadius: 'var(--db-radius-m)',
              backgroundColor: 'var(--db-surface-layer-1)',
              cursor: 'context-menu'
            }}
          >
            <p style={{ margin: 0, color: 'var(--db-text-primary)' }}>여기를 우클릭하세요</p>
          </div>
          <ContextMenu
            items={basicItems}
            open={menuOpen}
            x={menuPos.x}
            y={menuPos.y}
            onClose={() => setMenuOpen(false)}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">확장된 ContextMenu</h3>
        <div className="example-list">
          <div 
            onContextMenu={handleContextMenu2} 
            style={{ 
              padding: '40px', 
              border: '1px dashed var(--db-border-base)',
              borderRadius: 'var(--db-radius-m)',
              backgroundColor: 'var(--db-surface-layer-1)',
              cursor: 'context-menu'
            }}
          >
            <p style={{ margin: 0, color: 'var(--db-text-primary)' }}>여기를 우클릭하여 확장된 메뉴를 확인하세요</p>
          </div>
          <ContextMenu
            items={extendedItems}
            open={menuOpen2}
            x={menuPos2.x}
            y={menuPos2.y}
            onClose={() => setMenuOpen2(false)}
          />
        </div>
      </section>
    </div>
  );
}

