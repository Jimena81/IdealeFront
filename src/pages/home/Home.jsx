
import NavBar from '../../components/navBar/NavBar'
import CarouselHome from '../../components/carouselHome/CarouselHome'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/banner/Banner'
import CategoriesHome from '../../components/categoriesHome/CategoriesHome'

function Home() {
  return (
    <>

        <Banner/>
        <NavBar/>
        <CarouselHome/>
        <CategoriesHome/>
        <Footer/>
    </>
  )
}

export default Home