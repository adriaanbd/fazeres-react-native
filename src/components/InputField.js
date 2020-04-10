import React, {useState} from 'react';
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
  const {addTodo} = props;
  const [todo, setTodo] = useState('');

  const handleAdd = () => {
    //
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
        value={todo}
        onChangeText={setTodo}
      />
    </Card>
  );
};

export default InputField;
