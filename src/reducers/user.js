'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
  isSignuping: false,
  isSignedIn: false,
  data: null,
  code: null,
  message: ""
};

function user(state: State = initialState, action: Action) {
  switch (action.type) {
      case types.REQUEST_SIGNUP:
        return Object.assign({}, state, {
          isSignuping: true,
        });

      case types.RECEIVE_SIGNUP:
        return Object.assign({}, state, {
          isSignuping: false,
          data: action.data.data,
          message: action.data.message,
          code: action.data.code
        });      

        case types.ERROR_SIGNUP:
        return Object.assign({}, state, {
          isSignuping: false,
          isSignedIn: false,
          data: action.data,
        });

      default:
        return state;
    }
}

export default user;
