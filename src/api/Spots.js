import Base from './Base';

export default class UsersApi extends Base {
    list(params) {
        return this.apiClient.get('quizwall/users', {}, params);
    }

    show(id, params) {
        return this.apiClient.get(`quizwall/users/${id}`, {}, params);
    }

    create(params, body){
        let url = this.baseUrl + `/spots`;
        debugger;
        return this.apiClient.post(url, params, body);
    }
}
