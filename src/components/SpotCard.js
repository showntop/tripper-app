'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class SpotCard extends Component {
  render() {
    return (
      <View style={[ this.props.style, {backgroundColor: 'white', alignItems: 'stretch'}]}>
        <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', padding: 2}}>
            <Image style={{borderRadius: 5, width: 25, height: 25}} source={{uri: "http://imgsize.ph.126.net/?imgurl=http://img3.ph.126.net/zVfvuoWedcaWE7nzYjUWog==/2632072507238825133.jpg_64x64x0.jpg"}}/>
            <Text style={{marginLeft: 10}}>我叫萌宠</Text>
        </View>
        <Image style={{flex: 1, resizeMode: 'cover'}} source={{uri: 'http://imglf2.nosdn.127.net/img/ZnRsOXlkd3JwMzJwMW52TkJ6dHdmb3RRTFVYNTJqS1JOcitzSkljYUl6dVlzNDExNCtOZ1ZRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'}}/>
        <Text style={{fontSize: 10}}>
            时光飞逝，所有留不住的就是你了，亲爱的，你在哪里
        </Text>
        <View style={{flexDirection: 'row', flex: 0, justifyContent: 'flex-start', padding: 2, borderTopWidth: 1, borderColor: '#FAF0E6'}} >
            <Text style={{flex: 1, fontSize: 12}} >#释怀#</Text>
            <Text style={{flex: 0, fontSize: 12}}>于2016.5.6</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default SpotCard;