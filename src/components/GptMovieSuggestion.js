import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestion = () => {
  const movies = useSelector((store) => store.movies.searchMovies);
  if (!movies) return;

  return (
    <div className="pt-[1%]">
        <div className="bg-transparent ">

       
      <h1 className="text-2xl px-4 py-4 text-white">Serach Results</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex pb-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default GptMovieSuggestion;
