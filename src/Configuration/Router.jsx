import { BrowserRouter, Routes, Route} from "react-router-dom";
//import { BrowserRouter, Routes, Route } from "../../node_modules/react-router-dom";
import Home from '../pages/home/Home';





const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}></Route>
                

            </Routes>
        </BrowserRouter>
    );
};

export default Router;