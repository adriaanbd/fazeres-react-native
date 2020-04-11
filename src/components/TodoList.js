import React, {useContext} from 'react';
import {Card} from 'react-native-elements';
import Todo from './Todo';
import {Context} from '../context/todosContext';

const TodoList = () => {
  const {state} = useContext(Context);
  return (
    <Card>
      {state.map(todo => (
        <Todo todo={todo.name} key={todo.id} id={todo.id} />
      ))}
    </Card>
  );
};

export default TodoList;
