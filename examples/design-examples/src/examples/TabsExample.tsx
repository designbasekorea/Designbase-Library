import React, { useState } from 'react';
import { Tabs } from '@designbasekorea/ui';

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [productTab, setProductTab] = useState('info');
  const [scrollableTab, setScrollableTab] = useState('tab1');

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Tabs</h3>
        <div className="example-list">
          <Tabs
            items={[
              { id: 'tab1', label: '탭 1', content: <p>탭 1의 내용입니다.</p> },
              { id: 'tab2', label: '탭 2', content: <p>탭 2의 내용입니다.</p> },
              { id: 'tab3', label: '탭 3', content: <p>탭 3의 내용입니다.</p> },
            ]}
            selectedId={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">실제 사용 예시</h3>
        <div className="example-list">
          <Tabs
            items={[
              { id: 'info', label: '상품정보', content: <p>상품 상세 정보가 여기에 표시됩니다.</p> },
              { id: 'review', label: '리뷰', content: <p>고객 리뷰가 여기에 표시됩니다.</p> },
              { id: 'qna', label: 'Q&A', content: <p>상품 문의가 여기에 표시됩니다.</p> },
              { id: 'shipping', label: '배송정보', content: <p>배송 관련 정보가 여기에 표시됩니다.</p> },
            ]}
            selectedId={productTab}
            onTabChange={setProductTab}
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">스크롤 가능한 Tabs</h3>
        <div className="example-list">
          <div style={{ maxWidth: '600px', border: '1px solid var(--db-border-base)', padding: '16px', borderRadius: 'var(--db-radius-m)' }}>
            <Tabs
              items={[
                { id: 'tab1', label: '첫 번째 탭', content: <p>첫 번째 탭의 내용입니다.</p> },
                { id: 'tab2', label: '두 번째 탭', content: <p>두 번째 탭의 내용입니다.</p> },
                { id: 'tab3', label: '세 번째 탭', content: <p>세 번째 탭의 내용입니다.</p> },
                { id: 'tab4', label: '네 번째 탭', content: <p>네 번째 탭의 내용입니다.</p> },
                { id: 'tab5', label: '다섯 번째 탭', content: <p>다섯 번째 탭의 내용입니다.</p> },
                { id: 'tab6', label: '여섯 번째 탭', content: <p>여섯 번째 탭의 내용입니다.</p> },
                { id: 'tab7', label: '일곱 번째 탭', content: <p>일곱 번째 탭의 내용입니다.</p> },
                { id: 'tab8', label: '여덟 번째 탭', content: <p>여덟 번째 탭의 내용입니다.</p> },
                { id: 'tab9', label: '아홉 번째 탭', content: <p>아홉 번째 탭의 내용입니다.</p> },
                { id: 'tab10', label: '열 번째 탭', content: <p>열 번째 탭의 내용입니다.</p> },
              ]}
              selectedId={scrollableTab}
              onTabChange={setScrollableTab}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

