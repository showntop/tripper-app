'use strict';

import React from 'react-native';
const {
  StyleSheet,
  PropTypes,
  WebView,
  BackAndroid,
  Dimensions,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  View
  } = React;

import NavBar from '../components/NavBar';
import {ToastShort} from '../utils/ToastUtils';
import LoadingView from '../components/LoadingView';
import {NaviGoBack} from '../utils/CommonUtils';
import Portal from 'react-native/Libraries/Portal/Portal.js';

let tag;
var canGoBack = false;

class WebViewPage extends React.Component {
  constructor (props) {
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
    this.onNavigationStateChange = this.onNavigationStateChange.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentWillMount () {
    if (Platform.OS === 'android') {
      tag = Portal.allocateTag();
    }
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this.goBack);
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
  }

  onActionSelected () {

  }

  onNavigationStateChange (navState) {
    canGoBack = navState.canGoBack;
  }

  goBack () {
    if (Portal.getOpenModals().length != 0) {
      Portal.closeModal(tag);
      return true;
    } else if (canGoBack) {
      this.refs.webview.goBack();
      return true;
    }
    return NaviGoBack(this.props.navigator);
  }

  renderLoading () {
    return <LoadingView />;
  }

  render () {
    const {navigator, route} = this.props;
    return (
      <View style={styles.container}>
        <NavBar
          onActionSelected={this.onActionSelected}
          title={route.reddit.data.title}
          navigator={navigator}
        />
        <WebView
          ref='webview'
          automaticallyAdjustContentInsets={false}
          style={{flex: 1}}
          source={{uri: route.reddit.data.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          decelerationRate="normal"
          onShouldStartLoadWithRequest={true}
          onNavigationStateChange={this.onNavigationStateChange}
          renderLoading={this.renderLoading.bind(this)}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  spinner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)'
  },
  spinnerContent: {
    justifyContent: 'center',
    width: Dimensions.get('window').width * (7 / 10),
    height: Dimensions.get('window').width * (7 / 10) * 0.68,
    backgroundColor: '#fcfcfc',
    padding: 20,
    borderRadius: 5
  },
  spinnerTitle: {
    fontSize: 18,
    color: '#313131',
    textAlign: 'center'
  },
  shareContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareIcon: {
    width: 40,
    height: 40
  }
});

export default WebViewPage;