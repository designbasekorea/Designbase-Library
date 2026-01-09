import React, { useState } from 'react';
import { Dropdown, Button } from '@designbasekorea/ui';
import { MoreVerticalIcon, EditIcon, CopyIcon, DeleteIcon, SettingsIcon } from '@designbasekorea/icons';

export default function DropdownExample() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const items = [
    { 
      id: 'edit', 
      label: '편집', 
      icon: EditIcon,
      onClick: () => {
        console.log('편집 클릭');
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(false);
        setIsOpen6(false);
        setIsOpen7(false);
      }
    },
    { 
      id: 'copy', 
      label: '복사', 
      icon: CopyIcon,
      onClick: () => {
        console.log('복사 클릭');
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(false);
        setIsOpen6(false);
        setIsOpen7(false);
      }
    },
    { 
      id: 'delete', 
      label: '삭제', 
      icon: DeleteIcon,
      onClick: () => {
        console.log('삭제 클릭');
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(false);
        setIsOpen6(false);
        setIsOpen7(false);
      }
    },
  ];

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">기본 Dropdown</h3>
        <div className="example-list">
          <Dropdown
            isOpen={isOpen1}
            onToggle={setIsOpen1}
            items={items}
            trigger={
              <Button variant="secondary" endIcon={MoreVerticalIcon}>
                메뉴 열기
              </Button>
            }
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">Label 사용</h3>
        <div className="example-list">
          <Dropdown
            isOpen={isOpen2}
            onToggle={setIsOpen2}
            items={items}
            label="메뉴"
            triggerVariant="primary"
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">아이콘 전용</h3>
        <div className="example-list">
          <Dropdown
            isOpen={isOpen3}
            onToggle={setIsOpen3}
            items={items}
            triggerIcon={SettingsIcon}
            iconOnly
          />
        </div>
      </section>

      <section className="example-section">
        <h3 className="example-section__title">다양한 위치</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ marginBottom: '100px' }}>
            <Dropdown
              isOpen={isOpen4}
              onToggle={setIsOpen4}
              items={items}
              trigger={<Button>Bottom-Left</Button>}
              placement="bottom-left"
            />
          </div>
          <div style={{ marginBottom: '100px' }}>
            <Dropdown
              isOpen={isOpen5}
              onToggle={setIsOpen5}
              items={items}
              trigger={<Button>Bottom-Right</Button>}
              placement="bottom-right"
            />
          </div>
          <div>
            <Dropdown
              isOpen={isOpen6}
              onToggle={setIsOpen6}
              items={items}
              trigger={<Button>Top-Left</Button>}
              placement="top-left"
            />
          </div>
          <div>
            <Dropdown
              isOpen={isOpen7}
              onToggle={setIsOpen7}
              items={items}
              trigger={<Button>Top-Right</Button>}
              placement="top-right"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

