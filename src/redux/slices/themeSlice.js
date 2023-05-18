import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBlack: false,
};


export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setIsBlack: (state) => {
      state.isBlack = !state.isBlack;
    },
  },
});

export const { setIsBlack } = themeSlice.actions;

export default themeSlice.reducer;
