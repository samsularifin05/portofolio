import { IcCheck, IcClose } from "../assets";

const Service = () => {
  return (
    <>
      <div className="container items-center">
        <h1 className="text-[32px]" data-aos="fade-down">
          Price plans
        </h1>
        <p
          className="mt-2 flex w-96 items-center justify-center text-center text-[12px] text-color2"
          data-aos="zoom-in"
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <div
        className="mt-5 flex flex-row justify-center gap-5"
        data-aos="fade-up"
      >
        <div className="cardPriceList">
          <div className="flex flex-col items-center justify-center">
            <h1 className="titlePriceList">Silver</h1>
            <div className="flex flex-row items-center gap-2">
              <h2 className="price"> $0.00 </h2>{" "}
              <p className="price-per-hour"> /Hour</p>
            </div>
            <p className="price-description">
              For most businesses that want to optimize web queries
            </p>
          </div>
          <div className="mt-10 flex flex-col justify-start gap-3">
            <div className="price-item">
              <IcCheck /> <p className="ml-4">UI Design</p>
            </div>
            <div className="price-item">
              <IcCheck /> <p className="ml-4">Web Development</p>
            </div>
            <div className="price-item">
              <IcClose />
              <p className="ml-4">Logo Design</p>
            </div>
            <div className="price-item">
              <IcClose />
              <p className="ml-4">Seo Optimization</p>
            </div>
            <div className="price-item">
              <IcClose />
              <p className="ml-4">WordPress Integration</p>
            </div>
            <div className="price-item">
              <IcClose />
              <p className="ml-4">5 Websites</p>
            </div>
            <div className="price-item">
              <IcClose />
              <p className="ml-4">Unlimited User</p>
            </div>
            <div className="price-item">
              <IcClose />
              <p className="ml-4">20 GB Bandwith</p>
            </div>
          </div>
          <div className="group flex w-full">
            <button className="orderButton"> Order Now </button>
          </div>
        </div>
        <div className="cardPriceList">
          <div className="mostPopuler">Most Popular</div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="titlePriceList">Gold</h1>
            <div className="flex flex-row items-center gap-2">
              <h2 className="price"> $50.00 </h2>{" "}
              <p className="price-per-hour"> /Hour</p>
            </div>
          </div>
          <p className="price-description">
            For most businesses that want to optimize web queries
          </p>
          <div className="mt-10 flex flex-col justify-start gap-3">
            <div className="price-item">
              <IcCheck /> <p className="ml-4">UI Design</p>
            </div>
            <div className="price-item">
              <IcCheck /> <p className="ml-4">Web Development</p>
            </div>
            <div className="price-item">
              <IcCheck />
              <p className="ml-4">Logo Design</p>
            </div>
            <div className="price-item">
              <IcCheck />
              <p className="ml-4">Seo Optimization</p>
            </div>
            <div className="price-item">
              <IcClose />
              <p className="ml-4">WordPress Integration</p>
            </div>
            <div className="price-item">
              <IcClose />
              <p className="ml-4">5 Websites</p>
            </div>
            <div className="price-item">
              <IcClose />
              <p className="ml-4">Unlimited User</p>
            </div>
            <div className="price-item">
              <IcClose />
              <p className="ml-4">20 GB Bandwith</p>
            </div>
          </div>
          <div className="group flex w-full">
            <button className="orderButtonActive"> Order Now </button>
          </div>
        </div>
        <div className="cardPriceList">
          <div className="flex flex-col items-center justify-center">
            <h1 className="titlePriceList">Diamond</h1>
            <div className="flex flex-row items-center gap-2">
              <h2 className="price"> $80.00 </h2>{" "}
              <p className="price-per-hour"> /Hour</p>
            </div>
            <p className="price-description">
              For most businesses that want to optimize web queries
            </p>
            <div className="mt-10 flex flex-col justify-start gap-3">
              <div className="price-item">
                <IcCheck /> <p className="ml-4">UI Design</p>
              </div>
              <div className="price-item">
                <IcCheck /> <p className="ml-4">Web Development</p>
              </div>
              <div className="price-item">
                <IcCheck />
                <p className="ml-4">Logo Design</p>
              </div>
              <div className="price-item">
                <IcCheck />
                <p className="ml-4">Seo Optimization</p>
              </div>
              <div className="price-item">
                <IcCheck />
                <p className="ml-4">WordPress Integration</p>
              </div>
              <div className="price-item">
                <IcCheck />
                <p className="ml-4">5 Websites</p>
              </div>
              <div className="price-item">
                <IcCheck />
                <p className="ml-4">Unlimited User</p>
              </div>
              <div className="price-item">
                <IcCheck />
                <p className="ml-4">20 GB Bandwith</p>
              </div>
            </div>
            <div className="group flex w-full">
              <button className="orderButton"> Order Now </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
