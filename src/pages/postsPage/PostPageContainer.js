import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsPage from './PostsPage';
import postsOperations from '../../redux/operations/postsOperations';

class PostPageContainer extends Component {
  componentDidMount() {
    const { fetchAllPosts } = this.props;
    fetchAllPosts();
  }

  render() {
    return <PostsPage />;
  }
}

const mdtp = {
  fetchAllPosts: postsOperations.fetchAllPosts,
};

export default connect(
  null,
  mdtp,
)(PostPageContainer);
