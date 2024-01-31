import  { useState, useEffect } from 'react';
import firstImgCarousel from '../../assets/tratamiento1.jpg';
import secondImgCarousel from '../../assets/tratamiento2.jpg'

const CarouselHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 2) % 2);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      image: firstImgCarousel,
      text: 'Los mejores Tratamientos',
    },
    {
      image: secondImgCarousel,
      text: 'En buenas manos',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="relative w-full h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-shadow duration-[600ms] ease-in-out ${
              currentSlide === index ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img src={slide.image} className="block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-gray md:block">
              <h5 className="text-xl">{slide.text}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={prevSlide}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={nextSlide}
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Carousel indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
              currentSlide === index ? 'opacity-100' : 'opacity-10'
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselHome;

