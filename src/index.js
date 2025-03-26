import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoutes from './App';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, serif",
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Montserrat", serif;
          font-style: normal;
          font-weight: 400;
        }
      `,
    },
  },
});

root.render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  </>
);