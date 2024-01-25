
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecandaryContainer from "./SecandaryContainer";

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecandaryContainer/>
    </div>
  );
};

export default Browse;
