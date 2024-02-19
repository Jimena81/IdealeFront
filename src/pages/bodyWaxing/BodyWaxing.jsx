import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navBar/NavBar"
import bodyWaxing from "../../assets/depilacionCuerpo.png"
import TreatmentsCard from "../../components/treatmentsCard/TreatmentsCard";
import { Link } from 'react-router-dom';


function BodyWaxing() {
  return (
    <div>
        <Banner/>
        <NavBar/>
        <div className="treatments-title p-20 text-center text-xl">
          <h1 className="text-3xl">Tratamientos</h1>
          <Link to={'/'}><span className="hover:text-[#943849] text-black">Home /</span></Link>
          <Link to={'/waxing'}><span className="hover:text-[#943849] text-black">Depilación /</span></Link>
          <span className="opacity-65 ">Depilación Corporal</span>
        </div>
        <div className="flex gap-2 m-2 flex-wrap justify-center">
            <TreatmentsCard image={bodyWaxing} name="Medios brazos, Axilas" price="25€"/>
            <TreatmentsCard image={bodyWaxing} name="Brazos" price="25€"/>
            <TreatmentsCard image={bodyWaxing} name="Madias Piernas" price="25€"/>
            <TreatmentsCard image={bodyWaxing} name="Piernas enteras" price="25€"/>
            <TreatmentsCard image={bodyWaxing} name="Ingles completas" price="25€"/>
            <TreatmentsCard image={bodyWaxing} name="Perianal" price="25€"/>
            <TreatmentsCard image={bodyWaxing} name="Línea del alba" price="25€"/>
            <TreatmentsCard image={bodyWaxing} name="Ingles normal" price="25€"/>
        </div>
        <Footer/>
    </div>
  )
}

export default BodyWaxing