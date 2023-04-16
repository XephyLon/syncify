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

    },
  },
  plugins: [],
};
