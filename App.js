import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from 'futbookee/components/logo';
import InputField from 'futbookee/components/InputField';
import Button from 'futbookee/components/Button';
import Welcome from 'futbookee/components/welcome';
import Grass from 'futbookee/components/grass';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Welcome />
        <InputField
          infoText={'email'}
          placeholderText={'dannybokati@gmail.com'}
        />
        <InputField
          infoText={'password'}
          placeholderText={'**********'}
          hideTextIcon={true}
          forgotPasswordOption={true}
        />
        <Button />
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 20,
            fontStyle: 'italic'
          }}
        >
          Don't have an account? Sign up.
        </Text>
        <Grass />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginLeft: 15,
    marginRight: 15
  }
});
