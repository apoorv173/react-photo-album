import UserReducer from "./user-reducer";
import Users from "../data/users.json";

import { GET_USERS_SUCCESS, 
    GET_USERS_LOADING, 
    GET_USERS_ERROR } from '../actions/constants';

const initialState = {
    users: {},
    error: '',
    loading: true
};

describe("User Reducer", () => {
    it("should return the initial state", () => {
        expect(UserReducer(undefined, {})).toEqual(initialState)
    });
    
    it("should handle fetch user success", () => {
        const modifiedUserData = {users: {
            "1": {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                  "street": "Kulas Light",
                  "suite": "Apt. 556",
                  "city": "Gwenborough",
                  "zipcode": "92998-3874",
                  "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                  }
                },
                "color": "1fb91f",
                "userId": 1,
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                  "name": "Romaguera-Crona",
                  "catchPhrase": "Multi-layered client-server neural-net",
                  "bs": "harness real-time e-markets"
                }
            }
            },
            loading: false,
            error: ''
        }
        expect(UserReducer(undefined, {type: GET_USERS_SUCCESS, userDetails: Users})).toEqual(modifiedUserData);
    });
    it("should handle fetch user loading", () => {
        expect(UserReducer(undefined, {type: GET_USERS_LOADING, loading: true})).toEqual({...initialState, loading: true})
    });
    it("should handle fetch user error", () => {
        expect(UserReducer(undefined, {type: GET_USERS_ERROR, error: true})).toEqual({...initialState, error: true, loading: false})
    });
});