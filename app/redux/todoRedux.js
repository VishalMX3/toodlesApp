import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET
    getTodosStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getTodosSuccess: (state, action) => {
      state.isFetching = false;
      state.todos = action.payload;
    },
    getTodosFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },

    //ADD
    addTodoStart: (state) => {
      // state.isFetching = true;
      state.error = false;
    },
    addTodoSuccess: (state, action) => {
      state.isFetching = false;
      state.todos.push(action.payload);
    },
    addTodoFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },

    //Toggle
    toggleTodoStart: (state) => {
      // state.isFetching = true;
      state.error = false;
    },
    toggleTodoSuccess: (state, action) => {
      state.isFetching = false;
      state.todos = state.todos.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, status: "completed" }
          : todo
      );
    },
    toggleTodoFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },

    //Delete
    deleteTodoStart: (state) => {
      // state.isFetching = true;
      state.error = false;
    },
    deleteTodoSuccess: (state, action) => {
      state.isFetching = false;
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    deleteTodoFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getTodosStart,
  getTodosSuccess,
  getTodosFailure,
  addTodoStart,
  addTodoSuccess,
  addTodoFailure,
  toggleTodoStart,
  toggleTodoSuccess,
  toggleTodoFailure,
  deleteTodoStart,
  deleteTodoSuccess,
  deleteTodoFailure,
} = todoSlice.actions;

export default todoSlice.reducer;
