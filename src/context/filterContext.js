import reducerContext from './createDataContext';
import filterReducer from './reducers';

const DEFAULT_STATE = 'All';

export const {Context, Provider} = reducerContext(filterReducer, DEFAULT_STATE);
