import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function Input (props){
  return (
    <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        keyboardType='numeric'
        onChangeText={(text) => props.updateStart(text)}
        value={props.startInput}
        maxLength={10}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        keyboardType='numeric'
        onChangeText={(text) => props.updateEnd(text)}
        value={props.endInput}
        maxLength={10}
      />
      <Button
        onPress={props.handleButtonPress}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={props.debugButton}
        title="See State"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}
