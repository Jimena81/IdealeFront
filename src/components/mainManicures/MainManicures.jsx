import { Link } from "react-router-dom"
import pedicure from "../../assets/pedicura.jpeg"
import manicure from "../../assets/manicure.jpg"

function MainManicures() {
  return (
    <div >
      <div className="treatments-title p-20 text-center text-xl">
        <h1 className="text-3xl">Tratamientos</h1>
        <a href="/"><span className="hover:text-[#943849] text-black">Home /</span></a> <span className="opacity-65 ">Manicuras & Co.</span>
      </div>
      <div>
        <div className='container-facials flex gap-6 m-auto justify-center cursor-pointer flex-wrap'>
          <div className='manicure relative'>
            <Link to={'/manicures'}><img className='grid_image w-80' src={manicure} alt="manicura" /></Link>
            <p className="title-grig-image absolute top-0 left-0 text-white p-2 font-semibold">MANICURAS</p>
          </div>
          <div className='pedicure relative'>
          <Link to={'/pedicures'}><img className='grid_image w-80' src={pedicure} alt="pedicura" /></Link>
            <p className="title-grig-image absolute top-0 left-0 text-white p-2 font-semibold">PEDICURAS</p>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default MainManicures