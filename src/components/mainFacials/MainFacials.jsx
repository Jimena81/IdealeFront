import "./mainFacials.css";

import Higiene from "../../assets/peeling.jpg";
import { Link } from "react-router-dom";


function MainFacials() {
  return (
    <div >
      <div className="treatments-title p-20 text-center text-xl">
        <h1 className="text-3xl">Tratamientos</h1>
        <a href="/"><span className="hover:text-[#943849] text-black">Home /</span></a> <span className="opacity-65 ">Facial</span>
      </div>
      <div>
        <div className='container-facials flex gap-6 m-auto justify-center cursor-pointer flex-wrap'>
          <div className='hygiene relative'>
            <Link to={'/FacialHygiene'}><img className='grid_image w-80' src={Higiene} alt="higiene" /></Link>
            <p className="title-grig-image absolute top-0 left-0 text-white p-2 font-semibold">HIGIENES & PEELINGS</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default MainFacials;
