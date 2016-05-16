import React, { Component } from 'react';

import{
    View
} from 'react-native';

import Drawer from 'react-native-drawer';

class MainView extends Component {
    render(){
      return(
            <Drawer
              ref={DRAWER_REF}
              openDrawerOffset={100}
              panCloseMask={1}
              content={drawer} >
              <StoriesList theme={this.state.theme} navigator={this.props.navigator}/>
            </Drawer>
            );
    }
}

export default MainView;
