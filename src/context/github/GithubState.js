import React,{ useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USER,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING
} from '../types';

const GithubState = props =>{
    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const clearData = () =>dispatch({type:CLEAR_USERS});

    const setLoading = () => dispatch({type:SET_LOADING});

    const getUserRepos = async username =>{
        setLoading();
        const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=4&sort=created:asc&
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type:GET_REPOS,
            payload:res.data
        });
      }

    const getUser = async username =>{
        setLoading();
        const res=await axios.get(`https://api.github.com/users/${username}
        ?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type:GET_USER,
            payload:res.data
        });
      }

    const searchName = async text =>{
        setLoading();
        const res=await axios.get(`https://api.github.com/search/users?q=${text}
        &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
            type:SEARCH_USER,
            payload:res.data.items
        });
      };

    return <GithubContext.Provider
        value={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            loading:state.loading,
            searchName,
            clearData,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
};

export default GithubState;