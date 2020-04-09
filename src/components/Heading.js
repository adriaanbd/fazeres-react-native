import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 48,
  },
  title: {
    fontSize: 48,
  },
});

const Heading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>fazeres</Text>
    </View>
  );
};

export default Heading;
