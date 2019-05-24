import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import albums from "../../data/first-page-album.json";
import Users from "../../data/users.json";
import fetchMock from 'fetch-mock';
import {
    GET_ALBUMS_SUCCESS,
    GET_ALBUMS_LOADING,
    GET_ALBUMS_ERROR,
    GET_USERS_SUCCESS } from '../constants';

import { fetchAllAlbums, fetchAlbumsError, fetchAlbumsLoading } from '../album-actions';

const start = 0;
const limit = 20;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


const albumInitialState = {
    albums: [],
    loading: true,
    error: '',
};

const store = mockStore({albums: albumInitialState});

describe('Album Action', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
      });

    it('should create an action for error', () => {
        const expectedAction = {type: GET_ALBUMS_ERROR, error: 'something failed'};
        expect(fetchAlbumsError('something failed')).toEqual(expectedAction);
    });
    it('should create an action for loading', () => {
        const expectedAction = {type: GET_ALBUMS_LOADING};
        expect(fetchAlbumsLoading()).toEqual(expectedAction);
    });

    fit('creates GET_ALBUMS_SUCCESS when fetching albums is done', () => {
        const expectedActions = [
          {type: GET_ALBUMS_LOADING},
          { type: GET_ALBUMS_SUCCESS, albums },
          { type: GET_USERS_SUCCESS, albums }
        ]
        
        store.dispatch(fetchAllAlbums(1, 20));
        expect(store.getActions()).toEqual(expectedActions);
      });
});
