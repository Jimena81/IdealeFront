import { BrowserRouter, Routes, Route} from "react-router-dom";
//import { BrowserRouter, Routes, Route } from "../../node_modules/react-router-dom";
import Home from '../pages/home/Home';
import AboutUs from "../pages/aboutUs/AboutUs";




const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/aboutUs" element={<AboutUs/>}></Route>

            </Routes>
        </BrowserRouter>
    );
};

export default Router;