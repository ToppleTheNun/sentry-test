import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { wrapCreateBrowserRouter } from "@sentry/react";
import { AppLayout } from "./components/AppLayout";
import { RouteErrorBoundary } from "./components/RouteErrorBoundary";
import { RouteA } from "./routes/a";
import { RouteB } from "./routes/b";

const appRoutes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />} errorElement={<RouteErrorBoundary />}>
    <Route index element={<RouteA />} />
    <Route path="a" element={<RouteA />} />
    <Route path="b" element={<RouteB />} />
  </Route>,
);

const sentryCreateBrowserRouter = process.env.SENTRY_DSN
  ? wrapCreateBrowserRouter(createBrowserRouter)
  : createBrowserRouter;
const router =
  process.env.NODE_ENV === "test"
    ? createMemoryRouter(appRoutes)
    : sentryCreateBrowserRouter(appRoutes);

const App = () => <RouterProvider router={router} />;

export default App;
