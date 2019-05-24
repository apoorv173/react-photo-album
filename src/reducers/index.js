import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import albumReducer from './album-reducer';
import userReducer from './user-reducer';
import photoReducer from './photo-reducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    albums: albumReducer,
    users: userReducer,
    photos: photoReducer
})