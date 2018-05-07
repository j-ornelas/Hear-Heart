import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Video (props){
  return (
    <View style={styles.container}>
      <Text>This is the Video View</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
