import React, { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { routesConfig } from "./routesConfig";
import Lenis from "lenis";
import Layout from "./Layout";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      }
    >
      {routesConfig.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Route>
  )
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
