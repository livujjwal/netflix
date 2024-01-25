import { MOVIE_POSTER } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
      <img className="w-60 p-2 cursor-pointer hover:scale-105 ease-in-out duration-500" alt="Movie Poster" src={MOVIE_POSTER + posterPath} />
  );
};
export default MovieCard;
