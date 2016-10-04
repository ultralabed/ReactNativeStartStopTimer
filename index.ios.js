import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

let StopWatch = React.createClass ({
  render:  function() {
    return (
      <View>
        <Text>
          00:00.00
        </Text>
        { this.startStopButton() }
        { this.lapButton() }
      </View>
    )},
    startStopButton: function() {
      return (
        <View>
          <Text>
            Start
          </Text>
        </View>
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
    }
})

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
