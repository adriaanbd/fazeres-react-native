/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Heading from './Heading';
import InputField from './InputField';
import TodoList from './TodoList';
import {TodosProvider} from '../store/TodosContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 32,
  },
});

const App = () => {
  const todos = [
    {name: 'Laundry', done: true},
    {name: 'Groceries', done: false},
    {name: 'Code', done: false},
  ]; // provided as default to see it works

  return (
    <TodosProvider value={todos}>
      <View style={styles.container}>
        <Heading />
        <InputField />
        <TodoList />
      </View>
    </TodosProvider>
  );
};

export default App;
