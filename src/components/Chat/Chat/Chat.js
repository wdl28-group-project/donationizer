import React, { Component } from 'react';
import CreateMessage from '../CreateMessages/CreateMessage';
import Messages from '../Messages/Messages';

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      messages: [
        {
          user: 'Sam',
          content: 'Hello World'
        },
        {
          user: 'Brandon',
          content: 'Hey Hey'
        }
      ]
    };
  }

  handlerCreateMessage = message => {
    this.setState({
      messages: [...this.state.messages, message]
    });
  };

  render() {
    return (
      <div className='chat'>
        <Messages messages={this.state.messages} />
        <CreateMessage handlerCreateMessage={this.handlerCreateMessage} />
      </div>
    );
  }
}

export default Chat;
