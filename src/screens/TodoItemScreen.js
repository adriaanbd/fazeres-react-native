import React, {useContext} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {Context as TodoContext} from '../context/todosContext';

const TodoItemScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const {state} = useContext(TodoContext);
  const todo = state.find(item => item.id === id);
  return (
    <View>
      <Text>{todo.name}</Text>
    </View>
  );
};

export default TodoItemScreen;
