import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "../src/components/home/Home";
import Sobre from "../src/components/sobre/Sobre";
import Portifolio from "../src/components/portifolio/Portifolio";
import Skills from "../src/components/skills/Skills";
import Carreira from "../src/components/carreira/Carreira";
import Contato from "../src/components/contato/Contato";
import NotFound from "../src/components/not_found/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/portifolio",
        element: <Portifolio />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      // {
      //   path: "/carreira",
      //   element: <Carreira />,
      // },
      {
        path: "/contato",
        element: <Contato />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
