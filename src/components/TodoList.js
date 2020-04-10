import React, {useContext} from 'react';
import {Card, Text} from 'react-native-elements';
import Todo from './Todo';

const TodoList = props => {
  const {children} = props;

  return (
    // <Card>
    //   {children.map((todo, idx) => (
    //     <Todo todo={todo.name} key={idx} />
    //   ))}
    // </Card>
    <Text>Here are the Todos</Text>
  );
};

export default TodoList;
