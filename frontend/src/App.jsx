import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Skills from "./componets/Skills";

import { ButtonPlaneFull } from "./componets/UI/Buttons";
import Input from "./componets/UI/Input";
import { TextArea } from "./componets/UI/Input";

function App() {
  return (
    <section className="w-full h-auto flex flex-col justify-start items-center bg-dark relative px-20 max-sm:px-4 max-2xl:px-10">
      <Navbar />
      <Hero />
      <Skills />
      <section className="w-full h-screen flex flex-col gap-4 justify-center items-center text-text">
        <figure className="w-[80%] max-sm:w-[95%] h-[60%] border border-textYellow"></figure>
        <div className="flex justify-center items-center gap-4">
          <button>left</button>
          <button>right</button>
        </div>
      </section>
      {/* contact */}
      <section className="w-full h-screen flex flex-col gap-4 justify-center items-center">
        <div className="w-[40%] max-sm:w-full max-xl:w-full border border-textYellow rounded-sm px-10 max-sm:px-2 max-xl:px-5 py-10 flex justify-center items-center text-textYellow">
          <form
            // action="/"
            // method="POST"
            className="w-full flex flex-col gap-5 justify-center items-center"
          >
            <div className="text-center text-2xl text-textYellow">
              <h1>CONTACT</h1>
            </div>
            <Input id={"name"} title={"Name"} />
            <Input id={"email"} title={"Email"} />
            <TextArea id={"message"} title={"Message"} />
            <div className="flex flex-col gap-2 justify-around items-start w-[80%] max-sm:w-full max-xl:w-full">
              <ButtonPlaneFull type="submit">SUBMIT</ButtonPlaneFull>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}

export default App;
