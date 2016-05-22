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
import SpotList from '../components/SpotList'
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
        <View style={styles.container}>
          <NavBar
            title="SUNTRIP"
            navigator={navigator}
            navIcon={require('../images/menu.png')}
            onIconClicked={this.onIconClicked}
          />
          <ScrollableTabView
            renderTabBar={() => <CustomTabBar />}
            tabBarBackgroundColor="#fcfcfc"
            tabBarUnderlineColor="#FF0000"
            tabBarActiveTextColor="#FF0000"
            tabBarInactiveTextColor="#aaaaaa"
          >
            <SpotList {...this.props} />
          </ScrollableTabView>
          <PenButton {...this.props}/>
        </View>
      </Drawer>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  containerItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  title: {
    flex: 3,
    fontSize: 18,
    textAlign: 'left',
    color: 'black'
  },
  listView: {
    backgroundColor: '#eeeeec'
  },
  no_data: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  },
  drawerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  drawerIcon: {
    width: 30,
    height: 30,
    marginLeft: 5
  },
  drawerText: {
    fontSize: 18,
    marginLeft: 15,
    textAlign: 'center',
    color: 'black'
  }
});

MainView.propTypes = propTypes;

export default MainView;