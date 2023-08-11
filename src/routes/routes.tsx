import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";
import {Routes, Route} from "react-router-dom";

export default () => (
    <Routes>
        <Route path='/auth/sign-up' element={<SignUp />}/>
        <Route path='/auth/sign-in' element={<SignIn />}/>
    </Routes>
)


