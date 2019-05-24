import { GET_USERS_SUCCESS,
    GET_USERS_LOADING,
    GET_USERS_ERROR } from './constants';
import { ServiceAPI } from './Services';

const fetchUserDetails = (userDetails) => {
    return {
        type: GET_USERS_SUCCESS,
        userDetails
    }
};

const fetchUserLoading = (flag) => {
    return {
        type: GET_USERS_LOADING,
        flag
    }
};

const fetchUserError = (error) => {
    return {
        type: GET_USERS_ERROR,
        error
    }
};

export const fetchUsers = (albumData) => {
    
    
    return dispatch => {

        let userIdArr = [];
        //Get unique user ids using the ES6 data structure, SET
        if(Array.isArray(albumData)) {
            userIdArr = [...new Set(albumData.map(album =>  album.userId))];
        }
        else {
            userIdArr = [albumData.userId];
        }
        dispatch(fetchUserLoading(true));
        userIdArr.forEach(function (userId) {
            const url = `/users/${userId}`;
            const handleSuccess = (data) => {
                dispatch(fetchUserDetails(data));
                dispatch(fetchUserLoading(false));
            };
            const handleError = (error) => {
                dispatch(fetchUserError(error));
                dispatch(fetchUserLoading(false));
            }
            ServiceAPI.get(url, handleSuccess, handleError);
        });
    }
};