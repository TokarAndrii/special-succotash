import types from '../types/types';

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_START:
      return null;

    case types.FETCH_ERROR:
      return { payload };

    default:
      return state;
  }
};

export default errorReducer;
