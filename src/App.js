/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import TodoListScreen from './screens/TodoListScreen';
import TodoItemScreen from './screens/TodoItemScreen';
import CombinedProvider from './context/combinedProvider';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const stackNavigator = createStackNavigator({
  TodoListScreen: {
    screen: TodoListScreen,
    navigationOptions: {
      header: () => null,
    },
  },
  TodoItemScreen,
});

const App = createAppContainer(stackNavigator);

export default () => (
  <CombinedProvider>
    <App />
  </CombinedProvider>
);
