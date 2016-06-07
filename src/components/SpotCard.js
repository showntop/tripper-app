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
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Image style={{borderRadius: 5, width: 30, height: 30}} source={{uri: "http://imgsize.ph.126.net/?imgurl=http://img3.ph.126.net/zVfvuoWedcaWE7nzYjUWog==/2632072507238825133.jpg_64x64x0.jpg"}}/>
            <Text style={{height: 30, lineHeight: 30}}>山林识记</Text>
        </View>
        <Image style={{width: 155, height: 300}} source={{uri: 'http://imglf2.nosdn.127.net/img/ZnRsOXlkd3JwMzJwMW52TkJ6dHdmb3RRTFVYNTJqS1JOcitzSkljYUl6dVlzNDExNCtOZ1ZRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default SpotCard;