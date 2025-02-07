import React from "react";
import Router from "./shared/Router";
import { RefactoryProvider } from "./context/Context";

const App = () => {
  return (
    <RefactoryProvider>
      <Router />
    </RefactoryProvider>
  );
};

export default App;
