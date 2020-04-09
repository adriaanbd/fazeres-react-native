import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Input, Icon} from 'react-native-elements';

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

const InputField = props => {
  const {todo, setTodo} = props;

  const addTodo = () => {
    // add todo logic
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
            onPress={addTodo}
          />
        }
        value={todo}
        onChangeText={setTodo}
      />
    </Card>
  );
};

export default InputField;
