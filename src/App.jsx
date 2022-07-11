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
import { UpdateDataProvider } from "./context/updateDataContext";
import { TorrentListProvider } from "./context/torrentListContext";
import NotFoundLayout from "./layouts/404/NotFoundLayout";
import Login from "./layouts/Login/Login";
import MainLayout from "./layouts/Main/MainLayout";

function PrivateWrapper({ mainData }) {
  return mainData ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  const [mainData, setMainData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Sync.getMainData().then((res) => {
      setMainData(res);
      setIsLoading(false);
    });
  }, []);

  const routes = [
    { path: "/", element: <MainLayout /> },
    { path: "*", element: <NotFoundLayout /> },
  ];

  if (isLoading) return <div></div>;
  else
    return (
      <TorrentListProvider>
        <UpdateDataProvider>
          <Router>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  element={<PrivateWrapper mainData={mainData} />}
                >
                  <Route path={route.path} element={route.element} />
                </Route>
              ))}
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </UpdateDataProvider>
      </TorrentListProvider>
    );
}

export default App;
