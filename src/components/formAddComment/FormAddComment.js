import React, { Component } from 'react';
import axios from 'axios';
import { protocol, baseUrl } from '../../config/apiCongig';

const INITIAL_STATE = {
  text: '',
};

class FormAddComment extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props;
    const { text } = this.state;

    axios
      .post(`${protocol}://${baseUrl}/comments`, {
        postId: id,
        body: text,
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Text:
          <textarea value={text} name="text" onChange={this.handleChange} />
        </label>
        <button type="submit">leave comment</button>
      </form>
    );
  }
}

export default FormAddComment;
