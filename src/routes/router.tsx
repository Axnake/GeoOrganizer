import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";
import {Routes, Route} from "react-router-dom";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<SignIn />}/>
                <Route path='/auth/sign-up' element={<SignUp />}/>
                <Route path='/auth/sign-in' element={<SignIn />}/>
            </Routes>
        </>
    )
}

export default Routers;
