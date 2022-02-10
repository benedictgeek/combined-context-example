import React from "react";
import ReactDOM from "react-dom";
import Parent from "./parent";
import { AppContextProvider } from "./state/appContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <Parent />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
