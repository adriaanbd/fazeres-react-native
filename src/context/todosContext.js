import reducerContext from './reducerContext';
import todosReducer from './reducers';

const DEFAULT_STATE = [
  {name: 'Laundry', done: true},
  {name: 'Groceries', done: false},
  {name: 'Code', done: false},
];

export const {Context, Provider} = reducerContext(todosReducer, DEFAULT_STATE);
