import {BrowserRouter} from "react-router-dom";
import StartPage from "../StartPage";
import {FC} from "react";

const App: FC = () => {

  return (
    <>
        <BrowserRouter>
            <StartPage/>

        </BrowserRouter>
    </>
  )
}

export default App
