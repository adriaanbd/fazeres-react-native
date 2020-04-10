import React, {useState, useContext} from 'react';
import {CheckBox, ListItem, Icon} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {Context} from '../context/todosContext';
import {removeTodo} from '../context/actions';

const styles = StyleSheet.create({
  // custom styling
});

const Todo = props => {
  const {id, todo} = props;
  const [done, setDone] = useState(true);
  const {dispatch} = useContext(Context);

  const handleCheck = () => {
    setDone(prevState => !prevState);
  };

  const handleRemove = todoId => {
    dispatch(removeTodo(todoId));
  };

  const handleItemPress = () => {
    // highlight list item
  };

  return (
    <ListItem
      containerSyling={styles.container}
      key={id}
      title={todo}
      pad={0}
      leftElement={<CheckBox checked={done} onPress={handleCheck} />}
      rightElement={
        <Icon name="delete" onPress={() => handleRemove(id)} color="skyblue" />
      }
      onPress={handleItemPress}
      bottomDivider
    />
  );
};

export default Todo;
