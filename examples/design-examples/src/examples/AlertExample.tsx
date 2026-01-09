import React from 'react';
import { Alert } from '@designbasekorea/ui';

export default function AlertExample() {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Alert
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Alert variant="default" title="기본">
            기본 알림 메시지입니다.
          </Alert>
          <Alert variant="info" title="정보">
            이것은 정보 메시지입니다.
          </Alert>
          <Alert variant="success" title="성공">
            작업이 성공적으로 완료되었습니다.
          </Alert>
          <Alert variant="warning" title="경고">
            주의가 필요한 상황입니다.
          </Alert>
          <Alert variant="danger" title="오류">
            오류가 발생했습니다.
          </Alert>
        </div>
      </section>
    </div>
  );
}

