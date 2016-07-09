
export default class Base {
    constructor({ baseUrl, apiClient }) {
        if (!apiClient) throw new Error('[apiClient] required');
        this.apiClient = apiClient;
        this.baseUrl = baseUrl;
    }
}