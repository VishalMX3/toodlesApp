import {
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
} from "./todoRedux";
import axios from "axios";

export const getTodos = async (dispatch) => {
  dispatch(getTodosStart());
  try {
    console.log("entering try");
    const res = await axios.get(
      "https://toodlesapp.onrender.com/users/65ef36abe5bc46da94e85eeb/todos"
    );
    console.log(res.data);
    dispatch(getTodosSuccess(res.data.todos));
  } catch (error) {
    dispatch(getTodosFailure());
  }
};

export const addTodo = async (todoData, dispatch) => {
  dispatch(addTodoStart());
  try {
    const res = await axios.post(
      "https://toodlesapp.onrender.com/todos/65ef36abe5bc46da94e85eeb",
      todoData
    );
    console.log(res.data);
    dispatch(addTodoSuccess(res.data.todo));
  } catch (error) {
    dispatch(addTodoFailure());
  }
};

export const toggleTodo = async (todoId, dispatch) => {
  dispatch(toggleTodoStart());

  try {
    const response = await axios.patch(
      `https://toodlesapp.onrender.com/todos/${todoId}/complete`
    );
    console.log(response.data);
    dispatch(toggleTodoSuccess(response.data.todo));
  } catch (error) {
    dispatch(toggleTodoFailure());
  }
};

export const deleteTodo = async (todoId, dispatch) => {
  dispatch(deleteTodoStart());

  try {
    const response = await axios.delete(
      `https://toodlesapp.onrender.com/todos/${todoId}/delete`
    );
    console.log(response.data);
    dispatch(deleteTodoSuccess(response.data.todo));
  } catch (error) {
    dispatch(deleteTodoFailure());
  }
};
