import { Suspense } from 'react';
import { examples } from '../data/examples';
import { Spinner } from '@designbasekorea/ui';
import './ExampleView.scss';

interface ExampleViewProps {
  selectedId: string;
}

export default function ExampleView({ selectedId }: ExampleViewProps) {
  const example = examples.find((ex) => ex.id === selectedId);
  const ExampleComponent = example?.component;

  if (!example || !ExampleComponent) {
    return (
      <div className="example-view__empty">
        <p>예제를 선택해주세요</p>
      </div>
    );
  }

  return (
    <div className="example-view">
      {/* 헤더 */}
      <div className="example-view__header">
        <h1 className="example-view__title">{example.title}</h1>
        <p className="example-view__subtitle">
          {example.category} 컴포넌트 예제
        </p>
      </div>

      {/* 예제 컨텐츠 */}
      <div className="example-view__content">
        <Suspense
          fallback={
            <div className="example-view__spinner-wrapper">
              <Spinner type="circular" size="m" />
            </div>
          }
        >
          <ExampleComponent />
        </Suspense>
      </div>
    </div>
  );
}

