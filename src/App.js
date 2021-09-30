import Container from './components/Container';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        background: radial-gradient(
            circle at 50% 0,
            rgba(255, 38, 38, 0.5),
            rgba(255, 0, 0, 0) 70.71%
          ),
          radial-gradient(
            circle at 6.7% 75%,
            rgba(30, 30, 255, 0.5),
            rgba(0, 0, 255, 0) 70.71%
          ),
          radial-gradient(
              circle at 93.3% 75%,
              rgba(63, 255, 63, 0.287),
              rgba(0, 255, 0, 0) 70.71%
            )
            beige;
    }
  
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container />
    </>
  );
}

export default App;
