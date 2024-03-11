import { Link } from "react-router-dom"
import pestanhas from "../../assets/pestanhas.jpg";


function MainLashes() {
    return (
      <div>
          <div className="treatments-title p-20 text-center text-xl">
          <h1 className="text-3xl">Tratamientos</h1>
          <Link to={'/'}><span className="hover:text-[#943849] text-black">Home /</span></Link><span className="opacity-65 ">Pestañas</span>
        </div>
        <div>
          <div className='container-lashes flex gap-6 m-auto justify-center cursor-pointer flex-wrap'>
            <div className='relative'>
              <Link to={'/lashes'}><img className='grid_image w-80' src={pestanhas} alt="cejas" /></Link>
              <p className="title-grig-image absolute top-0 left-0 text-white p-2 font-semibold">PESTAÑAS</p>
            </div>
            
            
          </div>
          
        </div>
  
  
  
  
      </div>
    )
  }
  
  export default MainLashes