'use strict';

import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated
  } from 'react-native';

const propTypes = {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array,
  underlineColor: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
  activeTextColor: React.PropTypes.string,
  inactiveTextColor: React.PropTypes.string
};

class CustomTabBar extends React.Component {
  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;
    var activeTextColor = this.props.activeTextColor || "navy";
    var inactiveTextColor = this.props.inactiveTextColor || "black";
    return (
      <TouchableOpacity style={[styles.tab]} key={name} onPress={() => this.props.goToPage(page)}>
        <View key={name}>
          <Text key={name} style={{color: isTabActive ? activeTextColor : inactiveTextColor, fontSize: 16}}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    var containerWidth = this.props.containerWidth;
    var numberOfTabs = this.props.tabs.length;
    let tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 2,
      backgroundColor: this.props.underlineColor || "navy",
      bottom: 0
    };
    var left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0,  containerWidth / numberOfTabs]
    });
    let tabs =['全部', '吃货', '心情','运动','清净'];
    return (
      <View key={'xxxxfsdf'} style={[styles.tabs, {backgroundColor: this.props.backgroundColor || null}]}>
        {tabs.map((tab, i) => {
         let name = tab;
         let page = i;
    var isTabActive = this.props.activeTab === page;
    var activeTextColor = this.props.activeTextColor || "navy";
    var inactiveTextColor = this.props.inactiveTextColor || "black";
    return (
      <TouchableOpacity style={[styles.tab]} key={name} onPress={() => this.props.goToPage(page)}>
        <View key={name}>
          <Text key={name} style={{color: isTabActive ? activeTextColor : inactiveTextColor, fontSize: 16}}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  })}
        <Animated.View style={[tabUnderlineStyle, {left}]} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc'
  }
});

CustomTabBar.propTypes = propTypes;

export default CustomTabBar;