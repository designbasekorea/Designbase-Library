import React from 'react';
import { Label, Input } from '@designbasekorea/ui';

export default function LabelExample() {
  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Label</h3>
        <div className="example-list">
          <div>
            <Label htmlFor="input1">이름</Label>
            <Input id="input1" placeholder="이름을 입력하세요" />
          </div>
          <div>
            <Label htmlFor="input2" required>
              이메일
            </Label>
            <Input id="input2" type="email" placeholder="email@example.com" />
          </div>
          <div>
            <Label htmlFor="input3">전화번호</Label>
            <Input id="input3" type="tel" placeholder="010-1234-5678" />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <div>
            <Label htmlFor="input-s" size="s">Small</Label>
            <Input id="input-s" placeholder="Small 크기" />
          </div>
          <div>
            <Label htmlFor="input-m" size="m">Medium</Label>
            <Input id="input-m" placeholder="Medium 크기" />
          </div>
          <div>
            <Label htmlFor="input-l" size="l">Large</Label>
            <Input id="input-l" placeholder="Large 크기" />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <Label htmlFor="label-default">기본 라벨</Label>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Required</div>
            <div className="example-state-item__content">
              <Label htmlFor="label-required" required>필수 라벨</Label>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Error</div>
            <div className="example-state-item__content">
              <Label htmlFor="label-error" error>에러 라벨</Label>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <Label htmlFor="label-disabled" disabled>비활성화 라벨</Label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

