const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 backdrop-blur-sm z-20">
      <header className="w-full flex justify-between items-center p-5 tracking-[5px]">
        <ul>
          <h1 className="text-xl text-textRed font-semibold cursor-pointer">
            DEMON LORD
          </h1>
        </ul>
        <nav className="flex gap-5 text-text text-xs max-sm:hidden">
          <ul>
            <a href="#" className="font-semibold underline underline-offset-4 text-center">
              HOME
            </a>
          </ul>
          <ul>
            <a href="#" className="hover:underline underline-offset-4">
              SKILLS
            </a>
          </ul>
          <ul>
            <a href="#" className="hover:underline underline-offset-4">
              PROJECTS
            </a>
          </ul>
          <ul>
            <a href="#" className="hover:underline underline-offset-4">
              CONTACT
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
