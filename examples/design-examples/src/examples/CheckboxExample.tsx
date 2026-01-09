import React, { useState } from 'react';
import { Checkbox } from '@designbasekorea/ui';

export default function CheckboxExample() {
  const [checked, setChecked] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [items, setItems] = useState({
    terms: false,
    privacy: true,
    marketing: false,
  });

  const handleSelectAll = (val: boolean) => {
    setAllChecked(val);
    setItems({
      terms: val,
      privacy: val,
      marketing: val,
    });
  };

  const handleItemChange = (key: keyof typeof items, val: boolean) => {
    const newItems = { ...items, [key]: val };
    setItems(newItems);
    setAllChecked(Object.values(newItems).every((v) => v));
  };

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Checkbox</h3>
        <div className="example-list">
          <Checkbox isSelected={checked} onChange={setChecked}>
            이용약관에 동의합니다
          </Checkbox>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">여러 개의 Checkbox</h3>
        <div className="example-list">
          <Checkbox
            isSelected={items.terms}
            onChange={(val) => handleItemChange('terms', val)}
          >
            이용약관에 동의합니다 (필수)
          </Checkbox>
          <Checkbox
            isSelected={items.privacy}
            onChange={(val) => handleItemChange('privacy', val)}
          >
            개인정보 수집 및 이용에 동의합니다 (필수)
          </Checkbox>
          <Checkbox
            isSelected={items.marketing}
            onChange={(val) => handleItemChange('marketing', val)}
          >
            마케팅 정보 수신에 동의합니다 (선택)
          </Checkbox>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">전체 선택</h3>
        <div className="example-list">
          <Checkbox
            isSelected={allChecked}
            isIndeterminate={!allChecked && Object.values(items).some((v) => v)}
            onChange={handleSelectAll}
          >
            전체 동의
          </Checkbox>
          <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Checkbox
              isSelected={items.terms}
              onChange={(val) => handleItemChange('terms', val)}
            >
              이용약관에 동의합니다 (필수)
            </Checkbox>
            <Checkbox
              isSelected={items.privacy}
              onChange={(val) => handleItemChange('privacy', val)}
            >
              개인정보 수집 및 이용에 동의합니다 (필수)
            </Checkbox>
            <Checkbox
              isSelected={items.marketing}
              onChange={(val) => handleItemChange('marketing', val)}
            >
              마케팅 정보 수신에 동의합니다 (선택)
            </Checkbox>
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">체크됨</div>
            <div className="example-state-item__content">
              <Checkbox isSelected={true}>이용약관에 동의합니다</Checkbox>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">체크 안됨</div>
            <div className="example-state-item__content">
              <Checkbox isSelected={false}>이용약관에 동의합니다</Checkbox>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">체크됨 (비활성화)</div>
            <div className="example-state-item__content">
              <Checkbox isSelected={true} isDisabled>
                이용약관에 동의합니다
              </Checkbox>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">체크 안됨 (비활성화)</div>
            <div className="example-state-item__content">
              <Checkbox isSelected={false} isDisabled>
                이용약관에 동의합니다
              </Checkbox>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

