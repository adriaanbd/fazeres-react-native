import React, {useState} from 'react';
import {CheckBox, ListItem, Icon} from 'react-native-elements';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // custom styling
});

const Todo = props => {
  const {idx, todo} = props;
  const [done, setDone] = useState(true);

  const handleCheck = () => {
    setDone(prevState => !prevState);
  };

  const handleRemove = () => {
    // remove logic
  };

  const handleItemPress = () => {
    // highlight list item
  };

  return (
    <ListItem
      containerSyling={styles.container}
      key={idx}
      title={todo}
      pad={0}
      leftElement={<CheckBox checked={done} onPress={handleCheck} />}
      rightElement={
        <Icon name="delete" onPress={handleRemove} color="skyblue" />
      }
      onPress={handleItemPress}
      bottomDivider
    />
  );
};

export default Todo;
