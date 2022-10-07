import logo from './logo.svg';
import './App.css';
import Home from './Components/Payment_page/Payment'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <div>
          <Home />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
