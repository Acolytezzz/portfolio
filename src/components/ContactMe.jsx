import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import { toast, Bounce } from "react-toastify";
import { useSmoothScroll } from "../store/scroll";

function ContactMe() {
  const form = useRef();

  const ref = useRef(null);

  const addScrollTarget = useSmoothScroll((state) => state.addScrollTarget);

  useEffect(() => {
    addScrollTarget("ContactMeId", ref);
  }, [addScrollTarget]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bms75xi", "template_7wlrn8v", form.current, {
        publicKey: "GkQEgYMOLqXLT5wj9",
      })
      .then(
        () => {
          toast.success("Thank You for your Email", {
            position: "top-right",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: false,
            theme: "colored",
            transition: Bounce,
          });
        },
        (error) => {
          toast.error("Error Failed to send Email", {
            position: "top-right",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: false,
            theme: "colored",
            transition: Bounce,
          });
        }
      );
    e.target.reset();
  };

  return (
    <div className="flex flex-col items-center my-12 px-12" ref={ref}>
      <p className="text-3xl dark:text-white font-Cantora underline underline-offset-4 mb-4">
        Contact Me
      </p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <input
          type="text"
          placeholder="Your Name..."
          name="from_name"
          className="text-2xl dark:text-white placeholder-[#3C3C3C] dark:placeholder-slate-200 font-Cantora bg-[#818181b0] dark:bg-[#d9d9d9a2] my-4 w-80 p-4 rounded-2xl"
        />
        <input
          type="email"
          placeholder="Your Email..."
          name="user_email"
          className="text-2xl dark:text-white placeholder-[#3C3C3C] dark:placeholder-slate-200 font-Cantora bg-[#818181b0] dark:bg-[#d9d9d9a2] my-4 w-80 p-4 rounded-2xl"
        />
        <textarea
          type="text"
          placeholder="Leave your message here..."
          name="message"
          className="text-2xl dark:text-white placeholder-[#3C3C3C] dark:placeholder-slate-200 font-Cantora bg-[#818181b0] dark:bg-[#d9d9d9a2] my-4 w-80 p-4 rounded-2xl h-[10rem]"
        ></textarea>
        <button className="text-2xl dark:text-white font-Cantora btn-custom m-auto w-32">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
