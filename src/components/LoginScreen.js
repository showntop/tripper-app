'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Modal,
  Image,
  TouchableOpacity
} from 'react-native';

import Video from 'react-native-video';
import SunButton from '../components/common/SunButton';
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

  openModal(){
    this.setState({modalVisible: visible});
  }

    render() {
      return (
        <View style={{flex: 1}}>
            <StatusBar
              backgroundColor="#3C8C96"
              barStyle="default"
            />
          {/*our logo*/}
          <Video source={{uri: "scenelogin"}}
                 style={styles.backgroundVideo}
                 rate={1} volume={1} muted={true}
                 resizeMode="cover" repeat={true} key="scenelogin" />
          <View style={{'flexDirection': 'row', alignItems: 'flex-start', justifyContent: 'center'}}>
              <Image
                style={{marginTop: 40}}
                source={require('../images/logo.png')}
              />
            </View>


          <View style={styles.footer}>
            <SunButton caption="注册" onPress={this.openModal.bind(this, true)} />

            <TouchableOpacity onPress={this.openModal} style={styles.aboutButton}>
              <Text style={styles.aboutButtonText}>
                在正确的地方做正确的事
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



  footer: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'transparent',
    left: 0,
    right: 0,
  },

  longRectButton: {
    width: 200
  }
});



export default LoginScreen;