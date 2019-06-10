import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from 'futbookee/components/logo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
