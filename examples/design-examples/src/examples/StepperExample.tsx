import React, { useState } from 'react';
import { Stepper } from '@designbasekorea/ui';

export default function StepperExample() {
  const [quantity, setQuantity] = useState(1);
  const [guests, setGuests] = useState(2);
  const [items, setItems] = useState(5);

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Stepper</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              수량: {quantity}개
            </label>
            <Stepper value={quantity} onChange={setQuantity} min={1} max={10} />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Small
            </label>
            <Stepper value={quantity} onChange={setQuantity} size="s" min={1} max={10} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Medium
            </label>
            <Stepper value={guests} onChange={setGuests} size="m" min={1} max={10} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Large
            </label>
            <Stepper value={items} onChange={setItems} size="l" min={1} max={10} />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <Stepper value={quantity} onChange={setQuantity} min={1} max={10} />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <Stepper value={5} min={1} max={10} disabled />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Readonly</div>
            <div className="example-state-item__content">
              <Stepper value={5} min={1} max={10} readonly />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

