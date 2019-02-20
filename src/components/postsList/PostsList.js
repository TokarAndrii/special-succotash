import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostsList.module.css';
import routes from '../../config/routes';

const PostsList = ({ posts, isLoading }) => (
  <div>
    <h1>Posts List</h1>

    {isLoading && <div>Loading....</div>}

    {posts.length > 0 && !isLoading && (
      <ul>
        {posts.map(post => (
          <li key={post.id} className={styles.postItem}>
            <Link to={`${routes.Posts}/${post.id}`} key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default PostsList;
