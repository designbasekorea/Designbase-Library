import React, { useState } from 'react';
import { Radio } from '@designbasekorea/ui';

export default function RadioExample() {
  const [selected, setSelected] = useState('option1');
  const [sizeSelected, setSizeSelected] = useState('option1');

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Radio</h3>
        <div className="example-list">
          <Radio
            name="radio-group-1"
            value="option1"
            isSelected={selected === 'option1'}
            onChange={() => setSelected('option1')}
          >
            신용카드
          </Radio>
          <Radio
            name="radio-group-1"
            value="option2"
            isSelected={selected === 'option2'}
            onChange={() => setSelected('option2')}
          >
            계좌이체
          </Radio>
          <Radio
            name="radio-group-1"
            value="option3"
            isSelected={selected === 'option3'}
            onChange={() => setSelected('option3')}
          >
            무통장 입금
          </Radio>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'var(--db-text-secondary)' }}>Small</h4>
            <div className="example-list">
              <Radio
                name="radio-group-s"
                value="option1"
                size="s"
                isSelected={sizeSelected === 'option1'}
                onChange={() => setSizeSelected('option1')}
              >
                신용카드
              </Radio>
              <Radio
                name="radio-group-s"
                value="option2"
                size="s"
                isSelected={sizeSelected === 'option2'}
                onChange={() => setSizeSelected('option2')}
              >
                계좌이체
              </Radio>
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'var(--db-text-secondary)' }}>Medium</h4>
            <div className="example-list">
              <Radio
                name="radio-group-m"
                value="option1"
                size="m"
                isSelected={sizeSelected === 'option1'}
                onChange={() => setSizeSelected('option1')}
              >
                신용카드
              </Radio>
              <Radio
                name="radio-group-m"
                value="option2"
                size="m"
                isSelected={sizeSelected === 'option2'}
                onChange={() => setSizeSelected('option2')}
              >
                계좌이체
              </Radio>
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'var(--db-text-secondary)' }}>Large</h4>
            <div className="example-list">
              <Radio
                name="radio-group-l"
                value="option1"
                size="l"
                isSelected={sizeSelected === 'option1'}
                onChange={() => setSizeSelected('option1')}
              >
                신용카드
              </Radio>
              <Radio
                name="radio-group-l"
                value="option2"
                size="l"
                isSelected={sizeSelected === 'option2'}
                onChange={() => setSizeSelected('option2')}
              >
                계좌이체
              </Radio>
            </div>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">선택됨</div>
            <div className="example-state-item__content">
              <Radio name="radio-state-1" value="selected" isSelected={true}>
                신용카드
              </Radio>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">선택 안됨</div>
            <div className="example-state-item__content">
              <Radio name="radio-state-2" value="unselected" isSelected={false}>
                계좌이체
              </Radio>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">선택됨 (비활성화)</div>
            <div className="example-state-item__content">
              <Radio name="radio-state-3" value="selected-disabled" isSelected={true} isDisabled>
                무통장 입금
              </Radio>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">선택 안됨 (비활성화)</div>
            <div className="example-state-item__content">
              <Radio name="radio-state-4" value="unselected-disabled" isSelected={false} isDisabled>
                휴대폰 결제
              </Radio>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

