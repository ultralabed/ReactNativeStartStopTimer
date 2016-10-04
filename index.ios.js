import formatTime from 'minutes-seconds-milliseconds';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

let StopWatch = React.createClass ({
  getInitialState: function() {
    return {
      timeElapsed: null,
    }
  },
  render:  function() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <View style={ styles.timerWrapper }>
            <Text style={ styles.timer }>
              { formatTime(this.state.timeElapsed) }
            </Text>
          </View>
          <View style={ styles.buttonWrapper }>
            { this.startStopButton() }
            { this.lapButton() }
          </View>
        </View>
        <View style={ [styles.footer] }>
          <Text>
            I am a list of Laps
          </Text>
        </View>
      </View>
    )},
    startStopButton: function() {
      return (
        <TouchableHighlight 
          underlayColor="gray"
          onPress={ this.handleStartPress }
          style={ [styles.button, styles.startButton] }
          >
          <Text>
            Start
          </Text>
        </TouchableHighlight>
      )
    },
    lapButton: function() {
      return (
        <View style={ styles.button }>
          <Text>
            Lap
          </Text>
        </View>
      )
    },
    handleStartPress: function() {
      let startTime = new Date();

      setInterval(() => {
        this.setState({
          timeElapsed: new Date() - startTime
        });
      }, 30);
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire the screen
    alignItems: 'stretch'
  },
  header: { //Yellow
    flex: 1
  },
  footer: { //Blue
    flex: 1
  },
  timerWrapper: { // Red
    flex: 5, // takes up 5/8ths of the available space
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { //Green
    flex: 3, // takes up 3/8ths of the available space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
