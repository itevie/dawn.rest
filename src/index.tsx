import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HypnosisPage from "./pages/HypnosisPage";
import VisualPage from "./pages/VisualPage/VisualPage";
import VisualViewer from "./pages/VisualPage/VisualViewer";
import AlertManager from "./dawn-ui/components/AlertManager";
import AdminPage from "./pages/Admin/AdminPage";
import FileUpload from "./pages/Admin/FileUpload";
import FilePage from "./pages/Files/FilePage";
import FileViewer from "./pages/Files/FileViewer";
import Page404 from "./pages/404";
import "./dawn-ui/index";
import "./style.css";
import Showcase from "./dawn-ui/Showcase";
import ContextMenuManager from "./dawn-ui/components/ContextMenuManager";
import TrancerPage from "./pages/Single/TrancerPage";
import OtherProjectsPage from "./pages/Single/OtherProjects";
import HttpRequestMaker from "./pages/Single/HttpRequestMaker";
import { loadTheme } from "./dawn-ui/index";
import Authorize from "./pages/Auth/Authorize";
import Login from "./pages/Auth/Login";
import TypeTheRoman from "./pages/Single/TypeTheRoman";
import GiveChangeGame from "./pages/Single/GiveChange";
import DawnUiDebug from "./pages/Debug/DawnUiDebug";
import WordGenerator from "./pages/Single/WordGenerator";
import BackgroundParticles from "./dawn-ui/components/BackgroundParticles";

loadTheme();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const baseUrlLS = localStorage.getItem("base_url");
export const baseUrl = baseUrlLS
  ? baseUrlLS
  : window.location.hostname === "localhost"
    ? "https://dawn.rest"
    : "";

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
  {
    path: "/projects/dawn-ui",
    element: <Showcase />,
  },
  {
    path: "/projects/dawn-ui-debug",
    element: <DawnUiDebug />,
  },
  {
    path: "/projects",
    element: <OtherProjectsPage />,
  },
  {
    path: "/projects/http",
    element: <HttpRequestMaker />,
  },
  {
    path: "/projects/type-the-roman",
    element: <TypeTheRoman />,
  },
  {
    path: "/projects/give-change",
    element: <GiveChangeGame />,
  },
  {
    path: "/projects/word-generator",
    element: <WordGenerator />,
  },
  {
    path: "/auth/oauth",
    element: <Authorize />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

root.render(
  <>
    <AlertManager />
    <ContextMenuManager />
    <BackgroundParticles />
    <RouterProvider router={routes} />
  </>,
);
