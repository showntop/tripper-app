'use strict';

export default store => next => action => {
  return next(action);
};
