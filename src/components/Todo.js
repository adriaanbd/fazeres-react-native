import React, {useState} from 'react';
import {CheckBox, ListItem, Button} from 'react-native-elements';

const Todo = props => {
  const {idx, todo} = props;
  const [done, setDone] = useState(true);

  const handleCheck = () => {
    setDone(prevState => !prevState);
  };

  return (
    <ListItem
      key={idx}
      title={todo}
      leftElement={<CheckBox checked={done} onPress={handleCheck} />}
      bottomDivider
    />
  );
};

export default Todo;
