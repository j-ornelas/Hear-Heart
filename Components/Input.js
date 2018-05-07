import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function Input (props){
  return (
    <View>
      <Text>Here is the input view</Text>
      <Button
        onPress={props.handleButtonPress}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => props.updateStart(text)}
        value={props.startInput}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => props.updateEnd(text)}
        value={props.endInput}
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
