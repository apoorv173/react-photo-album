import {
    GET_ALBUMS_SUCCESS,
    GET_ALBUMS_LOADING,
    GET_ALBUMS_ERROR
} from "../actions/constants";

const initialState = {
    albums: [],
    loading: true,
    error: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        
        case GET_ALBUMS_SUCCESS:
            let albumArr = [];
            //Mapping the id key in the response as albumId, for readability.
            if (Array.isArray(action.albums)) {
                albumArr = action.albums.map(({ id, title, userId }) => (
                    { albumId: id, albumTitle: title, userId })
                );
            }
            else {
                albumArr = [{
                    albumId: action.albums.id,
                    albumTitle: action.albums.title,
                    userId: action.albums.userId
                }];
            }
            return {...state, albums: albumArr, loading: false, error: ''};

        case GET_ALBUMS_LOADING:
            return {...state, loading: true, error: ''};
        case GET_ALBUMS_ERROR:
            return {...state, error: action.error, loading: false, albums: []};
        default:
            return state;
    }
}

