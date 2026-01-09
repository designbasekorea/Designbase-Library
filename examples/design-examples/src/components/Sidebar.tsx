import { useState } from 'react';
import { examples, categories, type Category } from '../data/examples';
import { ChevronDownIcon } from '@designbasekorea/icons';
import { Logo } from '@designbasekorea/ui';
import classNames from 'classnames';
import './Sidebar.scss';

// 카멜케이스를 띄어쓰기로 변환하는 함수
const formatComponentName = (name: string): string => {
  return name.replace(/([A-Z])/g, ' $1').trim();
};

interface SidebarProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function Sidebar({ selectedId, onSelect }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<Category>>(
    new Set(categories)
  );

  const toggleCategory = (category: Category) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="sidebar">
      {/* 헤더 */}
      <div className="sidebar__header">
        <Logo type="designbase" size="s" variant="default" />
        <p className="sidebar__subtitle">웹디자인 강좌 전용</p>
      </div>

      {/* 네비게이션 */}
      <nav className="sidebar__nav">
        {categories.map((category) => {
          const categoryExamples = examples.filter((ex) => ex.category === category);
          const isExpanded = expandedCategories.has(category);

          return (
            <div key={category} className="sidebar__category">
              {/* 카테고리 헤더 */}
              <button
                onClick={() => toggleCategory(category)}
                className="sidebar__category-button"
              >
                <span className="sidebar__category-label">{category}</span>
                <ChevronDownIcon
                  size={16}
                  className={classNames('sidebar__category-arrow', {
                    'sidebar__category-arrow--expanded': isExpanded,
                  })}
                />
              </button>

              {/* 카테고리 아이템들 */}
              {isExpanded && (
                <div className="sidebar__example-list">
                  {categoryExamples.map((example) => (
                    <button
                      key={example.id}
                      onClick={() => onSelect(example.id)}
                      className={classNames('sidebar__example-button', {
                        'sidebar__example-button--selected':
                          selectedId === example.id,
                      })}
                    >
                      {formatComponentName(example.title)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

