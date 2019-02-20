import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/homePage/HomePage';
import PostsPage from '../pages/postsPage/PostPageContainer';
import OnePostPage from '../pages/onePostPage/OnePostPageContainer';

import routes from '../config/routes';
import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    <div className={styles.appHeader}>
      <header className="App-header">
        Test task Tokar Andrii - Simple Blog
      </header>
    </div>
    <Switch>
      <Route exact path={routes.Home} component={HomePage} />
      <Route exact path={routes.Posts} component={PostsPage} />
      <Route path={routes.Post_Item} component={OnePostPage} />
    </Switch>
  </div>
);

export default App;
