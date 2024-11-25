import { useState, forwardRef } from "react";

import { ButtonPlane, TextButton } from "./UI/Buttons";
import { slides } from "../data";

const Slider = forwardRef(function ({ id }, ref) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState("");

  const prevSlide = () => {
    setAnimation("slideRight");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setAnimation("");
    }, 50);
  };

  const nextSlide = () => {
    setAnimation("slideLeft");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setAnimation("");
    }, 50);
  };

  const goToLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section
      ref={ref}
      id={id}
      className="w-full h-screen flex flex-col gap-4 justify-center items-center text-text relative"
    >
      <figure className="w-[80%] max-sm:w-[95%] h-[60%] max-sm:h-[70%] max-xl:h-[80%] border border-textYellow overflow-hidden relative rounded-md animateScrollAppear">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full max-sm:px-2 max-xl:px-4 max-sm:py-1 flex max-xl:flex-col max-sm:flex-col justify-around items-center transition-all duration-500 ${
              index === currentSlide
                ? animation
                : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.id}
              className="w-[40%] max-xl:w-[60%] max-sm:w-full h-auto object-cover"
            />
            <div className="w-[50%] max-xl:w-full max-sm:w-full flex flex-col justify-around items-start gap-4">
              <h1 className="text-2xl text-textYellow">{slide.title}</h1>
              <p>{slide.paragraph}</p>
              <div className="w-full flex justify-start items-center gap-4">
                {slide.githubLink && (
                  <ButtonPlane onClick={() => goToLink(slide.githubLink)}>
                    Github Link
                  </ButtonPlane>
                )}
                {slide.liveLink && (
                  <TextButton onClick={() => goToLink(slide.liveLink)}>
                    Live Link
                  </TextButton>
                )}
              </div>
            </div>
          </div>
        ))}
      </figure>
      <div className="flex justify-between items-center w-[80%] max-sm:w-[95%] animateScrollAppear">
        <div className="flex justify-center items-center gap-4 w-full">
          <ButtonPlane onClick={prevSlide}>
            <i className="fa-solid fa-arrow-left"></i>
          </ButtonPlane>
          <div className="flex justify-around items-center gap-1">
            {slides.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`h-2 w-2 rounded-full bg-${
                    currentSlide + 1 === item.id ? "textYellow" : "text"
                  }`}
                ></div>
              );
            })}
          </div>
          <ButtonPlane onClick={nextSlide}>
            <i className="fa-solid fa-arrow-right"></i>
          </ButtonPlane>
        </div>
      </div>
    </section>
  );
});

export default Slider;
