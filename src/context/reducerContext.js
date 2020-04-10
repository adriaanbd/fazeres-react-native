import React, {createContext, useReducer} from 'react';

export default (reducer, initState) => {
  const Context = createContext();
  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
      <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
    );
  };

  return {Context, Provider};
};
