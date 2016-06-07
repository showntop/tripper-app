'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
  isLoading: false,
  dataList: null,
  currentData: null,
  code: null,
  message: ""
};

function spot(state: State = initialState, action: Action) {
  switch (action.type) {
      case types.FETCH_SPOT_LIST:
        return Object.assign({}, state, {
          isLoading: action.isLoading,
        });

      case types.RECEIVE_SPOT_LIST:
        return Object.assign({}, state, {
          isLoading: false,
          dataList: action.data.data,
          message: action.data.message,
          code: action.data.code
        });      
      default:
        return state;
    }
}

export default spot;
