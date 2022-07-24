import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routers/index.routes';

import { ChakraProvider } from '@chakra-ui/react';

import './styles/global.scss';

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  );
}
