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

const fetchUserLoading = () => {
    return {
        type: GET_USERS_LOADING
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
        dispatch(fetchUserLoading());
        userIdArr.forEach(function (userId) {
            const url = `/users/${userId}`;
            const handleSuccess = (data) => {
                dispatch(fetchUserDetails(data));
            };
            const handleError = (error) => {
                dispatch(fetchUserError(error));
            }
            ServiceAPI.get(url, handleSuccess, handleError);
        });
    }
};