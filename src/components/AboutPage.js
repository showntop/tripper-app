import React from 'react-native';
const {
  StyleSheet,
  Image,
  Text,
  Linking,
  View
  } = React;

import NavBar from '../components/NavBar';
import Button from '../components/Button';

class AboutPage extends React.Component {
  constructor (props) {
    super(props);
  }

  onPress (url) {
    Linking.openURL(url);
  }

  render () {
    const {navigator} = this.props;
    return (
      <View style={styles.container}>
        <NavBar
          title="关于"
          navigator={navigator}
        />
        <View style={styles.content}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              style={{width: 110, height: 110, marginTop: 50}}
              source={require('../images/about_logo.png')}
            />
            <Text style={{fontSize: 18, textAlign: 'center', color: '#313131', marginTop: 10}}>
              {'xReddit'}
            </Text>
            <Text style={{fontSize: 16, textAlign: 'center', color: '#aaaaaa', marginTop: 5}}>
              {'v0.0.1'}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    justifyContent: 'center',
    paddingBottom: 10
  }
});

export default AboutPage;