import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navBar/NavBar"
import manicure from "../../assets/manicure.jpg";
import TreatmentsCard from "../../components/treatmentsCard/TreatmentsCard";
import { Link } from 'react-router-dom';

function Manicures() {
  return (
    <div>
        <Banner/>
        <NavBar/>
        <div className="treatments-title p-20 text-center text-xl">
            <h1 className="text-3xl">Tratamientos</h1>
            <Link to={'/'}><span className="hover:text-[#943849] text-black">Home /</span></Link>
            <Link to={'/Manicures&Co'}><span className="hover:text-[#943849] text-black">Manicures&Co /</span></Link>
            <span className="opacity-65 ">Manicuras</span>
        </div>
         <div className="flex gap-2 m-2 flex-wrap justify-center">
            <TreatmentsCard image={manicure} name="Clásica" price="13€"/>
            <TreatmentsCard image={manicure} name="Permanente" price="23€"/>
            <TreatmentsCard image={manicure} name="Limar y pintar" price="9€"/>
            <TreatmentsCard image={manicure} name="Tratamiento de Parafina" price="10€"/>
        </div>
        <Footer/>
    </div>
  )
}

export default Manicures