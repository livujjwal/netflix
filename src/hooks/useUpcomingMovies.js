import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovies = () => {
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const dispatch = useDispatch();
  try {
    useEffect(() => {
      !upComingMovies && fetchMovies();
    }, []);
    async function fetchMovies() {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await res.json();
      dispatch(addUpComingMovies(data.results))
    }
  } catch (error) {}
};
export default useUpComingMovies;