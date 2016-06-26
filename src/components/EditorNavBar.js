import React from 'react';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  View
  } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationBar from 'react-native-navbar';

import { createSpot } from '../actions/spot';

export default class EditorToolBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  navtoLast() {
    const {navigator} = this.props;
    navigator.pop();
  }

  saveSpot(){
    debugger;
    const {dispatch} = this.props;
    dispatch(createSpot("a","b"));
  }

  render() {
    return (
      <NavigationBar
              style={styles.navbar}
              title={{title: '我的小点'}}
              statusBar={
                {style: 'light-content',
                tintColor: '#8FBC8F'}   
              }
              leftButton={  
                <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.navtoLast.bind(this)}>
                  <Icon name='arrow-back' size={28} style={{color: 'white'}} />
                </TouchableOpacity>
              } 
              rightButton={
                <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={ this.saveSpot.bind(this)}>
                    <Icon name='check' size={28} style={{color: 'white'}} />
                </TouchableOpacity>
              }
      />
    );
  }
}

let styles = StyleSheet.create({
  navbar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#9BCD9B'
  },
  toolItem: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
