import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { addMoviesTrailer } from "../utils/moviesSlice";

const useVideoBackground = (movieId) => {
  const dispatch = useDispatch();
  const moviesTrailer = useSelector((store) => store.movies.moviesTrailer);
  const trailerId = useSelector((store) => store.movies.nowPlayingMovies[0].id);
  useEffect(() => {
    !moviesTrailer && fetchTrailer();
  }, []);
  const fetchTrailer = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        trailerId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await res.json();
    const filterData = data?.results?.filter(
      (video) => video?.type === "Trailer"
    );
    dispatch(
      addMoviesTrailer(
        (filterData.length === 0 ? data?.results[0] : filterData[0])?.key
      )
    );
  };
  return;
};
export default useVideoBackground;
