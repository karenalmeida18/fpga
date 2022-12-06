import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from './theme';
import GlobalStyle from './styles/globalStyles';

import Gallows from './pages/gallows';
import ConnectDots from './pages/connectDots';
import Home from './pages/home';
import Questions from './pages/questions';

const router = createBrowserRouter([
  {
    path: "/gallow",
    element: <Gallows />,
  },
  {
    path: "/connect",
    element: <ConnectDots />,
  },
  {
    path: "/hunting",
    element: <Questions />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
