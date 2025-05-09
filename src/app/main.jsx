import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import ModalProvider from '../context/modalProvider';
import AppRouter from './router.jsx';
import globalStyle from './theme/globalStyle';
import theme from './theme/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Global styles={globalStyle} />
        <AppRouter />
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>
);
