import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMoviesTrailer } from "../utils/moviesSlice";

const useVideoBackground = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTrailer();
  }, []);
  const fetchTrailer = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/" + 787699 + "/videos?language=en-US",
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
