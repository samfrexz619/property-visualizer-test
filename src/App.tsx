import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/home/page';
import './App.css';
import TowerAPage from './pages/tower/tower-a';
import TowerBPage from './pages/tower/tower-b';
import TowerCPage from './pages/tower/tower-c';
import TowerFloorAPage from './pages/tower/[floorId]';



const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/tower-a',
        element: <TowerAPage />,
      },

      {
        path: '/tower-b',
        element: <TowerBPage />
      },
      {
        path: '/tower-c',
        element: <TowerCPage />
      },
      {
        path: "/tower-a/:floorId",
        element: <TowerFloorAPage />
      },
      {
        path: "/tower-b/:floorId",
        element: <TowerFloorAPage />
      },
      {
        path: "/tower-c/:floorId",
        element: <TowerFloorAPage />
      },
    ]
  }
]);
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
