import React, { Component } from 'react';

class Messages extends Component {
  render() {
    return (
      <div className='messages'>
        {this.props.messages.map((message, index) => (
          <div className='message' key={index}>
            <div className='message__user'>{message.user}</div>
            <div className='message__content'>{message.content}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Messages;
