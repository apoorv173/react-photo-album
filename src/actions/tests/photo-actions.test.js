import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import photos from "../../data/first-page-photos.json";
import fetchMock from 'fetch-mock';

import { 
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_LOADING,
    GET_PHOTOS_ERROR,
    GET_USERS_SUCCESS,
    GET_ALBUMS_LOADING } from '../constants';

import { fetchPhotosLoading, fetchPhotosError, fetchPhotos } from '../photo-actions';

const start = 0;
const limit = 20;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const photoInitialState = {
    photos: [],
    loading: true,
    error: '',
};

const store = mockStore({photos: photoInitialState});

describe('Photo Action', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
      });

    it('should create an action for error', () => {
        const expectedAction = {type: GET_PHOTOS_ERROR, error: 'something failed'};
        expect(fetchPhotosError('something failed')).toEqual(expectedAction);
    });
    it('should create an action for loading', () => {
        const expectedAction = {type: GET_PHOTOS_LOADING};
        expect(fetchPhotosLoading()).toEqual(expectedAction);
    });

    it('creates GET_PHOTOS_SUCCESS when fetching albums is done', () => {
        const expectedActions = [
          {type: GET_ALBUMS_LOADING},
          {type: GET_PHOTOS_LOADING},
          { type: GET_PHOTOS_SUCCESS, photos },
          { type: GET_USERS_SUCCESS, photos }
        ]
        
        store.dispatch(fetchPhotos(1, 1, 20));
        expect(store.getActions()).toEqual(expectedActions);
      });
});
