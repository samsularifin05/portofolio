import { IcCopy, Profile } from "../assets";

const LeftSlider = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-color3">
        <img src={Profile} className="mt-4 h-40 w-44 rounded-full" />
      </div>
      <div className="z-20 -mt-[2rem] ml-[5.7rem] h-4 w-4 rounded-full bg-lime-500"></div>
      <div className="mt-10 flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[18px] dark:text-white">Samsul Arifin</p>
          <p className="text-[15px] text-color2 dark:text-white">
            Font-end Developer
          </p>
          <div className="flex gap-4">
            <div className="box-icon"></div>
            <div className="box-icon"></div>
            <div className="box-icon"></div>
            <div className="box-icon"></div>
            <div className="box-icon"></div>
            <div className="box-icon"></div>
          </div>
        </div>
        <div className="mt-5 h-[0.8px] w-full rounded bg-[#F0F0F6]"></div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex w-12 items-center justify-center bg-color2">
              <p className="text-[15px]"> Age : </p>
            </div>
            <p className="text-[13px] dark:text-white">24</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex w-24 justify-center bg-color2 ">
              <p className="text-[15px]">Residence :</p>
            </div>
            <p className="text-[13px] dark:text-white">Bandung</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex w-24 justify-center bg-color2">
              <p className="text-[15px] ">Freelance :</p>
            </div>
            <div className="text-[13px] text-[#7EB942]">Available</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex w-[72px] justify-center bg-color2 text-[15px]">
              <p className="text-[15px]">Address : </p>
            </div>
            <p className="text-[13px] dark:text-white">Bandung, Jawa Barat</p>
          </div>
        </div>
        <div className="mt-2 h-[0.8px] w-full rounded bg-color3"></div>
        <div className="h flex flex-col gap-4">
          <h1 className="mb-3 text-[18px] dark:text-white">Languages</h1>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2 dark:text-white">Indonesia</p>
              <p className="text-color2 dark:text-white">100%</p>
            </div>
            <div className="h-2 w-64 rounded-full border border-color2 bg-white p-[1px]">
              <div
                className="h-full rounded-full bg-color2"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2 dark:text-white">English</p>
              <p className="text-color2 dark:text-white">80%</p>
            </div>
            <div className="h-2 w-64 rounded-full border border-color2 bg-white p-[1px]">
              <div
                className="h-full rounded-full bg-color2"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="mt-2 h-[0.8px] w-full rounded bg-color3"></div>
        <div className="h mt-2 flex flex-col gap-4">
          <h1 className="text-[18px] dark:text-white">Skills</h1>

          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2 dark:text-white">Html</p>
              <p className="text-color2 dark:text-white">80%</p>
            </div>
            <div className="h-2 w-64 rounded-full border border-color2 bg-white p-[1px]">
              <div
                className="h-full rounded-full bg-color2"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2 dark:text-white">CSS</p>
              <p className="text-color2 dark:text-white">60%</p>
            </div>
            <div className="h-2 w-64 rounded-full border border-color2 bg-white p-[1px]">
              <div
                className="h-full rounded-full bg-color2"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2 dark:text-white">JS</p>
              <p className="text-color2 dark:text-white">90%</p>
            </div>
            <div className="h-2 w-64 rounded-full border border-color2 bg-white p-[1px]">
              <div
                className="h-full rounded-full bg-color2"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2 dark:text-white">PHP</p>
              <p className="text-color2 dark:text-white">70%</p>
            </div>
            <div className="h-2 w-64 rounded-full border border-color2 bg-white p-[1px]">
              <div
                className="h-full rounded-full bg-color2"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2 dark:text-white">WordPress</p>
              <p className="text-color2 dark:text-white">80%</p>
            </div>
            <div className="h-2 w-64 rounded-full border border-color2 bg-white p-[1px]">
              <div
                className="h-full rounded-full bg-color2"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="mt-2 h-[0.8px] w-full rounded bg-color3"></div>
        <div className="h flex flex-col gap-4">
          <h1 className=" text-[18px] dark:text-white ">Extra Skills</h1>
          <div>
            <div className="flex flex-row items-center gap-2">
              <img src={IcCopy} className="h-4 w-4" />
              <p className="flex-start text-color2 dark:text-white">
                Bootstrap, Tailwind
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <img src={IcCopy} className="h-4 w-4" />
              <p className="flex-start text-color2 dark:text-white">
                React, Vue, Solid, Next-Js
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center gap-2">
              <img src={IcCopy} className="h-4 w-4" />
              <p className="flex-start text-color2 dark:text-white">
                GIT Knowledge
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 h-[0.8px] w-full rounded bg-color3"></div>
        <div className="flex h-10 w-full items-center justify-center rounded bg-color2 ">
          Download Cv
        </div>
      </div>
    </div>
  );
};

export default LeftSlider;
