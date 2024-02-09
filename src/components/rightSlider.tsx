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
      <div className="group mx-auto">
        <img
          src={IcLight}
          className="mt-10 hidden h-10 w-10 cursor-pointer transition group-hover:scale-90 dark:block"
          onClick={toggleDarkMode}
        />
        <img
          src={colorTheme === "light" ? IcLight : Contrast}
          className="mt-10 h-10 w-10 cursor-pointer transition group-hover:scale-90 dark:hidden"
          onClick={toggleDarkMode}
        />
      </div>
      <div className="mt-16 flex flex-col gap-10 ">
        <div className="group">
          <div className="menuActive transition group-hover:scale-90 ">
            <IcHome />
          </div>
        </div>
        <div className="group">
          <div className="menuNonActive transition group-hover:scale-90">
            <IcService />
          </div>
        </div>
        <div className="group">
          <div className="menuNonActive transition group-hover:scale-90">
            <IcSchools />
          </div>
        </div>
        <div className="group">
          <div className="menuNonActive transition group-hover:scale-90">
            <IcPortofolio />
          </div>
        </div>
        <div className="group">
          <div className="menuNonActive transition group-hover:scale-90">
            <IcBlog />
          </div>
        </div>
        <div className="group">
          <div className="menuNonActive transition group-hover:scale-90">
            <IcContact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSlider;
