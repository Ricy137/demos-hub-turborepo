import React from "react";
import ErrorBoundary from "@modules/ErrorBoundary";
import HomePage from "@pages/Home";
import { useSetMainScroller } from "@hooks/useMainScroller";
import { useWatchPathChange } from "@hooks/useLasPath";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<RouteWrapper />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
        <LastPageWatcher />
      </ErrorBoundary>
    </Router>
  );
};

const RouteWrapper: React.FC = () => {
  useSetMainScroller();

  return (
    <div className="flex flex-col items-center min-h-100vh">
      {/* <Navbar /> */}
      <div className="main-scroller min-h-full !flex flex-col items-center">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

const LastPageWatcher = () => {
  useWatchPathChange();
  return null;
};

export default AppRouter;
