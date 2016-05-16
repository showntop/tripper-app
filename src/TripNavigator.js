import React from 'react';
import { connect } from 'react-redux';

import { Navigator } from 'react-native'

function mapStateToProps(state) {
  return {

  };
}

export class TripNavigator extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    if (route.allSessions) {
        return (
            <SessionsCarousel
                {...route}
                navigator={ navigator }
                />
            );
    }
    if (route.session) {
        return (
            <SessionsCarousel
                session={ route.session }
                navigator={ navigator }
            />
            );
    }
    if (route.filter) {
        return(
            <FriendsScheduleView
                friend={route.friend}
                navigator={navigator}
                />
            );
    }
    if (route.login) {
      return (
        <LoginModal
          navigator={navigator}
          onLogin={route.callback}
        />
      );
    }
    if (route.share) {
      return (
        <SharingSettingsModal navigator={navigator} />
      );
    }
    if (route.shareSettings) {
      return <SharingSettingsScreen navigator={navigator} />;
    }
    if (route.rate) {
      return <RatingScreen navigator={navigator} surveys={route.surveys} />;
    }
    if (route.notices) {
      return <ThirdPartyNotices navigator={navigator} />;
    }
    return <F8TabsView navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        style={styles.container}>
         configureScene={
            (route) => {
                if (Platform.OS === 'android') {
                    return Navigator.SceneConfigs.FloatFromBottomAndroid;
                } else {}
                // TODO: Proper scene support
                if (route.shareSettings || route.friend) {
                    return Navigator.SceneConfigs.FloatFromRight;
                } else {
                    return Navigator.SceneConfigs.FloatFromBottom;
                }
            }
         } 
         initialRoute={{}}
         renderScene={this.renderScene}
      </Navigator>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(TripNavigator)
