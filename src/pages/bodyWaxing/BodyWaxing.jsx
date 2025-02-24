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
            <TreatmentsCard image={bodyWaxing} name="Axilas" price="5€"/>
            <TreatmentsCard image={bodyWaxing} name="Brazos" price="10€"/>
            <TreatmentsCard image={bodyWaxing} name="Medias Piernas" price="11€"/>
            <TreatmentsCard image={bodyWaxing} name="Piernas enteras" price="21€"/>
            <TreatmentsCard image={bodyWaxing} name="Ingles completas" price="15€"/>
            <TreatmentsCard image={bodyWaxing} name="Ingles básicas" price="10€"/>
            <TreatmentsCard image={bodyWaxing} name="Pecho o espalda" price="17€"/>   
        </div>
        <Footer/>
    </div>
  )
}

export default BodyWaxing