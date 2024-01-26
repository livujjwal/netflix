import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const usePopularMovies = () => {
    const popularMovies = useSelector(store => store.movies.popularMovies)
  const dispatch = useDispatch();
  try {
    useEffect(() => {
        !popularMovies && serachMovies();
    }, []);
    async function serachMovies() {
      const res =await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS );
      const data =await res.json();
      dispatch(addPopularMovies(data.results));
    }
  } catch (error) {}

  return;
};

export default usePopularMovies;
