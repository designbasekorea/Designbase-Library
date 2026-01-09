import React, { useState } from 'react';
import { Tutorial, Button } from '@designbasekorea/ui';

export default function TutorialExample() {
  const [isActive, setIsActive] = useState(false);

  const steps = [
    {
      id: '1',
      target: '#step1',
      title: '첫 번째 단계',
      content: '이것은 첫 번째 튜토리얼 단계입니다.',
    },
    {
      id: '2',
      target: '#step2',
      title: '두 번째 단계',
      content: '이것은 두 번째 튜토리얼 단계입니다.',
    },
  ];

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Tutorial
        </h2>
        <Button variant="primary" onClick={() => setIsActive(true)}>
          튜토리얼 시작
        </Button>
        <div id="step1" style={{ padding: '20px', margin: '20px 0', border: '1px solid var(--db-border-base)' }}>
          단계 1
        </div>
        <div id="step2" style={{ padding: '20px', margin: '20px 0', border: '1px solid var(--db-border-base)' }}>
          단계 2
        </div>
        <Tutorial
          steps={steps}
          isActive={isActive}
          onEnd={() => setIsActive(false)}
        />
      </section>
    </div>
  );
}

