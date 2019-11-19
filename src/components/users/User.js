import React, { useEffect,Fragment,useContext } from 'react';
import { Link } from 'react-router-dom';

import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';


const User =({match})=> {
    const githubContext= useContext(GithubContext);
    const { repos,getUser,getUserRepos,loading,user}=githubContext;
    useEffect(()=>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
    },[]);
        return (
            <div className="usercard">
                <Link to='/' className='btn btn-light' >Back to Search</Link>
                Hireable:{' '}{ user.hireable ? <i className="fas fa-check text-success" />:<i className="fas fa-times-circle text-danger" />}
                <div className="card-user grid-2">
                    <div className="usercard" >
                        <img src={user.avatar_url} style={{width:'150px'}} alt="avatar" />
                        <h2>Username:{user.name}</h2>
                        <p>Location: {user.location}</p>
                    </div>
                    <div>
                        <h3>Bio :</h3>
                        {user.bio && <Fragment>
                            <p>{user.bio}</p>
                            <a href={user.html_url} className="btn btn-dark" >Visit Github Profile</a>
                        </Fragment>}</div>
                </div>
                <div className="card-user badge">
                            <div className="badge-follower" >Followers: {user.followers}</div>
                            <div className="badge-following" >Following: {user.following}</div>
                            <div className="badge-repos" >Public Repos: {user.public_repos}</div>
                            <div className="badge-gist" >Public Gists :{user.public_gists}</div>
                </div>
                <Repos repos={repos}/>
            </div>
        )
};
export default User;
