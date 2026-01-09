import React from 'react';
import type { Preview } from '@storybook/react';
import '@designbasekorea/tokens/dist/css/tokens.css';
import '@designbasekorea/theme/dist/css/theme.css';
import '@designbasekorea/ui/dist/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const currentTheme = context.globals.theme || 'light';
      
      React.useEffect(() => {
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme', currentTheme);
          document.body.setAttribute('data-theme', currentTheme);
        }
      }, [currentTheme]);

      return React.createElement(
        'div',
        {
          'data-theme': currentTheme,
          style: {
            minHeight: '100vh',
            padding: '20px',
            backgroundColor: currentTheme === 'dark' ? '#1a1a1a' : '#ffffff',
            color: currentTheme === 'dark' ? '#ffffff' : '#000000',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          },
        },
        React.createElement(Story)
      );
    },
  ],
  globalTypes: {
    theme: {
      description: '글로벌 테마 설정',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light', icon: 'circlehollow' },
          { value: 'dark', title: 'Dark', icon: 'circle' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
