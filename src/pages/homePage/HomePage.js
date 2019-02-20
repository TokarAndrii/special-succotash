import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';

const HomePage = () => (
  <div>
    <h1>wellcome to home page!</h1>
    <Link to={routes.Posts}>see all posts</Link>
  </div>
);

export default HomePage;
