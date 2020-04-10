import reducerContext from './reducerContext';
import todosReducer from './reducers/todos';
import uuid from 'uuid-random';

const DEFAULT_STATE = [
  {name: 'Laundry', done: true, id: uuid()},
  {name: 'Groceries', done: false, id: uuid()},
  {name: 'Code', done: false, id: uuid()},
];

export const {Context, Provider} = reducerContext(todosReducer, DEFAULT_STATE);
