/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { PermissionsAndroid } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

Mapbox.setAccessToken('pk.eyJ1Ijoia3AyMDE4IiwiYSI6ImNqZXJ5NnZ1NTJnNmkyeW8wMDA2MWd3ZHoifQ.N7Bt8sYySclIivRghqWuBg');

export default class App extends Component {
  async requestPermissions() {
    const neededPermissions = ['android.permission.ACCESS_FINE_LOCATION'];
    try {
      var granted = await PermissionsAndroid.requestMultiple(neededPermissions, {
        title: "Attention:",
        message: "This app needs to access your GPS for user positioning"
      }).then((result) => {
        neededPermissions.map((value, index) => {
          if (result[value] === PermissionsAndroid.RESULTS.GRANTED) {
            console.log(`Yippee! ${value} was granted!`)
          } else if (result[value] === PermissionsAndroid.RESULTS.DENIED) {
            console.log(`Boooooo! ${value} was denied.`)
          } else {
            console.log(`Ask later about ${value}.`)
          }
        })
        console.log(result);
      });
    } catch (err) {
      console.log(err);
    }
  }  
  render() {
    this.requestPermissions();
    return (
      <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Street}
          zoomLevel={15}
          userTrackingMode={Mapbox.UserTrackingModes.Follow}
          style={styles.container}>
      </Mapbox.MapView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
