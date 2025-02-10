/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import welcome from '../../assets/bienvenida.JPEG';
import room1 from '../../assets/sala1.JPEG';
import room2 from '../../assets/sala2.JPG';
import manicure from '../../assets/manicura.JPEG';


function CarouselCentro() {
  const [currentSlide, setCurrentSlide] = useState(0);
  //const [timer, setTimer] = useState(null);
  const slides = [
    {
      image: welcome,
      label: '¡Bienvenidos!',
      content: 'Reserva tu cita',
    },
    {
      image: room1,
      label: 'Sala uno',
      content: 'Sala de pedicura y depilación',
    },
    {
      image: room2,
      label: 'Sala dos',
      content: 'Sala de masajes y pestañas',
    },
    {
      image: manicure,
      label: 'Zona de manicura',
      content: 'Manicuras normales y permanentes.',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 7000); 

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div>
        <div id="carouselExampleCaptions" className="relative w-full m-auto" data-te-carousel-init="" data-te-ride="carousel">
          <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-te-carousel-indicators="">
            {slides.map((slide, index) => (
              <button
                key={index}
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to={index}
                className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] ${
                  index === currentSlide ? 'opacity-100' : 'opacity-50'
                } transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
                aria-current={index === currentSlide ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`relative float-left ${
                  index === currentSlide ? '' : '-mr-[100%] hidden'
                } w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
                data-te-carousel-active=""
                data-te-carousel-item=""
                style={{ backfaceVisibility: 'hidden' }}
              >
                <img src={slide.image} className="block w-full" alt={`Slide ${index + 1}`} />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">{slide.label}</h5>
                  <p>{slide.content}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            onClick={prevSlide}
          >
            <span className="inline-block h-8 w-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
          </button>
          <button
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            onClick={nextSlide}
          >
            <span className="inline-block h-8 w-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CarouselCentro;
