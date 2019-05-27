import { GET_USERS_SUCCESS, 
        GET_USERS_LOADING, 
        GET_USERS_ERROR } from '../actions/constants';

const initialState = {
    users: {},
    loading: true,
    error: ''
};

//method to convert any string to a 6 digit hex code.
const hexCodeFromString = (str) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            
            const userColor = hexCodeFromString(action.userDetails.username);

            //Mapping the id key in the response as userId, for readability.
            //UserObj stored as value, with userId as key.

            const userObj = {
                [action.userDetails.id]: {...action.userDetails, 
                    userId: action.userDetails.id,
                    color: userColor
                }
            };

            //Storing the users not an array but as a pair of keys/values, key being the userId.
            return {...state, users: {...state.users, ...userObj}, loading: false, error: ''};

        case GET_USERS_LOADING:
            return {...state, loading: true, error: ''};
        case GET_USERS_ERROR:
            return {...state, error: action.error, loading: false, users: {}};
        default:
            return state;
    }
}