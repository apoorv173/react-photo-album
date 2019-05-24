
import { 
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_LOADING,
    GET_PHOTOS_ERROR,
    PAGE_COUNT } from './constants';
import { ServiceAPI } from './Services';
import { fetchSingleAlbum } from './album-actions';

//exported only for unit tests
export const fetchPhotosSuccess = (photos) => {
    return {
        type: GET_PHOTOS_SUCCESS,
        photos
    }
};

//exported only for unit tests
export const fetchPhotosLoading = () => {
    return {
        type: GET_PHOTOS_LOADING
    }
};

//exported only for unit tests
export const fetchPhotosError = (error) => {
    return {
        type: GET_PHOTOS_ERROR,
        error
    }
};

export const fetchPhotos = (albumId, page, limit = PAGE_COUNT) => {
    return dispatch => {
        dispatch(fetchSingleAlbum(albumId));
        dispatch(fetchPhotosLoading());
        const start = (page - 1) * limit;
        const url = `/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`;
        
        const handleSuccess = (data) => {
            dispatch(fetchPhotosSuccess(data));
        };
        const handleError = (error) => {
            dispatch(fetchPhotosError(error));
        }
        ServiceAPI.get(url, handleSuccess, handleError);
    }
}