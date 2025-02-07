import React from "react";
import Router from "./shared/Router";
import store from "./redux/config/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
