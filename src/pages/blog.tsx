import {
  IcArrowRight,
  IcLocation,
  IcLogo1,
  IcLogo2,
  IcLogo3,
  IcLogo4,
  IcMail,
  IcMobile,
  Portofolio1,
  Portofolio2,
  Portofolio3,
} from "../assets";

const Blog = () => {
  return (
    <div className="scrollbar-hide h-[45rem] overflow-auto ">
      <div className="container mt-10 items-center">
        <h1 className="text-[32px]" data-aos="fade-down">
          Blog
        </h1>
        <p
          className="mt-2 flex w-96 items-center justify-center text-center text-[12px] text-color2"
          data-aos="zoom-in"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>

        <div className="mt-10 flex flex-row gap-5" data-aos="zoom-in">
          <div className="h-[464px] w-[310px] bg-white dark:bg-gray-800">
            <img src={Portofolio1} className="h-52 w-full bg-cover" />
            <div className="flex flex-col justify-between  p-10">
              <h1 className="text-[18px] dark:text-white">
                How to make web tempates
              </h1>
              <div>
                <p className="mt-2 text-[15px] text-color2 dark:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  nulla diam in ac dictum a urna nulla diam in ac dictum a urna{" "}
                </p>
              </div>
              <div className="mt-10 flex items-center text-[18px]">
                <p className="text-color1 ">Learn more</p>{" "}
                <img src={IcArrowRight} className="mt-1 h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="h-[464px] w-[310px] bg-white dark:bg-gray-800">
            <img src={Portofolio2} className="h-52 w-full bg-cover" />
            <div className="flex flex-col justify-between  p-10">
              <h1 className="text-[18px] dark:text-white">
                How to make web tempates
              </h1>
              <div>
                <p className="mt-2 text-[15px] text-color2 dark:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  nulla diam in ac dictum a urna nulla diam in ac dictum a urna{" "}
                </p>
              </div>
              <div className="mt-10 flex items-center text-[18px]">
                <p className="text-color1">Learn more</p>{" "}
                <img src={IcArrowRight} className="mt-1 h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="h-[464px] w-[310px] bg-white dark:bg-gray-800">
            <img src={Portofolio3} className="h-52 w-full bg-cover" />
            <div className="flex flex-col justify-between  p-10">
              <h1 className="text-[18px] dark:text-white">
                How to make web tempates
              </h1>
              <div>
                <p className="mt-2 text-[15px] text-color2 dark:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  nulla diam in ac dictum a urna nulla diam in ac dictum a urna{" "}
                </p>
              </div>
              <div className="mt-10 flex items-center text-[18px]">
                <p className="text-color1">Learn more</p>{" "}
                <img src={IcArrowRight} className="mt-1 h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 p-10">
        <div className="flex justify-between">
          <div>
            <div className="w-full text-[32px]"> Leave us your info</div>
            <div className="mt-5 h-[668px] w-[570px] bg-white p-5 dark:bg-gray-800">
              <div className="mt-2">
                <p className="text-color2 dark:text-white">
                  Your Full Name ( Required)
                </p>
                <input className="h-10 w-full rounded bg-color1 p-4" />
              </div>
              <div className="mt-5">
                <p className="text-color2 dark:text-white">
                  Your Email ( Required)
                </p>
                <input className="h-10 w-full rounded bg-color1 p-4" />
              </div>
              <div className="mt-5">
                <p className="text-color2 dark:text-white">Subject</p>
                <input className="h-10 w-full rounded bg-color1 p-4" />
              </div>
              <div className="mt-5">
                <p className="text-color2 dark:text-white">Your Message</p>
                <textarea className="no-resize h-72 w-full rounded bg-color1 p-4" />
              </div>
              <div className="mt-4 flex w-44 justify-center rounded bg-color2 p-1">
                Send Message
              </div>
            </div>
          </div>
          <div>
            <div className="w-full text-[32px]">Contact information</div>
            <div className="mt-5 h-[210px] w-[370px] bg-white px-10 dark:bg-gray-800">
              <div className="flex flex-col items-center justify-center">
                <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-color2">
                  <img src={IcLocation} className=" h-5 w-5" />
                </div>
              </div>
              <div className="mt-10 flex justify-between text-color2 dark:text-white">
                <p className="text-[18px]"> Country: </p>
                <p className="text-[15px]"> Bangladesh </p>
              </div>
              <div className="flex justify-between text-color2 dark:text-white">
                <p className="text-[18px]"> City: </p>
                <p className="text-[15px]"> Bangladesh </p>
              </div>
              <div className="flex justify-between text-color2 dark:text-white">
                <p className="text-[18px]"> Streat: </p>
                <p className="text-[15px]"> 35 vhatara, Badda </p>
              </div>
            </div>
            <div className="mt-5 h-[210px] w-[370px] bg-white px-10 dark:bg-gray-800">
              <div className="flex flex-col items-center justify-center">
                <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-color2">
                  <img src={IcMail} className=" h-5 w-5" />
                </div>
              </div>
              <div className="mt-10 flex justify-between text-color2 dark:text-white">
                <p className="text-[18px]"> Email: </p>
                <p className="text-[15px]"> youremail@gmail.com </p>
              </div>
              <div className="flex justify-between text-color2 dark:text-white">
                <p className="text-[18px]"> Skype: </p>
                <p className="text-[15px]"> @yourusername </p>
              </div>
              <div className="flex justify-between text-color2 dark:text-white">
                <p className="text-[18px]"> Telegram </p>
                <p className="text-[15px]"> @yourusername </p>
              </div>
            </div>
            <div className="mt-5 h-[210px] w-[370px] bg-white px-10 dark:bg-gray-800">
              <div className="flex flex-col items-center justify-center">
                <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-color2">
                  <img src={IcMobile} className=" h-5 w-5" />
                </div>
              </div>
              <div className="mt-10 flex justify-between text-color2 dark:text-white">
                <p className="text-[18px]"> Support services: </p>
                <p className="text-[15px]"> 15369 </p>
              </div>
              <div className="flex justify-between text-color2 dark:text-white">
                <p className="text-[18px]"> Office: </p>
                <p className="text-[15px]"> +58 (021)356 587 235 </p>
              </div>
              <div className="flex justify-between text-color2 dark:text-white">
                <p className="text-[18px]"> Personal: </p>
                <p className="text-[15px]"> +58 (021)356 587 235 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex w-full">
          <iframe
            className="flex h-96 w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56211042157!2d107.64315755!3d-6.90344945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1707721389057!5m2!1sid!2sid"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
        <div className="mt-10 flex flex-row justify-between">
          <img src={IcLogo1} className="h-36" />
          <img src={IcLogo2} className="h-36" />
          <img src={IcLogo3} className="h-36" />
          <img src={IcLogo4} className="h-36" />
        </div>
        <div className="data:bg-slate-800 mt-10 flex h-10 w-full items-center justify-center bg-white dark:bg-slate-800 dark:text-white">
          2023 All Rights Reserved.Ojjomedia
        </div>
      </div>
    </div>
  );
};

export default Blog;
