import React from 'react';
import { connect } from 'react-redux';
import PostsList from './PostsList';

const PostsListContainer = ({ posts, isLoading }) => (
  <PostsList posts={posts} isLoading={isLoading} />
);

const mstp = state => ({
  posts: state.posts,
  isLoading: state.isLoading,
});

export default connect(mstp)(PostsListContainer);
