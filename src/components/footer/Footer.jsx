import logoFooter from '../../assets/TSL-logotipo.png'
import './footer.css'

function Footer() {
  return (
    <div className='container-footer p-4'>
        <div className='head-footer flex justify-evenly'>
            <img src={logoFooter} alt='logo' className='img-logo-footer w-24 cursor-pointer '></img>
            <div className='adress-container mt-3 flex flex-col items-center text-slate-100'>
                <p>C/ Asturias 18, 33004 Oviedo // +34 984 068 532</p>
                <p>info@idealelaura&marta.es</p>
                <p>www.ideale.es</p>
            </div>
            <div className='icons-container mt-5 gap-4 mb-2 cursor-pointer'>
                <i className="fa-brands fa-facebook w-10"></i>
                <i className="fa-brands fa-square-instagram"></i>
            </div>
        </div>
        
        <hr></hr>

        <div className='flex flex-col items-center text-slate-100 mt-2 text-xs'>
            <div>
                <p>Ideale Laura&Marta © Copyright 2024</p> 
            </div>
            <div className='flex gap-4 text-slate-100 cursor-pointer'>
                <span>Aviso legal</span> <span>Política de cookies</span>

            </div>
            <div>

            </div>

        </div>
    </div>
  )
}

export default Footer