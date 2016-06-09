'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class AttachesEditor extends Component {
  render() {
    return (
        <View style={[ this.props.style, {
            flex: 1,
            padding: 5
          }]}>
            <View style={{
                flex: 0,
                width: 100,
                height: 100,
                borderWidth: 1,
                borderRadius: 5,
                borderStyle: 'dashed',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Icon name="plus" size={80}/>            
            </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({

});


export default AttachesEditor;