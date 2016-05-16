import React from 'react';
import { connect } from 'react-redux';

import {
    View,
    StatusBar,
    StyleSheet
} from 'react-native'

import LoginScreen from './login/LoginScreen';

function mapStateToProps(state) {
  return {

  };
}

export class MainScreen extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.isSignedIn) {
        return <LoginScreen/>;
    } else {
        return(
            <View style={this.styles.container}>
                <StatusBar
                translucent={true}
                backgrountColor="rgba(0,0,0,0.2)"
                barStyle="light-content"/>
                <TripNavigator/>
            </View>
            )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(MainScreen)
