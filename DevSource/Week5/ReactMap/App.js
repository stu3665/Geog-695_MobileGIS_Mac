/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import {
  Platform,
  StyleSheet,
} from 'react-native';


Mapbox.setAccessToken('pk.eyJ1Ijoia3AyMDE4IiwiYSI6ImNqZXJ5NnZ1NTJnNmkyeW8wMDA2MWd3ZHoifQ.N7Bt8sYySclIivRghqWuBg');

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Mapbox.MapView
      styleURL={Mapbox.StyleURL.Street}
      zoomLevel={15}
      centerCoordinate={[-44.90678, -21.143901]}
      style={styles.container}>
      </Mapbox.MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
