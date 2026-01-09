import React, { useState } from 'react';
import { Button } from '@designbasekorea/ui';
import {
  CircleCheckFilledIcon,
  ArrowRightIcon,
  SettingsIcon,
  DeleteIcon,
  HeartIcon,
} from '@designbasekorea/icons';

export default function ButtonExample() {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="example-content">
      {/* 기본 버튼 */}
      <section className="example-section">
        <h3 className="example-section__title">기본 버튼</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* Size */}
      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="s">
            Small
          </Button>
          <Button variant="primary" size="m">
            Medium
          </Button>
          <Button variant="primary" size="l">
            Large
          </Button>
        </div>
      </section>

      {/* 아이콘 */}
      <section className="example-section">
        <h3 className="example-section__title">아이콘과 함께 사용</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" startIcon={CircleCheckFilledIcon}>
            확인
          </Button>
          <Button variant="secondary" endIcon={ArrowRightIcon}>
            다음으로
          </Button>
          <Button variant="ghost" startIcon={SettingsIcon}>
            설정
          </Button>
          <Button variant="danger" startIcon={DeleteIcon}>
            삭제
          </Button>
          <Button variant="primary" iconOnly aria-label="좋아요">
            <HeartIcon size={20} />
          </Button>
        </div>
      </section>

      {/* 상태 */}
      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <Button variant="primary">데이터 저장</Button>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Hover</div>
            <div className="example-state-item__content">
              <Button variant="primary" className="example-button--hover">
                데이터 저장
              </Button>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Pressed</div>
            <div className="example-state-item__content">
              <Button variant="primary" className="example-button--active">
                데이터 저장
              </Button>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Loading</div>
            <div className="example-state-item__content">
              <Button variant="primary" loading>
                데이터 저장
              </Button>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <Button variant="primary" disabled>
                비활성화됨
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

