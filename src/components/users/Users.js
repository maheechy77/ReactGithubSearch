import React from 'react';

import UserItem from '../users/UserItem';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';

const Users=({users,loading})=> {
        if(loading){
            return <Spinner/>
        }else{
            return (
                <div>
                    {users.map(user=>(
                        <UserItem key={user.id} 
                            login={user.login} 
                            avatar_url={user.avatar_url} 
                            html_url={user.html_url} />
                    ))}
                </div>
            )
        }
}

Users.propTypes={
    user:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}

export default Users;
