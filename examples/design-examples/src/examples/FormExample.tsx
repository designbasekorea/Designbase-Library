import React, { useState } from 'react';
import { Form } from '@designbasekorea/ui';

export default function FormExample() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 회원가입 폼
  const signupFields = [
    {
      name: 'name',
      type: 'text' as const,
      label: '이름',
      placeholder: '이름을 입력하세요',
      required: true,
      autoComplete: 'name',
    },
    {
      name: 'email',
      type: 'email' as const,
      label: '이메일',
      placeholder: 'email@example.com',
      required: true,
      autoComplete: 'email',
    },
    {
      name: 'password',
      type: 'password' as const,
      label: '비밀번호',
      placeholder: '비밀번호를 입력하세요',
      required: true,
      minLength: 8,
      helpText: '8자 이상, 영문, 숫자, 특수문자 포함',
      autoComplete: 'new-password',
    },
    {
      name: 'passwordConfirm',
      type: 'password' as const,
      label: '비밀번호 확인',
      placeholder: '비밀번호를 다시 입력하세요',
      required: true,
      autoComplete: 'new-password',
    },
    {
      name: 'phone',
      type: 'tel' as const,
      label: '전화번호',
      placeholder: '010-1234-5678',
      autoComplete: 'tel',
    },
    {
      name: 'terms',
      type: 'checkbox' as const,
      label: '이용약관 동의',
      required: true,
      options: [
        { label: '[필수] 이용약관 동의', value: 'terms' },
        { label: '[선택] 마케팅 정보 수신 동의', value: 'marketing' },
      ],
      checkboxGroup: true,
    },
  ];

  // 프로젝트 문의 폼
  const inquiryFields = [
    {
      name: 'company',
      type: 'text' as const,
      label: '회사명',
      placeholder: '회사명을 입력하세요',
      required: true,
    },
    {
      name: 'name',
      type: 'text' as const,
      label: '담당자명',
      placeholder: '담당자 이름을 입력하세요',
      required: true,
    },
    {
      name: 'email',
      type: 'email' as const,
      label: '이메일',
      placeholder: 'email@example.com',
      required: true,
    },
    {
      name: 'phone',
      type: 'tel' as const,
      label: '전화번호',
      placeholder: '010-1234-5678',
      required: true,
    },
    {
      name: 'projectType',
      type: 'select' as const,
      label: '프로젝트 유형',
      placeholder: '프로젝트 유형을 선택하세요',
      required: true,
      options: [
        { label: '웹사이트 제작', value: 'website' },
        { label: '모바일 앱 개발', value: 'mobile' },
        { label: '브랜딩', value: 'branding' },
        { label: '기타', value: 'other' },
      ],
    },
    {
      name: 'budget',
      type: 'select' as const,
      label: '예산 범위',
      placeholder: '예산 범위를 선택하세요',
      options: [
        { label: '500만원 미만', value: 'under-5m' },
        { label: '500만원 ~ 1,000만원', value: '5m-10m' },
        { label: '1,000만원 ~ 3,000만원', value: '10m-30m' },
        { label: '3,000만원 이상', value: 'over-30m' },
      ],
    },
    {
      name: 'message',
      type: 'textarea' as const,
      label: '프로젝트 설명',
      placeholder: '프로젝트에 대해 자세히 설명해주세요',
      required: true,
      minLength: 10,
      helpText: '최소 10자 이상 입력해주세요',
    },
  ];

  // 연락처 문의 폼
  const contactFields = [
    {
      name: 'name',
      type: 'text' as const,
      label: '이름',
      placeholder: '이름을 입력하세요',
      required: true,
    },
    {
      name: 'email',
      type: 'email' as const,
      label: '이메일',
      placeholder: 'email@example.com',
      required: true,
    },
    {
      name: 'subject',
      type: 'text' as const,
      label: '제목',
      placeholder: '문의 제목을 입력하세요',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea' as const,
      label: '문의 내용',
      placeholder: '문의 내용을 입력하세요',
      required: true,
      minLength: 10,
    },
  ];

  const handleSubmit = async (data: Record<string, any>) => {
    setIsSubmitting(true);
    console.log('Form data:', data);
    // 실제 제출 로직 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert('제출되었습니다!');
  };

  return (
    <div className="example-content">
      <section className="example-section">
        <h3 className="example-section__title">회원가입 폼</h3>
        <Form
          fields={signupFields}
          title="회원가입"
          description="새로운 계정을 만드세요"
          onSubmit={handleSubmit}
          submitText="가입하기"
          submitLoading={isSubmitting}
          showReset
          resetText="초기화"
        />
      </section>

      <section className="example-section">
        <h3 className="example-section__title">프로젝트 문의 폼</h3>
        <Form
          fields={inquiryFields}
          title="프로젝트 문의"
          description="프로젝트에 대한 문의사항을 남겨주세요"
          onSubmit={handleSubmit}
          submitText="문의하기"
          submitLoading={isSubmitting}
          columns={2}
        />
      </section>

      <section className="example-section">
        <h3 className="example-section__title">연락처 문의 폼</h3>
        <Form
          fields={contactFields}
          title="문의하기"
          description="궁금한 사항이 있으시면 문의해주세요"
          onSubmit={handleSubmit}
          submitText="전송하기"
          submitLoading={isSubmitting}
        />
      </section>
    </div>
  );
}

