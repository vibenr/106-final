import logo from './logo.svg';
import './App.css';
import Home from './Components/client_dashboard/ClientDashboard.js'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <div className="text-2xl">
          <Home />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
