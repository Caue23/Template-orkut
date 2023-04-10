import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../pages/home/index";
import {Login} from "../pages/login/index";
import { PrivateRoutes } from ".";


export const AppRoutes = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<PrivateRoutes/>}>
                <Route path="/home" element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}