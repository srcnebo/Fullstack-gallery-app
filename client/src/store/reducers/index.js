import postsReducer from "./postsReducer";
import profileReducer from "./profileReducer";
import commentsReducer from "./commentsReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  posts: postsReducer,
  profile: profileReducer,
  comments: commentsReducer,
});

export default rootReducers;
