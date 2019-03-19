import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, secureTextEntry, placeholder, style }) => {
  const { inputStyles, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={[labelStyle, style]}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        autoCorrect={false}
        style={inputStyles}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyles: {
    color: '#fff',
    backgroundColor: 'rgba(136,136,136,0.5)',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 45,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
