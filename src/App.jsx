import Random from "./components/Random";
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background items-center">
      <h1 className=" w-11/12 bg-white rounded-lg text-center mt-[40px]  text-3xl font-bold h-10">
        RANDOM GIF
      </h1>
      <div className="w-full flex flex-col items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
