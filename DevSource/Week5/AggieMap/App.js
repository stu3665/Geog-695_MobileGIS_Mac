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
  Text,
  View
} from 'react-native';

Mapbox.setAccessToken('pk.eyJ1Ijoia3AyMDE4IiwiYSI6ImNqZXJ5NnZ1NTJnNmkyeW8wMDA2MWd3ZHoifQ.N7Bt8sYySclIivRghqWuBg');


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.emptyState;
    this.onPress = this.onPress.bind(this);
  }

  get emptyState() {
    return { selectedGeoJSON: null, selectedCommunityDistrict: - 1 };
  }

  async onPress(e) {
    const { screenPointX, screenPointY } = e.properties;
    const featureCollection = await this._map.queryRenderedFeaturesAtPoint([
      screenPointX,
      screenPointY,
    ], null, ['buildingsFill']);

    if (featureCollection.features.length) {
      this.setState({
        selectedGeoJSON: featureCollection,
        selectedBuilding: featureCollection.features[0].properties.BldgName,
        BldgNumber: featureCollection.features[0].properties.Number,
        BldgAbbr: featureCollection.features[0].properties.BldgAbbr,
      });
    } else {
      this.setState(this.emptyState);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} >
          {this.state.selectedBuilding ? this.state.selectedBuilding + " (" + this.state.BldgAbbr + ")" + "\n" + ("Building #: " + this.state.BldgNumber) : "No selected building"}
        </Text>
        <Mapbox.MapView
          ref={(c) => this._map = c}
          onPress={this.onPress}
          styleURL={Mapbox.StyleURL.Street}
          zoomLevel={13}
          centerCoordinate={[-96.344704, 30.613310]}
          style={styles.map}>

          <Mapbox.ShapeSource
            id="buildings"
            url={"http://gisday.tamu.edu/Rest/Buildings/Map/Get/"} >
            <Mapbox.FillLayer id="buildingsFill" style={layerStyles.buildings} />
          </Mapbox.ShapeSource>

          {this.state.selectedGeoJSON ? (
            <Mapbox.ShapeSource id='selectedBuilding' shape={this.state.selectedGeoJSON}>
              <Mapbox.FillLayer id='selectedBuildingFill' style={layerStyles.selectedBuilding} />
            </Mapbox.ShapeSource>
          ) : null}

        </Mapbox.MapView>
      </View>

    );
  }



}

const layerStyles = Mapbox.StyleSheet.create({
  label: {
    textField: '{BldgName}',
    textSize: 12,
    textColor: '#fff',
    textPitchAlignment: Mapbox.TextPitchAlignment.Map,
  },
  buildings: {
    fillOpacity: 0.50,
    fillColor: '#500000',
  },
  selectedBuilding: {
    fillOpacity: 0.70,
    fillColor: '#4169e1',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 8,
    backgroundColor: '#F5FCFF',
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "500",
    paddingLeft: 12,
    paddingTop: 8,
    color: "#4169e1",
    alignItems: "center"
  }
});