import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";

const SecandaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className="bg-black px-4">
      <div className="relative -mt-52 px-4 w-screen z-20">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upComigMovies} />
      </div>
    </div>
  );
};

export default SecandaryContainer;
