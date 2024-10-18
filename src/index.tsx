import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home";
import "./dawn-ui/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HypnosisPage from "./pages/HypnosisPage";
import VisualPage from "./pages/VisualPage/VisualPage";
import VisualViewer from "./pages/VisualPage/VisualViewer";
import TrancerPage from "./pages/Trancer/TrancerPage";
import AlertManager from "./dawn-ui/components/AlertManager";
import AdminPage from "./pages/Admin/AdminPage";
import FileUpload from "./pages/Admin/FileUpload";
import FilePage from "./pages/Files/FilePage";
import FileViewer from "./pages/Files/FileViewer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/hypno",
    element: <HypnosisPage />,
  },
  {
    path: "/hypno/visuals",
    element: <VisualPage />,
  },
  {
    path: "/hypno/visuals/:id",
    element: <VisualViewer />,
  },
  {
    path: "/hypno/files",
    element: <FilePage />,
  },
  {
    path: "/hypno/files/:id",
    element: <FileViewer />,
  },
  {
    path: "/trancer",
    element: <TrancerPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/admin/file-upload",
    element: <FileUpload />,
  },
]);

root.render(
  <>
    <AlertManager />
    <RouterProvider router={routes} />
  </>,
);
