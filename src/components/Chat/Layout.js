import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../../Events';
import LoginForm from './LoginForm';
import ChatContainer from './chats/ChatContainer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../stylescomponent/index.scss';

const socketUrl = `http://localhost:6060`;
class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      user: null,
    };
  }

  componentWillMount() {
    this.initSocket();
    if (this.props.user) {
      this.setState({
        user: this.props.user.username,
      });
    }
  }

  /*
   *	Connect to and initializes the socket.
   */
  initSocket = () => {
    const socket = io(socketUrl);

    socket.on('connect', () => {
      console.log('Connected');
    });

    this.setState({ socket });
  };

  /*
   * 	Sets the user property in state
   *	@param user {id:number, name:string}
   */

  setUser = (user) => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.setState({ user });
  };

  /*
   *	Sets the user property in state to null.
   */
  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  render() {
    console.log(this.props.user);
    // const { title } = this.props;
    const { socket, user } = this.state;
    return (
      <div className='container bring-forward'>
        {!user ? (
          <LoginForm socket={socket} setUser={this.setUser} />
        ) : (
          <ChatContainer socket={socket} user={user} logout={this.logout} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state.authReducer;

  return { user };
};
export default withRouter(connect(mapStateToProps, {})(Layout));
