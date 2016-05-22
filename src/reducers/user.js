'use strict';

import type {Action} from '../actions/types';

export type State = {
  isSignedIn: boolean;
  id: ?string;
  login: ?string;
};

const initialState = {
  isSignedIn: false,
  id: null,
  login: null,
};

function user(state: State = initialState, action: Action): State {
  if (action.type === 'SIGNIN') {
    debugger;
    let {id, login} = action.data;
    return {
      isSignedIn: true,
      id,
      login,
    };
  }
  if (action.type === 'SKIPPED_LOGIN') {
    return {
      isLoggedIn: false,
      hasSkippedLogin: true,
      sharedSchedule: null,
      id: null,
      name: null,
    };
  }
  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }
  if (action.type === 'SET_SHARING') {
    return {
      ...state,
      sharedSchedule: action.enabled,
    };
  }
  if (action.type === 'RESET_NUXES') {
    return {...state, sharedSchedule: null};
  }
  return state;
}

module.exports = user;
