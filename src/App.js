import { createGlobalStyle } from 'styled-components';
import TodoItems from './components/TodoItems';

const GlobalStyle = createGlobalStyle`
    *:focus {
        outline: none;
    }

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
      <TodoItems />
    </>
  );
}

export default App;
