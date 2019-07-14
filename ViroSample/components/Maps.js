import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'
import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, Vibration } from 'react-native';



// const Maps = () => {

export default class Maps extends Component {
  state = {
    color: '#FF0000',
    latitude: 'change',
    longitude: 'chagne',
    errr: ''
  };

  handlePress = () => {
    // this.props.addNinja();
    this.setState({
      color: '#959595'
    });
  };

  componentDidMount() {


    Vibration.vibrate();
    Geolocation.getCurrentPosition((info) => {
      this.setState({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,

      });
    });
    setTimeout(() => {
      console.warn(this.state.latitude)
      console.warn("hhello")
    }, 5 * 1000)


  }

  render() {
    // let { func } = this.props;
    const location = {
      latitude: 53.480759, longitude: -2.242631, title: "place", subtitle: "subplace"
    }
    return (

      <Fragment>
        <MapView
          style={styles.map}
          region={{
            latitude: 53.480759,
            longitude: -2.242631,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}

        >
          <MapView.Marker coordinate={location} />
        </MapView>


        <Button
          // onPress={this.handlePress}
          onPress={this.props.getExperienceButtonOnPress}
          title="Back"
          color={this.state.color}
          accessibilityLabel="Navigate back a page"
        />
        <Text>{this.state.latitude} {this.state.longitude}</Text>
      </Fragment>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

// export default Maps;
