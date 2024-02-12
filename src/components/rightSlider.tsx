import { useState } from "react";
import { Contrast, IcHome, IcLight, IcSchools, IcService } from "../assets";
import IcBlog from "../assets/img/IcBlog";
import IcContact from "../assets/img/IcContact";
import IcPortofolio from "../assets/img/IcPortofolio";
import useDarkSide from "./useDarkMode";
import { Link } from "react-router-dom";

const RightSlider = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(darkSide ? "dark" : "light");
    setDarkSide(!darkSide);
  };
  const [menuActive, setmenuActive] = useState(1);
  return (
    <div className="flex flex-col items-center">
      <button className="group mx-auto" onClick={toggleDarkMode}>
        <img
          src={IcLight}
          className="mt-10 hidden h-10 w-10 cursor-pointer transition group-hover:scale-90 dark:block"
        />
        <img
          src={colorTheme === "light" ? IcLight : Contrast}
          className="mt-10 h-10 w-10 cursor-pointer transition group-hover:scale-90 dark:hidden"
        />
      </button>
      <div className="mt-16 flex flex-col gap-10 ">
        <div className="group">
          <Link
            to={"/"}
            onClick={() => setmenuActive(1)}
            className={`${menuActive === 1 ? "menuActive" : "menuNonActive"} transition group-hover:scale-90`}
          >
            <IcHome color={menuActive === 2 ? "#767676" : ""} />
          </Link>
        </div>
        <div className="group">
          <Link
            onClick={() => setmenuActive(2)}
            to={"/service"}
            className={`${menuActive === 2 ? "menuActive" : "menuNonActive"} transition group-hover:scale-90`}
          >
            <IcService color={menuActive === 2 ? "black" : ""} />
          </Link>
        </div>
        <div className="group">
          <Link
            onClick={() => setmenuActive(3)}
            to={"/education"}
            className={`${menuActive === 3 ? "menuActive" : "menuNonActive"} transition group-hover:scale-90`}
          >
            <IcSchools color={menuActive === 3 ? "black" : ""} />
          </Link>
        </div>
        <div className="group">
          <div className="menuNonActive transition group-hover:scale-90">
            <Link
              onClick={() => setmenuActive(4)}
              to={"/work"}
              className={`${menuActive === 4 ? "menuActive" : "menuNonActive"} transition group-hover:scale-90`}
            >
              <IcPortofolio color={menuActive === 4 ? "black" : ""} />
            </Link>
          </div>
        </div>
        <div className="group">
          <div className="menuNonActive transition group-hover:scale-90">
            <Link
              onClick={() => setmenuActive(5)}
              to={"/portofolio"}
              className={`${menuActive === 5 ? "menuActive" : "menuNonActive"} transition group-hover:scale-90`}
            >
              <IcBlog color={menuActive === 5 ? "black" : ""} />
            </Link>
          </div>
        </div>
        <div className="group">
          <Link
            onClick={() => setmenuActive(6)}
            to={"/blog"}
            className={`${menuActive === 6 ? "menuActive" : "menuNonActive"} transition group-hover:scale-90`}
          >
            <IcContact color={menuActive === 6 ? "black" : ""} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSlider;
