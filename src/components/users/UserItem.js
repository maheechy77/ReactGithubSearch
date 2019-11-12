import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserItem extends Component {
    render() {
        const {login,avatar_url}=this.props;
        return (
            <div className="card" >
                <div className="card-text" >{login}</div>
                <div className="card-body">
                    <img className="avater" src={avatar_url} alt="avater" /><br />
                    <Link to={`/user/${login}`}>Profile</Link>
                </div>
               
            </div>
        )
    }
};

export default UserItem;
