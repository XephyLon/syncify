const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
    colors: {
      ib: {
        25: '#D0DFE5',
        50: '#A1B1C0',
        100: '#7289A0',
        200: '#145E7F',
        300: '#2C4F71',
        400: '#163D61',
        500: '#163D61',
        600: '#17355A',
        700: '#0C2945',
        800: '#0A1C37',
      },
      pb: {
        50: '#E8F7FA',
        100: '#D1EFF4',
        200: '#A3DFE9',
        300: '#76CEDE',
        400: '#5FC6D9',
        500: '#1AAEC8',
        600: '#13B1C6',
        700: '#158BA0',
      },
      inb: {
        25: '#F5F9FC',
        50: '#E6F1F7',
        100: '#CCE2EF',
        200: '#B3D4E6',
        300: '#80B7D6',
        400: '#338BBD',
        500: '#006EAD',
        600: '#00588A',
        700: '#004268',
      },
      m: {
        50: '#EBF7F2',
        100: '#C4E7D9',
        200: '#9DD8C0',
        300: '#89D0B3',
        400: '#75C8A6',
        500: '#3AB080',
        600: '#2E8D66',
        700: '#236A4D',
      },
      gl: {
        50: '#FEF8E9',
        100: '#FDF0D2',
        200: '#FBE1A5',
        300: '#F9D379',
        400: '#F7C44C',
        500: '#F5B51F',
        600: '#DDA31C',
        700: '#C49119',
      },
      dgo: {
        50: '#FDEFEB',
        100: '#FBDFD6',
        200: '#F7C0AE',
        300: '#F4A085',
        400: '#F0815D',
        500: '#EC6134',
        600: '#D4572F',
        700: '#BD4E2A',
      },
      pp: {
        50: '#f1e8ed',
        100: '#E4D1DA',
        200: '#C8A3B5',
        300: '#AD7491',
        400: '#91466C',
        500: '#761847',
        600: '#6A1640',
        700: '#5E1339',
      },

      n: {
        25: '#FFFFFF',
        50: '#F6F7F9',
        100: '#EEF2F3',
        200: '#DAE1E5',
        300: '#C7D1D8',
        400: '#A2B3BE',
        500: '#92A1AB',
        600: '#717D85',
        700: '#515A5F',
        800: '#313639',
        900: '#101213',
      },
      s: {
        error: '#F24B4B',
        success: '#5BC69A',
        alert: '#F5B51F',
        info: '#006EAD',
      },
    },
    dropShadow: {
      high: '0 0 30px 0 #EEF2F3',
      medium: '0 0 15px 0 #EEF2F3',
      low: '0 0 10px 0 rgba(238, 242, 243, 0.7)',
    },
    borderRadius: {
      none: '0',
      4: '0.25rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
    },
    fontSize: {
      'ar-D1': [
        '2.875rem',
        {
          fontWeight: 'bold',
          lineHeight: '5.375rem',
        },
      ],
      'ar-H1': [
        '2.375rem',
        {
          fontWeight: 'bold',
          lineHeight: '3.5rem',
        },
      ],
      'ar-H2': [
        '2rem',
        {
          fontWeight: 'bold',
          lineHeight: '3rem',
        },
      ],
      'ar-H3': [
        '1.25rem',
        {
          fontWeight: 'bold',
          lineHeight: '2rem',
        },
      ],
      'ar-H4': [
        '1.125rem',
        {
          fontWeight: 'bold',
          lineHeight: '1.75rem',
        },
      ],
      'ar-H5': [
        '0.875rem',
        {
          fontWeight: 'bold',
          lineHeight: '1.25rem',
        },
      ],
      'ar-L1-bold': [
        '1rem',
        {
          fontWeight: 'bold',
          lineHeight: '1.5rem',
        },
      ],
      'ar-L1-text': [
        '1rem',
        {
          fontWeight: '500',
          lineHeight: '1.5rem',
        },
      ],
      'ar-L2-bold': [
        '0.875rem',
        {
          fontWeight: 'bold',
          lineHeight: '1.25rem',
        },
      ],
      'ar-L2-regular': [
        '0.875rem',
        {
          fontWeight: 'regular',
          lineHeight: '1.25rem',
        },
      ],
      'ar-L3': [
        '0.75rem',
        {
          fontWeight: 'bold',
          lineHeight: '1.25rem',
        },
      ],
      'ar-P1': [
        '1.5rem',
        {
          fontWeight: 'bold',
          lineHeight: '2.25rem',
        },
      ],
      'ar-P2': [
        '1.125rem',
        {
          fontWeight: 'regular',
          lineHeight: '2.25rem',
        },
      ],
      'ar-P3': [
        '0.875rem',
        {
          fontWeight: 'regular',
          lineHeight: '1.5rem',
        },
      ],

      // English Typography

      'en-H1-bold': [
        '1.5rem',
        {
          fontWeight: 'bold',
          lineHeight: '2rem',
        },
      ],
      'en-H1-regular': [
        '1.5rem',
        {
          fontWeight: 'regular',
          lineHeight: '2rem',
        },
      ],
      'en-H1-light': [
        '1.5rem',
        {
          fontWeight: '300',
          lineHeight: '2rem',
        },
      ],
      'en-H2-bold': [
        '1.25rem',
        {
          fontWeight: 'bold',
          lineHeight: '1.5rem',
        },
      ],
      'en-H2-regular': [
        '1.25rem',
        {
          fontWeight: 'regular',
          lineHeight: '1.5rem',
        },
      ],
      'en-H2-light': [
        '1.25rem',
        {
          fontWeight: '300',
          lineHeight: '1.5rem',
        },
      ],
      'en-H3-bold': [
        '1rem',
        {
          fontWeight: 'bold',
          lineHeight: '1.25rem',
        },
      ],
      'en-H3-regular': [
        '1rem',
        {
          fontWeight: 'regular',
          lineHeight: '1.25rem',
        },
      ],
      'en-H3-light': [
        '1rem',
        {
          fontWeight: '300',
          lineHeight: '1.25rem',
        },
      ],
      'en-H4-bold': [
        '0.875rem',
        {
          fontWeight: 'bold',
          lineHeight: '1.25rem',
        },
      ],
      'en-H4-regular': [
        '0.875rem',
        {
          fontWeight: 'regular',
          lineHeight: '1.25rem',
        },
      ],
      'en-H4-light': [
        '0.875rem',
        {
          fontWeight: '300',
          lineHeight: '1.25rem',
        },
      ],
      'en-body': [
        '0875rem',
        {
          fontWeight: 'regular',
          lineHeight: '1.5rem',
        },
      ],
      'en-L1': [
        '1rem',
        {
          fontWeight: 'bold',
          lineHeight: '1.25rem',
        },
      ],
      'en-L2': [
        '0.875rem',
        {
          fontWeight: 'regular',
          lineHeight: '1.25rem',
        },
      ],
      'en-L3-bold': [
        '0.75rem',
        {
          fontWeight: 'bold',
          lineHeight: '1rem',
        },
      ],
      'en-L3-regular': [
        '0.75rem',
        {
          fontWeight: 'regular',
          lineHeight: '1rem',
        },
      ],
      'en-caption': [
        '0.75rem',
        {
          fontWeight: 'regular',
          lineHeight: '1rem',
        },
      ],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1AAEC8',
          'primary-focused': '#5FC6D9',
          'primary-content': '#FFFFFF',
          secondary: '#006EAD',
          'secondary-content': '#FFFFFF',
          accent: '#F5B51F',
          'accent-content': '#FFFFFF',
          neutral: '#717D85',
          'neutral-content': '#FFFFFF',
          'base-100': '#FFFFFF',
          info: '#006EAD',
          success: '#5BC69A',
          warning: '#F5B51F',
          error: '#F24B4B',
        },
      },
    ],
  },
};
