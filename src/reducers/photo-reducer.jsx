import { GET_PHOTOS_SUCCESS,
        GET_PHOTOS_ERROR,
        GET_PHOTOS_LOADING } from "../actions/constants";

const initialState = {
    photos: [],
    loading: true,
    error: '',
};


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS_SUCCESS:
            if(Array.isArray(action.photos) && action.photos.length === 0) {
                return {...state, error: 'No results found'};
            }
            const photoArr = action.photos.map((photo) => (
                { ...photo, 
                    photoId: photo.id,
                    photoTitle: photo.title 
                })
            );
            return {...state, photos: photoArr, loading: false, error: ''};
        
        case GET_PHOTOS_LOADING:
            return {...state, loading: true, error: ''};
        
        case GET_PHOTOS_ERROR:
            return {...state, error: action.error, loading: false, photos: []};

        default:
            return state;
    }
}
