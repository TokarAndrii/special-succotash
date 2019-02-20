import React, { Component } from 'react';
import axios from 'axios';
import { protocol, baseUrl } from '../../config/apiCongig';
import OnePostPage from './OnePostPage';
import Form from '../../components/formAddComment/FormAddComment';

const INITIAL_STATE = {
  post: [],
};

class OnePostPageContainer extends Component {
  state = { ...INITIAL_STATE };

  // Here I decided don't connect to redux and make requesy during component mount because this data needs only here!!!
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    axios.get(`${protocol}://${baseUrl}/posts/${id}`).then(resp => {
      const { data } = resp;
      this.setState({ post: { ...data } });
    });
  }

  render() {
    const { post } = this.state;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    return (
      <>
        <OnePostPage post={post} />
        <Form id={id} />
      </>
    );
  }
}

export default OnePostPageContainer;
