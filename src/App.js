/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import TodoListScreen from './screens/TodoListScreen';
import CombinedProvider from './context/combinedProvider';

const App = () => {
  return (
    <CombinedProvider>
      <TodoListScreen />
    </CombinedProvider>
  );
};

export default App;
