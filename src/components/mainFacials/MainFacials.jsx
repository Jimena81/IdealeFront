import "./mainFacials.css";

import Higiene from "../../assets/peeling.webp";
import Hidratacion from "../../assets/hidratacion.jpg";
import rejuvenecimiento from "../../assets/rejuv.jpg";
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
          <div className='moisturizing relative'>
          <Link to={'/FacialMoisturizing'}><img className='grid_image w-80' src={Hidratacion} alt="hidratacion" /></Link>
            <p className="title-grig-image absolute top-0 left-0 text-white p-2 font-semibold">HIDRATACIÓN & LUMINOSIDAD</p>
          </div>
          <div className='rejuvenation relative'>
          <Link to={'/FacialRejuvenation'}><img className='grid_image w-96 h-80' src={rejuvenecimiento} alt="rejuvenecimiento" /></Link>
            <p className="title-grig-image absolute top-0 left-0 text-white p-2 font-semibold">REJUVENECIMIENTO</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default MainFacials;
