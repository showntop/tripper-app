import React from 'react';
import { connect } from 'react-redux';

import UserView from '../components/UserView';

function mapStateToProps(state) {

  return {

  };
}

export class UserContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <UserView {...this.props}/>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(UserContainer)
