import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        welcome to <Text style={styles.futbookeeText}>futbooke</Text>
      </Text>
    </View>
  );
};

export default welcome;

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 30,
    fontStyle: 'italic'
  },
  futbookeeText: {
    fontSize: 60,
    fontStyle: 'italic'
  }
});
