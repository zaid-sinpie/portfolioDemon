import { forwardRef } from "react";

import Card from "./UI/Card";
import { ButtonPlane, TextButton } from "./UI/Buttons";
import { dataForCards } from "../data.jsx";

const Hero = forwardRef(function Hero({ id }, ref) {
  return (
    <section
      ref={ref}
      id={id}
      className="w-full h-screen flex max-sm:flex-col-reverse justify-around max-sm:justify-center items-center max-sm:item-start gap-4 max-sm:mt-20 max-sm:pb-10"
    >
      <div className="w-[20%] max-2xl:w-[40%] max-sm:w-full flex flex-col justify-around items-center gap-[2rem] max-sm:gap-4">
        {dataForCards.map((item, index) => {
          return (
            <Card
              key={index}
              logo={item.logo}
              heading={item.heading}
              paragraph={item.paragraph}
            />
          );
        })}
      </div>
      <div className="w-[60%] max-sm:w-full max-sm:mt-[2rem] flex flex-col gap-4 justify-around items-start p-2">
        <div>
          <h1 className="text-textYellow text-5xl font-bold">
            Hii there, <br /> I'm Demon Lord
          </h1>
        </div>
        <div>
          <p className="w-[80%] max-sm:w-full text-text">
            "As a passionate web developer and MERN stack expert, I create
            dynamic, full-stack web applications with a focus on seamless user
            experiences. My dedication to UI/UX design ensures that each project
            is intuitive, responsive, and aesthetically engaging."
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <ButtonPlane>contact me</ButtonPlane>
          <TextButton>Resume</TextButton>
        </div>
        <div className="flex justify-around items-center gap-4 text-textYellow text-xl">
          <a href="#" className="cursor-cursorHover">
            <i className="fa-solid fa-code hover:text-text"></i>
          </a>
          <a href="#" className="cursor-cursorHover">
            <i className="fa-brands fa-github hover:text-text"></i>
          </a>
          <a href="#" className="cursor-cursorHover">
            <i className="fa-brands fa-linkedin-in hover:text-text"></i>
          </a>
          <a href="#" className="cursor-cursorHover">
            <i className="fa-solid fa-basketball hover:text-text"></i>
          </a>
        </div>
      </div>
    </section>
  );
});

export default Hero;
