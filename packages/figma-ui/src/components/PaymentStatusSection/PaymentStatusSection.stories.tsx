import type { Meta, StoryObj } from '@storybook/react';
import { PaymentStatusSection } from './PaymentStatusSection';

const meta: Meta<typeof PaymentStatusSection> = {
    title: 'Figma UI/PaymentStatusSection',
    component: PaymentStatusSection,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: { type: 'select' },
            options: ['PAID', 'FREE', 'UNPAID'],
        },
        showDetails: {
            control: { type: 'boolean' },
        },
        isDeactivating: {
            control: { type: 'boolean' },
        },
        onDeactivate: {
            action: 'deactivated',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        status: 'PAID',
        usageCount: 15,
        activationLimit: 3,
        activationUsage: 1,
        licenseKey: 'abc123-def456-ghi789-jkl012-mno345',
        onDeactivate: () => console.log('License deactivated'),
        isDeactivating: false,
        showDetails: false,
    },
};

export const WithDetails: Story = {
    args: {
        status: 'PAID',
        usageCount: 15,
        activationLimit: 3,
        activationUsage: 1,
        licenseKey: 'abc123-def456-ghi789-jkl012-mno345',
        onDeactivate: () => console.log('License deactivated'),
        isDeactivating: false,
        showDetails: true,
    },
};

export const Deactivating: Story = {
    args: {
        status: 'PAID',
        usageCount: 15,
        activationLimit: 3,
        activationUsage: 1,
        licenseKey: 'abc123-def456-ghi789-jkl012-mno345',
        onDeactivate: () => console.log('License deactivated'),
        isDeactivating: true,
        showDetails: true,
    },
};

export const MaxActivations: Story = {
    args: {
        status: 'PAID',
        usageCount: 15,
        activationLimit: 3,
        activationUsage: 3,
        licenseKey: 'abc123-def456-ghi789-jkl012-mno345',
        onDeactivate: () => console.log('License deactivated'),
        isDeactivating: false,
        showDetails: true,
    },
};

export const FreeUser: Story = {
    args: {
        status: 'FREE',
        usageCount: 5,
        activationLimit: 0,
        activationUsage: 0,
        licenseKey: '',
        onDeactivate: () => console.log('License deactivated'),
        isDeactivating: false,
        showDetails: false,
    },
};

export const WithI18nKeys: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 없음)</h3>
                <PaymentStatusSection
                    status="PAID"
                    usageCount={15}
                    activationLimit={3}
                    activationUsage={1}
                    licenseKey="abc123-def456-ghi789-jkl012-mno345"
                    onDeactivate={() => console.log('License deactivated')}
                    isDeactivating={false}
                    showDetails={true}
                />
            </div>

            <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 있음)</h3>
                <PaymentStatusSection
                    status="PAID"
                    usageCount={15}
                    activationLimit={3}
                    activationUsage={1}
                    licenseKey="abc123-def456-ghi789-jkl012-mno345"
                    onDeactivate={() => console.log('License deactivated')}
                    isDeactivating={false}
                    showDetails={true}
                    t={(key) => {
                        const translations: Record<string, string> = {
                            'payment.license_key_label': '라이선스 키',
                            'payment.activations_remaining': '활성',
                            'payment.spots_remaining': '자리 남음',
                            'payment.deactivating': '비활성화중...',
                            'payment.deactivate_license': '라이선스 비활성화'
                        };
                        return translations[key] || key;
                    }}
                />
            </div>
        </div>
    ),
};
