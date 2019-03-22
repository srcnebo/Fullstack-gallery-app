import { ADD_COMMENT } from "../actions/actionTypes";

function postComments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          user: action.author,
          comment: action.comment,
          avatar: action.avatar,
        },
      ];
    default:
      return state;
  }
}
function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      // Take the current state
      ...state,
      // Overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action),
    };
  }
  return state;
}

export default comments;
