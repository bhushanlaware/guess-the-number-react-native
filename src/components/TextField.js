import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
const TextField = (props) => {
  return (<TextInput style={styles.TextInput} {...props}></TextInput>);
}

export default TextField;
const styles = StyleSheet.create({
  TextInput: {
    borderColor: '#2196f3',
    padding: 2,
    paddingLeft: 5,
    flex: 1,
    height:50,
    fontSize:16,
    borderRadius: 2,
    borderWidth: 2,
  },
});
