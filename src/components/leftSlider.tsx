import { IcCopy, Profile } from "../assets";

const LeftSlider = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-color3 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full">
        <img src={Profile} className="mt-4 h-40 w-44 rounded-full" />
        <div className="absolute left-[10.7rem] top-[8.5rem] h-4 w-4 rounded-full bg-lime-500"></div>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[18px]">Samsul Arifin</p>
          <p className="text-color2 text-[15px]">Font-end Developer</p>
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
            <div className="bg-color2 flex w-12 items-center justify-center">
              <p className="text-[15px]"> Age : </p>
            </div>
            <p className="text-[13px]">24</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="bg-color2 flex w-24 justify-center ">
              <p className="text-[15px]">Residence :</p>
            </div>
            <p className="text-[13px]">Bandung</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="bg-color2 flex w-24 justify-center">
              <p className="text-[15px]">Freelance :</p>
            </div>
            <div className="text-[13px] text-[#7EB942]">Available</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="bg-color2 flex w-[72px] justify-center text-[15px]">
              <p className="text-[15px]">Address : </p>
            </div>
            <p className="text-[13px]">Bandung, Jawa Barat</p>
          </div>
        </div>
        <div className="bg-color3 mt-2 h-[0.8px] w-full rounded"></div>
        <div className="h flex flex-col gap-4">
          <h1 className="mb-3 text-[18px]">Languages</h1>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2">Indonesia</p>
              <p className="text-color2">100%</p>
            </div>
            <div className="border-color2 h-2 w-64 rounded-full border bg-white p-[1px]">
              <div
                className="bg-color2 h-full rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2">English</p>
              <p className="text-color2">80%</p>
            </div>
            <div className="border-color2 h-2 w-64 rounded-full border bg-white p-[1px]">
              <div
                className="bg-color2 h-full rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="bg-color3 mt-2 h-[0.8px] w-full rounded"></div>
        <div className="h mt-2 flex flex-col gap-4">
          <h1 className="text-[18px]">Skills</h1>

          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2">Html</p>
              <p className="text-color2">80%</p>
            </div>
            <div className="border-color2 h-2 w-64 rounded-full border bg-white p-[1px]">
              <div
                className="bg-color2 h-full rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2">CSS</p>
              <p className="text-color2">60%</p>
            </div>
            <div className="border-color2 h-2 w-64 rounded-full border bg-white p-[1px]">
              <div
                className="bg-color2 h-full rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2">JS</p>
              <p className="text-color2">90%</p>
            </div>
            <div className="border-color2 h-2 w-64 rounded-full border bg-white p-[1px]">
              <div
                className="bg-color2 h-full rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2">PHP</p>
              <p className="text-color2">70%</p>
            </div>
            <div className="border-color2 h-2 w-64 rounded-full border bg-white p-[1px]">
              <div
                className="bg-color2 h-full rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row justify-between">
              <p className="text-color2">WordPress</p>
              <p className="text-color2">80%</p>
            </div>
            <div className="border-color2 h-2 w-64 rounded-full border bg-white p-[1px]">
              <div
                className="bg-color2 h-full rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="bg-color3 mt-2 h-[0.8px] w-full rounded"></div>
        <div className="h flex flex-col gap-4">
          <h1 className=" text-[18px]">Extra Skills</h1>
          <div>
            <div className="flex flex-row items-center gap-2">
              <img src={IcCopy} className="h-4 w-4" />
              <p className="text-color2 flex-start">Bootstrap, Tailwind</p>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <img src={IcCopy} className="h-4 w-4" />
              <p className="text-color2 flex-start">
                React, Vue, Solid, Next-Js
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center gap-2">
              <img src={IcCopy} className="h-4 w-4" />
              <p className="text-color2 flex-start">GIT Knowledge</p>
            </div>
          </div>
        </div>
        <div className="bg-color3 mt-2 h-[0.8px] w-full rounded"></div>
        <div className="bg-color2 flex h-10 w-full items-center justify-center rounded">
          Download Cv
        </div>
      </div>
    </div>
  );
};

export default LeftSlider;
