import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Mybutton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderColor: '#007aff',
  }
};

export default Mybutton;
