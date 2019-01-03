import Typography from 'typography';
import lawtonTheme from 'typography-theme-lawton';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  headerFontFamily: [
    'Raleway',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  // See below for the full list of options.
});

export default typography;
