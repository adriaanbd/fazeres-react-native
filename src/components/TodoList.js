import React, {useContext} from 'react';
import {Card} from 'react-native-elements';
import Todo from './Todo';
import {Context} from '../context/todosContext';

const TodoList = () => {
  const {state} = useContext(Context);
  return (
    <Card>
      {state.map((todo, idx) => (
        <Todo todo={todo.name} key={idx} />
      ))}
    </Card>
  );
};

export default TodoList;
