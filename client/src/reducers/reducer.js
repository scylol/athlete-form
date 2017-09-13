import {
  FETCH_ATHLETES_ERROR,
  FETCH_ATHLETES_REQUEST,
  FETCH_ATHLETES_SUCCESS,
  UPDATE_INFO,
  NEXT_PAGE
} from "../actions/actions";

const initialState = {
  name: "",
  sports: "",
  nationality: "",
  gender: "",
  dateOfBirth: "",
  description: "",
  location: "",
  team: "",
  instagram: "",
  twitter: "",
  facebook: "",
  loading: false,
  error: null,
  athletes: [],
  currentPage: "goToLanding"
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_ATHLETES_REQUEST) {
    return { ...state, loading: true, error: null };
  } else if (action.type === FETCH_ATHLETES_ERROR) {
    return { ...state, loading: false, error: action.error };
  } else if (action.type === FETCH_ATHLETES_SUCCESS) {
    return {
      ...state,
      name: "",
      sports: "",
      nationality: "",
      gender: "",
      dateOfBirth: "",
      description: "",
      location: "",
      team: "",
      instagram: "",
      twitter: "",
      facebook: "",
      athletes: action.athletes,
      loading: false,
      error: null
    };
  } else if (action.type === UPDATE_INFO) {
    return { ...state, [action.infoName]: action.infoValue };
  } else if (action.type === NEXT_PAGE) {
    return { ...state, currentPage: action.page };
  }
  return state;
}
