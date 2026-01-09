import React, { useState } from 'react';
import { Textarea } from '@designbasekorea/ui';

export default function TextareaExample() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Textarea</h3>
        <div className="example-list">
          <Textarea
            placeholder="내용을 입력하세요..."
            value={value}
            onChange={setValue}
            rows={4}
          />
          <Textarea
            label="메시지"
            placeholder="메시지를 입력하세요..."
            rows={6}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <Textarea
            label="Small"
            size="s"
            placeholder="내용을 입력하세요..."
            rows={3}
          />
          <Textarea
            label="Medium"
            size="m"
            placeholder="내용을 입력하세요..."
            rows={4}
          />
          <Textarea
            label="Large"
            size="l"
            placeholder="내용을 입력하세요..."
            rows={5}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">글자 수 카운터</h3>
        <div className="example-list">
          <Textarea
            label="후기 작성"
            placeholder="후기를 작성해주세요..."
            value={message}
            onChange={setMessage}
            maxLength={200}
            showCharacterCount
            rows={4}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <Textarea
                label="메시지"
                placeholder="메시지를 입력하세요..."
                rows={3}
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Hover</div>
            <div className="example-state-item__content">
              <Textarea
                label="메시지"
                placeholder="메시지를 입력하세요..."
                rows={3}
                className="example-textarea--hover"
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Focus</div>
            <div className="example-state-item__content">
              <Textarea
                label="메시지"
                placeholder="메시지를 입력하세요..."
                rows={3}
                className="example-textarea--focus"
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Error</div>
            <div className="example-state-item__content">
              <Textarea
                label="메시지"
                placeholder="메시지를 입력하세요..."
                rows={3}
                error
                errorMessage="최소 10자 이상 입력해주세요"
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <Textarea
                label="메시지"
                placeholder="비활성화된 입력란"
                rows={3}
                disabled
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Helper Text</div>
            <div className="example-state-item__content">
              <Textarea
                label="문의 내용"
                placeholder="문의 내용을 입력하세요..."
                rows={3}
                helperText="문의 내용을 자세히 작성해주시면 빠른 답변을 받으실 수 있습니다"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

