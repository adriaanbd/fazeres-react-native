import {LIST_TODOS, ADD_TODO, EDIT_TODO, REMOVE_TODO} from '../actions/types';

const todosReducer = (state, action) => {
  const {type, todos, id} = action;
  switch (type) {
    case LIST_TODOS:
      return todos;
    case ADD_TODO:
      return [...state, action.todo];
    case EDIT_TODO:
      return state.map(todo => (todo.id === id ? action.todo : todo));
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== id);
    default:
      return state;
  }
};

export default todosReducer;
