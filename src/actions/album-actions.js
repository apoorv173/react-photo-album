import {
    GET_ALBUMS_SUCCESS,
    GET_ALBUMS_LOADING,
    GET_ALBUMS_ERROR,
    PAGE_COUNT } from './constants';
import { ServiceAPI } from './Services';
import { fetchUsers } from './user-actions';

const fetchAlbumsSuccess = (albums) => {
    return {
        type: GET_ALBUMS_SUCCESS,
        albums
    }
};

const fetchAlbumsLoading = () => {
    return {
        type: GET_ALBUMS_LOADING
    }
};

const fetchAlbumsError = (error) => {
    return {
        type: GET_ALBUMS_ERROR,
        error
    }
};

export const fetchAllAlbums = (page, limit = PAGE_COUNT) => {
    return dispatch => {
        dispatch(fetchAlbumsLoading());
        const start = (page - 1) * limit;
        const url = `/albums?_start=${start}&_limit=${limit}`;

        const handleSuccess = (data) => {
            dispatch(fetchAlbumsSuccess(data));
            dispatch(fetchUsers(data));
        };
        const handleError = (error) => {
            dispatch(fetchAlbumsError(error));
        }
        ServiceAPI.get(url, handleSuccess, handleError);
    }
};

export const fetchSingleAlbum = (albumId) => {
    return dispatch => {
        dispatch(fetchAlbumsLoading());
        const url = `/albums/${albumId}`;

        const handleSuccess = (data) => {
            dispatch(fetchAlbumsSuccess(data));
            dispatch(fetchUsers(data));
        };
        const handleError = (error) => {
            dispatch(fetchAlbumsError(error));
        }
        ServiceAPI.get(url, handleSuccess, handleError);
    }
};