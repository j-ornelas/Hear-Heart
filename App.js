import React from 'react';
import Video from './Components/Video.js'
import Input from './Components/Input.js'

import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      video: 'h_yeY7T-au0',
      start: ["148", "149", "150", "151", "152", "153", "154", "155", "156"],
      end: ["110", "111", "112", "113", "114", "115", "116", "117", "118"],
      startInput: "",
      endInput: "",
    }
  }

  handleButtonPress(){
    console.log('clicked');
  }

  debugButton(){
    console.log(this.state)
  }

  updateStart(text){
    this.setState({startInput:text})
  }

  updateEnd(text){
    this.setState({endInput:text})
  }



  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.video}</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Video />
        <Input
          startInput={this.state.startInput}
          endInput={this.state.endInput}
          handleButtonPress={this.handleButtonPress.bind(this)}
          updateStart={this.updateStart.bind(this)}
          updateEnd={this.updateEnd.bind(this)}
          debugButton={this.debugButton.bind(this)}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
