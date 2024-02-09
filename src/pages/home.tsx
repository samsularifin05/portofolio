import { Profile } from "../assets";
import { ShapeBanner } from "../shape";

const Home = () => {
  return (
    <div className="flex flex-col p-10">
      <div
        id="banner"
        className="flex h-[42rem] w-full justify-between rounded bg-white p-20 dark:bg-gray-800"
      >
        <div className="flex flex-col justify-between">
          {" "}
          <ShapeBanner />
          <div data-aos="fade-down">
            <p className="text-[40px] dark:text-white">
              I’m Samsul Arifin
              <br /> <span className="text-color1">Front-end</span> Developer
            </p>{" "}
            <p className="w-[30rem] text-[16px] dark:text-white">
              Nama Saya Samsul Arifin Saya Lahir di Bandung, 30 November 1997 .
              Saya menerima gelar Diploma dari STMIK & Politeknik LPKIA Bandung
              pada tahun 2019. Saya adalah orang yang sangat antusias dengan
              segala hal berbau pemrograman dan selalu merasa tertantang untuk
              mengerjakan projek-projek baru pembuatan aplikasi berbasis web
              atau mobile.
            </p>
          </div>
          <div className="group" data-aos="fade-up">
            <button className="h-12 w-48 rounded bg-color2 transition group-hover:scale-90">
              {" "}
              HIRE ME{" "}
            </button>
          </div>
        </div>
        <img
          src={Profile}
          className="absolute right-36 top-[9.3rem] h-[35.2rem] w-[25rem]"
        />
      </div>
    </div>
  );
};

export default Home;
