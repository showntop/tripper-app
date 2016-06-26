'use strict';

import React, {PropTypes} from 'react';
import {
  StyleSheet,
  View
  } from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Drawer from 'react-native-drawer'

import SpotContainer from '../containers/SpotContainer';

import CustomTabBar from '../components/CustomTabBar';
import NavBar from '../components/NavBar';
import ControlPanel from '../components/ControlPanel'
import SpotGrid from '../components/SpotGrid'
import ActionButton from '../components/ActionButton'


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

  openSpotCreator() {
      console.log('open spot creator for add a new spot');
      const {navigator} = this.props;
      navigator.push({
            component: SpotContainer,
            name: 'SpotCreator'
          })
    }

  render () {
    const { navigator } = this.props;
    return (
      <Drawer
        ref='drawer'
        openDrawerOffset={100}
        content={<ControlPanel closeDrawer={()=>this.refs.drawer.close()} {...this.props}/>}
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
            tabBarUnderlineColor="#69D685"
            tabBarActiveTextColor="#FF0000"
            tabBarInactiveTextColor="#aaaaaa"
          >
            <SpotGrid {...this.props} style={{flex: 1}}/>
          </ScrollableTabView>
          <ActionButton {...this.props} buttonColor="rgba(231,76,60,1)" onPress={this.openSpotCreator.bind(this)}/>
        </View>
      </Drawer>
    );
  }
}

let styles = StyleSheet.create({
  
});

MainView.propTypes = propTypes;

export default MainView;