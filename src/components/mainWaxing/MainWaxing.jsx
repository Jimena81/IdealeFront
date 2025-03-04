import { Link } from "react-router-dom"
import facialWaxing from "../../assets/depilacionFacial.png"
import bodyWaxing from "../../assets/depilacionCuerpo.png"



function MainWaxing() {
  return (
    <div>
        <div className="treatments-title p-20 text-center text-xl">
        <h1 className="text-3xl">Tratamientos</h1>
        <Link to={'/'}><span className="hover:text-[#943849] text-black">Home /</span></Link><span className="opacity-65 ">Depilación</span>
      </div>
      <div>
        <div className='container-waxing flex gap-6 m-auto justify-center cursor-pointer flex-wrap'>
          <div className='facialWaxing relative'>
            <Link to={'/facialWaxing'}><img className='grid_image w-80' src={facialWaxing} alt="depilacion facial" /></Link>
            <p className="title-grig-image text-white p-2 font-semibold">FACIALES</p>
          </div>
          <div className='bodyWaxing relative'>
          <Link to={'/bodyWaxing'}><img className='grid_image w-80' src={bodyWaxing} alt="depilación corporal" /></Link>
            <p className="title-grig-image text-white p-2 font-semibold">CORPORALES</p>
          </div>
          
        </div>
        
      </div>




    </div>
  )
}

export default MainWaxing