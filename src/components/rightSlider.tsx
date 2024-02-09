import { useState } from "react";
import { Contrast, IcHome, IcLight, IcSchools, IcService } from "../assets";
import IcBlog from "../assets/img/IcBlog";
import IcContact from "../assets/img/IcContact";
import IcPortofolio from "../assets/img/IcPortofolio";
import useDarkSide from "./useDarkMode";

const RightSlider = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(darkSide ? "dark" : "light");
    setDarkSide(!darkSide);
  };
  return (
    <div className="flex flex-col items-center">
      <img
        src={IcLight}
        className="mt-10 hidden h-10 w-10 cursor-pointer dark:block"
        onClick={toggleDarkMode}
      />
      <img
        src={colorTheme === "light" ? IcLight : Contrast}
        className="mt-10 h-10 w-10 cursor-pointer dark:hidden"
        onClick={toggleDarkMode}
      />
      <div className="mt-16 flex flex-col gap-10">
        <div className="menuActive">
          <IcHome />
        </div>
        <div className="menuNonActive">
          <IcService />
        </div>
        <div className="menuNonActive">
          <IcSchools />
        </div>
        <div className="menuNonActive">
          <IcPortofolio />
        </div>
        <div className="menuNonActive">
          <IcBlog />
        </div>
        <div className="menuNonActive">
          <IcContact />
        </div>
      </div>
    </div>
  );
};

export default RightSlider;
