import axios from "axios";

const initialState = {
  user_id: null,
  username: "",
  password: "",
  location: "",
  donation_count: null,
  profile_pic: "",
  user: {},
  loading: false
};

const UPDATE_STATE = "UPDATE_STATE";
const RESET_FIELDS = "RESET_FIELDS";
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const REGISTER_USER = "REGISTER_USER";
const EDIT_USER = "EDIT_USER";
const GET_USER = "GET_USER";
const EDIT_PASSWORD = "EDIT_PASSWORD"

export const updateState = e => {
  return {
    type: UPDATE_STATE,
    payload: e
  };
};
export const resetFields = () => {
  return {
    type: RESET_FIELDS
  };
};
export const loginUser = (username, password) => {
  let body = {
    username,
    password
  };
  return {
    type: LOGIN_USER,
    payload: axios.post("/auth/login", body)
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: axios.get("/auth/logout")
  };
};

export const registerUser = (username, password, location) => {
  let body = {
    username,
    password,
    location
  };
  return {
    type: REGISTER_USER,
    payload: axios.post("/auth/register", body)
  };
};

export const editUser = userObj => {
  return {
    type: EDIT_USER,
    payload: axios.put("/auth/editUser", userObj)
  };
};

export const getUser = userObj => {
  return {
    type: GET_USER,
    payload: axios.get("/auth/getUser", userObj)
  };
};

export const editPassword = userObj => {
  return {
    type: EDIT_PASSWORD,
    payload: axios.put('/auth/editPassword', userObj)
  };
}

const authReducer = (state = initialState, action) => {
  let { payload, type } = action;
  switch (type) {
    case UPDATE_STATE:
      return {
        ...state,
        ...payload
      };
    case RESET_FIELDS:
      return {
        ...state,
        user_id: null,
        username: "",
        password: "",
        location: "",
        donation_count: null,
        profile_pic: "",
        user: {},
        loading: false
      };
    case `${LOGIN_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };

    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
        user: payload.data
      };
    case `${LOGOUT_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${LOGOUT_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
        user: {}
      };
    case `${REGISTER_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
        user: payload.data
      };
    case `${EDIT_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${EDIT_USER}_FULFILLED`:
      return {
        ...state,
        loading: false,
        user: {...state.user, ...payload.data}
      };
    case `${GET_USER}_PENDING`:
      return {
        ...state,
        loading: true,
      };
      case `${GET_USER}_FULFILLED`:
        return {
          ...state,
          loading: false,
          user: {...state.user, ...payload.data}
        };
      case `${EDIT_PASSWORD}_PENDING`:
      return {
        ...state,
        loading: true,
      };
      case `${EDIT_PASSWORD}_FULFILLED`:
        return {
          ...state,
          loading: false,
          user: {...state.user, ...payload.data}
        };
      


    default:
      return state;
  }
};

export default authReducer;
