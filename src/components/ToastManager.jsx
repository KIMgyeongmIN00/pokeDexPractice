import React from "react";
import { Slide, ToastContainer } from "react-toastify";

// toastify 설정값 컴포넌트화
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
