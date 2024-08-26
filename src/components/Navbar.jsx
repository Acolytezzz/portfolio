import { Link } from "react-router-dom";
import { TbMoonStars } from "react-icons/tb";
import { IoSunny } from "react-icons/io5";
import { useToggleDarkMode } from "../store/mode";
import RESUME from "../files/RESUME.pdf";

export const Navbar = () => {
  const { dark, toggleDarkMode } = useToggleDarkMode((state) => ({
    dark: state.dark,
    toggleDarkMode: state.toggleDarkMode,
  }));

  return (
    <div className="flex justify-between w-full max-w-[950px] h-[70px]">
      <div className="flex">
        <p className="font-Anta text-4xl my-auto cursor-pointer dark:text-white">
          <Link to={"/"}>AMAN</Link>
        </p>

        {!dark ? (
          <TbMoonStars
            className="text-3xl my-auto ml-12 rounded-full hover:scale-125 hover:bg-black hover:text-white hover:border-white transform transition-all duration-300 ease-in-out cursor-pointer"
            onClick={toggleDarkMode}
          />
        ) : (
          <IoSunny
            className="text-3xl dark:text-white my-auto ml-12 rounded-full hover:scale-125 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black  transform transition-all duration-300 ease-in-out cursor-pointer"
            onClick={toggleDarkMode}
          />
        )}
      </div>
      <div className="flex">
        <button className="font-Anta text-2xl text-gray-600 dark:text-slate-300 my-auto mr-12">
          <Link to={"/projects"}>PROJECTS</Link>
        </button>
        <a href={RESUME} target="_blank" className="font-Anta text-2xl dark:text-white my-auto btn-custom">
          RESUME
        </a>
      </div>
    </div>
  );
};
