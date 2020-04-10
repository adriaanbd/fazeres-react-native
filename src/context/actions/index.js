import {
  LIST_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  SET_FILTER,
  // FILTER_TODOS,
} from './types';

export const listTodos = todos => {
  return {
    type: LIST_TODOS,
    todos,
  };
};

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo,
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const editTodo = (id, todo) => {
  return {
    type: EDIT_TODO,
    id,
    todo,
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter,
  };
};

// const filterTodos = (todos) => {
//   return {
//     type: FILTER_TODOS,
//     todos,
//   };
// };
