import { GET_PHOTOS_SUCCESS,
        GET_PHOTOS_ERROR,
        GET_PHOTOS_LOADING } from "../actions/constants";

const initialState = {
    photos: [],
    loading: false,
    error: {},
};


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS_SUCCESS:
            const photoArr = action.photos.map((photo) => (
                { ...photo, 
                    photoId: photo.id,
                    photoTitle: photo.title 
                })
            );
            return {...state, photos: photoArr};

        case GET_PHOTOS_ERROR:
            return {...state, error: action.error};

        case GET_PHOTOS_LOADING:
            return {...state, loading: action.loading};
        
        default:
            return state;
    }
}
