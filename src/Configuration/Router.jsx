import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/home/Home';
import AboutUs from "../pages/aboutUs/AboutUs";
import FacialsTreatments from "../pages/facialsTreatments/FacialsTreatments"
import FacialHygiene from "../pages/facialHygiene/FacialHygiene";
import FacialMoisturizing from "../pages/facialMoisturizing/FacialMoisturizing";
import FacialRejuvenation from "../pages/facialRejuvenation/FacialRejuvenation";
import Contacto from "../pages/contacto/contacto";




const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/aboutUs" element={<AboutUs/>}></Route>
                <Route path="/Facialstreatments" element={<FacialsTreatments/>}></Route>
                    <Route path="FacialHygiene" element={<FacialHygiene/>}></Route>
                    <Route path="FacialMoisturizing" element={<FacialMoisturizing/>}></Route>
                    <Route path="FacialRejuvenation" element={<FacialRejuvenation/>}></Route>


                <Route path="/contacto" element={<Contacto/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
