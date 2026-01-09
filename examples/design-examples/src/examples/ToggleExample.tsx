import React, { useState } from 'react';
import { Toggle } from '@designbasekorea/ui';

export default function ToggleExample() {
  const [enabled, setEnabled] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Toggle</h3>
        <div className="example-list">
          <Toggle isSelected={enabled} onChange={setEnabled}>
            알림 받기
          </Toggle>
          <Toggle isSelected={notifications} onChange={setNotifications}>
            푸시 알림 활성화
          </Toggle>
          <Toggle isSelected={darkMode} onChange={setDarkMode}>
            다크 모드
          </Toggle>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <Toggle isSelected={enabled} onChange={setEnabled} size="s">
            Small - 알림 받기
          </Toggle>
          <Toggle isSelected={enabled} onChange={setEnabled} size="m">
            Medium - 알림 받기
          </Toggle>
          <Toggle isSelected={enabled} onChange={setEnabled} size="l">
            Large - 알림 받기
          </Toggle>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">켜짐</div>
            <div className="example-state-item__content">
              <Toggle isSelected={true}>알림 받기</Toggle>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">꺼짐</div>
            <div className="example-state-item__content">
              <Toggle isSelected={false}>알림 받기</Toggle>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">켜짐 (비활성화)</div>
            <div className="example-state-item__content">
              <Toggle isSelected={true} isDisabled>
                알림 받기
              </Toggle>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">꺼짐 (비활성화)</div>
            <div className="example-state-item__content">
              <Toggle isSelected={false} isDisabled>
                알림 받기
              </Toggle>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

