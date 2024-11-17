import Input from "./UI/Input";
import { TextArea } from "./UI/Input";
import { ButtonPlaneFull } from "./UI/Buttons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-screen flex flex-col gap-4 justify-center items-center"
    >
      <div className="w-[40%] max-sm:w-full max-xl:w-full border border-textYellow rounded-sm px-10 max-sm:px-2 max-xl:px-5 py-10 flex justify-center items-center text-textYellow">
        <form
          // action="/"
          // method="POST"
          className="w-full flex flex-col gap-5 justify-center items-center"
        >
          <div className="text-center text-2xl text-textYellow">
            <h1 className="text-text">CONTACT</h1>
          </div>
          <Input id={"name"} title={"Name"} />
          <Input id={"email"} title={"Email"} type={"email"} />
          <TextArea id={"message"} title={"Message"} />
          <div className="flex flex-col gap-2 justify-around items-start w-[80%] max-sm:w-full max-xl:w-full">
            <ButtonPlaneFull type="submit">SUBMIT</ButtonPlaneFull>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
