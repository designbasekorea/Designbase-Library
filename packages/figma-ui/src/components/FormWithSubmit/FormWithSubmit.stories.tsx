import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormWithSubmit } from './FormWithSubmit';

const meta: Meta<typeof FormWithSubmit> = {
    title: 'Figma UI/FormWithSubmit',
    component: FormWithSubmit,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
        isSubmitting: {
            control: { type: 'boolean' },
        },
        onLicenseSubmit: {
            action: 'submitted',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onLicenseSubmit: async (licenseKey: string) => {
            console.log('License submitted:', licenseKey);
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
        disabled: false,
        isSubmitting: false,
        value: '',
        label: 'License Key',
        placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        submitText: 'Submit',
        submittingText: 'Verifying...',
    },
};

export const WithValue: Story = {
    args: {
        onLicenseSubmit: async (licenseKey: string) => {
            console.log('License submitted:', licenseKey);
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
        disabled: false,
        isSubmitting: false,
        value: 'abc123-def456-ghi789-jkl012-mno345',
        label: 'License Key',
        placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        submitText: 'Submit',
        submittingText: 'Verifying...',
    },
};

export const Submitting: Story = {
    args: {
        onLicenseSubmit: async (licenseKey: string) => {
            console.log('License submitted:', licenseKey);
            await new Promise(resolve => setTimeout(resolve, 3000));
        },
        disabled: false,
        isSubmitting: true,
        value: 'abc123-def456-ghi789-jkl012-mno345',
        label: 'License Key',
        placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        submitText: 'Submit',
        submittingText: 'Verifying...',
    },
};

export const Disabled: Story = {
    args: {
        onLicenseSubmit: async (licenseKey: string) => {
            console.log('License submitted:', licenseKey);
        },
        disabled: true,
        isSubmitting: false,
        value: '',
        label: 'License Key',
        placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        submitText: 'Submit',
        submittingText: 'Verifying...',
    },
};

export const CustomLabels: Story = {
    args: {
        onLicenseSubmit: async (licenseKey: string) => {
            console.log('License submitted:', licenseKey);
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
        disabled: false,
        isSubmitting: false,
        value: '',
        label: '라이선스 키',
        placeholder: '라이선스 키를 입력하세요',
        submitText: '확인',
        submittingText: '확인 중...',
    },
};

export const WithHelperText: Story = {
    args: {
        onLicenseSubmit: async (licenseKey: string) => {
            console.log('License submitted:', licenseKey);
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
        disabled: false,
        isSubmitting: false,
        value: '',
        label: '라이선스 키',
        placeholder: '라이선스 키를 입력하세요',
        submitText: '확인',
        submittingText: '확인 중...',
        helperText: '구독 후 이메일로 받은 라이선스 키를 입력하세요.',
    },
};

export const WithI18nKeys: Story = {
    render: () => {
        const [value, setValue] = React.useState('');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
                <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 없음)</h3>
                    <FormWithSubmit
                        onLicenseSubmit={async (licenseKey: string) => {
                            console.log('License submitted:', licenseKey);
                            await new Promise(resolve => setTimeout(resolve, 1000));
                        }}
                        value={value}
                        onValueChange={setValue}
                        label={{ key: 'form.license_key' }}
                        placeholder={{ key: 'form.license_placeholder' }}
                        submitText={{ key: 'form.submit' }}
                        submittingText={{ key: 'form.verifying' }}
                    />
                </div>

                <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 있음)</h3>
                    <FormWithSubmit
                        onLicenseSubmit={async (licenseKey: string) => {
                            console.log('License submitted:', licenseKey);
                            await new Promise(resolve => setTimeout(resolve, 1000));
                        }}
                        value={value}
                        onValueChange={setValue}
                        label={{ key: 'form.license_key' }}
                        placeholder={{ key: 'form.license_placeholder' }}
                        submitText={{ key: 'form.submit' }}
                        submittingText={{ key: 'form.verifying' }}
                        helperText={{ key: 'form.license_helper' }}
                        t={(key) => {
                            const translations: Record<string, string> = {
                                'form.license_key': '라이선스 키',
                                'form.license_placeholder': '라이선스 키를 입력하세요',
                                'form.submit': '확인',
                                'form.verifying': '확인 중...',
                                'form.license_helper': '구독 후 이메일로 받은 라이선스 키를 입력하세요.'
                            };
                            return translations[key] || key;
                        }}
                    />
                </div>
            </div>
        );
    },
};
