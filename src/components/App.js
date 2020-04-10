/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Heading from './Heading';
import InputField from './InputField';
import TodoList from './TodoList';
import CombinedProvider from '../context/combinedProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 32,
  },
});

const App = () => {
  return (
    <CombinedProvider>
      <View style={styles.container}>
        <Heading />
        <InputField />
        <TodoList />
      </View>
    </CombinedProvider>
  );
};

export default App;
