import React from 'react';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
  } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={styles.toolbar}>
        <View style={{flexDirection: 'row', flex: 0}}>
           <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.navtoLast.bind(this)}>
                <Icon name='arrow-left' size={25} />
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', flex: 0}}>
            <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={() => this.tabColor(1)}>
                <Icon name='check' size={25} />
            </TouchableOpacity>          
        </View>
      </View>
      );
  }
}

let styles = StyleSheet.create({
  toolbar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 38,
    backgroundColor: '#9BCD9B'
  },
  toolItem: {
    marginLeft: 5,
    marginRight: 5,
  }
});
