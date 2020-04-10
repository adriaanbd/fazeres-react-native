import SET_FILTER from '../actions/types';

const filterReducer = (state, action) => {
  const {type, filter} = action;
  switch (type) {
    case SET_FILTER:
      return filter;
    default:
      return state;
  }
};

export default filterReducer;
