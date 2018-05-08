import React from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo';

export default function VideoView (props){
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Video
    	  source={{ uri: 'https://s3-us-west-1.amazonaws.com/heart-videos/blood.mp4' }}
        shouldPlay
    	  resizeMode="cover"
    	  style={{ width, height: 300 }}
    	/>

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
