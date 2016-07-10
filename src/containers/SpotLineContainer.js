import React from 'react';
import { connect } from 'react-redux';

import SpotLineView from '../components/SpotLineView';

function mapStateToProps(state) {
  return {

  };
}

export class SpotLineContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SpotLineView {...this.props}/>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(SpotLineContainer)
