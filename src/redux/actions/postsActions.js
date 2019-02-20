import types from '../types/types';

const GET_ALL_POSTS_LIST_SUCCESS = posts => ({
  type: types.GET_ALL_POSTS_LIST_SUCCESS,
  payload: { posts },
});

const GET_ONE_POST_SUCCESS = post => ({
  type: types.GET_ONE_POST_SUCCESS,
  payload: { post },
});

const FETCH_START = () => ({
  type: types.FETCH_START,
});

const FETCH_ERROR = error => ({
  type: types.FETCH_ERROR,
  payload: { error },
});

export default {
  GET_ALL_POSTS_LIST_SUCCESS,
  FETCH_START,
  FETCH_ERROR,
  GET_ONE_POST_SUCCESS,
};
