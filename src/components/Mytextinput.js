/*Custom TextInput*/
import React from 'react';
import { View, TextInput } from 'react-native';
const Mytextinput = props => {
  return (
    <View
      style={{
        borderColor: '#007FFF',
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 70, 
        borderBottomWidth: 1.5,
        borderTopWidth: 1.5, 
        borderRightWidth: 1.5, 
        borderLeftWidth: 1.5,
        fontSize:8
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#3A4759"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};
export default Mytextinput;