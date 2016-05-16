'use strict';

import type { Action } from '../actions/types';

export type Config = {
  wifiNetwork: string;
  wifiPassword: string;
  appLinkURL: string;
  appInvitePreviewImageURL: string;
  sessionURLTemplate: string;
};

const initialState: Config = {
  wifiNetwork: '',
  wifiPassword: '',
  appLinkURL: 'https://www.fbf8.com/',
  appInvitePreviewImageURL: '',
  sessionURLTemplate: 'https://www.fbf8.com/schedule/session/{slug}',
};

function config(state: Config = initialState, action: Action): Config {
  if (action.type === 'LOADED_CONFIG') {
    return {
      wifiNetwork: action.config.get('wifiNetwork') || state.wifiNetwork,
      wifiPassword: action.config.get('wifiPassword') || state.wifiPassword,
      appLinkURL: action.config.get('appLinkURL') || state.appLinkURL,
      appInvitePreviewImageURL: action.config.get('appInvitePreviewImageURL') ||
        state.appInvitePreviewImageURL,
      sessionURLTemplate: action.config.get('sessionURLTemplate') ||
        state.sessionURLTemplate,
    };
  }

  return state;
}

export default config;
