
import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from '../pages/Dashboard/index.tsx';
import { List } from '../pages/List/index.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);