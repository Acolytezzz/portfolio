import HeroImage from "../../images/ProfileImg.jpg";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { useSmoothScroll } from "../../store/scroll";
import RESUME from "../../files/RESUME.pdf";

export default function HeroContent() {
  const scrollTo = useSmoothScroll((state) => state.scrollTo);

  return (
    <div className="flex justify-center items-center">
      <div className="flex  flex-col tab:flex-row justify-center items-center py-10 w-full max-w-[1000px] px-4">
        <div className="my-auto w-full sm:w-[35rem] tab:w-auto">
          <p className="text-3xl dark:text-white font-Cantora  leading-10 mb-4">
            Hello, I am <br /> Aman Shrestha <br /> Web Developer & Programmer
          </p>
          <p className="text-xl dark:text-white font-Poppins font-medium leading-8">
            I build and code sleek, functional website <br /> that bring ideas
            to life
          </p>
          <div className="flex justify-center">
            <a
              href={RESUME}
              target="_blank"
              className="text-2xl dark:text-white font-Cantora btn-custom m-4"
            >
              My Resume
            </a>
            <button
              className="text-2xl dark:text-white font-Cantora btn-custom m-4"
              onClick={() => scrollTo("ContactMeId")}
            >
              Contact Me
            </button>
          </div>
          <p className=" text-xl dark:text-white font-bold font-Poppins">
            @FindMe At:
          </p>
          <div className="flex justify-center my-3 ml-16">
            <a
              href="https://www.linkedin.com/in/aman-shrestha-103b72192/"
              target="_blank"
            >
              <BiLogoLinkedinSquare className="text-6xl mx-2 text-[#0077B5] dark:text-blue-600 cursor-pointer" />
            </a>
            <a href="https://github.com/Acolytezzz" target="_blank">
              <IoLogoGithub className="text-[3.5rem] mx-2 text-[#2b3137] dark:text-slate-200 cursor-pointer" />
            </a>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="hero-img" className="rounded-full sm:m-4" />
        </div>
      </div>
    </div>
  );
}
