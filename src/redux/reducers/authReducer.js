import axios from 'axios';

const initialState = {
    user_id: null,
    username: '',
    password: '',
    location: '',
    donation_count: null,
    profile_pic: '',
    user: {},
    loading: false
}

const UPDATE_STATE = 'UPDATE_STATE';
const RESET_FIELDS = 'RESET_FIELDS';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const REGISTER_USER = 'REGISTER_USER';

export const updateState = e => {
    return{
        type: UPDATE_STATE,
        payload: e
    }
}
export const resetFields = () => {
    return{
        type: RESET_FIELDS
    }
}
export const loginUser = (username, password) => {
    let body = {
        username,
        password
    }
    return{
        type: LOGIN_USER,
        payload: axios.post('/auth/login', body)
    }
}

export const logoutUser = () => {
    return{
        type: LOGOUT_USER,
        payload: axios.get('/auth/logout')
    }
}

export const registerUser = (username, password, location) => {
    let body = {
        username,
        password,
        location
    };
    return{
        type: REGISTER_USER,
        payload: axios.post('/auth/register', body)
    }
}

const authReducer = ( state=initialState, action ) => {
    let { payload, type } = action;
    switch( type ){
        case UPDATE_STATE:
            return{
                ...state,
                ...payload
            }
        case RESET_FIELDS:
            return{
                ...state,
                user_id: null,
                username: '',
                password: '',
                location: '',
                donation_count: null,
                profile_pic: '',
                user: {},
                loading: false
            }
        case `${LOGIN_USER}_PENDING`:
            return{
                ...state,
                loading: true
            }
            
        case `${LOGIN_USER}_FULFILLED`:
            return{
                ...state,
                loading: false,
                user: payload.data
            }
        case `${LOGOUT_USER}_PENDING`:
            return{
                ...state,
                loading: true
            }
        case `${LOGOUT_USER}_FULFILLED`:
            return{
                ...state,
                loading: false,
                user: {}
            }
        case `${REGISTER_USER}_PENDING`:
            return{
                ...state,
                loading: true
            }
        case `${REGISTER_USER}_FULFILLED`:
            return{
                ...state,
                loading: false,
                user: payload.data
            }

        default: return state;
    }

};

export default authReducer;