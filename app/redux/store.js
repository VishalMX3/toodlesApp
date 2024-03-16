import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoRedux";
import userReducer from "./userRedux";

export default configureStore({
  reducer: {
    todos: todoReducer,
    user: userReducer,
  },
});
