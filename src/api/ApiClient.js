import queryString from 'query-string';
import Promise     from 'bluebird';

export default class ApiClient {
    constructor() {
        this.prefix = '';
    }

    request({ url, method, params = {}, body }) {
        if (this.authToken) {
            /* eslint-disable */
            params.token = this.authToken;
            /* eslint-enable */
        }

        const urlWithQuery = `${url}${this.prefix}?${queryString.stringify(params)}`;

        const init = {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        };

        if (method !== 'get' && method !== 'head') {
            init.body = JSON.stringify(body);
        }
        debugger;
        return fetch(`${urlWithQuery}`, init).then(res => {
            debugger;
            // if (res.status >= 400) {
            //     throw new Error('Bad response from server');
            // }

            return res.json();
        }).then(data => {
            return data;
        });
    }

    get(requestUrl, payload = {}, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            body: payload,
            params
        });
    }

    put(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload
        });
    }

    patch(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload
        });
    }

    post(requestUrl, params={}, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'post',
            params: params,
            body: payload
        });
    }

    delete(requestUrl) {
        return this.request({
            url: requestUrl,
            method: 'delete'
        });
    }


    setAuthToken(authToken) {
        this.authToken = authToken;
    }
}
