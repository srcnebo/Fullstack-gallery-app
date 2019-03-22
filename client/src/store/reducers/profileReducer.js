import { FETCH_PROFILE } from '../actions/actionTypes';

const profileReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return action.profile;
    default:
      return state;
  }
};

export default profileReducer;
