import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class TinyTextButton extends PureComponent {
  render() {
    const {
      isSelected,
      style,
      backgroundColor,
      textStyle,
      customSelectedStyle,
      onPress,
      name
    } = this.props;

    const defaultSelectedStyle = customSelectedStyle || {
      backgroundColor: '#55BEC5',
      borderWidth: 0
    };
    const selectedStyle = isSelected ? defaultSelectedStyle : style;
    const selectedStyleText = isSelected ? { color: '#fff' } : null;

    return (
      <TouchableOpacity
        style={[styles.container(backgroundColor), style, selectedStyle]}
        onPress={onPress}
      >
        <Text style={[styles.textStyle, textStyle, selectedStyleText]}>
          {name}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: backgroundColor => ({
    height: 30,
    minWidth: 80,
    borderRadius: 5,
    backgroundColor: backgroundColor || '#55BEC5',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20
  }),
  textStyle: {
    fontSize: 17,
    letterSpacing: 0.5,
    fontWeight: '500',
    marginLeft: 20,
    marginRight: 20,
    color: '#fff'
  }
});
export default TinyTextButton;
