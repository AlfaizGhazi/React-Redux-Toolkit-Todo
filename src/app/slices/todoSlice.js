import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    //   ADD TODO
    addTodo: (state, action) => {
      const { payload } = action;
      const { id, data } = payload;
      let whiteSpaceRegex = /^\s*$/;
      if (data.match(whiteSpaceRegex)) {
        return alert("Please Enter Valid Information!");
      } else {
        return {
          ...state,
          list: [
            ...state.list,
            {
              id: id,
              data: data,
            },
          ],
        };
      }
    },

    // DELETE TODO BY ID
    deleteTodo: (state, action) => {
      const { payload } = action;
      const { deleteID } = payload;
      const newFilteredList = state.list.filter((item) => {
        return item.id !== deleteID;
      });
      return {
        ...state,
        list: newFilteredList,
      };
    },

    // REMOVE ALL TODOS
    removeAllTodo: () => {
      return { list: [] };
    },
  },
});

export const { addTodo, deleteTodo, removeAllTodo } = todoSlice.actions;

export default todoSlice.reducer;
