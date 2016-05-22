'use strict';

import React from 'react-native';
const {
  Component
  } = React;
import {connect} from 'react-redux';

import WebViewPage from '../components/WebViewPage';

class WebViewContainer extends Component {
  render () {
    return (
      <WebViewPage {...this.props} />
    );
  }
}

function mapStateToProps (state) {
  const {reddit} = state;
  return {
    reddit
  }
}

export default connect(mapStateToProps)(WebViewContainer);
