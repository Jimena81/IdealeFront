import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navBar/NavBar"
import facialWaxing from "../../assets/depilacionFacial.png"
import TreatmentsCard from "../../components/treatmentsCard/TreatmentsCard";
import { Link } from 'react-router-dom';

function FacialWaxing() {
  return (
    <div>
        <Banner/>
        <NavBar/>
        <div className="treatments-title p-20 text-center text-xl">
          <h1 className="text-3xl">Tratamientos</h1>
          <Link to={'/'}><span className="hover:text-[#943849] text-black">Home /</span></Link>
          <Link to={'/waxing'}><span className="hover:text-[#943849] text-black">Depilación /</span></Link>
          <span className="opacity-65 ">Depilación Facial</span>
        </div>
        <div className="flex gap-2 m-2 flex-wrap justify-center">
        <TreatmentsCard image={facialWaxing} name="Labio, mentón" price="25€"/>
        <TreatmentsCard image={facialWaxing} name="Cejas" price="25€"/>
        <TreatmentsCard image={facialWaxing} name="Rostro" price="25€"/>
        
        </div>
        <Footer/>
    </div>
  )
}

export default FacialWaxing