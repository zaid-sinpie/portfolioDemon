import { useState } from "react";

import { Button1 } from "./UI/Buttons";

const listForNav = [
  {
    title: "HOME",
    link: "#",
  },
  {
    title: "SKILLS",
    link: "#",
  },
  {
    title: "PROJECT",
    link: "#",
  },
  {
    title: "CONTACT",
    link: "#",
  },
];

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(true);

  const toggleTrue = () => {
    setIsTrue((prev) => !prev);
  };

  return (
    <div className="w-full fixed top-0 left-0 backdrop-blur-lg z-20 animate-slideDown">
      <header className="w-full flex justify-between items-center p-5 tracking-[5px]">
        <ul>
          <h1 className="text-xl text-textYellow font-semibold cursor-cursorHover transition-all">
            DemonLord
          </h1>
        </ul>
        <nav className=" text-text text-xs max-sm:hidden">
          <ul className="flex gap-5">
            {listForNav.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.link}
                    className="font-semibold hover:underline cursor-cursorHover underline-offset-4"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button1>zaidmasuldar@gmail.com</Button1>
        <nav className="hidden max-sm:flex justify-center items-center">
          {/* <button class="group h-10 w-10 rounded-lg border-2 border-text">
            <div class="grid justify-items-center gap-1.5">
              <span class="h-1 w-5 rounded-full bg-text transition group-hover:rotate-45 group-hover:translate-y-2.5">
                /
              </span>
              <span class="h-1 w-5 rounded-full bg-text group-hover:scale-x-0 transition">
                /
              </span>
              <span class="h-1 w-5 rounded-full bg-text group-hover:-rotate-45 group-hover:-translate-y-2.5">
                /
              </span>
            </div>
          </button> */}

          {
            <i
              onClick={toggleTrue}
              className={`${!isTrue && "hidden"} fa-solid fa-bars text-text`}
            ></i>
          }
          {
            <i
              onClick={toggleTrue}
              className={`${isTrue && "hidden"} fa-solid fa-xmark text-text`}
            ></i>
          }

          <div
            className={`${
              isTrue && "hidden"
            } w-full bg-white top-[4rem] left-0 p-2 absolute`}
          >
            <ul className={`flex flex-col text-center gap-5`}>
              {listForNav.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="font-semibold hover:underline underline-offset-4"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
