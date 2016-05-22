import React from 'react';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
  } from 'react-native';

import NavigationBar from 'react-native-navbar';

export default class SpotInfoBar extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <NavigationBar
          style={styles.toolbar}
          actions={this.props.actions}
          onActionSelected={this.onActionSelected}
          titleColor='#fff'
          leftButton={
            <TouchableOpacity onPress={this.onIconClicked} style={{ flexDirection: 'row', }}>
                <Image source={this.props.navIcon ? this.props.navIcon : require('../images/icon_left.png')}/>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>          
            }
          rightButton={
                <TouchableOpacity onPress={this.onIconClicked} style={{ flexDirection: 'row', }}>
                    <Image source={this.props.navIcon ? this.props.navIcon : require('../images/icon_left.png')}/>
                    <Text>{this.props.title}</Text>
                </TouchableOpacity>
            }
        />
      );
  }
}

let styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#FF0000',
    height: 58
  }
});
