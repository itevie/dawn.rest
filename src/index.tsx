import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';
import "./dawn-ui/style.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HypnosisPage from './pages/HypnosisPage';
import VisualPage from './pages/VisualPage/VisualPage';
import VisualViewer from './pages/VisualPage/VisualViewer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/hypno",
    element: <HypnosisPage />
  },
  {
    path: "/hypno/visuals",
    element: <VisualPage />
  },
  {
    path: "/hypno/visuals/:id",
    element: <VisualViewer />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);