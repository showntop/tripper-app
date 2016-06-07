'use strict';

import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
  } from 'react-native';

import NavigationBar from 'react-native-navbar';

import {NaviGoBack} from '../utils/CommonUtils';

const propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array,
  navigator: PropTypes.object,
  onActionSelected: PropTypes.func,
  onIconClicked: PropTypes.func,
  navIcon: PropTypes.number,
  customView: PropTypes.object
};

class NarBar extends React.Component {
  constructor (props) {
    super(props);
    this.onIconClicked = this.onIconClicked.bind(this);
    this.onActionSelected = this.onActionSelected.bind(this);
  }

  onIconClicked () {
    if (this.props.onIconClicked) {
      this.props.onIconClicked();
    } else {
      const {navigator} = this.props;
      if (navigator) {
        NaviGoBack(navigator);
      }
    }
  }

  onActionSelected (position) {
    this.props.onActionSelected();
  }

  render () {
    const {navigator} = this.props;
    if (this.props.customView) {
      return (
        <NavigationBar style={styles.toolbar}>
          {this.props.customView}
        </NavigationBar>
      )
    } else {
      return (
        <NavigationBar
          style={{flex: 1,backgroundColor: '#8FBC8F', alignItems: 'center'}}
          actions={this.props.actions}
          onActionSelected={this.onActionSelected}
          titleColor='#fff'
          leftButton={
                <TouchableOpacity onPress={this.onIconClicked} style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5}}>
                    <Image source={this.props.navIcon ? this.props.navIcon : require('../images/icon_left.png')}/>
                    <Text style={{marginLeft: 5}}>{this.props.title}</Text>
                </TouchableOpacity>
            }
        />
      );
    }
  }
}

let styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#8FBC8F',
    height: 58
  }
});

NarBar.propTypes = propTypes;

NarBar.defaultProps = {
  onActionSelected: function () {
  },
  title: '',
  actions: []
};

export default NarBar;