import React, { useState } from 'react';
import { Drawer, Button } from '@designbasekorea/ui';

export default function DrawerExample() {
  const [openDrawer, setOpenDrawer] = useState<'left' | 'right' | 'top' | 'bottom' | null>(null);

  const openDrawerHandler = (position: 'left' | 'right' | 'top' | 'bottom') => {
    setOpenDrawer(position);
  };

  const closeDrawer = () => {
    setOpenDrawer(null);
  };

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Drawer
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => openDrawerHandler('right')}>
            오른쪽 Drawer
          </Button>
          <Button variant="primary" onClick={() => openDrawerHandler('left')}>
            왼쪽 Drawer
          </Button>
          <Button variant="primary" onClick={() => openDrawerHandler('top')}>
            위쪽 Drawer
          </Button>
          <Button variant="primary" onClick={() => openDrawerHandler('bottom')}>
            아래쪽 Drawer
          </Button>
        </div>

        <Drawer
          isOpen={openDrawer === 'right'}
          onClose={closeDrawer}
          position="right"
          title="오른쪽 Drawer"
        >
          <div style={{ padding: '20px' }}>
            <p>오른쪽에서 열리는 Drawer입니다.</p>
            <p>여기에 다양한 컨텐츠를 넣을 수 있습니다.</p>
          </div>
        </Drawer>

        <Drawer
          isOpen={openDrawer === 'left'}
          onClose={closeDrawer}
          position="left"
          title="왼쪽 Drawer"
        >
          <div style={{ padding: '20px' }}>
            <p>왼쪽에서 열리는 Drawer입니다.</p>
            <p>여기에 다양한 컨텐츠를 넣을 수 있습니다.</p>
          </div>
        </Drawer>

        <Drawer
          isOpen={openDrawer === 'top'}
          onClose={closeDrawer}
          position="top"
          title="위쪽 Drawer"
        >
          <div style={{ padding: '20px' }}>
            <p>위쪽에서 열리는 Drawer입니다.</p>
            <p>여기에 다양한 컨텐츠를 넣을 수 있습니다.</p>
          </div>
        </Drawer>

        <Drawer
          isOpen={openDrawer === 'bottom'}
          onClose={closeDrawer}
          position="bottom"
          title="아래쪽 Drawer"
        >
          <div style={{ padding: '20px' }}>
            <p>아래쪽에서 열리는 Drawer입니다.</p>
            <p>여기에 다양한 컨텐츠를 넣을 수 있습니다.</p>
          </div>
        </Drawer>
      </section>
    </div>
  );
}

