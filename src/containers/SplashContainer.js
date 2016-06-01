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

    setTimeout(() => {
        InteractionManager.runAfterInteractions(() => {
            if (!user.isSignedIn) {
                navigator.replace({
                  component: LoginContainer,
                  name: 'Login'
                });
             } else {
                  navigator.resetTo({
                   component: MainContainer,
                   name: 'Main'
                  }); 
             }
        });
      }, 5);
  }

  render () {
    //http://cdn.calm.com/scenes/scene-WdVY0QGD4.mp4?v=1450780565679
    return (
      <View style={styles.container}>

            <StatusBar
              backgroundColor="#9BCD9B"
              barStyle="default"
            />
            <Image 
              style={{flex: 1, resizeMode: Image.resizeMode.contain}}
              source={require('../images/splash.jpg')}
            />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

function mapStateToProps (state) {
  const {user} = state;
  return {user};
}

export default connect(mapStateToProps)(SplashContainer);
