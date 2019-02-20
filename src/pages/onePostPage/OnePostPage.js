import React from 'react';

const OnePostPage = ({ post }) => (
  <div>
    <h1>Details of post</h1>
    <p>{post.title}</p>
    <p>{post.body}</p>
  </div>
);

export default OnePostPage;
