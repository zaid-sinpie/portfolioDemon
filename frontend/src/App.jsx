import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Skills from "./componets/Skills";
import Contact from "./componets/Contact";
import Projects from "./componets/Projects";

const scrollInto = (element) =>{

}

function App() {
  return (
    <section className="w-full h-auto flex flex-col justify-start items-center bg-dark relative px-20 max-sm:px-4 max-2xl:px-10">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}

export default App;
