import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Navbar } from "./components/Navbar";
import { ProjectPage } from "./pages/ProjectPage";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToggleDarkMode } from "./store/mode";
import ContactMe from "./components/ContactMe";

function App() {
  const dark = useToggleDarkMode((state) => state.dark);

  // bg-[#f3efeb] dark:bg-[#212432]

  //w-[100%] md:w-[90%] lg:w-[80%] xl:w-[70%] 

  return (
    <div className={!dark ? "" : "dark"}>
      <div className="bg-[#f3efeb] dark:bg-[#212432] overflow-x-hidden">
        <div className="flex flex-col items-center mx-auto ">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
          <ContactMe />
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
