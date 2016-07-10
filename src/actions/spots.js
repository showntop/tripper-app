import {BASE_URL} from '../constants/Urls'
import * as types from '../constants/ActionTypes';
import * as http from '../actions/http';
import api          from '../apiSingleton';

export function createSpot(title, description, location, coverFile) {

    return (dispatch) => {
        dispatch(http.requestHttp());
        return api.spots.create({}, {title, description, location}).then((response) => {
            debugger;
            dispatch({
                type: types.RECEIVE_CREATE_SPOT,
                response
            });
            // dispatch(updateSpotCover(response.data.id, coverFile));
        }).catch(error => {
            dispatch({
                type: RECEIVE_CREATE_SPOT,
                error
            });
        });
    };  
}

export function updateSpotCover(spotId, file) {
    return (dispatch) => {
        dispatch(http.requestHttp());
        return api.spots.updateCover(spotId, file).then((response) => {
            dispatch({
                type: types.RECEIVE_UPDATE_SPOT_COVER,
                response
            })
        }).catch(error => {
            dispatch({
                type: types.RECEIVE_UPDATE_SPOT_COVER,
                error
            });
        });
    }    
}
