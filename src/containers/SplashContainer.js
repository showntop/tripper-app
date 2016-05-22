import React from 'react';

import { connect } from 'react-redux';

import {
    Dimensions,
    Image,
    InteractionManager,
    StyleSheet,
    View,
    StatusBar
  } from 'react-native';

import Video from 'react-native-video';

import MainContainer from '../containers/MainContainer';
import LoginContainer from '../containers/LoginContainer';

var {height, width} = Dimensions.get('window');

class SplashContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const {navigator, user} = this.props;
     if (!user.isSignedIn) {
          navigator.replace({
            component: LoginContainer,
            name: 'Login'
          });
        } else {
              setTimeout(() => {
              InteractionManager.runAfterInteractions(() => {
                  navigator.resetTo({
                   component: MainContainer,
                   name: 'Main'
                  });

              });
            }, 2500);
        }
  }

  render () {
    //http://cdn.calm.com/scenes/scene-WdVY0QGD4.mp4?v=1450780565679
    return (
      <View style={styles.container}>

                  <StatusBar
              backgroundColor="#9BCD9B"
              barStyle="default"
            />

      <Video source={{uri: "scene1"}} // Can be a URL or a local file.
             rate={1.0}                   // 0 is paused, 1 is normal.
             volume={1.0}                 // 0 is muted, 1 is normal.
             muted={false}                // Mutes the audio entirely.
             paused={false}               // Pauses playback entirely.
             resizeMode="cover"           // Fill the whole screen at aspect ratio.
             repeat={true}                // Repeat forever.
             onLoadStart={this.loadStart} // Callback when video starts to load
             onLoad={this.setDuration}    // Callback when video loads
             onProgress={this.setTime}    // Callback every ~250ms with currentTime
             onEnd={this.onEnd}           // Callback when playback finishes
             onError={this.videoError}    // Callback when video cannot be loaded
             style={styles.backgroundVideo} />
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
  }
});

function mapStateToProps (state) {
  const {user} = state;
  return {user};
}

export default connect(mapStateToProps)(SplashContainer);
