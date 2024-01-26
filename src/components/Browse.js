import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecandaryContainer from "./SecandaryContainer";
import GptSeacrh from "./GptSearch";
import { useDispatch, useSelector } from "react-redux";
import { addSearchMovies } from "../utils/moviesSlice";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  if (!showGptSearch) dispatch(addSearchMovies(null));
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
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
