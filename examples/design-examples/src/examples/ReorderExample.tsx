import React, { useState } from 'react';
import { Reorder } from '@designbasekorea/ui';

export default function ReorderExample() {
  const [todoItems, setTodoItems] = useState([
    { id: '1', content: '프로젝트 기획서 작성' },
    { id: '2', content: '디자인 시스템 구축' },
    { id: '3', content: '컴포넌트 개발' },
    { id: '4', content: '테스트 및 배포' },
  ]);

  const [menuItems, setMenuItems] = useState([
    { id: '1', content: '홈' },
    { id: '2', content: '제품' },
    { id: '3', content: '서비스' },
    { id: '4', content: '고객지원' },
  ]);

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Reorder</h3>
        <div className="example-list">
          <Reorder items={todoItems} onReorder={setTodoItems} />
        </div>
      </section>
    </div>
  );
}

