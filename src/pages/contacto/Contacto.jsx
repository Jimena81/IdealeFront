import { Link } from "react-router-dom"
import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navBar/NavBar"

function Contacto() {
  return (
    <div>
    <Banner/>
    <NavBar/>
        <div className="treatments-title p-20 text-center text-xl">
          <h1 className="text-3xl">Tratamientos</h1>
          <Link to={'/'}><span className="hover:text-[#943849] text-black">Home /</span></Link>
          <span className="opacity-65 ">Contacto</span>
        </div>
        <div className="flex justify-evenly flex-col md:flex-row sm:flex-row   ">
        <div className="p-10 flex flex-col gap-4 ">
            <h2 className="text-[#943849] text-3xl font-bold">CITA PREVIA</h2>
            <span className="text-2xl text-gray-600">+34 984 06 85 32</span>
            <span className="text-2xl text-gray-600">ideale93@gmail.com</span>

        </div>
        <div className="p-10 flex flex-col gap-4 ">
        <h2 className="text-[#943849] text-3xl font-bold">HORARIO</h2>
            <span className="text-2xl text-gray-600">De lunes a viernes de 9:30h a 20:00h</span>
            <span className="text-2xl text-gray-600">Sábados de 9:00h a 14:00h</span>
            <span className="text-2xl text-gray-600">Domingos y festivos cerrado</span>
        </div>
        </div>
    <Footer/>
    </div>
  )
}

export default Contacto