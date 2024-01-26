import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecandaryContainer from "./SecandaryContainer";
import GptSeacrh from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSeacrh />
      ) : (
        <>
          <MainContainer />
          <SecandaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
