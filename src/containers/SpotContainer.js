import React from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Navigator,
  StatusBar,
  BackAndroid,
  View,
  TextInput,
  } from 'react-native';

import SpotEditor from '../components/SpotEditor'

function mapStateToProps(state) {

  const {location} = state;
  return {
    location,
  };
}

var title = "";

export class SpotContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
        <View style={{flex: 1}}>
            {/*<StatusBar
                          backgroundColor="#8FBC8F"
                          barStyle="default"/>*/}
            <SpotEditor {...this.props} style={{flex: 1}}/>
        </View>);
  }
}



export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(SpotContainer)
