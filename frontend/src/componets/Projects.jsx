import { useState } from "react";
import { ButtonPlane } from "./UI/Buttons";

import { slides } from "../data";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState("");

  const prevSlide = () => {
    setAnimation("animate-slideRight");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setAnimation("");
    }, 500);
  };

  const nextSlide = () => {
    setAnimation("animate-slideLeft");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setAnimation("");
    }, 500);
  };

  return (
    <section className="w-full h-screen flex flex-col gap-4 justify-center items-center text-text relative">
      <figure
        className={`w-[80%] max-sm:w-[95%] h-[60%] border border-textYellow flex justify-center items-center overflow-hidden`}
      >
        <div className={`text-center text-xl font-semibold ${animation}`}>
          {slides[currentSlide].content}
        </div>
      </figure>
      <div className="flex justify-center items-center gap-4">
        <ButtonPlane onClick={prevSlide}>
          <i className="fa-solid fa-arrow-left"></i>
        </ButtonPlane>
        <ButtonPlane onClick={nextSlide}>
          <i className="fa-solid fa-arrow-right"></i>
        </ButtonPlane>
      </div>
    </section>
  );
};

export default Slider;
