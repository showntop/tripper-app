'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Modal,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Video from 'react-native-video';
import SunButton from '../components/common/SunButton';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-spinkit';

import {login, signup} from '../actions/user';

var DeviceHeight = Dimensions.get('window').height;

class LoginScreen extends Component {

  constructor(props) {
    super(props);
  }

 login() {
    const {dispatch} = this.props;
    dispatch(login('',''));
  }

  signup(){
    const {dispatch} = this.props;
    dispatch(signup())
  }

  showModalTransition(transition) {
    transition('opacity', {duration: 200, begin: 0, end: 1});
    transition('height', {duration: 200, begin: DeviceHeight * 2, end: DeviceHeight});
  }

  hideModalTransition(transition) {
    transition('height', {duration: 200, begin: DeviceHeight, end: DeviceHeight * 2, reset: true});
    transition('opacity', {duration: 200, begin: 1, end: 0});
  }

  openModal(visible){
    this.setState({modalVisible: visible});
  }

    openRegistView(){

    }

    renderContent(){
      if (this.props.user.isSignuping) {
        return (
          <TouchableOpacity>
              <View style={{backgroundColor: '#FFF8DC', borderRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5, height: 45, opacity: 0.5, justifyContent: 'center', alignItems: 'center'}} >
               <Spinner style={{}} isVisible={true} size={25} type={'Wave'} color={'#'+Math.floor(Math.random()*16777215).toString(16)}/>
              </View>
          </TouchableOpacity>
          )
      } else {
        return (<TouchableOpacity onPress={this.signup.bind(this)}>
            <View style={{backgroundColor: '#FFF8DC', borderRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5, height: 45, opacity: 0.5}} >
              <Text style={{textAlign: 'center', lineHeight: 27, opacity: 1}}>注册</Text>
            </View>
        </TouchableOpacity>
        )
      }
    }

    render() {
      return (
        <View style={{flex: 1}}>
            <StatusBar
              backgroundColor="#3C8C96"
              barStyle="default"
            />
          {/*our logo*/}
          <Video source={{uri: "scenelogin"}}
                 style={styles.backgroundVideo}
                 rate={1} volume={1} muted={true}
                 resizeMode="cover" repeat={true} key="scenelogin" />
          <View style={{'flexDirection': 'row', alignItems: 'flex-start', justifyContent: 'center'}}>
            <Image
              style={{marginTop: 40}}
              source={require('../images/logo.png')}
            />
          </View>

          <View>
            <TouchableOpacity onPress={this.openModal} style={styles.aboutButton}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                和对的人说对的话
              </Text>
              <Text style={{textAlign: 'center', color: 'white'}}>
                在正确的地方做正确的事
              </Text>

            </TouchableOpacity>
          </View>

          <View style={{marginTop:40, paddingHorizontal: 20}}>
              <View style={{borderBottomColor: '#E0E0E0', borderBottomWidth: 1}}>
                  <TextInput
                      style={{height: 37, paddingHorizontal: 5, paddingVertical: 5}}
                      autoCapitalize = "none"
                      autoCorrect={false}
                      keyboardType = "default"
                      ref='textInput'
                      placeholder = "请输入手机号或邮箱"
                      placeholderTextColor = "#999"
                      onFocus={() => {this.refs.textInput.focus()}}
                  >
                  </TextInput>
              </View>
              <View style={{borderBottomColor: '#E0E0E0', borderBottomWidth: 1}}>
                  <TextInput
                      style={{height: 37, paddingHorizontal: 5, paddingVertical: 5}}
                      autoCapitalize = "none"
                      autoCorrect={false}
                      keyboardType = "default"
                      ref='textInput'
                      placeholder = "请输入密码"
                      placeholderTextColor = "#999"
                      onFocus={() => {this.refs.textInput.focus()}}
                  >
                  </TextInput>
              </View>          
            </View>

          <View style={{paddingHorizontal: 20, paddingVertical: 10, marginTop: 30}}>
            {this.renderContent()}

            <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'space-around'}}>
            
              <TouchableOpacity style={{}} activeOpacity={0.1}>
                  <Icon name='weixin' size={25} style={{color: 'white'}}/>
              </TouchableOpacity> 
              <TouchableOpacity style={{}} activeOpacity={0.1}>
                  <Icon name='qq' size={25} style={{color: 'white'}}/>
              </TouchableOpacity> 
              <TouchableOpacity style={{}} activeOpacity={0.1}>
                  <Icon name='weibo' size={25} style={{color: 'white'}}/>
              </TouchableOpacity> 
              <TouchableOpacity style={{}} activeOpacity={0.1}>
                  <Icon name='facebook' size={25} style={{color: 'white'}}/>
              </TouchableOpacity> 
              <TouchableOpacity style={{}} activeOpacity={0.1}>
                  <Icon name='twitter' size={25} style={{color: 'white'}}/>
              </TouchableOpacity> 
            </View>

              <View style={{marginTop: 10}}>
                <TouchableOpacity style={{flex: 1}}>
                    <Text style={{ textDecorationLine: "underline", textAlign: 'center'}}>已有账号，直接登录</Text>
                </TouchableOpacity>
              </View>

          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundOverlay: {
    opacity: 0.5,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    margin: 10,
    opacity: 0.8,
  },

  aboutButtonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#efefef',
    opacity: 0.8,
  },



  footer: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'transparent',
    left: 0,
    right: 0,
  },

  longRectButton: {
    width: 200
  },

  line5:{
          flexDirection: 'column',
          flex:1,
          height: 38,
          borderBottomColor:'#E0E0E0',
          borderBottomWidth:1,
      },
      telTextInput:{
          height:37,
          fontSize: 12,
          color:'#aaa',
          paddingHorizontal:15,
          paddingVertical:6,
      }
});



export default LoginScreen;