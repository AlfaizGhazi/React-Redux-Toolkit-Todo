import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import darkModeSlice from "./slices/darkModeSlice";
import todoSlice from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    counterState: counterSlice,
    darkModeState: darkModeSlice,
    todoListState: todoSlice,
  },
});
