'use strict';
import React from 'react';
import {connect} from 'react-redux';
import MainView from '../components/MainView';

class MainContainer extends React.Component {

  render () {
    return (
      <MainView {...this.props} />
    );
  }
}

function mapStateToProps (state) {
  const {reddit} = state;
  return {
    reddit
  }
}

export default connect(mapStateToProps)(MainContainer);