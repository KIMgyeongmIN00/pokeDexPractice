import React, { useEffect } from "react";
import { clearToast } from "../redux/slices/toastSlice";
import { useDispatch, useSelector } from "react-redux";
import { Slide, toast, ToastContainer } from "react-toastify";

const ToastManager = () => {
  const message = useSelector((state) => state.toast.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      toast(message, {
        onClose: () => dispatch(clearToast()),
      });
    }
  }, [message, dispatch]);

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
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
