import { ThemeProvider } from 'styled-components';
import Gallows from './pages/gallows';
import theme from './theme';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Gallows />
    </ThemeProvider>
  );
}

export default App;
