import { forwardRef, useRef } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "./UI/Input";
import { TextArea } from "./UI/Input";
import { ButtonPlaneFull } from "./UI/Buttons";

const Contact = forwardRef(function ({ id }, ref) {
  const form = useRef();
  const serviceId = import.meta.env.VITE_API_YOUR_SERVICE_ID;
  const templateId = import.meta.env.VITE_API_YOUR_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_API_YOUR_PUBLIC_KEY;

  const sendEmail = (e) => {
    const loadingToast = toast.loading("message sneding! please wait");
    toast({ id: loadingToast });

    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success("Email sent successfully");
          toast.dismiss(loadingToast);
          // console.log("SUCCESS!");
        },
        (error) => {
          toast.error("Error sending email");
          console.log("FAILED...", error.text);
        }
      );
  };

  const notify = () => toast.success("Wow so easy!");
  return (
    <section
      ref={ref}
      id={id}
      className="w-full h-screen flex flex-col gap-4 justify-center items-center"
    >
      <div className="w-[40%] max-sm:w-full max-xl:w-full border border-textYellow rounded-sm px-10 max-sm:px-2 max-xl:px-5 py-10 flex justify-center items-center text-textYellow animateScrollAppear">
        <form
          onSubmit={sendEmail}
          ref={form}
          // action="/"
          // method="POST"
          className="w-full flex flex-col gap-5 justify-center items-center"
        >
          <div className="text-center text-2xl text-textYellow">
            <h1 className="text-text">CONTACT</h1>
          </div>
          <Input id={"name"} name={"user_name"} title={"Name"} />
          <Input
            id={"email"}
            name={"user_email"}
            title={"Email"}
            type={"email"}
          />
          <TextArea id={"message"} name={"message"} title={"Message"} />
          <div className="flex flex-col gap-2 justify-around items-start w-[80%] max-sm:w-full max-xl:w-full">
            <ButtonPlaneFull type="submit">SUBMIT</ButtonPlaneFull>
          </div>
        </form>
      </div>
    </section>
  );
});

export default Contact;
