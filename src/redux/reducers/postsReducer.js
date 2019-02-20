import types from '../types/types';

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.GET_ALL_POSTS_LIST_SUCCESS:
      return payload.posts;

    default:
      return state;
  }
};

export default postsReducer;
