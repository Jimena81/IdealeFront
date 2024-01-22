
import './navBar.css'
import { useState } from 'react';


function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <nav id="header" className="w-full  bg-white shadow-lg border-b border-gray-400 ">
          <div className="w-full flex items-center justify-center mt-0 px-6 py-2 ">
            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
              <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-black-500`} aria-hidden="true"></i>
            </label>
            <input type="checkbox" id="menu-toggle" className="hidden" checked={isMenuOpen} onChange={toggleMenu} />
            <div className={`md:flex md:items-center md:w-auto w-full ${isMenuOpen ? 'block' : 'hidden'}`} id="menu">
              <nav>
                <ul className="md:flex content-center justify-between text-base text-gray-500 pt-4 md:pt-0">
                  <li><a className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2" href="#">Conócenos</a></li>
                  <li><a className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2" href="#">Tratamientos</a></li>
                  <li><a className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2" href="#">Blog</a></li>
                  <li><a className="inline-block no-underline hover:text-black font-medium text-xl py-2 px-4 lg:-ml-2" href="#">Contacto</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
