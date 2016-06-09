'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
  isLoading: false,
  regeocode: {
    formatted_address: '山东济南林静山时光还在飞逝，我该怎么纪念你',
  },
  code: null,
  message: ""
};

function location(state: State = initialState, action: Action) {
  switch (action.type) {
      case types.FETCH_LOCATION:
        return Object.assign({}, state, {
          isLoading: action.data.isLoading,
        });

      case types.RECEIVE_LOCATION:
        return Object.assign({}, state, {
          isLoading: false,
          regeocode: action.data.regeocode,
          message: action.data.info,
          code: action.data.status == '1' ? 200 : 503
        });      
      default:
        return state;
    }
}

export default location;
