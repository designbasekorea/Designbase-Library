import React, { useState } from 'react';
import { Select } from '@designbasekorea/ui';

export default function SelectExample() {
  const [value, setValue] = useState('');
  const [multipleValue, setMultipleValue] = useState<string[]>([]);

  const countryOptions = [
    { value: 'kr', label: '대한민국' },
    { value: 'us', label: '미국' },
    { value: 'jp', label: '일본' },
    { value: 'cn', label: '중국' },
    { value: 'uk', label: '영국' },
  ];

  const categoryOptions = [
    { value: 'tech', label: '기술' },
    { value: 'design', label: '디자인' },
    { value: 'marketing', label: '마케팅' },
    { value: 'sales', label: '영업' },
    { value: 'hr', label: '인사' },
  ];

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Select</h3>
        <div className="example-list">
          <Select
            label="국가 선택"
            placeholder="국가를 선택하세요"
            options={countryOptions}
            value={value}
            onChange={setValue}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <Select
            label="Small"
            size="s"
            placeholder="옵션을 선택하세요"
            options={countryOptions}
          />
          <Select
            label="Medium"
            size="m"
            placeholder="옵션을 선택하세요"
            options={countryOptions}
          />
          <Select
            label="Large"
            size="l"
            placeholder="옵션을 선택하세요"
            options={countryOptions}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">다중 선택</h3>
        <div className="example-list">
          <Select
            label="관심 카테고리 (다중 선택)"
            placeholder="카테고리를 선택하세요"
            options={categoryOptions}
            value={multipleValue}
            onChange={(val) => setMultipleValue(val as string[])}
            multiple
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">검색 가능</h3>
        <div className="example-list">
          <Select
            label="국가 검색"
            placeholder="국가를 검색하세요"
            options={countryOptions}
            searchable
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <Select
                label="국가"
                placeholder="국가를 선택하세요"
                options={countryOptions}
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Hover</div>
            <div className="example-state-item__content">
              <Select
                label="국가"
                placeholder="국가를 선택하세요"
                options={countryOptions}
                className="example-select--hover"
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Focus</div>
            <div className="example-state-item__content">
              <Select
                label="국가"
                placeholder="국가를 선택하세요"
                options={countryOptions}
                className="example-select--focus"
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Error</div>
            <div className="example-state-item__content">
              <Select
                label="국가"
                placeholder="국가를 선택하세요"
                options={countryOptions}
                error
                errorMessage="국가를 선택해주세요"
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <Select
                label="국가"
                placeholder="비활성화된 선택"
                options={countryOptions}
                disabled
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Helper Text</div>
            <div className="example-state-item__content">
              <Select
                label="국가"
                placeholder="국가를 선택하세요"
                options={countryOptions}
                helperText="거주 중인 국가를 선택하세요"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

