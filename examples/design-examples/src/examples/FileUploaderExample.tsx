import React from 'react';
import { FileUploader } from '@designbasekorea/ui';

export default function FileUploaderExample() {
  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 FileUploader</h3>
        <div className="example-list">
          <FileUploader
            accept="image/*"
            onUpload={(files) => console.log('Uploaded:', files)}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <FileUploader
            size="s"
            accept="image/*"
            onUpload={(files) => console.log('Uploaded:', files)}
          />
          <FileUploader
            size="m"
            accept="image/*"
            onUpload={(files) => console.log('Uploaded:', files)}
          />
          <FileUploader
            size="l"
            accept="image/*"
            onUpload={(files) => console.log('Uploaded:', files)}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">다중 파일 업로드</h3>
        <div className="example-list">
          <FileUploader
            accept="image/*"
            multiple
            onUpload={(files) => console.log('Uploaded:', files)}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <FileUploader
                accept="image/*"
                onUpload={(files) => console.log('Uploaded:', files)}
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <FileUploader
                accept="image/*"
                disabled
                onUpload={(files) => console.log('Uploaded:', files)}
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Readonly</div>
            <div className="example-state-item__content">
              <FileUploader
                accept="image/*"
                readonly
                onUpload={(files) => console.log('Uploaded:', files)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

