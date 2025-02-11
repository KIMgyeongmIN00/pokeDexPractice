import React from "react";
import Router from "./shared/Router";
import store from "./redux/config/store";
import { Provider } from "react-redux";
import ToastManager from "./components/ToastManager";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <ToastManager />
      <ScrollToTopButton />
    </Provider>
  );
};

export default App;
