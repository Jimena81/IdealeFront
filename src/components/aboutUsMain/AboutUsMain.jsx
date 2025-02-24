
import sisters from "../../assets/sisters2.jpg"
import CarouselCentro from "../carouselCentro/CarouselCentro"

function AboutUsMain() {
  return (
    <div className="container xl:w-9/12 m-auto">
    <div className="aboutUs-title p-20 text-center text-xl">
        <h1 className="text-3xl">Conócenos</h1>
        <a href="/"><span className="hover:text-[#943849] text-black">Home /</span></a> <span className="opacity-65 ">Conócenos</span>
    </div>
    <div className="img-text-aboutUs flex flex-col lg:flex-row xl:flex-row w-9/12 m-auto mb-10 items-center">
        <img src={sisters} className="img-sisters w-50 h-50 xl:w-3/6 h-1/6 lg:w-3/5 mr-5"></img>
        <div className="flex flex-col">
          <h3 className="text-xl text-[#943849]  xl:text-4xl mb-3 md:text-4xl mt-5">¿Quiénes somos?</h3>
          <p className="aboutUs-text text-xl">En Ideale, la belleza y el bienestar están en manos de dos expertas apasionadas por el mundo de la estética. Laura y Marta combinan juventud, innovación y años de experiencia para ofrecerte tratamientos personalizados que realzan tu belleza natural. Desde el primer día, han trabajado con dedicación para crear un espacio donde cada cliente se sienta especial, ofreciendo un enfoque profesional y cercano. Su misión es clara: ayudar a verte y sentirte increíble, con tratamientos adaptados a tus necesidades y un trato de confianza que marca la diferencia.<br></br>✨ Pon tu belleza en manos expertas. Reserva <a href="/contacto" className="underline cursor-pointer text-[#943849]">tu cita</a> hoy. ✨ </p>
        </div>
    
        </div>
        <div className="flex flex-col w-9/12 m-auto">
            <h3 className="text-xl text-[#943849] text-start xl:text-4xl mt-4 mb-3  md:text-4xl ">El Centro</h3>
            <p className="mt-4 mb-5 text-xl text-start xl:m-auto xl:mb-10  md:mb-5 mr-3">En Ideale, tu piel, cuerpo y bienestar son nuestra prioridad. Somos un espacio dedicado al cuidado estético, donde combinamos innovación y tratamientos personalizados para realzar tu belleza natural. Disfruta de nuestros servicios de tratamientos faciales y corporales, depilación, masajes relajantes y mucho más, todo en un ambiente pensado para tu comodidad y relajación. Confía en nosotras y descubre una experiencia única que te hará sentir y verte mejor que nunca.<br></br>
            <br></br>
            ✨ Reserva <a href="/contacto" className="underline cursor-pointer text-[#943849] ">tu cita</a> hoy y déjate cuidar. ✨</p>
            <CarouselCentro/>
        </div>
      
    </div>
  )
}

export default AboutUsMain