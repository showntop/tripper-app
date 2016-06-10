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

export class SpotContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SpotEditor {...this.props}/>
      );
  }
}



export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(SpotContainer)
