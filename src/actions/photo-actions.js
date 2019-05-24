
import { 
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_LOADING,
    GET_PHOTOS_ERROR,
    PAGE_COUNT } from './constants';
import { ServiceAPI } from './Services';
import { fetchSingleAlbum } from './album-actions';

const fetchPhotosSuccess = (photos) => {
    return {
        type: GET_PHOTOS_SUCCESS,
        photos
    }
};

const fetchPhotosLoading = (flag) => {
    return {
        type: GET_PHOTOS_LOADING,
        flag
    }
};

const fetchPhotosError = (error) => {
    return {
        type: GET_PHOTOS_ERROR,
        error
    }
};

export const fetchPhotos = (albumId, page, limit = PAGE_COUNT) => {
    return dispatch => {
        
        dispatch(fetchSingleAlbum(albumId));
        dispatch(fetchPhotosLoading(true));
        const start = (page - 1) * limit;
        const url = `/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`;
        
        const handleSuccess = (data) => {
            dispatch(fetchPhotosSuccess(data));
            dispatch(fetchPhotosLoading(false));
        };
        const handleError = (error) => {
            dispatch(fetchPhotosError(error));
            dispatch(fetchPhotosLoading(false));
        }
        ServiceAPI.get(url, handleSuccess, handleError);
    }
}