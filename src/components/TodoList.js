import React from 'react';
import {Card} from 'react-native-elements';
import Todo from './Todo';

const TodoList = () => {
  const todos = ['Laundry', 'Groceries', 'Code'];

  return (
    <Card>
      {todos.map((todo, idx) => (
        <Todo todo={todo} idx={idx} />
      ))}
    </Card>
  );
};

export default TodoList;
