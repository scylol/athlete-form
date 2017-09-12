import{BASIC_INFO_NEXT, ABOUT_NEXT, SOCIAL_MEDIA_NEXT, FETCH_ATHLETES_ERROR, FETCH_ATHLETES_REQUEST, FETCH_ATHLETES_SUCCESS} from '../actions/actions';

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
  athletes: []
};

export default function reducer(state=initialState, action) {
  if(action.type === BASIC_INFO_NEXT) {
    return {...state, name: action.info.name, sports: action.info.sports, nationality: action.info.nationality, gender: action.info.gender, dateOfBirth: action.info.dateOfBirth}
  }
  else if(action.type === ABOUT_NEXT) {
    return {...state, description: action.info.description, location: action.info.location, team: action.info.team}
  }
  else if(action.type === SOCIAL_MEDIA_NEXT) {
    return {...state, instagram: action.info.instagram, twitter: action.info.twitter, facebook: action.info.facebook}
  }
  else if(action.type === FETCH_ATHLETES_REQUEST) {
    return {...state, loading: true, error: null}
  }
  else if(action.type === FETCH_ATHLETES_ERROR) {
    return {...state, loading: false, error: action.error}
  }
  else if(action.type === FETCH_ATHLETES_SUCCESS) {
    return{...state, athletes: action.athletes, loading: false, error: null}
  }
  return state;
}