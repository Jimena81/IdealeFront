import { Link } from "react-router-dom"
import logo from '../../assets/logoIdeale.jpg'
import './footer.css'

function Footer() {
  return (
    <div className='container-footer p-4'>
        <div className='head-footer flex justify-evenly'>
            <Link to={'/'}><img src={logo} alt='logo' className='img-logo-footer w-12 h-auto cursor-pointer '></img></Link>
            <div className='adress-container mt-3 flex flex-col items-center text-slate-100'>
                <p>C/ Asturias 18, 33004 Oviedo </p>
                <p>+34 984 068 532 // +34 656 45 99 52</p>
                <p>ideale93@gmail.com</p>
            </div>
            <div className="icons-container mt-5 gap-4 mb-2 cursor-pointer flex">
                <a href="https://www.facebook.com/share/166DutDUq6/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook text-2xl"></i>
                </a>
                <a href="https://www.instagram.com/ideale_estetica?igsh=OXpjOXgxc3ZvYTIy" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram text-2xl"></i>
                </a>
            </div>

        </div>
        
        <hr></hr>

        <div className='flex flex-col items-center text-slate-100 mt-2 text-xs'>
            <div>
                <p>Ideale Laura&Marta © Copyright 2024</p> 
            </div>

        </div>
    </div>
  )
}

export default Footer