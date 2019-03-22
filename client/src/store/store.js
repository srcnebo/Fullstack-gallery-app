import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/index';
import thunk from 'redux-thunk';
import { comments } from './data/comments';
const defaultState = {
  posts: [],
  profile: [],
  comments
};

const store = createStore(rootReducers, defaultState, applyMiddleware(thunk));

export default store;
