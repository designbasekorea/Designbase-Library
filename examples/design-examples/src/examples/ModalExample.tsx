import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@designbasekorea/ui';

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div style={{ maxWidth: '1000px' }}>
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          기본 Modal (title prop 사용)
        </h2>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          모달 열기
        </Button>
        <Modal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
          title="모달 제목"
        >
          <ModalBody>
            <p>모달 본문 내용입니다. title prop을 사용하면 자동으로 헤더가 생성됩니다.</p>
          </ModalBody>
          <ModalFooter>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                취소
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                확인
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      </section>

      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--db-text-primary)' }}>
          커스텀 Modal (ModalHeader 사용)
        </h2>
        <Button variant="primary" onClick={() => setIsOpen2(true)}>
          커스텀 모달 열기
        </Button>
        <Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)}>
          <ModalHeader title="커스텀 모달 제목" />
          <ModalBody>
            <p>ModalHeader, ModalBody, ModalFooter를 직접 사용할 수 있습니다.</p>
          </ModalBody>
          <ModalFooter>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Button variant="ghost" onClick={() => setIsOpen2(false)}>
                취소
              </Button>
              <Button variant="primary" onClick={() => setIsOpen2(false)}>
                확인
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      </section>
    </div>
  );
}

