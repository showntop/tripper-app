import {BASE_URL} from '../constants/Urls'
import * as types from '../constants/ActionTypes';
import * as http from '../actions/http';
import api          from '../apiSingleton';

export function createSpot(title, description, cover, location) {

    return (dispatch) => {
        dispatch(http.requestHttp());
        return api.spots.create({}, {title, description, cover, location}).then((response) => {
            debugger;
            dispatch({
                type: types.RECEIVE_CREATE_SPOT,
                response
            });
        }).catch(error => {
            dispatch({
                type: RECEIVE_CREATE_SPOT,
                error
            });
        });
    };  
}
