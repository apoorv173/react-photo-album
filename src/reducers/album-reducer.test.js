import AlbumReducer from "./album-reducer";

const ALBUMS = [
    {
      "id": 1,
      "userId": 1,
      "title": "quidem molestiae enim"
    },
    {
      "id": 2,
      "userId": 1,
      "title": "sunt qui excepturi placeat culpa"
    }
  ]

import { GET_ALBUMS_SUCCESS, 
    GET_ALBUMS_LOADING, 
    GET_ALBUMS_ERROR } from '../actions/constants';

const initialState = {
    albums: [],
    loading: false,
    error: {},
};

describe("Albums Reducer", () => {
    it("should return the initial state", () => {
        expect(AlbumReducer(undefined, {})).toEqual(initialState)
    });
    
    it("should handle fetch albums success", () => {
        const modifiedAlbumData = [
            {
              "albumId": 1,
              "albumTitle": "quidem molestiae enim",
              "userId": 1
            },
            {
              "albumId": 2,
              "albumTitle": "sunt qui excepturi placeat culpa",
              "userId": 1
            }
          ]
        expect(AlbumReducer(undefined, {type: GET_ALBUMS_SUCCESS, albums: ALBUMS})).toEqual({...initialState, albums: modifiedAlbumData})
    });

    it("should handle fetch albums loading", () => {
        expect(AlbumReducer(undefined, {type: GET_ALBUMS_LOADING, loading: true})).toEqual({...initialState, loading: true})
    });

    it("should handle fetch albums error", () => {
        expect(AlbumReducer(undefined, {type: GET_ALBUMS_ERROR, error: true})).toEqual({...initialState, error: true})
    });
});