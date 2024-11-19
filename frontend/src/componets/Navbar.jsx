import { Button1 } from "./UI/Buttons";

const listForNav = [
  { title: "HOME", link: "home" },
  { title: "SKILLS", link: "skills" },
  { title: "PROJECT", link: "project" },
  { title: "CONTACT", link: "contact" },
];

const Navbar = ({ scroll, isTrue, toggle }) => {
  return (
    <div className="w-full fixed top-0 left-0 backdrop-blur-lg z-20 animate-slideDown">
      <header className="w-full flex justify-between items-center p-5 tracking-[5px]">
        <ul>
          <h1 className="text-xl text-textYellow font-semibold cursor-cursorHover transition-all">
            DemonLord
          </h1>
        </ul>
        <nav className="text-text text-xs max-sm:hidden">
          <ul className="flex gap-5">
            {listForNav.map((item, index) => (
              <li key={index}>
                <a
                  onClick={() => scroll(item.link)}
                  className="font-semibold hover:underline cursor-cursorHover underline-offset-4"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button1>zaidmasuldar@gmail.com</Button1>
        <nav className="hidden max-sm:flex justify-center items-center">
          <i
            onClick={toggle}
            className={`${!isTrue && "hidden"} fa-solid fa-bars text-text`}
          ></i>
          <i
            onClick={toggle}
            className={`${isTrue && "hidden"} fa-solid fa-xmark text-text`}
          ></i>
          <div
            className={`${
              isTrue && "hidden"
            } w-full bg-white top-[4rem] left-0 p-2 absolute`}
          >
            <ul className="flex flex-col text-center gap-5">
              {listForNav.map((item, index) => (
                <li key={index}>
                  <a
                    onClick={() => scroll(item.link)}
                    className="font-semibold hover:underline underline-offset-4"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
