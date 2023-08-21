import StartPage from "../StartPage";
import {FC} from "react";
import {ToastContainer} from "react-toastify";

const App: FC = () => {

  return (
    <>
        <StartPage/>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </>
  )
}

export default App
