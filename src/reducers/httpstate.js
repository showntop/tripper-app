'use strict';

import type { Action } from '../actions/types';

const initialState = {
  httpstate: "awaiting",
  result: null,
};

function httpstate(state = initialState, action) {
  switch (action.type) {
    case action.REQUEST_HTTP:
      return Object.assign({}, state, {
        httpstate: "requesting"
      })
    case action.RECEIVE_HTTP:
      return Object.assign({}, state, {
        httpstate: "awaiting",
        result: action.data
      })
    default:
      return state
  }
}


export default httpstate;
