import { useRef, useState, useEffect } from "react";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Skills from "./componets/Skills";
import Contact from "./componets/Contact";
import Projects from "./componets/Projects";

const App = () => {
  const [isTrue, setIsTrue] = useState(true);
  const [currentActive, setCurrentActive] = useState("home");

  // Define refs for each section
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  // Observer callback to determine the currently visible section
  useEffect(() => {
    const options = {
      root: null, // Observes within the viewport
      rootMargin: "0px",
      threshold: 0.6, // Fires when 60% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentActive(entry.target.id); // Update the active section
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    // Observe each section
    if (heroRef.current) observer.observe(heroRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectRef.current) observer.observe(projectRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      observer.disconnect(); // Cleanup the observer
    };
  }, []);

  // Scroll handler function
  const handleScroll = (section) => {
    if (section.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsTrue((prev) => !prev);
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggle = () => {
    setIsTrue((prev) => !prev);
  };

  return (
    <section className="w-full h-auto flex flex-col justify-start items-center bg-dark relative px-20 max-sm:px-4 max-2xl:px-10">
      {/* Pass the scroll function, refs, and visible section ID to Navbar */}
      <Navbar
        currentActive={currentActive}
        setCurrentActive={setCurrentActive}
        isTrue={isTrue}
        toggle={toggle}
        scroll={(section) => {
          if (section === "home") handleScroll(heroRef);
          else if (section === "skills") handleScroll(skillsRef);
          else if (section === "projects") handleScroll(projectRef);
          else if (section === "contact") handleScroll(contactRef);
        }}
      />
      <Hero scrollToContact={scrollToContact} ref={heroRef} id="home" />
      <Skills ref={skillsRef} id="skills" />
      <Projects ref={projectRef} id="projects" />
      <Contact ref={contactRef} id="contact" />
    </section>
  );
};

export default App;
