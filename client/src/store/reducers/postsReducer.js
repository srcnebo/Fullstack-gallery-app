import { ADD_POST, EDIT_POST, DELETE_POST, FETCH_POSTS } from "../actions/actionTypes";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts;

    case ADD_POST:
      return [...state, action.post];
    case DELETE_POST:
      return state.filter(post => post._id !== action.postId);
    case EDIT_POST:
      return state.map(post => post.id === action.id);
    default:
      return state;
  }
};

export default postsReducer;
