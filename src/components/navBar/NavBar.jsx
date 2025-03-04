
import { useState } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
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
                <li><Link to={'/AboutUS'} className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2">Conócenos</Link></li>
                <li>
                  <div className="dropdown" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                    <button className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2 dropdown-toggle" style={{ outline: 'none' }}>Tratamientos</button>
                    {isDropdownOpen && (
                      <div className="dropdown-menu flex flex-col text-lg divide-y-4 divide-[#943849]/25 ml-2" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                        <Link to="/facialsTreatments">Faciales</Link>
                        <Link to="/manicures&Co">Manicuras & Co.</Link>
                        <Link to="/massages">Masajes</Link>
                        <Link to="/waxing">Depilación</Link>
                        <Link to="/lashes">Pestañas</Link>
                        <Link to="/gift">Bono regalo</Link>
                      </div>
                    )}
                  </div>
                </li>
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


