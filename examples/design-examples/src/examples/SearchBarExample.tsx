import React, { useState } from 'react';
import { SearchBar } from '@designbasekorea/ui';

export default function SearchBarExample() {
  const [value, setValue] = useState('');
  const [productSearch, setProductSearch] = useState('');

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 SearchBar</h3>
        <div className="example-list">
          <SearchBar
            value={value}
            onChange={setValue}
            placeholder="검색어를 입력하세요..."
            onSearch={(val) => console.log('Search:', val)}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Small
            </label>
            <SearchBar
              size="s"
              placeholder="Small 검색바"
              onSearch={(val) => console.log('Search:', val)}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Medium
            </label>
            <SearchBar
              size="m"
              placeholder="Medium 검색바"
              onSearch={(val) => console.log('Search:', val)}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Large
            </label>
            <SearchBar
              size="l"
              placeholder="Large 검색바"
              onSearch={(val) => console.log('Search:', val)}
            />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">Variant</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Default
            </label>
            <SearchBar
              variant="default"
              placeholder="Default 검색바"
              onSearch={(val) => console.log('Search:', val)}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Outlined
            </label>
            <SearchBar
              variant="outlined"
              placeholder="Outlined 검색바"
              onSearch={(val) => console.log('Search:', val)}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Filled
            </label>
            <SearchBar
              variant="filled"
              placeholder="Filled 검색바"
              onSearch={(val) => console.log('Search:', val)}
            />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">전체 너비</h3>
        <div className="example-list">
          <SearchBar
            value={productSearch}
            onChange={setProductSearch}
            placeholder="제품을 검색하세요..."
            fullWidth
            onSearch={(val) => console.log('Search:', val)}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <SearchBar
                value={value}
                onChange={setValue}
                placeholder="검색어를 입력하세요..."
                onSearch={(val) => console.log('Search:', val)}
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <SearchBar
                placeholder="비활성화된 검색바"
                disabled
                onSearch={(val) => console.log('Search:', val)}
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Readonly</div>
            <div className="example-state-item__content">
              <SearchBar
                value="읽기 전용 검색어"
                readOnly
                onSearch={(val) => console.log('Search:', val)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

