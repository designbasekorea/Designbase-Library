import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ExampleView from './components/ExampleView';
import { examples } from './data/examples';

function App() {
  const [selectedId, setSelectedId] = useState<string>('button');

  // URL 해시로 초기 선택 설정
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && examples.some((ex) => ex.id === hash)) {
      setSelectedId(hash);
    }
  }, []);

  // URL 해시 업데이트
  useEffect(() => {
    window.location.hash = selectedId;
  }, [selectedId]);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <Sidebar selectedId={selectedId} onSelect={setSelectedId} />
      <ExampleView selectedId={selectedId} />
    </div>
  );
}

export default App;

