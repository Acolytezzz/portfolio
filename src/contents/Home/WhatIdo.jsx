import { FaHtml5 } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { GiStarSkull } from "react-icons/gi";
import webDev from "../../images/FigmaImg.png";
import backend from "../../images/backend.jpg";
import design from "../../images/design.jpeg";
import nodejs from "../../images/node-js.svg";
import expressjs from "../../images/express-js.svg";
import mongodb from "../../images/mongodb.svg";
import materialUI from "../../images/material-ui.svg";
import figma from "../../images/figma.svg";
import tailwindCSS from "../../images/tailwind.svg";

export default function WhatIdo() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center my-12 px-4 sm:px-12 w-full max-w-[1050px]">
        <p className="text-3xl dark:text-white font-Cantora underline underline-offset-4 mb-12">
          What I Do?
        </p>
        <div className="flex flex-col tab:flex-row justify-center items-center mb-8">
          <img
            src={webDev}
            alt="webDevImg"
            className="w-[30rem] tab:w-[49%] rounded-3xl my-2"
          />
          <div className="max-w-[35rem] tab:w-[49%] m-2">
            <p className="text-[1.7rem] dark:text-white font-Cantora text-center mb-6">
              Web Development
            </p>
            <div className="flex justify-evenly items-center mx-8 my-4">
              <FaHtml5 className="text-[3.5rem] text-[#e65100]" />
              <IoLogoReact className="text-[3.5rem] text-[#2dc2dc]" />
              <IoLogoCss3 className="text-[3.5rem] text-[#239de7]" />
            </div>

            <p className="flex items-start text-lg dark:text-white font-Poppins font-medium leading-8">
              <GiStarSkull className="text-3xl mr-2" /> Making modern, simple
              and elegant websites for projects
            </p>
            <p className="flex items-start text-lg dark:text-white font-Poppins font-medium leading-8">
              <GiStarSkull className="text-3xl mr-2" /> Designing clean,
              efficient code for seamless user experiences
            </p>
            <p className="flex items-start text-lg dark:text-white font-Poppins font-medium leading-8">
              <GiStarSkull className="text-3xl mr-2" /> Continuous integration
              and deployment for seamless updates
            </p>
          </div>
        </div>
        <div className="flex flex-col tab:flex-row justify-center items-center mb-8">
          <img
            src={backend}
            alt="backendImg"
            className="w-[30rem] rounded-3xl my-2 block tab:hidden"
          />
          <div className="max-w-[35rem] tab:w-[49%] m-2 ">
            <p className="text-[1.7rem] dark:text-white font-Cantora text-center">
              Backend Development
            </p>
            <div className="flex justify-evenly items-center mx-8 my-4">
              <img src={expressjs} alt="expressjs" className="h-[3.5rem]" />
              <img src={nodejs} alt="nodejs" className="h-[2.5rem]" />
              <img src={mongodb} alt="mongodb" className="h-[3rem]" />
            </div>

            <p className="flex items-start text-lg dark:text-white font-Poppins font-medium leading-8">
              <GiStarSkull className="text-3xl mr-2" /> Building robust and
              scalable server-side architectures
            </p>
            <p className="flex items-start text-lg dark:text-white font-Poppins font-medium leading-8">
              <GiStarSkull className="text-3xl mr-2" /> Designing efficient
              database and managing data flow
            </p>
            <p className="flex items-start text-lg dark:text-white font-Poppins font-medium leading-8">
              <GiStarSkull className="text-4xl mr-2" /> Integrating APIs for
              seamless interaction between the frontend and backend
            </p>
          </div>
          <img
            src={backend}
            alt="backendImg"
            className="w-[49%] rounded-3xl my-2 hidden tab:block"
          />
        </div>
        <div className="flex flex-col tab:flex-row justify-center items-center mb-8">
          <img
            src={design}
            alt="webDevImg"
            className="w-[30rem] tab:w-[49%] rounded-3xl my-2"
          />
          <div className="max-w-[35rem] tab:w-[49%] m-2 ">
            <p className="text-[1.7rem] dark:text-white font-Cantora text-center mb-6">
              UI/UX Design
            </p>
            <div className="flex justify-evenly items-center mx-8 my-4">
              <img src={materialUI} alt="expressjs" className="h-[3.5rem]" />
              <img src={figma} alt="nodejs" className="h-[2.5rem]" />
              <img src={tailwindCSS} alt="mongodb" className="h-[3rem]" />
            </div>

            <p className="flex items-start text-lg dark:text-white font-Poppins font-medium leading-8">
              <GiStarSkull className="text-3xl mr-2" /> Designing modern and
              visually engaging websites
            </p>
            <p className="flex items-start text-lg dark:text-white font-Poppins font-medium leading-8">
              <GiStarSkull className="text-4xl mr-2" /> Designing user-centered
              designs with a focus on usability and accessibility
            </p>
            <p className="flex items-start text-lg dark:text-white font-Poppins font-medium leading-8">
              <GiStarSkull className="text-3xl mr-2" /> Ensuring smooth
              navigation and cohesive interaction flows
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
