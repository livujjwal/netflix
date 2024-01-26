import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const GptSearchBox = () => {

    const langKey = useSelector(store => store.config.lang)
  return (
    <div className=" pt-[8%] px-4">
      <form className="w-1/2 mx-auto bg-opacity-40 bg-black">
        <input
          type="text"
          className="p-2 m-2 w-2/3 outline-none placeholder:text-neutral-700"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="w-1/4 font-bold text-[#E50914] p-2 rounded-md text-xl">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBox;
