import React, { useState } from 'react';
import { ColorPicker } from '@designbasekorea/ui';

export default function ColorPickerExample() {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 ColorPicker</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Primary Color
            </label>
            <ColorPicker value={primaryColor} onChange={setPrimaryColor} />
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
            <ColorPicker value={primaryColor} onChange={setPrimaryColor} size="s" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Medium
            </label>
            <ColorPicker value={primaryColor} onChange={setPrimaryColor} size="m" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Large
            </label>
            <ColorPicker value={primaryColor} onChange={setPrimaryColor} size="l" />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">Type</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Dropdown (기본)
            </label>
            <ColorPicker value={backgroundColor} onChange={setBackgroundColor} type="dropdown" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Modal
            </label>
            <ColorPicker value={textColor} onChange={setTextColor} type="modal" />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">옵션</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Alpha 채널 포함
            </label>
            <ColorPicker value={primaryColor} onChange={setPrimaryColor} showAlpha />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              입력 필드 없음
            </label>
            <ColorPicker value={primaryColor} onChange={setPrimaryColor} showInput={false} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              포맷 선택기 없음
            </label>
            <ColorPicker value={primaryColor} onChange={setPrimaryColor} showFormatSelector={false} />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <ColorPicker value={primaryColor} onChange={setPrimaryColor} />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <ColorPicker value={primaryColor} onChange={setPrimaryColor} disabled />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Readonly</div>
            <div className="example-state-item__content">
              <ColorPicker value={primaryColor} onChange={setPrimaryColor} readonly />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

