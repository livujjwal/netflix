import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBox from "./GptSerachBox";

const GptSeacrh = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img
          className="object-cover max-sm:h-dvh max-sm:w-dvh h-dvh w-screen"
          src={BG_URL}
          alt="bg-image"
        />
      </div>
      <div className=" bg-gradient-to-t from-black h-dvh w-full"> 
        <GptSearchBox />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSeacrh;
