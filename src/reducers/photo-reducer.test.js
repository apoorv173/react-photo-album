import PhotoReducer from "./photo-reducer";

const Photos = [
    {
      "id": 1,
      "title": "quidem molestiae enim",
      "thumbnailUrl": "/fff"
    },
    {
      "id": 2,
      "title": "sunt qui excepturi placeat culpa",
      "thumbnailUrl": "/111"
    }
  ];

import { GET_PHOTOS_SUCCESS, 
    GET_PHOTOS_LOADING, 
    GET_PHOTOS_ERROR } from '../actions/constants';

const initialState = {
    photos: [],
    loading: false,
    error: {},
};

describe("Photo Reducer", () => {
    it("should return the initial state", () => {
        expect(PhotoReducer(undefined, {})).toEqual(initialState)
    });
    
    it("should handle fetch Photo success", () => {
        const modifiedPhotoData = [
            {
              "photoId": 1,
              "id": 1,
              "title": "quidem molestiae enim",
              "photoTitle": "quidem molestiae enim",
              "thumbnailUrl": "/fff"
            },
            {
              "photoId": 2,
              "id": 2,
              "title": "sunt qui excepturi placeat culpa",
              "photoTitle": "sunt qui excepturi placeat culpa",
              "thumbnailUrl": "/111"
            }
          ];
        expect(PhotoReducer(undefined, {type: GET_PHOTOS_SUCCESS, photos: Photos})).toEqual({...initialState, photos: modifiedPhotoData})
    });

    it("should handle fetch Photo loading", () => {
        expect(PhotoReducer(undefined, {type: GET_PHOTOS_LOADING, loading: true})).toEqual({...initialState, loading: true})
    });

    it("should handle fetch Photo error", () => {
        expect(PhotoReducer(undefined, {type: GET_PHOTOS_ERROR, error: true})).toEqual({...initialState, error: true})
    });
});