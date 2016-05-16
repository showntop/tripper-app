/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ToolbarAndroid,
  ToastAndroid,
  BackAndroid
} from 'react-native';

import MainView from './src/MainView'

class trip extends Component {

RouteMapper(route, navigationOperations, onComponentRef) {
    _navigator = navigationOperations;
    if (route.name === 'home') {
      return (
        <View style={styles.container}>
          <MainView navigator={navigationOperations}/>
        </View>
      );
    } else if (route.name === 'story') {
      return (
        <View style={styles.container}>
          <StoryScreen
            style={{flex: 1}}
            navigator={navigationOperations}
            story={route.story} />
        </View>
      );
    }
  }

  render() {
    var initialRoute = {name: 'home'};

    return (
      <Navigator
        style = {styles.container}
        initialRoute = {initialRoute}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={this.RouteMapper}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('trip', () => trip);
