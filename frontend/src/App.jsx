import { useRef, useState } from "react";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Skills from "./componets/Skills";
import Contact from "./componets/Contact";
import Projects from "./componets/Projects";

const App = () => {
  const [isTrue, setIsTrue] = useState(true);
  // Define refs for each section
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll handler function
  const handleScroll = (section) => {
    if (section.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsTrue((prev) => !prev);
  };

  const toggle = () => {
    setIsTrue((prev) => !prev);
  };

  return (
    <section className="w-full h-auto flex flex-col justify-start items-center bg-dark relative px-20 max-sm:px-4 max-2xl:px-10">
      {/* Pass the scroll function and refs to Navbar */}
      <Navbar
        isTrue={isTrue}
        toggle={toggle}
        scroll={(section) => {
          if (section === "home") handleScroll(heroRef);
          else if (section === "skills") handleScroll(skillsRef);
          else if (section === "project") handleScroll(projectRef);
          else if (section === "contact") handleScroll(contactRef);
        }}
      />
      <Hero ref={heroRef} id={"home"} />
      <Skills ref={skillsRef} id={"skills"} />
      <Projects ref={projectRef} id={"projects"} />
      <Contact ref={contactRef} id={"contact"} />
    </section>
  );
};

export default App;
