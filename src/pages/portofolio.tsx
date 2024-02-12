import { Portofolio1, Portofolio2, Portofolio3 } from "../assets";

const PortoFolio = () => {
  return (
    <div className="container mt-6 items-center">
      <h1 className="text-[32px]" data-aos="fade-down">
        Portfolio
      </h1>
      <p
        className="mt-2 flex w-96 items-center justify-center text-center text-[12px] text-color2"
        data-aos="zoom-in"
      >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className="mt-5 flex flex-row gap-10">
        <p className="cursor-pointer text-color1">All categories</p>
        <p className="cursor-pointer">UI Design</p>
        <p className="cursor-pointer">Web Templates</p>
        <p className="cursor-pointer">Logo</p>
        <p className="cursor-pointer">Branding</p>
      </div>
      <div
        className="scrollbar-hide mt-5 h-[35rem] overflow-auto"
        data-aos="fade-up"
      >
        <div className="flex flex-row flex-wrap items-center justify-center gap-5 ">
          <img src={Portofolio1} className="h-[300px] w-[310px]" />
          <img src={Portofolio2} className="h-[300px] w-[310px]" />
          <img src={Portofolio3} className="h-[300px] w-[310px]" />
          <img src={Portofolio1} className="h-[300px] w-[310px]" />
          <img src={Portofolio2} className="h-[300px] w-[310px]" />
          <img src={Portofolio3} className="h-[300px] w-[310px]" />
          <img src={Portofolio1} className="h-[300px] w-[310px]" />
          <img src={Portofolio2} className="h-[300px] w-[310px]" />
          <img src={Portofolio3} className="h-[300px] w-[310px]" />
          <img src={Portofolio1} className="h-[300px] w-[310px]" />
          <img src={Portofolio2} className="h-[300px] w-[310px]" />
          <img src={Portofolio3} className="h-[300px] w-[310px]" />
        </div>
      </div>
    </div>
  );
};

export default PortoFolio;
