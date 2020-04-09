import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Input} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    borderColor: 'lightgrey',
  },
});

const InputField = props => {
  const {todo, setTodo} = props;
  return (
    <Card style={styles.container}>
      <Input
        style={styles.title}
        placeholder="Whatsha need done?"
        value={todo}
        onChangeText={setTodo}
      />
    </Card>
  );
};

export default InputField;
