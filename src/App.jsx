import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Sync from "./api/syncApi";
import "./App.css";
import { useUpdateData } from "./context/updateDataContext";
import NotFoundLayout from "./layouts/404/NotFoundLayout";
import Login from "./layouts/Login/Login";
import MainLayout from "./layouts/Main/MainLayout";
import AddTorrentLayout from "./layouts/AddTorrent/AddTorrentLayout";
import SettingsLayout from "./layouts/Settings/SettingsLayout";
import { useIsLoggedIn } from "./context/isLoggedInContext";

function PrivateWrapper({ isLoggedIn }) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  const { isLoggedIn, setIsLoggedIn } = useIsLoggedIn();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Sync.getMainData().then((res) => {
      if (res) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    });
  }, []);

  const routes = [
    { path: "/", element: <MainLayout /> },
    { path: "/add", element: <AddTorrentLayout /> },
    { path: "/settings", element: <SettingsLayout /> },
    { path: "*", element: <NotFoundLayout /> },
  ];

  if (isLoading) return <div></div>;
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
