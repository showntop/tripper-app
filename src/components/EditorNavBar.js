import React from 'react';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  View
  } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBar from 'react-native-navbar';

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
                  <Icon name='arrow-left' size={25} />
                </TouchableOpacity>
              } 
              rightButton={
                <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={() => this.tabColor(1)}>
                    <Icon name='check' size={25} />
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
    height: 38,
    backgroundColor: '#9BCD9B'
  },
  toolItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  }
});
