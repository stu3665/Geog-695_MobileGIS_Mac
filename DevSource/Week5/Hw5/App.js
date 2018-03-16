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



Mapbox.setAccessToken('pk.eyJ1Ijoia3AyMDE4IiwiYSI6ImNqZXJ5NnZ1NTJnNmkyeW8wMDA2MWd3ZHoifQ.N7Bt8sYySclIivRghqWuBg');

export default class App extends Component {
  constructor(props) {
    super(props);
  }

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
      <View style={styles.container}>

        <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Street}
          zoomLevel={13}
          userTrackingMode={Mapbox.UserTrackingModes.Follow}
          style={styles.map}>

          <Mapbox.ShapeSource
            id="buildings"
            url={"http://gisday.tamu.edu/Rest/Buildings/Map/Get/"} >
            <Mapbox.FillLayer id="buildingsFill" style={layerStyles.buildings} />
          </Mapbox.ShapeSource>

          <Mapbox.ShapeSource
            id2="trees"
            url={"https://gis.tamu.edu/arcgis/rest/services/FCOR/BaseMap_020618/MapServer/9/query?where=OBJECTID+%3E+1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryPoint&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=10200&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson"} >
            <Mapbox.FillLayer id2="treesFill" style={layerStyles.trees} />
          </Mapbox.ShapeSource>
          
          <Mapbox.ShapeSource
            id3="railroads"
            url={" https://gis.tamu.edu/arcgis/rest/services/FCOR/BaseMap_020618/MapServer/11/query?where=objectid+%3E+1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryPolyline&inSR=&spatialRel=esriSpatialRelContains&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=5&outSR=10200&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&f=geojson"} >
            <Mapbox.FillLayer id3="railroadsFill" style={layerStyles.railroads} />
          </Mapbox.ShapeSource>
          
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
  trees: {
    fillOpacity:0.40,
    fillColor: '#006400'
  },
  railroads: {
    fillOpacity:0.10,
    fillColor: '#8b4513'
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