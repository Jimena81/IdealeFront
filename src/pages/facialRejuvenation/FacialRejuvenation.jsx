import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navBar/NavBar"
import Higiene from "../../assets/peeling.webp";
import TreatmentsCard from "../../components/treatmentsCard/TreatmentsCard";
import { Link } from 'react-router-dom';

function FacialRejuvenation() {
  return (
    <div>
        <Banner/>
        <NavBar/>
        <div className="treatments-title p-20 text-center text-xl">
          <h1 className="text-3xl">Tratamientos</h1>
          <Link to={'/'}><span className="hover:text-[#943849] text-black">Home /</span></Link>
          <Link to={'/FacialsTreatments'}><span className="hover:text-[#943849] text-black">Facial /</span></Link>
          <span className="opacity-65 ">Rejuvenecimiento</span>
        </div>
        <div className="flex gap-2 m-2 flex-wrap">
            <TreatmentsCard image={Higiene} name="Mascarillas" price="25€"/>
            <TreatmentsCard image={Higiene} name="Mascarillas" price="25€"/>
            <TreatmentsCard image={Higiene} name="Mascarillas" price="25€"/>
            <TreatmentsCard image={Higiene} name="Mascarillas" price="25€"/>
        </div>
    <Footer/>




    </div>
  )
}

export default FacialRejuvenation