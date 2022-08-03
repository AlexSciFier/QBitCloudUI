import { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Sync from "./api/syncApi";
import "./App.css";
import NotFoundLayout from "./layouts/404/NotFoundLayout";
import Login from "./layouts/Login/Login";
import MainLayout from "./layouts/Main/MainLayout";
import AddTorrentLayout from "./layouts/AddTorrent/AddTorrentLayout";
import SettingsLayout from "./layouts/Settings/SettingsLayout";
import { useIsLoggedIn } from "./context/isLoggedInContext";
import AppLoader from "./layouts/AppLoader/AppLoader";
import ErrorAppLoader from "./layouts/AppLoader/ErrorAppLoader";

function PrivateWrapper({ isLoggedIn }) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  const { isLoggedIn, setIsLoggedIn } = useIsLoggedIn();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    Sync.getMainData()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const routes = [
    { path: "/", element: <MainLayout /> },
    { path: "/add", element: <AddTorrentLayout /> },
    { path: "/settings", element: <SettingsLayout /> },
    { path: "*", element: <NotFoundLayout /> },
  ];

  if (isLoading) return <AppLoader />;
  if (error) return <ErrorAppLoader />;
  else
    return (
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              element={<PrivateWrapper isLoggedIn={isLoggedIn} />}
            >
              <Route path={route.path} element={route.element} />
            </Route>
          ))}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
}

export default App;
