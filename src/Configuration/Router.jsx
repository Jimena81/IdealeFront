import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/home/Home';
import AboutUs from "../pages/aboutUs/AboutUs";
import FacialsTreatments from "../pages/facialsTreatments/FacialsTreatments"
import FacialHygiene from "../pages/facialHygiene/FacialHygiene";
import FacialMoisturizing from "../pages/facialMoisturizing/FacialMoisturizing";
import FacialRejuvenation from "../pages/facialRejuvenation/FacialRejuvenation";
import Contacto from "../pages/contacto/contacto";
import Manicures_Co from "../pages/manicures&Co/Manicures_Co";
import Manicures from "../pages/manicures/Manicures";
import Pedicures from "../pages/pedicures/Pedicures"
import Massages from "../pages/massages/Massages";
import FacialMassages from "../pages/facialMassages/FacialMassages";
import BodyMassages from "../pages/bodyMassages/BodyMassages";
import Waxing from "../pages/waxing/Waxing"
import FacialWaxing from "../pages/facialWaxing/FacialWaxing";
import BodyWaxing from "../pages/bodyWaxing/BodyWaxing";
import Lashes from "../pages/lashes/lashes";





const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/aboutUs" element={<AboutUs/>}></Route>
                <Route path="/facialstreatments" element={<FacialsTreatments/>}></Route>
                    <Route path="FacialHygiene" element={<FacialHygiene/>}></Route>
                    <Route path="FacialMoisturizing" element={<FacialMoisturizing/>}></Route>
                    <Route path="FacialRejuvenation" element={<FacialRejuvenation/>}></Route>
                <Route path="/manicures&Co" element={<Manicures_Co/>}></Route>
                    <Route path="Manicures" element={<Manicures/>}></Route>
                    <Route path="Pedicures" element={<Pedicures/>}></Route>
                <Route path="/massages" element={<Massages/>}></Route>
                    <Route path="facialMassages" element={<FacialMassages/>}></Route>
                    <Route path="bodyMassages" element={<BodyMassages/>}></Route>
                <Route path="/waxing" element={<Waxing/>}></Route>
                    <Route path="facialWaxing" element={<FacialWaxing/>}></Route>
                    <Route path="bodyWaxing" element={<BodyWaxing/>}></Route> 
                <Route path="/lashes" element={<Lashes/>}></Route>

                <Route path="/contacto" element={<Contacto/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
