import React, { Component } from 'react';
import '../Messages/Messages.css';

class Messages extends Component {
  render() {
    return (
      <div id='Messages-root' ref={this.props.refProp}>
        {this.props.messages.map((message, index) => (
          <div
            className={`message ${
              this.props.username === message.user ? 'message--me' : ''
            }`}
            key={index}
          >
            <div className='message__user'>{message.user}</div>
            <p className='message__content'>{message.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Messages;
