import { useState } from "react";
import { slides } from "../data/data";

function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSLide = currentIndex === 0;
    const newIndex = isFirstSLide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSLide = currentIndex === slides.length - 1;
    const newIndex = isLastSLide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="group relative h-[400px] w-[100%] pt-[20px] md:w-[80%]">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="h-full w-full bg-cover bg-center duration-500"
      ></div>
      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        className="absolute right-[20px]  top-[50%] z-30 hidden  translate-y-[-50%] cursor-pointer text-xl text-white group-hover:block"
      >
        <i className="fa-solid fa-angles-right"></i>
      </div>

      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        className="absolute left-[20px] top-[50%] z-30 hidden translate-y-[-50%] cursor-pointer text-xl text-white group-hover:block"
      >
        <i className="fa-solid fa-angles-left"></i>
      </div>
      {/* OverLay */}
      <div className="absolute left-0 top-[20px] h-[95%] w-[100%] bg-primary opacity-[0.4]"></div>
    </div>
  );
}

export default HomeSlider;
