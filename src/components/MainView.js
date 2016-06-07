'use strict';

import React, {PropTypes} from 'react';
import {
  StyleSheet,
  View
  } from 'react-native';

import Drawer from 'react-native-drawer'

import CustomTabBar from '../components/CustomTabBar';
import NavBar from '../components/NavBar';
import ControlPanel from '../components/ControlPanel'
import SpotGrid from '../components/SpotGrid'
import PenButton from '../components/PenButton'

import ScrollableTabView from 'react-native-scrollable-tab-view';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
};

class MainView extends React.Component {
  constructor (props) {
    super(props);

    this.onIconClicked = this.onIconClicked.bind(this);
  }

  onIconClicked () {
    this.refs.drawer.open();
  }

  render () {
    const { navigator } = this.props;
    return (
      <Drawer
        ref='drawer'
        openDrawerOffset={100}
        content={<ControlPanel closeDrawer={()=>this.refs.drawer.close()}/>}
      >
        <View style={{flex: 1}}>
          <NavBar
            title="经意"
            navigator={navigator}
            navIcon={require('../images/menu.png')}
            onIconClicked={this.onIconClicked}
          />
          <ScrollableTabView style={{flex: 1}}
            renderTabBar={() => <CustomTabBar />}
            tabBarBackgroundColor="#F0FFF0"
            tabBarUnderlineColor="#8FBC8F"
            tabBarActiveTextColor="#FF0000"
            tabBarInactiveTextColor="#aaaaaa"
          >
            <SpotGrid {...this.props} style={{flex: 1}}/>
          </ScrollableTabView>
          <PenButton {...this.props}/>
        </View>
      </Drawer>
    );
  }
}

let styles = StyleSheet.create({
  
});

MainView.propTypes = propTypes;

export default MainView;