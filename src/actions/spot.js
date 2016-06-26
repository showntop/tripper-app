'use strict';

 import {BASE_URL} from '../constants/Urls'
import * as types from '../constants/ActionTypes';

export function createSpot(title, description, cover, location) {

  return dispatch => {
    dispatch(requestHttp());
    
    return fetch(BASE_URL+`spots`,{
      method: "POST",
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      body: JSON.stringify({title: title, description: description}),
    }).then(response => {
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

export function requestupdateSpotCover() {
  return{
    type: types.REQUEST_CREATE_SPOT_COVER,
    data:{
      isLoading: true,
      data: null
    }
  }
}

export function receiveUpdateSpotCover(data) {
  return{
    type: types.REQUEST_CREATE_SPOT_COVER
    data:{
      data: data,
      isLoading: false
    }
  }
}

export function updateSpotCover(id, file) {
    var formData = new FormData();
    formData.append('file', {uri: image,  type: 'image/jpeg'});
  return dispatch => {
    dispatch(requestupdateSpotCover());
    return fetch(BASE_URL+`spots`,{
      method: "POST",
      'Accept': 'application/json',
      body: formData,
    }).then(response => {
      return response.json()
    }, (error)=>{
        dispatch(receiveUpdateSpotCover(error));
    }).then(json => {
        // 可以多次 dispatch！
        // 这里，使用 API 请求结果来更新应用的 state。
        dispatch(receiveUpdateSpotCover(json));
    }, error =>{
        dispatch(receiveUpdateSpotCover(error));
    })  
  }
}

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
    return fetch(BASE_URL+`spots`).then(response => {
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


function receiveLocation(data) {
  return {
    type: types.RECEIVE_LOCATION,
    data: data,
    isLoading: false
  }
}

export function fetchLocation(position){
  return dispatch => {
    return fetch(`http://restapi.amap.com/v3/geocode/regeo?output=json&location=116.310003,39.991957&key=2e98a619ace93e8fbd01c7fc9ac748a7&radius=1000&extensions=all`).then(response => {
      return response.json();
    }, (error)=>{
        dispatch(receiveLocation(error));
    }).then(json => {
        // 可以多次 dispatch！
        // 这里，使用 API 请求结果来更新应用的 state。
        dispatch(receiveLocation(json));
    }, error =>{
        dispatch(receiveLocation(error));
    })
  }
}