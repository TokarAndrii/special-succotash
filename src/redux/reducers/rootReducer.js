import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  posts: postsReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});
