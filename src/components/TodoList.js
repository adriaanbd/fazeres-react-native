import React, {useContext} from 'react';
import {Card} from 'react-native-elements';
import Todo from './Todo';
import TodosContext from '../store/TodosContext';

const TodoList = () => {
  const todos = useContext(TodosContext);

  return (
    <Card>
      {todos.map((todo, idx) => (
        <Todo todo={todo.name} idx={idx} />
      ))}
    </Card>
  );
};

export default TodoList;
