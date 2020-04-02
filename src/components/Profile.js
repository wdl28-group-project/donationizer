import React from 'react';

export default class Profile extends React.Component {

    render(){
        return(
            <div>
                <div>Profile</div>
                <input placeholder="Username"></input>
                <input placeholder="Location"></input>
                <input placeholder="URL"></input>
                <button>Save changes</button>
            </div>
        )
    }
}
