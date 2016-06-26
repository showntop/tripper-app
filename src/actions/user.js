'use strict';

import { 
    REQUEST_SIGNUP, 
    RECEIVE_SIGNUP,
    ERROR_SIGNUP,
    REQUEST_LOGIN,
    RECEIVE_LOGIN
 } from '../constants/ActionTypes';

 import {BASE_URL} from '../constants/Urls'

export function login(username, password) {
  return function (dispatch) {
      username = "18615262739";
      password = "1234567890a";
      // 首次 dispatch：更新应用的 state 来通知
      // API 请求发起了。

      dispatch(requestLogin());

      // thunk middleware 调用的函数可以有返回值，
      // 它会被当作 dispatch 方法的返回值传递。

      // 这个案例中，我们返回一个等待处理的 promise。
      // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。

      return fetch(BASE_URL + "sessions",{
            method: "POST",
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            body: JSON.stringify({mobile: username, password: password}),
          }).then(response => {
            return response.json()
          }, (error)=>{
              console.log(error)
              dispatch(receiveLogin(error))
          }).then(json => {
              // 可以多次 dispatch！
              // 这里，使用 API 请求结果来更新应用的 state。
              dispatch(receiveLogin(json))
              console.log(json)
          }, error =>{
              console.log(error)
              dispatch(receiveLogin(error))
          })

        // 在实际应用中，还需要
        // 捕获网络请求的异常。
    }

}

function requestLogin(){
    return{
        type: REQUEST_LOGIN,
    }
}

function receiveLogin(json) {
    return{
        type: RECEIVE_LOGIN,
        data: json,
    }
}

export function requestSignup(){
    return{
        type: REQUEST_SIGNUP,
    }
}

export function receiveSignup(json) {
    return{
        type: RECEIVE_SIGNUP,
        data: json,
    }
}

// export function errorSignup(json) {
//     return{
//         type: ERROR_SIGNUP,
//         data: json,
//     }
// }

export function signup(username, password) {

    return function (dispatch) {

        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。

        dispatch(requestSignup())

        // thunk middleware 调用的函数可以有返回值，
        // 它会被当作 dispatch 方法的返回值传递。

        // 这个案例中，我们返回一个等待处理的 promise。
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
        let formData = new FormData();
        formData.append('email', username);
        formData.append('password', password);


        return fetch(`http://192.168.1.116:9000/users/signup`,{
              method: "POST",
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data; boundary=6ff46e0b6b5148d984f148b6542e5a5d',
              body: formData,
            }).then(response => {
              return response.json()
            }, (error)=>{
                dispatch(receiveSignup(error))
            }).then(json => {
                // 可以多次 dispatch！
                // 这里，使用 API 请求结果来更新应用的 state。
                dispatch(receiveSignup(json))
            }, error =>{
                dispatch(receiveSignup(error))
            })

          // 在实际应用中，还需要
          // 捕获网络请求的异常。
      }

}
