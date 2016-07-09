import * as types from '../constants/ActionTypes';

function requestHttp() {
  return {
    type: types.REQUEST_HTTP,
  }
}

function receiveHttp() {
  return {
    type: types.RECEIVE_HTTP,
    status: 200,
    message: "成功"
  }
}

export { requestHttp, receiveHttp };