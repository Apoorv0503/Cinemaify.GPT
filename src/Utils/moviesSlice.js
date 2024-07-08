import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    popular: null,
    topRated:null,
    upcoming:null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popular = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcoming = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTrailerVideo } =
  moviesSlice.actions;

export default moviesSlice.reducer;
