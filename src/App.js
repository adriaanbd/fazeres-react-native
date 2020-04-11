/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Heading from './components/Heading';
import InputField from './components/InputField';
import TodoListScreen from './screens/TodoListScreen';
import CombinedProvider from './context/combinedProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 24,
  },
});

const App = () => {
  return (
    <CombinedProvider>
      <View style={styles.container}>
        <Heading />
        <InputField />
        <ScrollView keyboardShouldPersistTaps="always">
          <TodoListScreen />
        </ScrollView>
      </View>
    </CombinedProvider>
  );
};

export default App;
