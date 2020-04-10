import reducerContext from './reducerContext';
import filterReducer from './reducers/filter';

const DEFAULT_STATE = 'All';

export const {Context, Provider} = reducerContext(filterReducer, DEFAULT_STATE);
