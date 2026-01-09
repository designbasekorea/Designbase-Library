import React from 'react';
import { Tooltip, Button } from '@designbasekorea/ui';

export default function TooltipExample() {
  return (
    <div style={{ maxWidth: '1000px', padding: '100px 0' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Tooltip
        </h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Tooltip content="위쪽 툴팁" position="top">
            <Button>Hover me (위)</Button>
          </Tooltip>
          <Tooltip content="아래쪽 툴팁" position="bottom">
            <Button>Hover me (아래)</Button>
          </Tooltip>
          <Tooltip content="왼쪽 툴팁" position="left">
            <Button>Hover me (왼쪽)</Button>
          </Tooltip>
          <Tooltip content="오른쪽 툴팁" position="right">
            <Button>Hover me (오른쪽)</Button>
          </Tooltip>
        </div>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          세부 위치 조절
        </h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Tooltip content="위쪽 시작" position="top-start">
            <Button>Top Start</Button>
          </Tooltip>
          <Tooltip content="위쪽 끝" position="top-end">
            <Button>Top End</Button>
          </Tooltip>
          <Tooltip content="아래쪽 시작" position="bottom-start">
            <Button>Bottom Start</Button>
          </Tooltip>
          <Tooltip content="아래쪽 끝" position="bottom-end">
            <Button>Bottom End</Button>
          </Tooltip>
        </div>
      </section>
    </div>
  );
}

