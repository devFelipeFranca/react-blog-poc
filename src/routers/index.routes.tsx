import Home from '../pages/home';
import { useRoutes } from 'react-router-dom';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);
}
