import  { useState } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div>
        <nav id="header" className="w-full bg-white shadow-lg border-b border-gray-400">
          <div className="w-full flex items-start justify-center mt-0 px-6 py-2">
            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
              <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-black-500`} aria-hidden="true"></i>
            </label>
            <input type="checkbox" id="menu-toggle" className="hidden" checked={isMenuOpen} onChange={toggleMenu} />
            <div className={`md:flex md:items-center md:w-auto w-full ${isMenuOpen ? 'block' : 'hidden'}`} id="menu">
              <ul className="md:flex content-center justify-between text-base text-gray-500 pt-4 md:pt-0">
                <li><a className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2" href="/AboutUS">Conócenos</a></li>
                <li>
                  <div className="dropdown">
                    <button onClick={toggleDropdown} className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2 dropdown-toggle" style={{ outline: 'none' }}>Tratamientos</button>
                    {isDropdownOpen && (
                      <div className="dropdown-menu flex flex-col text-lg divide-y-4 divide-[#943849]/25 ml-2">
                        <a href="/FacialsTreatments">Faciales</a>
                        <a href="#">Manicuras & Co.</a>
                        <a href="#">Masajes</a>
                        <a href="#">Depilación</a>
                        <a href="#">Pestañas</a>
                        <a href="#">Bono regalo</a>
                      </div>
                    )}
                  </div>
                </li>
                <li><a className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2" href="#">Blog</a></li>
                <li><Link to={'/contacto'} className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2">Contacto</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
