import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    darkModeToggle: (state) => {
      state = state === true ? false : true;
      return state;
    },
  },
});

export const { darkModeToggle } = darkModeSlice.actions;

export default darkModeSlice.reducer;
