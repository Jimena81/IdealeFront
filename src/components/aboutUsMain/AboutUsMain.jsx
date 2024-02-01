
import sisters from "../../assets/sisters.avif"
import CarouselCentro from "../carouselCentro/CarouselCentro"

function AboutUsMain() {
  return (
    <div className="container xl:w-9/12 xl:m-auto">
    <div className="aboutUs-title p-20 text-center text-xl">
        <h1>Conócenos</h1>
        <a href="/"><span className="hover:text-[#943849] text-black">Home /</span></a> <span className="opacity-65 ">Conócenos</span>
    </div>
    <div className="img-text-aboutUs flex flex-col  xl:flex-row bg-red-600 w-9/12 m-auto mb-10 justify-start">
        <img src={sisters} className="img-sisters w-50 h-50 xl:w-2/6 h-1/6 "></img>
        <div className="flex flex-col  bg-blue-200">
        <h3 className="text-xl text-[#943849] font-semibold ml-8 xl:text-4xl">¿Quiénes somos?</h3>
        <p className="p-10">En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas con sus pantuflos de lo mismo, los días de entre semana se honraba con su vellori de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años, era de complexión recia, seco de carnes, enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de Quijada o Quesada (que en esto hay alguna diferencia en los autores que deste caso escriben), aunque por conjeturas verosímiles se deja entender que se llama Quijana; pero esto importa poco a nuestro cuento; basta que en la narración dél no se salga un punto de la verdad.</p>
        </div>
    
        </div>
        <div className="flex flex-col w-9/12 m-auto">
            <h3 className="text-xl  text-[#943849] font-semibold  text-start xl:text-4xl mt-6 mb-6">El Centro</h3>
            <p className="mt-4 mr-24 ml-14 text-start xl:m-auto xl:mb-10 ">En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.</p>
            <CarouselCentro/>
        </div>
      
    </div>
  )
}

export default AboutUsMain