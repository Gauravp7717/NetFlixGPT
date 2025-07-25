import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptView: false,
  },
  reducers: {
    toggleGptView: (state, action) => {
      state.showGptView = !state.showGptView;
    },
  },
});

export const { toggleGptView } = gptSlice.actions;
export default gptSlice.reducer;
