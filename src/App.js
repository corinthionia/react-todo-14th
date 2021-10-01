import { createGlobalStyle } from 'styled-components';
import Items from './components/Items';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        height: 100vh;
        
        display: flex;
        justify-content: center;
        align-items: center;

        background: #d4e6b0;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Items />
    </>
  );
}

export default App;
