import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
  title: {
    fontSize: 48,
  },
});

const Heading = () => {
  return (
    <View style={styles.container}>
      <Text h1>fazeres</Text>
    </View>
  );
};

export default Heading;
