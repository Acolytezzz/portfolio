import crudLight from "../../images/projectImgs/image.png";
import crudDark from "../../images/projectImgs/image2.png";
import reactBlog from "../../images/projectImgs/image3.png";
import nodejs from "../../images/node-js.svg";
import expressjs from "../../images/express-js.svg";
import mongodb from "../../images/mongodb.svg";
import figma from "../../images/figma.svg";
import tailwindCSS from "../../images/tailwind.svg";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { useToggleDarkMode } from "../../store/mode";

export default function ProjectCards() {
  const dark = useToggleDarkMode((state) => state.dark);

  return (
    <div className="flex justify-center items-center">
      <div className=" grid grid-cols-1 md:grid-cols-2 px-4 sm:p-0 place-items-center w-full max-w-[900px]">
        <div className="bg-[#505050ce] dark:bg-[#B6B6B6] w-[370px] h-[450px] rounded-[35px] overflow-hidden transition duration-300 hover:-translate-y-5">
          <a href="https://crud-modern.onrender.com/" target="_blank">
            {!dark ? (
              <img
                src={crudLight}
                alt="image"
                className="h-[230px] w-full object-cover object-top"
              />
            ) : (
              <img
                src={crudDark}
                alt="image"
                className="h-[230px] w-full object-cover object-top"
              />
            )}
          </a>

          <p className="text-3xl text-center text-white dark:text-black font-Cantora mt-3 mb-2">
            CRUD APP
          </p>
          <p className="text-lg text-white dark:text-black font-Poppins font-medium leading-8 text-center">
            Simple and Modern CURD Application
          </p>
          <div className="flex items-center justify-evenly my-3">
            <img src={expressjs} alt="expressjs" className="h-[2.5rem]" />
            <img src={nodejs} alt="nodejs" className="h-[2.3rem]" />
            <img src={mongodb} alt="mongodb" className="h-[2.5rem]" />
            <IoLogoReact className="text-[2.5rem] text-[#2dc2dc]" />
            <img src={tailwindCSS} alt="mongodb" className="h-[2.5rem]" />
          </div>
          <div className="flex items-center justify-center my-2">
            <a
              href="https://crud-modern.onrender.com/"
              target="_blank"
              className="font-Cantora text-2xl text-center mr-2 w-28 dark:text-white my-auto btn-custom bg-white dark:bg-[#1F2125]"
            >
              Website
            </a>
            <a
              href="https://github.com/Acolytezzz"
              target="_blank"
              className="font-Cantora text-2xl text-center mr-2 w-28 dark:text-white my-auto btn-custom bg-white dark:bg-[#1F2125]"
            >
              Github
            </a>
          </div>
        </div>
        <div className="bg-[#505050ce] dark:bg-[#B6B6B6] w-[370px] h-[450px] m-16 rounded-[35px] overflow-hidden transition duration-300 hover:-translate-y-5">
          <a href="https://react-node-blog-5zh7.onrender.com/" target="_blank">
            <img
              src={reactBlog}
              alt="image"
              className="h-[230px] w-full object-cover object-top"
            />
          </a>
          <p className="text-3xl text-center text-white dark:text-black font-Cantora mt-3 mb-2">
            REACT BLOG
          </p>
          <p className="text-lg text-white dark:text-black font-Poppins font-medium leading-8 text-center">
            Simple Blog Using React
          </p>
          <div className="flex items-center justify-evenly my-3">
            <FaHtml5 className="text-[2.5rem] text-[#e65100]" />
            <IoLogoReact className="text-[2.5rem] text-[#2dc2dc]" />
            <img src={figma} alt="nodejs" className="h-[2.2rem]" />
            <IoLogoCss3 className="text-[2.5rem] text-[#239de7]" />
          </div>
          <div className="flex items-center justify-center my-2">
            <a
              href="https://react-node-blog-5zh7.onrender.com/"
              target="_blank"
              className="font-Cantora text-2xl text-center mr-2 w-28 dark:text-white my-auto btn-custom bg-white dark:bg-[#1F2125]"
            >
              Website
            </a>
            <a
              href="https://github.com/Acolytezzz"
              target="_blank"
              className="font-Cantora text-2xl text-center mr-2 w-28 dark:text-white my-auto btn-custom bg-white dark:bg-[#1F2125]"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
