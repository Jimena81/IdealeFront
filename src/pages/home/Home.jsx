
import NavBar from '../../components/navBar/NavBar'
import CarouselHome from '../../components/carouselHome/CarouselHome'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div className='home-container'>
    
        <NavBar/>
        <CarouselHome/>
        <Footer/>
    </div>
  )
}

export default Home