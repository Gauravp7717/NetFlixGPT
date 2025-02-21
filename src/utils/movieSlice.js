import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlay: null,
    trailerVideo: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlay = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addMovies, addTrailer } = movieSlice.actions;
export default movieSlice.reducer;
