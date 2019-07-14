import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Button
} from 'react-native';

import { ViroARSceneNavigator } from 'react-viro';
import Maps from './components/Maps';

var sharedProps = {
  apiKey: '2DF60EAD-EC00-4D0A-83DA-96E20F6E3352'
};

// Sets the default scene you want for AR and VR
var InitialARScene = require('./js/HelloWorldSceneAR');

var UNSET = 'UNSET';

var AR_NAVIGATOR_TYPE = 'AR';
var MAPS_NAVIGATOR_TYPE = 'MAPs';

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

import Login from './components/Login'

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps,
      activeExample: -1
    };

    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);

    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
    this._exitViro = this._exitViro.bind(this);

    // this.onBack = this.onBack.bind(this);
  }

  addNinja = ninja => { };

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == MAPS_NAVIGATOR_TYPE) {
      return this._getMapsNavigator();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    }
  }

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector() {
    return (
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <Text style={localStyles.titleText}>
            Choose your desired experience:
          </Text>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={'#68a0ff'}
          >
            <Text style={localStyles.buttonText}>AR</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(MAPS_NAVIGATOR_TYPE)}
            underlayColor={'#FF0000'}
          >
            <Text style={localStyles.buttonText}>MAPS</Text>
          </TouchableHighlight>
        </View>
        <Login />
      </View>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <>
        <View>
          <Button
            // onPress={this.handlePress}
            onPress={this._getExperienceButtonOnPress(UNSET)}
            title="Back"
            color={this.state.color}
            accessibilityLabel="Navigate back a page"
          />
        </View>
        <ViroARSceneNavigator
          {...this.state.sharedProps}
          getExperienceButtonOnPress={this._getExperienceButtonOnPress(UNSET)}
          initialScene={{ scene: InitialARScene }}
        />
      </>
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType
      });
    };
  }

  _getMapsNavigator() {
    return (
      <Maps
        getExperienceButtonOnPress={this._getExperienceButtonOnPress(UNSET)}
      />
    );
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType: UNSET
    });
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  outer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 25
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  }
});

module.exports = ViroSample;
