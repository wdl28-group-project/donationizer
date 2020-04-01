import axios from "axios";
const initialState = {
  donations: [],
  loading: false
};

//constants
const GET_DONATIONS = "GET_DONATIONS";

//action creator
export function getDonations() {
  let data = axios.get("/api/donations");
  return {
    type: GET_DONATIONS,
    payload: data
  };
}

//reducer
export default function donationReducer(state = initialState,action) {
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
        donations: payload.data
      };
    default:
      return state;
  }
}
