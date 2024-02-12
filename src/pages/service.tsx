const Service = () => {
  return (
    <>
      <div className="container items-center">
        <h1 className="text-[32px]" data-aos="fade-down">
          Price plans
        </h1>
        <p
          className="mt-2 flex w-96 items-center justify-center text-center text-[12px] text-color2"
          data-aos="fade-up"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <div className="mt-5 flex flex-row justify-center gap-5">
        <div className="h-[609px] w-[310px] bg-white p-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[24px]">Silver</h1>
            <div className="flex flex-row items-center gap-2">
              <h2 className="text-[32px]"> $0.00 </h2>{" "}
              <p className="mt-2 text-[12px]"> /Hour</p>
            </div>
            <p className="text-center text-color2">
              For most businesses that want to optimize web queries
            </p>
          </div>
        </div>
        <div className="h-[609px] w-[310px] bg-white p-10">
          <div className="absolute -mx-10 -mt-10 h-[30px] w-[310px] bg-color2 text-center">
            Most Popular
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[24px]">Gold</h1>
            <div className="flex flex-row items-center gap-2">
              <h2 className="text-[32px]"> $50.00 </h2>{" "}
              <p className="mt-2 text-[12px]"> /Hour</p>
            </div>
          </div>
          <p className="text-center text-color2">
            For most businesses that want to optimize web queries
          </p>
        </div>
        <div className="h-[609px] w-[310px] bg-white p-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[24px]">Diamond</h1>
            <div className="flex flex-row items-center gap-2">
              <h2 className="text-[32px]"> $80.00 </h2>{" "}
              <p className="mt-2 text-[12px]"> /Hour</p>
            </div>
            <p className="text-center text-color2">
              For most businesses that want to optimize web queries
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
