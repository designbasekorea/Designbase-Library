import React, { useState } from 'react';
import { Input } from '@designbasekorea/ui';
import { SearchIcon, UserIcon, MailIcon, LockIcon } from '@designbasekorea/icons';

export default function InputExample() {
  const [value, setValue] = useState('');

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Input</h3>
        <div className="example-list">
          <Input placeholder="이름을 입력하세요" />
          <Input label="이메일" type="email" placeholder="email@example.com" />
          <Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <Input size="s" placeholder="Small" />
          <Input size="m" placeholder="Medium" />
          <Input size="l" placeholder="Large" />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">아이콘과 함께</h3>
        <div className="example-list">
          <Input
            label="검색"
            type="search"
            placeholder="검색어를 입력하세요"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Input
            label="사용자 이름"
            placeholder="사용자 이름을 입력하세요"
            startIcon={UserIcon}
          />
          <Input
            label="이메일 주소"
            type="email"
            placeholder="email@example.com"
            startIcon={MailIcon}
          />
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력하세요"
            startIcon={LockIcon}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <Input label="이름" placeholder="이름을 입력하세요" />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Hover</div>
            <div className="example-state-item__content">
              <Input label="이름" placeholder="이름을 입력하세요" className="example-input--hover" />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Focus</div>
            <div className="example-state-item__content">
              <Input label="이름" placeholder="이름을 입력하세요" className="example-input--focus" />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Error</div>
            <div className="example-state-item__content">
              <Input
                label="이메일"
                placeholder="email@example.com"
                error
                errorMessage="올바른 이메일 주소를 입력하세요"
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <Input label="이름" placeholder="비활성화된 입력란" disabled />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Helper Text</div>
            <div className="example-state-item__content">
              <Input
                label="비밀번호"
                type="password"
                placeholder="비밀번호를 입력하세요"
                helperText="8자 이상, 영문, 숫자, 특수문자 포함"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

