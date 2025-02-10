import React from "react";
import { Slide, ToastContainer } from "react-toastify";

const ToastManager = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="light"
      transition={Slide}
    />
  );
};

export default ToastManager;
