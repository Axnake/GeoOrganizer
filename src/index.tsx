import ReactDOM from 'react-dom/client'
import App from "./containers/App";
import './styles/index.css'
import {BrowserRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)