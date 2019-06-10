import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View>
        <Text style={styles.infoText}>{this.props.infoText}</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder={this.props.placeholderText}
            style={styles.inputTextStyle}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          {this.props.hideTextIcon && (
            <Icon name={'ios-eye-off'} size={35} style={styles.iconStyle} />
          )}
        </View>
        {this.props.forgotPasswordOption && (
          <Text
            style={[
              styles.inputTextStyle,
              { alignSelf: 'flex-end', marginTop: 10 }
            ]}
          >
            forgot your password?
          </Text>
        )}
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
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderBottomWidth: 1
  },
  inputTextStyle: {
    height: 45,
    fontStyle: 'italic',
    fontSize: 20,
    alignSelf: 'stretch'
  },
  iconStyle: {
    color: 'black',
    fontSize: 35
  }
});
