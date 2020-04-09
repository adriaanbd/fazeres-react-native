import React from 'react';

const TodosContext = React.createContext([]);

export const TodosProvider = TodosContext.Provider;
export const TodosConsumer = TodosContext.Consumer;

export default TodosContext;
