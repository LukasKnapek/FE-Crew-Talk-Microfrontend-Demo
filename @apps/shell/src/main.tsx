import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import "@common/styles/index.scss";

import Spinner from "@common/components/Spinner";

const LazyHome = React.lazy(() => import("@apps/home/Home"));
const LazyCatalogue = React.lazy(() => import("@apps/catalogue/Catalogue"));
const LazyPosts = React.lazy(() => import("@apps/posts/Posts"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinner />}>
            <LazyHome />
          </Suspense>
        ),
      },
      {
        path: "/catalogue",
        element: (
          <Suspense fallback={<Spinner />}>
            <LazyCatalogue />
          </Suspense>
        ),
      },
      {
        path: "/posts",
        element: (
          <Suspense fallback={<Spinner />}>
            <LazyPosts />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
