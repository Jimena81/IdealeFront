
import sisters from "../../assets/sisters2.jpg"
import CarouselCentro from "../carouselCentro/CarouselCentro"

function AboutUsMain() {
  return (
    <div className="container xl:w-9/12 xl:m-auto">
    <div className="aboutUs-title p-20 text-center text-xl">
        <h1 className="text-3xl">Conócenos</h1>
        <a href="/"><span className="hover:text-[#943849] text-black">Home /</span></a> <span className="opacity-65 ">Conócenos</span>
    </div>
    <div className="img-text-aboutUs flex flex-col lg:flex-row xl:flex-row w-9/12 m-auto mb-10 justify-start">
        <img src={sisters} className="img-sisters w-50 h-50 xl:w-3/6 h-1/6 lg:w-3/5 mr-5"></img>
        <div className="flex flex-col">
        <h3 className="text-xl text-[#943849]  xl:text-4xl mb-3 md:text-4xl mt-5">¿Quiénes somos?</h3>
        <p className="">En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. </p>
        </div>
    
        </div>
        <div className="flex flex-col w-9/12 m-auto">
            <h3 className="text-xl text-[#943849] text-start xl:text-4xl mt-4 mb-3  md:text-4xl ">El Centro</h3>
            <p className="mt-4 mb-5  text-start xl:m-auto xl:mb-10  md:mb-5 mr-3">En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.</p>
            <CarouselCentro/>
        </div>
      
    </div>
  )
}

export default AboutUsMain