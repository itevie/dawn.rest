import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';
import "./dawn-ui/style.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HypnosisPage from './pages/HypnosisPage';
import VisualPage from './pages/VisualPage/VisualPage';
import VisualViewer from './pages/VisualPage/VisualViewer';
import TrancerPage from './pages/Trancer/TrancerPage';
import AlertManager from './dawn-ui/components/AlertManager';

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
  },
  {
    path: "/trancer",
    element: <TrancerPage />
  }
]);

root.render(
  <>
    <AlertManager />
    <RouterProvider router={routes} />
  </>
);