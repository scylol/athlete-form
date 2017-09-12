export const BASIC_INFO_NEXT = 'BASIC_INFO_NEXT';
export const basicInfoNext = (info) => ({
  type: BASIC_INFO_NEXT,
  info
});

export const ABOUT_NEXT = 'ABOUT_NEXT';
export const aboutNext = (info) => ({
  type: ABOUT_NEXT,
  info
});

export const SOCIAL_MEDIA_NEXT = 'SOCIAL_MEDIA_NEXT';
export const socialMediaNext = (info) => ({
  type: SOCIAL_MEDIA_NEXT,
  info
});

export const createProfile = () => (dispatch, getState) => {
  const state = getState();
  fetch('/api/athletes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({name:state.name,
        sports: state.sports,
        nationality: state.nationality,
        gender: state.gender,
        dateOfBirth: state.dateOfBirth,
        description: state.description,
        location: state.location,
        team: state.team,
        instagram: state.instagram,
        twitter: state.twitter, 
        facebook: state.facebook})
  }).then(res => {
    return res.json();
  }).catch(err => {
    console.log(err);
  });
};