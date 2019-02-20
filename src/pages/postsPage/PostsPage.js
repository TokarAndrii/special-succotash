import React from 'react';
import { Link } from 'react-router-dom';
import PostsList from '../../components/postsList/PostsListContainer';
import routes from '../../config/routes';

const PostsPage = () => (
  <div>
    <Link to={routes.Home}>go home</Link>
    <PostsList />
  </div>
);

export default PostsPage;
