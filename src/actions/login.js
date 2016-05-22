'use strict';

import type { Action } from './types';

export function login(login, password) {
  return {
    type: 'SIGNIN',
    data: {login: login, id: 1}
  };
}
