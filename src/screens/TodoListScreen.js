import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import TodoList from '../components/TodoList';
import Heading from '../components/Heading';
import InputField from '../components/InputField';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 24,
  },
});

const TodoListScreen = ({navigation}) => (
  <View style={styles.container}>
    <ScrollView>
      <Heading />
      <InputField />
      <TodoList navigation={navigation} />
    </ScrollView>
  </View>
);

export default TodoListScreen;
