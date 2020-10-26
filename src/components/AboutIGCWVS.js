import React from 'react';
import { View } from 'react-native';

const TextB = (props) => {
  return (
    <View style={styles.TextB}>
    {props.children}
    </View>
  );
};

const TextG = (props) => {
    return (
      <View style={styles.TextG}>
      {props.children}
      </View>
    );
  };

const TextW = (props) => {
    return (
      <View style={styles.IconStyleW}>
      {props.children}
      </View>
    );
  };  

const IconStyleW = (props) => {
    return (
      <View style={styles.TextW}>
      {props.children}
      </View>
    );
  };

const styles = {
  TextB:{
    color:'#3A4759',
    fontFamily:'Montserrat'
  },
  TextG:{
    color:'#9B9C9F',
    fontFamily:'Montserrat'
  },
  TextW:{
    color:'white',
    fontFamily:'Montserrat'
  },
  IconStyleW:{
      color:'white',
      fontSize:20,
      alignSelf:"center"
  }
};

export { TextB, TextG, TextW, IconStyleW };
