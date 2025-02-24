import Banner from "../../components/banner/Banner";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import TreatmentsCard from "../../components/treatmentsCard/TreatmentsCard";
import pestanhas from "../../assets/pestanhas.jpg";
import { Link } from "react-router-dom";

function Lashes() {
  return (
    <div>
        <Banner/>
        <NavBar/>
        <div className="treatments-title p-20 text-center text-xl">
            <h1 className="text-3xl">Tratamientos</h1>
            <Link to={'/'}><span className="hover:text-[#943849] text-black">Home /</span></Link>
            <span className="hover:text-[#943849] text-black">Pestañas</span>
        </div>
         <div className="flex gap-2 m-2 flex-wrap justify-center">
            <TreatmentsCard image={pestanhas} name="Extensión pestañas visón" price="65€"/>
            <TreatmentsCard image={pestanhas} name="Mantenimiento de pestañas" price="33€"/>
            <TreatmentsCard image={pestanhas} name="Tinte de pestañas" price="10€"/>
            <TreatmentsCard image={pestanhas} name="Lifting de pestañas" price="27€"/>
        </div>
        <Footer/>
    </div>
  )
}

export default Lashes