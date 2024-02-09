import { LeftSlider, RightSlider } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center text-black lg:hidden">
        Mohon maaf belum tersedia untuk mobile
      </div>
      <div className="hidden h-screen w-screen flex-row justify-between lg:flex ">
        <div className="custom-scrollbar h-screen w-96 overflow-y-auto bg-white p-4 dark:bg-gray-800">
          <LeftSlider />
        </div>
        <div className="h-screen w-full bg-color1 ">
          <Home />
        </div>
        <div className="flex h-screen w-[6.8rem] justify-center bg-white p-5 dark:bg-gray-800">
          <RightSlider />
        </div>
      </div>
    </>
  );
};

export default App;
