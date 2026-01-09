import React, { useState } from 'react';
import { OnboardingModal, Button } from '@designbasekorea/ui';

export default function OnboardingModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
      id: '1',
      title: '첫 번째 단계',
      description: '온보딩 첫 번째 단계입니다.',
    },
    {
      id: '2',
      title: '두 번째 단계',
      description: '온보딩 두 번째 단계입니다.',
    },
  ];

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 OnboardingModal
        </h2>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          OnboardingModal 열기
        </Button>
        <OnboardingModal
          steps={steps}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </section>
    </div>
  );
}

