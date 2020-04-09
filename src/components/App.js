/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import Heading from './Heading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Heading />
    </View>
  );
};

export default App;
