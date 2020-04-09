/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Heading from './Heading';
import InputField from './InputField';
import TodoList from './TodoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 32,
  },
});

const App = () => {
  const [todo, setTodo] = useState('');
  return (
    <View style={styles.container}>
      <Heading />
      <InputField todo={todo} setTodo={setTodo} />
      <TodoList />
    </View>
  );
};

export default App;
