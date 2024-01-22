import './categoriesHome.css'

import faciales from '../../assets/faciales.webp'
import manicuras from '../../assets/manicuras.jpg'
import masajes from '../../assets/masajes.jpg'
import depilacion from '../../assets/depilacion.jpg'

function CategoriesHome() {
  return (
    <div className="categories-container mt-8 p-4 grid grid-rows-4 grid-flow-col gap-4">
        <div>
            <div className='container-treatments'>
                <a><img src={faciales} alt="tratamientos faciales"></img></a>
                <div className="centrado">FACIALES</div>
           </div>
           <div className='container-treatments row-span-3'>
                <a><img src={manicuras} alt="manicuras"></img></a>
                <div className="centrado">MANICURAS</div>
           </div>
           <div className='container-treatments'>
                <a><img src={masajes} alt="masajes"></img></a>
                <div className="centrado">MASAJES</div>
           </div>
           <div className='container-treatments'>
                <a><img src={depilacion} alt="depilacion"></img></a>
                <div className="centrado">DEPILACIÓN</div>
           </div>
           <a><img src={faciales} alt="tratamientos faciales"></img></a>
           <a><img src={faciales} alt="tratamientos faciales"></img></a>
        </div>

    </div>
  )
}

export default CategoriesHome