import AboutMe from "../contents/Home/AboutMe";
import HeroContent from "../contents/Home/HeroContent";
import WhatIdo from "../contents/Home/WhatIdo";

export const HomePage = () => {
  return (
    <div className="w-full">
      <HeroContent />
      <AboutMe />
      <WhatIdo />
    </div>
  );
};
