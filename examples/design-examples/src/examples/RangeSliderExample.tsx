import React, { useState } from 'react';
import { RangeSlider } from '@designbasekorea/ui';

export default function RangeSliderExample() {
  const [volume, setVolume] = useState(50);
  const [priceRange, setPriceRange] = useState<[number, number]>([20, 80]);
  const [brightness, setBrightness] = useState(75);

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 RangeSlider</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              볼륨: {volume}%
            </label>
            <RangeSlider
              value={volume}
              onChange={setVolume}
              min={0}
              max={100}
              showValue
            />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">범위 RangeSlider</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              가격 범위: ₩{priceRange[0].toLocaleString()} - ₩{priceRange[1].toLocaleString()}
            </label>
            <RangeSlider
              range={priceRange}
              onRangeChange={setPriceRange}
              min={0}
              max={100}
              showValue
            />
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
            <RangeSlider
              value={brightness}
              onChange={setBrightness}
              min={0}
              max={100}
              size="s"
              showValue
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Medium
            </label>
            <RangeSlider
              value={brightness}
              onChange={setBrightness}
              min={0}
              max={100}
              size="m"
              showValue
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Large
            </label>
            <RangeSlider
              value={brightness}
              onChange={setBrightness}
              min={0}
              max={100}
              size="l"
              showValue
            />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <RangeSlider
                value={volume}
                onChange={setVolume}
                min={0}
                max={100}
                showValue
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <RangeSlider
                value={50}
                min={0}
                max={100}
                disabled
                showValue
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Readonly</div>
            <div className="example-state-item__content">
              <RangeSlider
                value={50}
                min={0}
                max={100}
                readOnly
                showValue
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

