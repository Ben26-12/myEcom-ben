import { ToastContainer, Zoom } from "react-toastify";

function ToastProvider({ children }) {
  return (
    <>
      <ToastContainer
        autoClose={2500}
        pauseOnFocusLoss={false}
        transition={Zoom}
        draggable
        pauseOnHover={false}
      />
      {children}
    </>
  );
}

export default ToastProvider;
