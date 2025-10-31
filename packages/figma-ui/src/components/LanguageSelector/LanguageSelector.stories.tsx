import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { LanguageSelector } from './LanguageSelector';

const meta: Meta<typeof LanguageSelector> = {
    title: 'Figma UI/LanguageSelector',
    component: LanguageSelector,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['s', 'm', 'l'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        const [language, setLanguage] = useState('ko');

        return (
            <LanguageSelector
                currentLanguage={language}
                onLanguageChange={(lang) => {
                    setLanguage(lang);
                    console.log('Language changed to:', lang);
                }}
            />
        );
    },
};

export const EnglishDefault: Story = {
    render: () => {
        const [language, setLanguage] = useState('en');

        return (
            <LanguageSelector
                currentLanguage={language}
                onLanguageChange={(lang) => {
                    setLanguage(lang);
                    console.log('Language changed to:', lang);
                }}
            />
        );
    },
};

export const Sizes: Story = {
    render: () => {
        const [language, setLanguage] = useState('ko');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                <div>
                    <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Small (s)</div>
                    <LanguageSelector
                        currentLanguage={language}
                        onLanguageChange={setLanguage}
                        size="s"
                    />
                </div>
                <div>
                    <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Medium (m)</div>
                    <LanguageSelector
                        currentLanguage={language}
                        onLanguageChange={setLanguage}
                        size="m"
                    />
                </div>
                <div>
                    <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>Large (l)</div>
                    <LanguageSelector
                        currentLanguage={language}
                        onLanguageChange={setLanguage}
                        size="l"
                    />
                </div>
            </div>
        );
    },
};

export const WithMultipleLanguages: Story = {
    render: () => {
        const [language, setLanguage] = useState('ko');

        return (
            <LanguageSelector
                currentLanguage={language}
                languages={[
                    { code: 'ko', label: 'KO' },
                    { code: 'en', label: 'EN' },
                    { code: 'ja', label: 'JA' },
                    { code: 'zh', label: 'ZH' },
                ]}
                onLanguageChange={(lang) => {
                    setLanguage(lang);
                    console.log('Language changed to:', lang);
                }}
            />
        );
    },
};

export const WithFullNames: Story = {
    render: () => {
        const [language, setLanguage] = useState('korean');

        return (
            <LanguageSelector
                currentLanguage={language}
                languages={[
                    { code: 'korean', label: '한국어' },
                    { code: 'english', label: 'English' },
                    { code: 'japanese', label: '日本語' },
                ]}
                onLanguageChange={(lang) => {
                    setLanguage(lang);
                    console.log('Language changed to:', lang);
                }}
                size="m"
            />
        );
    },
};

export const InFooterContext: Story = {
    render: () => {
        const [language, setLanguage] = useState('ko');

        return (
            <div style={{
                padding: '12px 16px',
                background: 'var(--db-surface-base)',
                borderTop: '1px solid var(--db-border-base)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '100px', height: '40px', background: '#0066FF', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px' }}>
                        Logo
                    </div>
                </div>

                <LanguageSelector
                    currentLanguage={language}
                    onLanguageChange={(lang) => {
                        setLanguage(lang);
                        console.log('Language changed to:', lang);
                    }}
                    size="s"
                />
            </div>
        );
    },
};

export const WithI18nKeys: Story = {
    render: () => {
        const [language, setLanguage] = useState('ko');

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
                <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 없음)</h3>
                    <LanguageSelector
                        currentLanguage={language}
                        languages={[
                            { code: 'ko', label: { key: 'language.korean' } },
                            { code: 'en', label: { key: 'language.english' } },
                            { code: 'ja', label: { key: 'language.japanese' } }
                        ]}
                        onLanguageChange={(lang) => {
                            setLanguage(lang);
                            console.log('Language changed to:', lang);
                        }}
                    />
                </div>

                <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>I18n 키 사용 (t 함수 있음)</h3>
                    <LanguageSelector
                        currentLanguage={language}
                        languages={[
                            { code: 'ko', label: { key: 'language.korean' } },
                            { code: 'en', label: { key: 'language.english' } },
                            { code: 'ja', label: { key: 'language.japanese' } }
                        ]}
                        onLanguageChange={(lang) => {
                            setLanguage(lang);
                            console.log('Language changed to:', lang);
                        }}
                        t={(key) => {
                            const translations: Record<string, string> = {
                                'language.korean': '한국어',
                                'language.english': 'English',
                                'language.japanese': '日本語'
                            };
                            return translations[key] || key;
                        }}
                    />
                </div>
            </div>
        );
    },
};

