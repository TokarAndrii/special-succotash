import axios from 'axios';
import postsActions from '../actions/postsActions';
import { protocol, baseUrl } from '../../config/apiCongig';

const fetchAllPosts = () => dispatch => {
  dispatch(postsActions.FETCH_START());
  axios
    .get(`${protocol}://${baseUrl}/posts`)
    .then(resp => {
      dispatch(postsActions.GET_ALL_POSTS_LIST_SUCCESS(resp.data));
    })
    .catch(error => dispatch(postsActions.FETCH_ERROR(error)));
};

export default { fetchAllPosts };
