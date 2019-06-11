import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>welcome to</Text>
      <Text style={styles.futbookeeText}>futbooke</Text>
    </View>
  );
};

export default welcome;

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'Avenir'
  },
  futbookeeText: {
    fontSize: 40,
    fontStyle: 'italic',
    fontFamily: 'Avenir'
  }
});
