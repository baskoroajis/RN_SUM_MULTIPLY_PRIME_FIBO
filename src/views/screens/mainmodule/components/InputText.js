import React, { PureComponent } from 'react';
import { View, TextInput, Text } from 'react-native';

class InputText extends PureComponent {
  render() {
    const { title, placeholder, onChangeText } = this.props;

    return (
      <View>
        <Text style={{ marginLeft: 11, marginTop: 10, marginBottom: 6 }}>
          {title}
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 8
          }}
          placeholder={placeholder || 'please input your number'}
          onChangeText={text => onChangeText(text)}
          keyboardType="numeric"
        />
      </View>
    );
  }
}

export default InputText;
