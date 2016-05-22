'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Modal,
  TouchableOpacity
} from 'react-native';

import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

import {login} from '../actions/login';

var DeviceHeight = Dimensions.get('window').height;

class LoginScreen extends Component {
  mixins: [Modal.Mixin]

  constructor(props) {
    super(props);
  
    this.state = {isModalOpen: false};
  }

 login() {
    const {dispatch} = this.props;
    dispatch(login('',''));
  }

  showModalTransition(transition) {
    transition('opacity', {duration: 200, begin: 0, end: 1});
    transition('height', {duration: 200, begin: DeviceHeight * 2, end: DeviceHeight});
  }

  hideModalTransition(transition) {
    transition('height', {duration: 200, begin: DeviceHeight, end: DeviceHeight * 2, reset: true});
    transition('opacity', {duration: 200, begin: 1, end: 0});
  }

    render() {
      return (
        <View style={styles.container}>
            <StatusBar
              backgroundColor="#FFB90F"
              barStyle="default"
            />

          <Video source={{uri: "scene2"}}
                 style={styles.backgroundVideo}
                 rate={1} volume={1} muted={true}
                 resizeMode="cover" repeat={true} key="scene2" />

          <View style={styles.loginContainer}>
            <TouchableOpacity onPress={this.login.bind(this)}>
              <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                  登录
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={this.openModal} style={styles.aboutButton}>
              <Text style={styles.aboutButtonText}>
                About this project
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  backgroundOverlay: {
    opacity: 0.5,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  loginContainer: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    margin: 10,
    opacity: 0.8,
  },
  aboutButtonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#efefef',
    opacity: 0.8,
  },
  contentContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 15,
    alignSelf: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'transparent',
    left: 0,
    right: 0,
  },
  aboutTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
});



export default LoginScreen;