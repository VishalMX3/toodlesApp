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

export const getTodos = async (userId, dispatch) => {
  dispatch(getTodosStart());
  try {
    const res = await axios.get(
      `https://toodlesapp.onrender.com/users/${userId}/todos`
    );
    console.log(res.data);
    dispatch(getTodosSuccess(res.data.todos));
  } catch (error) {
    dispatch(getTodosFailure());
  }
};

export const addTodo = async (userId, todoData, dispatch) => {
  dispatch(addTodoStart());
  try {
    const res = await axios.post(
      `https://toodlesapp.onrender.com/todos/${userId}`,
      todoData
    );
    console.log(res.data);
    dispatch(addTodoSuccess(res.data.todo));
  } catch (error) {
    dispatch(addTodoFailure());
  }
};

export const toggleTodo = async (todoId, status, dispatch) => {
  dispatch(toggleTodoStart());

  try {
    const response = await axios.patch(
      `https://toodlesapp.onrender.com/todos/${todoId}/status`,
      { status }
    );
    console.log(response.data);
    dispatch(toggleTodoSuccess(response.data.todo));
  } catch (error) {
    dispatch(toggleTodoFailure());
  }
};

export const deleteTodo = async (userId, todoId, dispatch) => {
  dispatch(deleteTodoStart());

  try {
    const response = await axios.delete(
      `https://toodlesapp.onrender.com/todos/${userId}/${todoId}/delete`
    );
    console.log(response.data);
    dispatch(deleteTodoSuccess(response.data.todo));
  } catch (error) {
    dispatch(deleteTodoFailure());
  }
};
