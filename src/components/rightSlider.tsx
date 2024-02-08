import { Contrast, IcHome, IcSchools, IcService } from "../assets";
import IcBlog from "../assets/img/IcBlog";
import IcContact from "../assets/img/IcContact";
import IcPortofolio from "../assets/img/IcPortofolio";

const RightSlider = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={Contrast} className="mt-10 h-10 w-10 cursor-pointer" />
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
