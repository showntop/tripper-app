'use strict';

export function request (url) {
  console.info("url=", url);
  return fetch(url).then(response=>response.json());
}