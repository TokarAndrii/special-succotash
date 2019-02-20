import types from '../types/types';

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.FETCH_START:
      return true;
    case types.GET_ALL_POSTS_LIST_SUCCESS:
    case types.FETCH_ERROR:
    case types.GET_ONE_POST_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
