import './categoriesHome.css'

import faciales from '../../assets/faciales.jpg'
import manicuras from '../../assets/manicuras.jpg'
import masajes from '../../assets/masajes2.jpg'
import depilacion from '../../assets/depilacion.jpg'
import pestanhas from '../../assets/pestanhas.jpg'
import { Link } from 'react-router-dom'



function CategoriesHome() {
  return (
   
        <div className='container-treatments'>
            <div className='facials'>
               <Link to={'/FacialsTreatments'}><img className='grid_img' src={faciales} alt="tratamientos faciales"></img></Link>
               <p className="title-grig-img">FACIALES</p>
           </div>
           <div className='manicures'>
               <Link to={'/manicures&Co'}><img className='grid_img' src={manicuras} alt="manicuras"></img></Link>
               <p className="title-grig-img">MANICURAS&Co.</p>
           </div>
           <div className='massages'>
               <Link to={'/massages'}><img className='grid_img' src={masajes} alt="masajes"></img></Link>
               <p className="title-grig-img">MASAJES</p>
           </div>
           <div className='waxing'>
                <a><img className='grid_img' src={depilacion} alt="depilacion"></img></a>
                <p className="title-grig-img">DEPILACIÓN</p>
           </div>
            <div className='pestanhas'>
                <a><img className='grid_img' src={pestanhas} alt="pestanhas"></img></a>
                <p className="title-grig-img">PESTAÑAS</p>
           </div> 
           <div className='gift'>
                <a><img className='grid_img' src={pestanhas} alt="regalo"></img></a>
                <p className="title-grig-img">¿NO SABES QUE REGALAR?</p>
           </div> 
        </div>

   




  )
}

export default CategoriesHome