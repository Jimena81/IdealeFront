import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navBar/NavBar"
import pedicure from "../../assets/pedicura.jpeg";
import TreatmentsCard from "../../components/treatmentsCard/TreatmentsCard";
import { Link } from 'react-router-dom';



function Pedicures() {
  return (
    <div>
    <Banner/>
    <NavBar/>
    <div className="treatments-title p-20 text-center text-xl">
          <h1 className="text-3xl">Tratamientos</h1>
          <Link to={'/'}><span className="hover:text-[#943849] text-black">Home /</span></Link>
          <Link to={'/Manicures&Co'}><span className="hover:text-[#943849] text-black">Manicures&Co /</span></Link>
          <span className="opacity-65 ">Pedicuras</span>
    </div>
    <div className="flex gap-2 m-2 flex-wrap justify-center">
        <TreatmentsCard image={pedicure} name="Clásica" price="25€"/>
        <TreatmentsCard image={pedicure} name="Permanente" price="25€"/>
        {/* <TreatmentsCard image={manicure} name="Mascarillas" price="25€"/>
        <TreatmentsCard image={manicure} name="Mascarillas" price="25€"/> */}
    </div>
    <Footer/>





    </div>
  )
}

export default Pedicures