import { useRoutes } from 'react-router-dom';
import { privateRouter } from './private';
import { publicRoutes } from './public';

export default function Routes() {
  return useRoutes([...privateRouter, ...publicRoutes]);
}
