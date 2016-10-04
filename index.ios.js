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
        <View style={ [styles.header, this.border('yellow')] }>
          <View style={ [this.border('red'), styles.timerWrapper] }>
            <Text>
              { formatTime(this.state.timeElapsed) }
            </Text>
          </View>
          <View style={ [this.border('green'), styles.buttonWrapper] }>
            { this.startStopButton() }
            { this.lapButton() }
          </View>
        </View>
        <View style={ [styles.footer, this.border('blue')] }>
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
          >
          <Text>
            Start
          </Text>
        </TouchableHighlight>
      )
    },
    lapButton: function() {
      return (
        <View>
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
    },
    border: function(color) {
      return {
        borderColor: color,
        borderWidth: 4
      }
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
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
