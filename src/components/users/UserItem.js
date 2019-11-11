import React, { Component } from 'react';

class UserItem extends Component {
    render() {
        const {login,avatar_url,html_url}=this.props;
        return (
            <div className="card" >
                <div className="card-text" >{login}</div>
                <div className="card-body">
                    <img className="avater" src={avatar_url} alt="avater" /><br />
                    <a href={html_url} >Profile</a>
                </div>
               
            </div>
        )
    }
};

export default UserItem;
