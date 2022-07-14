import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IsLoggedInProvider } from "./context/isLoggedInContext";
import { GlobalInfoProvider } from "./context/globalInfoContext";
import { TorrentListProvider } from "./context/torrentListContext";
import { UpdateDataProvider } from "./context/updateDataContext";
import { CategoriesProvider } from "./context/categoriesContext";
import { TagsProvider } from "./context/tagsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IsLoggedInProvider>
      <GlobalInfoProvider>
        <TorrentListProvider>
          <CategoriesProvider>
            <TagsProvider>
              <UpdateDataProvider>
                <App />
              </UpdateDataProvider>
            </TagsProvider>
          </CategoriesProvider>
        </TorrentListProvider>
      </GlobalInfoProvider>
    </IsLoggedInProvider>
  </React.StrictMode>
);
