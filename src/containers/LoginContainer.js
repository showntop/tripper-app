import React from 'react';
import { connect } from 'react-redux';

import LoginScreen from '../components/LoginScreen';

function mapStateToProps(state) {
  const {user} = state;
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
