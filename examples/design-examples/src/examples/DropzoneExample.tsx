import React from 'react';
import { Dropzone } from '@designbasekorea/ui';

export default function DropzoneExample() {
  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Dropzone</h3>
        <div className="example-list">
          <Dropzone
            title="파일을 드래그하거나 클릭하여 업로드"
            description="PNG, JPG, GIF 파일을 업로드할 수 있습니다."
            onFileSelect={(files) => console.log('Selected:', files)}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <Dropzone
            size="s"
            title="Small Dropzone"
            description="작은 크기의 드롭존입니다."
            onFileSelect={(files) => console.log('Selected:', files)}
          />
          <Dropzone
            size="m"
            title="Medium Dropzone"
            description="중간 크기의 드롭존입니다."
            onFileSelect={(files) => console.log('Selected:', files)}
          />
          <Dropzone
            size="l"
            title="Large Dropzone"
            description="큰 크기의 드롭존입니다."
            onFileSelect={(files) => console.log('Selected:', files)}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">다중 파일 업로드</h3>
        <div className="example-list">
          <Dropzone
            title="여러 파일을 업로드하세요"
            description="여러 파일을 한 번에 선택할 수 있습니다."
            multiple
            onFileSelect={(files) => console.log('Selected:', files)}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <Dropzone
                title="파일 업로드"
                description="파일을 드래그하거나 클릭하세요"
                onFileSelect={(files) => console.log('Selected:', files)}
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <Dropzone
                title="파일 업로드"
                description="비활성화된 드롭존"
                disabled
                onFileSelect={(files) => console.log('Selected:', files)}
              />
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Readonly</div>
            <div className="example-state-item__content">
              <Dropzone
                title="파일 업로드"
                description="읽기 전용 드롭존"
                readonly
                onFileSelect={(files) => console.log('Selected:', files)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

