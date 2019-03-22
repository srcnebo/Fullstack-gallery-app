import axios from "axios";
import { ADD_POST, DELETE_POST, EDIT_POST, FETCH_POSTS, FETCH_PROFILE, ADD_COMMENT } from "./actionTypes";

export const fetchPosts = () => {
  return async dispatch => {
    const response = await axios.get("/api/v1/posts");

    dispatch({
      type: FETCH_POSTS,
      posts: response.data,
    });
  };
};

export const addPost = data => {
  return async dispatch => {
    const response = await axios.post("/api/v1/posts", data);
    dispatch({
      type: ADD_POST,
      post: response.data,
    });
  };
};

export const deletePost = id => {
  return async dispatch => {
    const response = await axios.delete(`/api/v1/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      id,
      postId: response.data._id,
    });
  };
};

export const editPost = (data, id) => {
  return {
    type: EDIT_POST,
    data,
    id,
  };
};

export const fetchProfile = () => {
  return async dispatch => {
    const response = await axios.get("/api/v1/profile");

    dispatch({
      type: FETCH_PROFILE,
      profile: response.data,
    });
  };
};

export const addComment = (author, avatar, comment, postId) => {
  return {
    type: ADD_COMMENT,
    author,
    avatar,
    comment,
    postId,
  };
};
