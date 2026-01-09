import React from 'react';
import { ToastProvider, useToast } from '@designbasekorea/ui';
import { Button } from '@designbasekorea/ui';

function ToastDemo() {
  const { addToast } = useToast();

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Toast
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button
            variant="primary"
            onClick={() =>
              addToast({
                title: '성공!',
                description: '작업이 성공적으로 완료되었습니다.',
                status: 'success',
              })
            }
          >
            Success Toast
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              addToast({
                title: '정보',
                description: '이것은 정보 메시지입니다.',
                status: 'info',
              })
            }
          >
            Info Toast
          </Button>
          <Button
            variant="danger"
            onClick={() =>
              addToast({
                title: '오류',
                description: '오류가 발생했습니다.',
                status: 'error',
              })
            }
          >
            Error Toast
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              addToast({
                title: '경고',
                description: '주의가 필요한 상황입니다.',
                status: 'warning',
              })
            }
          >
            Warning Toast
          </Button>
        </div>
      </section>
    </div>
  );
}

export default function ToastExample() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  );
}

