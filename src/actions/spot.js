'use strict';

import * as types from '../constants/ActionTypes';

export function fetchSpot () {


}

function requestFetchSpotList(){
  return{
    type: types.FETCH_SPOT_LIST,
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function fetchSpotList () {

  return dispatch => {
    dispatch(requestFetchSpotList());
    return fetch(`http://192.168.1.116:9000/spots?uuid=575395655d1453227afb2532&token=15ac4c76-d422-4f7a-8ae3-96c3109c90c6`).then(response => {
      return response.json()
    }, (error)=>{
        dispatch(receiveSpotList(error));
    }).then(json => {
        // 可以多次 dispatch！
        // 这里，使用 API 请求结果来更新应用的 state。
        dispatch(receiveSpotList(json));
    }, error =>{
        dispatch(receiveSpotList(error));
    })
  }
}

function receiveSpotList (spotList, typeId, after) {
  return {
    type: types.RECEIVE_SPOT_LIST,
    data: spotList,
    isLoading: false
  }
}