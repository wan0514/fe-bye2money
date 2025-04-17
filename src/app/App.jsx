import { Global, ThemeProvider } from '@emotion/react';
import globalStyle from './theme/globalStyle';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <div>
        <div style={theme.typography.semibold16}>프리탠다드</div>
        <div style={theme.typography.serif24}>조선일보명조</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
