import React,{useState,useContext} from 'react';

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search= () => {
    const githubContext= useContext(GithubContext);
    const alertContext= useContext(AlertContext);
    const [text,setText]=useState('');
    const onSubmit=(e)=>{
        e.preventDefault();
        if(text === ''){
            alertContext.setAlert('Please Enter Something','lightred')
        }else
        {
            githubContext.searchName(text);
            setText('');
        }
    }
    const onChange=(e)=>{
        setText(e.target.value);
    }
        return (
            <div>
                <form onSubmit={onSubmit} className='form' >
                    <input type="text" 
                        name="search" 
                        value={text} 
                        onChange={onChange}
                        placeholder="Search Name..." />
                    <input type="submit" value="Search" className="btn btn-info" />
                    {githubContext.users.length>0 && (<button className="btn btn-warning" onClick={githubContext.clearData} >Clear</button>)}
                </form>
            </div>
        )   
};

export default Search;
