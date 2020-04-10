import React, {useState, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Card, Input, Icon} from 'react-native-elements';
import {Context} from '../context/todosContext';
import {addTodo} from '../context/actions';

// uuid library crashes: https://github.com/uuidjs/uuid/issues/375
import uuid from 'uuid-random';
/* other alternatives:
https://github.com/ai/nanoid#react-native
https://github.com/eugenehp/react-native-uuid
*/

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  outerInput: {
    height: 40,
    borderBottomWidth: 0,
  },
  innerInput: {
    color: 'grey',
  },
});

const DEFAULT = '';

const InputField = () => {
  const [todoName, setTodo] = useState(DEFAULT);
  const {dispatch} = useContext(Context);

  const handleAdd = () => {
    const id = uuid();
    const todoItem = {name: todoName, done: false, id};
    dispatch(addTodo(todoItem));
    setTodo(DEFAULT);
  };

  return (
    <Card style={styles.container}>
      <Input
        inputContainerStyle={styles.outerInput}
        inputStyle={styles.innerInput}
        placeholder="Whatsha need done?"
        rightIcon={
          <Icon
            name="add-circle-outline"
            size={24}
            color="skyblue"
            onPress={handleAdd}
          />
        }
        value={todoName}
        onChangeText={setTodo}
      />
    </Card>
  );
};

export default InputField;
