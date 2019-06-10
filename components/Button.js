import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const logo = () => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Log In</Text>
    </View>
  );
};

export default logo;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderRadius: 25
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontStyle: 'italic'
  }
});
