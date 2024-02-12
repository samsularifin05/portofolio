import {
  IcArrowRight,
  IcCoding,
  IcGameDevelopment,
  IcMicrofond,
  IcPhotographer,
  IcUiUx,
  Profile,
} from "../assets";
import { ShapeBanner } from "../shape";

const Home = () => {
  return (
    <div className="flex flex-col p-2">
      <div
        id="banner"
        className="flex h-[20rem] w-full justify-between rounded bg-white p-10 dark:bg-gray-800"
      >
        <div className="flex flex-col justify-between">
          {" "}
          <ShapeBanner />
          <div data-aos="fade-down">
            <p className="text-[30px] dark:text-white">
              I’m Samsul Arifin
              <br /> <span className="text-color1">Front-end</span> Developer
            </p>{" "}
            <p className="w-[30rem] text-[12px] dark:text-white">
              Nama Saya Samsul Arifin Saya Lahir di Bandung, 30 November 1997 .
              Saya menerima gelar Diploma dari STMIK & Politeknik LPKIA Bandung
              pada tahun 2019. Saya adalah orang yang sangat antusias dengan
              segala hal berbau pemrograman dan selalu merasa tertantang untuk
              mengerjakan projek-projek baru pembuatan aplikasi berbasis web
              atau mobile.
            </p>
          </div>
          <div className="group mt-3" data-aos="fade-up">
            <button className="h-12 w-48 rounded bg-color2 transition group-hover:scale-90">
              {" "}
              HIRE ME{" "}
            </button>
          </div>
        </div>
        <img
          data-aos="zoom-in"
          src={Profile}
          className="absolute -top-[0.8rem] right-56 h-[21.2rem] w-[16rem]"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-2 flex w-full flex-wrap gap-3" data-aos="zoom-in">
          <div className="card">
            <img src={IcCoding} className="h-[4.3rem]" />
            <h1 className="serviceTitleCard">Web Development</h1>
            <p className="serviceSubTitleCard">Blog, E-commerce</p>
          </div>
          <div className="card">
            <img src={IcUiUx} className="h-[4.3rem]" />
            <h1 className="serviceTitleCard">UI/UX design</h1>
            <p className="serviceSubTitleCard">Mobile app, website design</p>
          </div>
          <div className="card">
            <img src={IcMicrofond} className="h-[4.3rem]" />
            <h1 className="serviceTitleCard">Sound Design</h1>
            <p className="serviceSubTitleCard">Voice Over, Beat Making</p>
          </div>
          <div className="card">
            <img src={IcGameDevelopment} className="h-[4.3rem]" />
            <h1 className="serviceTitleCard">Game Design</h1>
            <p className="serviceSubTitleCard">
              Character Design, Props & Objects
            </p>
          </div>
          <div className="card">
            <img src={IcPhotographer} className="h-[4.3rem]" />
            <h1 className="serviceTitleCard">Photography</h1>
            <p className="serviceSubTitleCard">Portrait, Product Photography</p>
          </div>
          <div className="card">
            <h1 className="serviceTitleCard">Advertising</h1>
            <p className="serviceSubTitleCard text-center text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi.{" "}
            </p>
            <div className="group">
              <div className="flex cursor-pointer items-center justify-center transition group-hover:scale-90">
                <p className="text-[12px] text-color1">ORDER NOW</p>
                <img src={IcArrowRight} className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
