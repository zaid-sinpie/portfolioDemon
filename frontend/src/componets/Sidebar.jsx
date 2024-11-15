import Buttons from "./UI/Buttons";

const links = [
  { title: "HOME" },
  { title: "ABOUT" },
  { title: "PROJECTS" },
  { title: "CONTACT" },
];

const Sidebar = () => {
  return (
    <div className="h-[70%] px-2 w-fit absolute top-[20%] left-5">
      <div className="relative h-full flex justify-center items-center">
        <div className="h-full text-text flex flex-col justify-between items-center z-10">
          {links.map((item)=>{
            let active = ''
            if (item.title === 'HOME'){
              active = true
            }else{
              active = false
            }
            return <Buttons key={item.title} isActive={active} >{item.title}</Buttons>;
          })}
        </div>
        <div className="border-2 rounded-lg border-textRed h-full absolute top-0 left-[50%]"></div>
      </div>
    </div>
  );
};

export default Sidebar;
