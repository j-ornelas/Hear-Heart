import React from 'react';
import { Platform, StatusBar, Modal, TouchableHighlight } from 'react-native';

import VideoView from './Components/Video.js'
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
      modalVisible: false
    }
  }

  handleButtonPress(){
    let startArr = this.state.start;
    let endArr = this.state.end;
    let start = this.state.startInput;
    let end = this.state.endInput
    if (startArr.includes(start) && endArr.includes(end)){
      console.log('correct!')
    } else {
      console.log('wrong!')
    }
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

  toggleModal(){
    this.setState({modalVisible:!this.state.modalVisible})
    console.log(this.state)
  }



  render() {
    return (
      <View style={styles.container}>
        <VideoView />
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
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
