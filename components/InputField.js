import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View>
        <Text style={styles.infoText}>email</Text>
        <TextInput
          placeholder='dannybokati@gmail.com'
          style={styles.inputTextStyle}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

export default InputField;

const styles = StyleSheet.create({
  infoText: {
    color: 'black',
    fontStyle: 'italic',
    fontSize: 20
  },
  inputTextStyle: {
    height: 45,
    borderColor: 'gray',
    borderBottomWidth: 1,
    fontStyle: 'italic',
    fontSize: 20
  }
});
