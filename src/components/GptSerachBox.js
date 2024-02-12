import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addSearchMovies } from "../utils/moviesSlice";

const GptSearchBox = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef();
  async function handleGptSerach() {
    const query = searchText.current.value;
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        query +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    console.log(data);
    dispatch(addSearchMovies(data.results));
  }

  return (
    <div className=" pt-[14%] px-4">
      <form className="w-1/2 mx-auto " onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 w-2/3 outline-none placeholder:text-neutral-700"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="w-1/4 font-bold text-[#E50914] p-2 rounded-md text-xl"
          onClick={() => handleGptSerach()}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBox;
