'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1280, xl: 1600 },
  },
  palette: {
    mode: 'dark',
    primary: { main: '#D3232A', dark: '#A5141A', light: '#E5383E' },
    background: { default: '#04070C', paper: '#0A0F18' },
    text: { primary: '#FFFFFF' },
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: 'var(--font-inter), system-ui, -apple-system, "Segoe UI", sans-serif',
    button: { textTransform: 'none', fontWeight: 500, letterSpacing: 0 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#04070C', overflowX: 'hidden' },
      },
    },
    MuiButtonBase: { defaultProps: { disableRipple: true } },
  },
});

export default theme;