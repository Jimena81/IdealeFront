import { Link } from "react-router-dom"
import facialMassage from "../../assets/masajeFacial.jpg"
import bodyMassage from "../../assets/masajeCorporal.jpg"




function MainMassages() {
  return (
    <div>

<div className="treatments-title p-20 text-center text-xl">
        <h1 className="text-3xl">Tratamientos</h1>
        <a href="/"><span className="hover:text-[#943849] text-black">Home /</span></a> <span className="opacity-65 ">Masajes</span>
      </div>
      <div>
        <div className='container-massages flex gap-6 m-auto justify-center cursor-pointer flex-wrap'>
          <div className='bodyMassage relative'>
          <Link to={'/bodyMassages'}><img className='grid_image w-80' src={bodyMassage} alt="masaje corporal" /></Link>
            <p className="title-grig-image absolute top-0 left-0 text-white p-2 font-semibold">CORPORALES</p>
          </div>
          
        </div>
        
      </div>







    </div>
  )
}

export default MainMassages