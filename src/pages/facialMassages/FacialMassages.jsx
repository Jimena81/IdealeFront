import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navBar/NavBar"
import facialMassage from "../../assets/masajeFacial.jpg"
import TreatmentsCard from "../../components/treatmentsCard/TreatmentsCard";
import { Link } from 'react-router-dom';


function FacialMassages() {
  return (
    <div>
        <Banner/>
        <NavBar/>
        <div className="treatments-title p-20 text-center text-xl">
          <h1 className="text-3xl">Tratamientos</h1>
          <Link to={'/'}><span className="hover:text-[#943849] text-black">Home /</span></Link>
          <Link to={'/massages'}><span className="hover:text-[#943849] text-black">Masajes /</span></Link>
          <span className="opacity-65 ">Masajes Faciales</span>
        </div>
        <div className="flex gap-2 m-2 flex-wrap justify-center">
        <TreatmentsCard image={facialMassage} name="Drenaje Facial" price="25€"/>
        <TreatmentsCard image={facialMassage} name="Lifting Facial" price="25€"/>
        <TreatmentsCard image={facialMassage} name="Relax" price="25€"/>
        <TreatmentsCard image={facialMassage} name="Holístico" price="25€"/>
        </div>
        <Footer/>
    </div>
  )
}

export default FacialMassages