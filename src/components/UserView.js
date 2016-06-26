'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

const HEADER = (
    <View style={{flex: 1, }}>
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 25}}>
            <Image source={require('../images/menu.png')} style={{width: 50, height: 50}}/>
            <Text style={{color: 'white', marginTop: 5, fontSize: 10, fontWeight: 'bold'}}>
                远不过天，飞鸟无缘，只在悬崖何处边？
            </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', margin: 10}}>
            <TouchableHighlight style={{padding: 10}}>
                <View>
                    <Text textAlign="center" style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>100</Text>
                    <Text textAlign="center" style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>粉丝</Text>
                </View>
            </TouchableHighlight>
            <View style={{borderRightWidth: 1, borderColor: 'white', width: 1, marginTop: 10, marginBottom: 10}} />
            <TouchableHighlight style={{margin: 10}} >
                <View>
                    <Text textAlign="center" style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>90</Text>
                    <Text textAlign="center" style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>关注</Text>
                </View>
            </TouchableHighlight>
        </View>
    </View>
);

class UserView extends Component {
  render() {
    return (
        <ParallaxScrollView
          parallaxHeaderHeight={200}
          renderBackground={() => (
            <Image source={ require('../images/user-bg.jpg')} style={{width: window.width, height: 200 }}/>
            )}
          renderForeground={() => (
            HEADER
          )}>
          <View style={{ height: 500 }}>
            <Text>Scroll me</Text>
          </View>
        </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({

});


export default UserView;