'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  findNodeHandle
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/EvilIcons';
import Spinner from 'react-native-spinkit';
import MainContainer from '../containers/MainContainer';

import {login} from '../actions/user';

class LoginScreen extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
          modalVisible: false,
          username: '',
          password: ''
        };
    }

    doLogin() {
      console.log("abc")
       const {dispatch} = this.props;
       dispatch(login(this.state.username,this.state.password));
     }

    setVisible(visible){
        let {navigator} = this.props;
        navigator.pop();
    }

    // Scroll a component into view. Just pass the component ref string.
      inputFocused(refName) {
        setTimeout(() => {
          // Note the this.refs.scrollView -- the ScrollView element to be
          // handled must have the ref='scrollView' for this to work.
          let scrollResponder = this.refs.scrollView.getScrollResponder();
          scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
            findNodeHandle(this.refs[refName]),
            110, //additionalOffset
            true
          );
        }, 50);
      }
      
    componentWillReceiveProps(nextProps) {
      let {user, navigator} = nextProps;
      // if (user.code != 200) {
      //   Toast.show(user.message, {
      //       duration: Toast.durations.LONG,
      //       position: Toast.positions.BOTTOM,
      //       shadow: true,
      //       animation: true,
      //       hideOnPress: true,
      //       delay: 0,
      //       onShow: () => {
      //           // calls on toast\`s appear animation start
      //       },
      //       onShown: () => {
      //           // calls on toast\`s appear animation end.
      //       },
      //       onHide: () => {
      //           // calls on toast\`s hide animation start.
      //       },
      //       onHidden: () => {
      //           // calls on toast\`s hide animation end.
      //       }
      //   });
      // } else {
        //转到主页
         navigator.replace({
          component: MainContainer,
          name: 'Main'
         }); 
      // }
      
    }

    renderContent(){
      if (this.props.user.isLogining) {
        return (
          <TouchableOpacity style={{marginLeft: 20, marginRight: 20}}>
              <View style={{backgroundColor: '#FFF8DC', borderRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5, height: 45, opacity: 0.5, justifyContent: 'center', alignItems: 'center'}} >
               <Spinner style={{}} isVisible={true} size={25} type={'Wave'} color={'#'+Math.floor(Math.random()*16777215).toString(16)}/>
              </View>
          </TouchableOpacity>
          )
      } else {
        return (
            <TouchableOpacity onPress={this.doLogin.bind(this)} style={{marginLeft: 20, marginRight: 20}}>
                <View style={{backgroundColor: '#5F9EA0', borderRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5, height: 45, opacity: 0.5, alignItems:'center', justifyContent: 'center'}} >
                  <Text style={{textAlign: 'center', opacity: 1}}>登录</Text>
                </View>
            </TouchableOpacity>
        )
      }
    }

  render() {
    console.log(this.props);
    return (
        <View
            style={{flex: 1}}
            animationType={'slide'}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {this.setVisible(false)}}
            >
            <View style={[styles.container]}>
              <NavigationBar
                      style={{backgroundColor: '#F0F0F0', height: 55}}
                      rightButton={
                        <TouchableOpacity style={{margin: 10}} activeOpacity={0.1} onPress ={ this.setVisible.bind(this, false)}>
                            <Icon name='close-o' size={38} style={{color: '#F39C12'}} />
                        </TouchableOpacity>
                      }
              />
              <ScrollView ref='scrollView' keyboardDismissMode='interactive' style={{marginTop: 150}} contentContainerStyle={styles.contentContainerStyle}>
                  <View style={{borderBottomColor: '#E0E0E0', borderBottomWidth: 1, marginLeft: 20, marginRight: 20}}>
                      <TextInput
                          style={{height: 37, paddingHorizontal: 5, paddingVertical: 5}}
                          autoCapitalize="none"
                          autoCorrect={false}
                          keyboardType = "default"
                          ref='textInputEmail'
                          autoFocus={true}
                          placeholder = "手机号或邮箱"
                          defaultValue={"showntop@163.com"}
                          placeholderTextColor = "#999"
                          underlineColorAndroid= "transparent"
                          onChangeText={(username) => this.setState({username})}
                          onFocus={this.inputFocused.bind(this, 'textInputEmail')}
                        />
                  </View>
                  <View style={{borderBottomColor: '#E0E0E0', borderBottomWidth: 1, marginLeft: 20, marginRight: 20}}>
                      <TextInput
                          style={{height: 37, paddingHorizontal: 5, paddingVertical: 5}}
                          autoCapitalize = "none"
                          autoCorrect={false}
                          keyboardType = "default"
                          ref='textInputPassword'
                          placeholder = "密码"
                          placeholderTextColor = "#999"
                          underlineColorAndroid= "transparent"
                          defaultValue={"test123"}
                          onChangeText={(password) => this.setState({password})}
                        />
                  </View>
                  <View style={{height: 30}} />
                  {this.renderContent()}
                  <View style={{flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 22, marginTop: 10}}>
                    <TouchableOpacity>
                        <Text style={{ textDecorationLine: "underline"}}>忘记密码</Text>
                    </TouchableOpacity>
                  </View>
              </ScrollView>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
});


export default LoginScreen;