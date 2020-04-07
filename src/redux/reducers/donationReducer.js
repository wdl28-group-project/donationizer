import axios from "axios";
const initialState = {
  donations: [],
  loading: false,
  details: [],
};

//constants
const GET_DONATIONS = "GET_DONATIONS";
const GET_DONATIONS_BY_CATEGORY = "GET_DONATIONS_BY_CATEGORY";
const GET_DONATION_DETAIL = "GET_DONATION_DETAIL";
const UPDATE_VIEW_COUNT = "UPDATE_VIEW_COUNT";
const POST_DONATION = "POST_DONATION";

//action creator
export function getDonations() {
  let data = axios.get("/api/donations");

  return {
    type: GET_DONATIONS,
    payload: data,
  };
}
export function getDonationsByCategory(category) {
  let data = axios.get(`/api/donations/category?category=${category}`);
  return {
    type: GET_DONATIONS_BY_CATEGORY,
    payload: data,
  };
}
export function getDonationsdetail(id) {
  let data = axios.get(`/api/donation/${id}`);
  return {
    type: GET_DONATION_DETAIL,
    payload: data,
  };
}
export function updateViewCount(id) {
  console.log(id);
  let data = axios.put(`/api/viewCount/${id}`).then((res) => console.log(res));
  return {
    type: UPDATE_VIEW_COUNT,
    payload: data,
  };
}
export function postDonation(obj) {
  const {
    donator_id,
    donation_title,
    donation_desc,
    post_location,
    view_count,
    isdonated,
    category,
    post_date,
    donation_photo,
  } = obj;
  const donationObj = {
    donator_id,
    donation_title,
    donation_desc,
    post_location,
    view_count,
    isdonated,
    category,
    post_date,
  };
  let data = axios
    .post("/api/donation/", donationObj)
    .then((res) => {
      var photoObj = { donation_photo, donation_id: res.data[0].donation_id };
      console.log(photoObj);
        axios
          .post("api/postPhotos", photoObj)
          .then((res) => {console.log(res)})
              .catch((res) => {console.log(res)}) })
    .catch((res) => {
      console.log(res);
    });
  return {
    type: POST_DONATION,
    payload: data,
  };
}

//reducer
export default function donationReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${GET_DONATIONS}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_DONATIONS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        donations: payload.data,
        details: [],
      };
    case `${GET_DONATIONS_BY_CATEGORY}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_DONATIONS_BY_CATEGORY}_FULFILLED`:
      return {
        ...state,
        loading: false,
        donations: payload.data,
      };
    case `${GET_DONATION_DETAIL}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_DONATION_DETAIL}_FULFILLED`:
      return {
        ...state,
        loading: false,
        details: payload.data,
      };
    case `${UPDATE_VIEW_COUNT}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${UPDATE_VIEW_COUNT}_FULFILLED`:
      return {
        ...state,
        loading: false,
        details: payload.data,
      };
    case `${POST_DONATION}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${POST_DONATION}_FULFILLED`:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
