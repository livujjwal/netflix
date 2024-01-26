import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecandaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black px-4">
      <div className="relative -mt-52 px-4 w-screen z-20">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Popular Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Romance Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecandaryContainer;
