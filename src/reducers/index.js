'use strict';

import { combineReducers } from 'redux';
import httpstate from './httpstate';
import config from './config';
import user from './user';
import spot from './spot';
import location from './location';
// import notifications from './notifications';
// import maps from './maps';
// import sessions from './sessions';
// import schedule from './schedule';
// import filter from './filter';
// import navigation from './navigation';
// import friendsSchedules from './friendsSchedules';
// import surveys from './surveys';

const rootReducer = combineReducers({
  config,
  user,
  spot,
  location,
  // notifications,
  // maps,
  // sessions,
  // schedule,
  // topics,
  // filter,
  // navigation,
  // friendsSchedules,
  // surveys,
});

export default rootReducer;
