import{BASIC_INFO_NEXT, ABOUT_NEXT, SOCIAL_MEDIA_NEXT} from '../actions/actions';

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
  facebook: ""
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
  return state;
}