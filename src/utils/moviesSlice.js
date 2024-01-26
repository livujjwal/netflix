import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies :null,
    topRatedMovies : null,
    upComigMovies : null,
    moviesTrailer : null,
    searchMovies : null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComigMovies = action.payload;
    },
    addMoviesTrailer: (state, action) => {
      state.moviesTrailer = action.payload;
    },
    addSearchMovies : (state, action) => {
      state.searchMovies = action.payload;
    },
  },
});
export const { addNowPlayingMovies ,addMoviesTrailer,addSearchMovies ,addPopularMovies,addUpComingMovies,addTopRatedMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
