'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

class SpotLineView extends Component {
  render() {
    return (
       <ParallaxScrollView
         parallaxHeaderHeight={200}
         renderBackground={() => (
           <Image source={ require('../images/user-bg.jpg')} style={{width: window.width, height: 200 }}/>
           )}
         renderForeground={() => (
           <View/>
         )}>
            <View style={{ flex: 1 }}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10}}>
                    <Image style={{borderRadius: 5, width: 25, height: 25}} source={{uri: "http://imgsize.ph.126.net/?imgurl=http://img3.ph.126.net/zVfvuoWedcaWE7nzYjUWog==/2632072507238825133.jpg_64x64x0.jpg"}}/>
                    <View style={{borderRightWidth: 1, borderColor: 'red', marginTop: -10, marginBottom: -10, width: 1,marginLeft: 5, marginRight: 5}} />
                    <Text style={{flex: 1, flexWrap: 'wrap'}}>今天是别离的时光，那匆匆流去的光阴在这一个刻显得尤其重要</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10}}>
                    <Image style={{borderRadius: 5, width: 25, height: 25}} source={{uri: "http://imgsize.ph.126.net/?imgurl=http://img3.ph.126.net/zVfvuoWedcaWE7nzYjUWog==/2632072507238825133.jpg_64x64x0.jpg"}}/>
                    <View style={{borderRightWidth: 1, borderColor: 'red', marginTop: -10, marginBottom: -10, width: 1,marginLeft: 5, marginRight: 5}} />
                    <Image style={{width: window.width - 100, height: 400}} source={{uri: 'http://imglf.nosdn.127.net/img/QmlvYzhoRjErTGFLNFY3MUMzampUWG5BL3dJd0lqekROeW9meE5SbEw3cWhaa0RRNUFBblRRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'}}/>
                </View>
            </View>
       </ParallaxScrollView>
    );
  }
}

const styles = StyleSheet.create({

});


export default SpotLineView;