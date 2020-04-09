import axios from "axios";
const initialState = {
  donations: [],
  loading: false,
  details:[],
  favorites: [],
  myDonations: []
};

//constants
const GET_DONATIONS = "GET_DONATIONS";
const GET_DONATIONS_BY_CATEGORY = 'GET_DONATIONS_BY_CATEGORY';
const GET_DONATION_DETAIL= 'GET_DONATION_DETAIL'
const UPDATE_VIEW_COUNT='UPDATE_VIEW_COUNT'
const POST_DONATION='POST_DONATION';
const GET_FAVORITE_DONATIONS = "GET_FAVORITE_DONATIONS";
const GET_USER_DONATIONS = 'GET_USER_DONATIONS';

//action creator
export function getDonations(id) {
  let data = axios.get(`/api/donations/${id}`); 
  return {
    type: GET_DONATIONS,
    payload: data
  };
};
export function getDonationsByCategory(category) {
  let data = axios.get(`/api/donations/category?category=${category}`)
  return {
    type: GET_DONATIONS_BY_CATEGORY,
    payload: data
  };
};
export function getDonationsdetail(id) {
  let data = axios.get(`/api/donation/${id}`)
  return {
    type: GET_DONATION_DETAIL,
    payload: data
  };
}
export function updateViewCount(id) {
  console.log(id)
  let data =    axios.put(`/api/viewCount/${id}`).then(res => console.log(res))
  return {
    type: UPDATE_VIEW_COUNT,
    payload: data
  };
};
export const postDonation = async obj => {
  let data = await axios.put( '/api/donation/', obj ).then( res => console.log(res) );

  return {
    type: UPDATE_VIEW_COUNT,
    payload: data
  };
}

export const getFavorites = (user_id) => {
  return{
    type: GET_FAVORITE_DONATIONS,
    payload: axios.get(`/api/donations/favorites/${user_id}`)
  }
}

export const getUserDonations = (user_id) => {
  return{
    type: GET_USER_DONATIONS,
    payload: axios.get(`/api/donations/users/${user_id}`)
  }
}

//reducer
export default function donationReducer(state = initialState,action) {
  // console.log(state.details)
  const { type, payload } = action;
  switch (type) {
    case `${GET_DONATIONS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_DONATIONS}_FULFILLED`:
      return {
        ...state,
        loading:false,
        donations: payload.data,
        details: []
      };
    case `${GET_DONATIONS_BY_CATEGORY}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_DONATIONS_BY_CATEGORY}_FULFILLED`:
      return {
        ...state,
        loading:false,
        donations: payload.data
      };
    case `${GET_DONATION_DETAIL}_PENDING`:
      return{
        ...state,
        loading: true
      }  
    case `${GET_DONATION_DETAIL}_FULFILLED`:
      return{
        ...state,
        loading:false,
        details: payload.data
      }  
    case  `${ UPDATE_VIEW_COUNT}_PENDING`:
      return{
        ...state,
        loading: true
      }
    case `${UPDATE_VIEW_COUNT}_FULFILLED`:
      return{
        ...state,
        loading:false,
        details: payload.data
      }
    case  `${ POST_DONATION}_PENDING`:
      return{
        ...state,
        loading: true
      }
    case `${POST_DONATION}_FULFILLED`:
      return{
        ...state,
        loading:false,
        payload: payload.data
      }
    case `${GET_FAVORITE_DONATIONS}_PENDING`:
        return {
          ...state,
          loading: true
        };
    case `${GET_FAVORITE_DONATIONS}_FULFILLED`:
        return {
          ...state,
          loading:false,
          favorites: payload.data
        };
    case `${GET_USER_DONATIONS}_PENDING`:
        return {
          ...state,
          loading: true
        };
    case `${GET_USER_DONATIONS}_FULFILLED`:
        return {
          ...state,
          loading:false,
          myDonations: payload.data
        };
    default:
      return state;
  }
}
