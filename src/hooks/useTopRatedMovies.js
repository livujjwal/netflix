import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const dispatch = useDispatch();
  try {
    useEffect(() => {
      !topRatedMovies && fetchMovies();
    }, []);
    async function fetchMovies() {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await res.json();
      dispatch(addTopRatedMovies(data.results))
    }
  } catch (error) {}
};
export default useTopRatedMovies;
