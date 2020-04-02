import React, { Component } from 'react';
import '../CreateMessages/CreateMessage.css';

class CreateMessage extends Component {
  constructor() {
    super();

    this.state = {
      messageContent: ''
    };
  }

  handleChange = e => {
    this.setState({
      messageContent: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    const message = {
      content: this.state.messageContent
    };

    this.setState({
      messageContent: ''
    });

    this.props.handlerCreateMessage(message);
  };

  render() {
    return (
      <form id='Create-message-root' onSubmit={this.submitHandler}>
        <input
          type='text'
          value={this.state.messageContent}
          onChange={this.handleChange}
          placeholder='ENTER MESSAGE HERE!'
        />
        <input type='submit' value='SEND' />
      </form>
    );
  }
}

export default CreateMessage;
