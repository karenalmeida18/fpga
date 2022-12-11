import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from './theme';
import GlobalStyle from './styles/globalStyles';

import Gallows from './pages/gallows';
import ConnectDots from './pages/connectDots';
import Home from './pages/home';
import Questions from './pages/questions';
import Final from './pages/final';

import "react-horizontal-vertical/rhv.css";

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
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "/final",
    element: <Final />
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
