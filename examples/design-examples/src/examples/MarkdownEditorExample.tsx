import React, { useState } from 'react';
import { MarkdownEditor } from '@designbasekorea/ui';

export default function MarkdownEditorExample() {
  const [content, setContent] = useState('# 마크다운 에디터\n\n내용을 입력하세요.');
  const [readonlyContent] = useState('# 읽기 전용\n\n이 내용은 수정할 수 없습니다.');

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 MarkdownEditor</h3>
        <div className="example-list">
          <MarkdownEditor
            value={content}
            onChange={setContent}
            mode="split"
            placeholder="마크다운을 입력하세요..."
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">모드</h3>
        <div className="example-list">
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Edit 모드
            </label>
            <MarkdownEditor
              value={content}
              onChange={setContent}
              mode="edit"
              placeholder="마크다운을 입력하세요..."
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Preview 모드
            </label>
            <MarkdownEditor
              value={content}
              onChange={setContent}
              mode="preview"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Split 모드
            </label>
            <MarkdownEditor
              value={content}
              onChange={setContent}
              mode="split"
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
            <MarkdownEditor
              value={content}
              onChange={setContent}
              size="s"
              mode="edit"
              minHeight={150}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Medium
            </label>
            <MarkdownEditor
              value={content}
              onChange={setContent}
              size="m"
              mode="edit"
              minHeight={200}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--db-text-primary)' }}>
              Large
            </label>
            <MarkdownEditor
              value={content}
              onChange={setContent}
              size="l"
              mode="edit"
              minHeight={250}
            />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item" style={{ minHeight: '300px' }}>
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <MarkdownEditor
                value={content}
                onChange={setContent}
                mode="edit"
                minHeight={200}
              />
            </div>
          </div>
          <div className="example-state-item" style={{ minHeight: '300px' }}>
            <div className="example-state-item__label">Readonly</div>
            <div className="example-state-item__content">
              <MarkdownEditor
                value={readonlyContent}
                mode="preview"
                readonly
                minHeight={200}
              />
            </div>
          </div>
          <div className="example-state-item" style={{ minHeight: '300px' }}>
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <MarkdownEditor
                value={readonlyContent}
                mode="preview"
                disabled
                minHeight={200}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

