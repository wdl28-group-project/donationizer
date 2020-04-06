import React, { Component } from 'react';
import '../Chat/Chat.css';
import CreateMessage from '../CreateMessages/CreateMessage';
import Messages from '../Messages/Messages';
import socketIOClient from 'socket.io-client';

let socket = null;

class Chat extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      messages: []
    };

    if (socket === null) {
      socket = socketIOClient('http://localhost:4444');
    }

    socket.on('SET_USERNAME', username => {
      this.setState({
        username
      });
    });

    socket.on('CREATE_MESSAGE', messageObj => {
      this.setState({
        messages: [...this.state.messages, messageObj]
      });
      console.log(this.state.messages);
      this.scrollToBottom();
    });

    this.myRef = React.createRef();
    console.log(this.myRef);
  }

  scrollToBottom = () => {
    if (this.myRef.current !== null) {
      this.myRef.current.scrollTop =
        this.myRef.current.clientHeight * this.state.messages.length;
      console.log(this.myRef.current.clientHeight);
    }
  };

  handlerCreateMessage = message => {
    message.user = this.state.username;
    socket.emit('SEND_MESSAGE', message);
    console.log(message)
  };

  render() {
    return (
      <div id='Chat-root'>
        <div className='chat'>
          <Messages
            refProp={this.myRef}
            messages={this.state.messages}
            username={this.state.username}
          />
          <CreateMessage handlerCreateMessage={this.handlerCreateMessage} />
        </div>
      </div>
    );
  }
}

export default Chat;
