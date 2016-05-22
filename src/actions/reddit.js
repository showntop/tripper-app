'use strict';

import * as types from '../constants/ActionTypes';
import {ToastShort} from '../utils/ToastUtils';
import {request} from '../utils/HttpServices';
import * as host from '../constants/Urls';

export function fetchReddit (isRefreshing, loading, typeId, isLoadMore, count, after) {
  if (count == undefined) {
    count = 25;
  }
  return dispatch => {
    dispatch(fetchRedditList(isRefreshing, loading, isLoadMore));
    return request(host.BASE_URL + host.DOMAINS[typeId] + '?count=' + count + '&after=' + after)
      .then((redditList) => {
        dispatch(receiveRedditList(redditList.data, typeId, redditList.data.after));
      })
      .catch((error) => {
        dispatch(receiveRedditList([], typeId));
        ToastShort(error.message);
      })
  }
}

function fetchRedditList (isRefreshing, loading, isLoadMore) {
  if (isLoadMore == undefined) {
    isLoadMore = false;
  }
  return {
    type: types.FETCH_REDDIT_LIST,
    isRefreshing: isRefreshing,
    loading: loading,
    isLoadMore: isLoadMore
  }
}

function receiveRedditList (redditData, typeId, after) {
  return {
    type: types.RECEIVE_REDDIT_LIST,
    redditData: redditData,
    typeId: typeId,
    after: after
  }
}