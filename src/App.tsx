import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routers/index.routes';

import './styles/global.scss';

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
