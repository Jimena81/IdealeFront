import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navBar/NavBar"
import './gift.css'
import gift from "../../assets/Gift.jpg"


function Gift() {
  return (
    <div>
        <Banner/>
        <NavBar/>
        <div className="giftImg ">
            <img src={gift} className="w-1/2"></img>
        </div>
        <div className="giftText ">
          <p>*Puedes adquirirlo directamente en nuestro centro.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Gift