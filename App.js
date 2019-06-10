import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from 'futbookee/components/logo';
import InputField from 'futbookee/components/InputField';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <InputField />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
