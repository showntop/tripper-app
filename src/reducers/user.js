'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
  isSignuping: false,
  isSignedIn: false,
  id: null,
};

function user(state: State = initialState, action: Action) {
  switch (action.type) {
      case types.REQUEST_SIGNUP:
        return Object.assign({}, state, {
          isSignuping: true,
        });

      case types.RECEIVE_SIGNUP:
        return Object.assign({}, state, {
          id: action.data,
        });

      default:
        return state;
    }
}

export default user;
