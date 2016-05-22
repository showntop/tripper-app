import React, {PropTypes, Component} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native'

export default class ControlPanel extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  onPressDrawerItem (index) {
    const {navigator} = this.props;
    this.refs.drawer.closeDrawer();
    switch (index) {
      case 2:
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component: AboutContainer,
            name: 'About'
          });
        });
        break;
      default:
        break;
    }
  }


  renderNavigationView() {
    let {closeDrawer} = this.props
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.controlText}>Control Panel</Text>
        <TouchableOpacity style={styles.button} onPress={closeDrawer}>
          <Text>Close Drawer</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

  render () {
    return (
      <View style={[styles.container, {backgroundColor: '#fcfcfc'}]}>
        <Image
          style={{width: Dimensions.get('window').width / 5 * 3, height: 120, justifyContent: 'flex-end', paddingBottom: 10}}
          source={require('../images/reddit_bg.png')}
        >
          <Text style={{fontSize: 20, textAlign: 'left', color: '#fcfcfc', marginLeft: 10}}>
            xReddit
          </Text>
        </Image>
        <TouchableOpacity
          style={styles.drawerContent}
          onPress={this.onPressDrawerItem.bind(this, 0)}
        >
          <Image
            style={styles.drawerIcon}
            source={require('../images/reddit_red.png')}
          />
          <Text style={styles.drawerText}>
            首页
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerContent}
          onPress={this.onPressDrawerItem.bind(this,2)}
        >
          <Image
            style={styles.drawerIcon}
            source={require('../images/about.png')}
          />
          <Text style={styles.drawerText}>
            关于
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  controlText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
})
