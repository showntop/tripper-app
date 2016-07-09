import ApiClient            from './ApiClient';
// import UsersAPI             from './Users';
import SpotsApi             from './Spots';

const baseUrl = `http://localhost:9000`;
// const baseUrl = `https://tripper-1990.herokuapp.com`;

export default function ({ apiPrefix } = {}) {
    if (!apiPrefix) {
       // throw new Error('[apiPrefix] required');
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        apiClient         : api,
        // users             : new UsersAPI({ apiClient: api }),
        spots               :new SpotsApi({baseUrl: baseUrl, apiClient: api})
    };
}