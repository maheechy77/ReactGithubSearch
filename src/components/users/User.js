import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Repos from '../repos/Repos';


class User extends Component {
    static propTypes={
        getUser:PropTypes.func.isRequired,
        user:PropTypes.object.isRequired,
        getUserRepos:PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired,
    }
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }
    render() {
        return (
            <div className="usercard">
                <Link to='/' className='btn btn-light' >Back to Search</Link>
                Hireable:{' '}{ this.props.user.hireable ? <i className="fas fa-check text-success" />:<i className="fas fa-times-circle text-danger" />}
                <div className="card-user grid-2">
                    <div className="usercard" >
                        <img src={this.props.user.avatar_url} style={{width:'150px'}} alt="avatar" />
                        <h2>Username:{this.props.user.name}</h2>
                        <p>Location: {this.props.user.location}</p>
                    </div>
                    <div>
                        <h3>Bio :</h3>
                        {this.props.user.bio && <Fragment>
                            <p>{this.props.user.bio}</p>
                            <a href={this.props.user.html_url} className="btn btn-dark" >Visit Github Profile</a>
                        </Fragment>}</div>
                </div>
                <div className="card-user badge">
                            <div className="badge-follower" >Followers: {this.props.user.followers}</div>
                            <div className="badge-following" >Following: {this.props.user.following}</div>
                            <div className="badge-repos" >Public Repos: {this.props.user.public_repos}</div>
                            <div className="badge-gist" >Public Gists :{this.props.user.public_gists}</div>
                </div>
                <Repos repos={this.props.repos}/>
            </div>
        )
    }
};
export default User;
