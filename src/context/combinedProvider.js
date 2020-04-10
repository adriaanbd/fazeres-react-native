import React from 'react';
import {Provider as FilterProvider} from './filterContext';
import {Provider as TodosProvider} from './todosContext';

const CombinedProvider = ({children}) => (
  <>
    <TodosProvider>
      <FilterProvider>{children}</FilterProvider>
    </TodosProvider>
  </>
);
export default CombinedProvider;
