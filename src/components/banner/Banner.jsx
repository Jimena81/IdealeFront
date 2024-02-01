

import mainLogo from '../../assets/TSL-logotipo.png';


function Banner() {
  return (
    <div>
        <a className='flex items-center justify-center  p-4 cursor-pointer'href='/'>
          <img className='block w-28' src={mainLogo} alt="logo principal" />
        </a>
    </div>
  )
}

export default Banner