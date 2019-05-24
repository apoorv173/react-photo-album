import { GET_USERS_SUCCESS,
        GET_ALBUMS_SUCCESS,
        GET_PHOTOS_SUCCESS,
        PAGE_COUNT } from './constants';

import { ServiceAPI } from './Services';

const fetchUserDetails = (userDetails) => {
    return {
        type: GET_USERS_SUCCESS,
        userDetails
    }
};

const fetchAlbumsSuccess = (albums) => {
    return {
        type: GET_ALBUMS_SUCCESS,
        albums
    }
};

const fetchPhotosSuccess = (photos) => {
    return {
        type: GET_PHOTOS_SUCCESS,
        photos
    }
};

export const fetchAllAlbums = (page, limit = PAGE_COUNT) => {
    return dispatch => {
        const start = (page - 1) * limit;
        const url = `/albums?_start=${start}&_limit=${limit}`;

        const handleSuccess = (data) => {
            dispatch(fetchUsers(data));
            dispatch(fetchAlbumsSuccess(data))
        };
        const handleError = (error) => {
            console.log('inside handler erorr');
        }
        ServiceAPI.get(url, handleSuccess, handleError);
    }
};

export const fetchUsers = (albumData) => {

    //Get unique user ids using the ES6 data structure, SET
    const userIdArr = [...new Set(albumData.map(album =>  album.userId))];
    
    return dispatch => {
        userIdArr.forEach(function (userId) {
            const url = `/users/${userId}`;
            const handleSuccess = (data) => {
                dispatch(fetchUserDetails(data));
            };
            const handleError = (error) => {
                console.log('inside handler erorr');
            }
            ServiceAPI.get(url, handleSuccess, handleError);
        });
    }
};

export const fetchPhotos = (albumId, page, limit = PAGE_COUNT) => {
    return dispatch => {
        const start = (page - 1) * limit;
        const url = `/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`;
        const handleSuccess = (data) => {
            dispatch(fetchPhotosSuccess(data));
        };
        const handleError = (error) => {
            console.log('inside handler erorr');
        }
        dispatch(fetchAllAlbums(page, limit));
        ServiceAPI.get(url, handleSuccess, handleError);
    }
}
