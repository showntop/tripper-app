'use strict';

import React from 'react-native';
const {
  Component
  } = React;
import {connect} from 'react-redux';

import AboutPage from '../components/AboutPage';

class AboutContainer extends Component {
  render () {
    return (
      <AboutPage {...this.props} />
    );
  }
}

function mapStateToProps (state) {
  const {reddit} = state;
  return {
    reddit
  }
}

export default connect(mapStateToProps)(AboutContainer);