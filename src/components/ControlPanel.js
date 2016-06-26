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

import Icon from 'react-native-vector-icons/FontAwesome';

import UserContainer from '../containers/UserContainer';

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

  openUser(){
    const {navigator} = this.props;
    navigator.push({
      component: UserContainer,
      name: 'UserContainer'
    });
  }

  render () {
    return (
      <View style={{flex: 1}}>
          <TouchableOpacity onPress={this.openUser.bind(this)} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#2B2B2B', padding: 10}}>
            <Image
              style={{width: Dimensions.get('window').width / 5, height: 80, borderRadius: 30,justifyContent: 'flex-end', paddingBottom: 10}}
              source={require('../images/reddit_bg.png')}/>
              <Text style={{fontSize: 20, textAlign: 'left', color: '#ffffff', marginLeft: 10}}>
                诗一样的春天
              </Text>
          </TouchableOpacity>
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
          <TouchableOpacity
            style={styles.drawerContent}
            onPress={this.onPressDrawerItem.bind(this, 0)}>
              <Icon name="comments"
                style={styles.drawerIcon}/>
              <Text style={styles.drawerText}>
                消息
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerContent}
            onPress={this.onPressDrawerItem.bind(this, 0)}>
              <Icon name="bell"
                style={styles.drawerIcon}/>
              <Text style={styles.drawerText}>
                通知
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerContent}
            onPress={this.onPressDrawerItem.bind(this, 0)}>
              
              <Icon name='group' style={styles.drawerIcon}/>
              <Text style={styles.drawerText}>
                群组
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerContent}
            onPress={this.onPressDrawerItem.bind(this,2)}>
              <Icon name="wrench"
                style={styles.drawerIcon}/>
              <Text style={styles.drawerText}>
                设置
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerContent}
            onPress={this.onPressDrawerItem.bind(this,2)}>
              <Icon name="info"
                style={styles.drawerIcon}/>
              <Text style={styles.drawerText}>
                关于
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  drawerContent: {
    margin: 10,
    marginLeft: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  drawerIcon:{
    fontSize: 25,
    width: 30,
    height: 30,
    marginLeft: 5
  },
  drawerText: {
    marginLeft: 30,
    color: 'black',
  },
})
