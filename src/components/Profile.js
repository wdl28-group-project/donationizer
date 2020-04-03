import React from 'react';
import { connect } from 'react-redux';
import { editUser } from '../redux/reducers/authReducer';

class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            location: '',
            url: ''
        }
    }
//make state here to hold the inputs 
    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value} )
    }

// make method like handle input & handle click
    handleClick = () => {
        const { username, location, url } = this.state;

        this.props.editUser({ username, location, url });
    }

    render(){
        return(
            <div>
                <div>Profile</div>
                <input onChange={this.handleInput} name='username' placeholder="Username" />
                <input onChange={this.handleInput} name='location' placeholder="Location" />
                <input onChange={this.handleInput} name='url' placeholder="URL" />
                <button onClick={this.handleClick}>Save changes</button>
            </div>
        )
    }
}

export default connect(null, {
    editUser
})(Profile);