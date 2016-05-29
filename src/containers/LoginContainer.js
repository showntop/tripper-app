import React from 'react';
import { connect } from 'react-redux';

import {
    View,
    StyleSheet,
} from 'react-native';

import MainContainer from '../containers/MainContainer';

import LoginScreen from '../components/LoginScreen';

function mapStateToProps(state) {
  const {user} = state;
  debugger;
  return {
    user
  };
}

export class LoginContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps (nextProps) {
    const {navigator, user} = nextProps;
    if (user.isSignedIn) {
      navigator.resetTo({
         component: MainContainer,
         name: 'Main'
      });
    }
  }


  render() {
    return (
        <LoginScreen {...this.props}/>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(LoginContainer)