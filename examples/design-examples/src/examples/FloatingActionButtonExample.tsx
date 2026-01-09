import React from 'react';
import { FloatingActionButton } from '@designbasekorea/ui';
import { PlusIcon, EditIcon, SearchIcon } from '@designbasekorea/icons';

export default function FloatingActionButtonExample() {
  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 FloatingActionButton</h3>
        <div className="example-list">
          <div style={{ position: 'relative', height: '200px', border: '1px dashed var(--db-border-base)', borderRadius: 'var(--db-radius-m)' }}>
            <FloatingActionButton
              icon={<PlusIcon size={24} />}
              onClick={() => console.log('FAB clicked')}
              style={{ position: 'absolute', bottom: '16px', right: '16px' }}
            />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">크기 조절</h3>
        <div className="example-list">
          <div style={{ position: 'relative', height: '150px', border: '1px dashed var(--db-border-base)', borderRadius: 'var(--db-radius-m)' }}>
            <FloatingActionButton
              size="s"
              icon={<PlusIcon size={18} />}
              onClick={() => console.log('Small FAB clicked')}
              style={{ position: 'absolute', bottom: '16px', right: '16px' }}
            />
          </div>
          <div style={{ position: 'relative', height: '150px', border: '1px dashed var(--db-border-base)', borderRadius: 'var(--db-radius-m)' }}>
            <FloatingActionButton
              size="m"
              icon={<PlusIcon size={24} />}
              onClick={() => console.log('Medium FAB clicked')}
              style={{ position: 'absolute', bottom: '16px', right: '16px' }}
            />
          </div>
          <div style={{ position: 'relative', height: '150px', border: '1px dashed var(--db-border-base)', borderRadius: 'var(--db-radius-m)' }}>
            <FloatingActionButton
              size="l"
              icon={<PlusIcon size={28} />}
              onClick={() => console.log('Large FAB clicked')}
              style={{ position: 'absolute', bottom: '16px', right: '16px' }}
            />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">Variant</h3>
        <div className="example-list">
          <div style={{ position: 'relative', height: '150px', border: '1px dashed var(--db-border-base)', borderRadius: 'var(--db-radius-m)' }}>
            <FloatingActionButton
              variant="primary"
              icon={<PlusIcon size={24} />}
              onClick={() => console.log('Primary FAB clicked')}
              style={{ position: 'absolute', bottom: '16px', right: '16px' }}
            />
          </div>
          <div style={{ position: 'relative', height: '150px', border: '1px dashed var(--db-border-base)', borderRadius: 'var(--db-radius-m)' }}>
            <FloatingActionButton
              variant="secondary"
              icon={<EditIcon size={24} />}
              onClick={() => console.log('Secondary FAB clicked')}
              style={{ position: 'absolute', bottom: '16px', right: '16px' }}
            />
          </div>
          <div style={{ position: 'relative', height: '150px', border: '1px dashed var(--db-border-base)', borderRadius: 'var(--db-radius-m)' }}>
            <FloatingActionButton
              variant="tertiary"
              icon={<SearchIcon size={24} />}
              onClick={() => console.log('Tertiary FAB clicked')}
              style={{ position: 'absolute', bottom: '16px', right: '16px' }}
            />
          </div>
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">상태</h3>
        <div className="example-state-grid">
          <div className="example-state-item">
            <div className="example-state-item__label">Default</div>
            <div className="example-state-item__content">
              <div style={{ position: 'relative', height: '100px' }}>
                <FloatingActionButton
                  icon={<PlusIcon size={20} />}
                  onClick={() => console.log('FAB clicked')}
                  style={{ position: 'absolute', bottom: '8px', right: '8px' }}
                />
              </div>
            </div>
          </div>
          <div className="example-state-item">
            <div className="example-state-item__label">Disabled</div>
            <div className="example-state-item__content">
              <div style={{ position: 'relative', height: '100px' }}>
                <FloatingActionButton
                  icon={<PlusIcon size={20} />}
                  disabled
                  onClick={() => console.log('FAB clicked')}
                  style={{ position: 'absolute', bottom: '8px', right: '8px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

