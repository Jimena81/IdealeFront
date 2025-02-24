import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navBar/NavBar"
import bodyMassage from "../../assets/masajeCorporal.jpg"
import TreatmentsCard from "../../components/treatmentsCard/TreatmentsCard";
import { Link } from 'react-router-dom';


function BodyMassages() {
  return (
    <div>
        <Banner/>
        <NavBar/>
        <div className="treatments-title p-20 text-center text-xl">
          <h1 className="text-3xl">Tratamientos</h1>
          <Link to={'/'}><span className="hover:text-[#943849] text-black">Home /</span></Link>
          <Link to={'/massages'}><span className="hover:text-[#943849] text-black">Masajes /</span></Link>
          <span className="opacity-65 ">Masajes Corporales</span>
        </div>
        <div className="flex gap-2 m-2 flex-wrap justify-center">
        <TreatmentsCard image={bodyMassage} name="Relax 30'" price="25€"/>
        <TreatmentsCard image={bodyMassage} name="Relax 60'" price="25€"/>
        <TreatmentsCard image={bodyMassage} name="Drenaje linfático" price="25€"/>
        <TreatmentsCard image={bodyMassage} name="Anti-celulítico" price="25€"/>
        </div>
        <Footer/>
    </div>
  )
}

export default BodyMassages