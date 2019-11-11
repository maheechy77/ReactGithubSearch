import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state={
        search:''
    }
    static propTypes={
        clearData:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        searchName:PropTypes.func.isRequired
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.searchName(this.state.search);
        this.setState({search:''})
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form' >
                    <input type="text" 
                        name="search" 
                        value={this.state.search} 
                        onChange={this.onChange}
                        placeholder="Search Name..." />
                    <input type="submit" value="Search" className="btn btn-info" />
                    {this.props.showClear && (<button className="btn btn-warning" onClick={this.props.clearData} >Clear</button>)}
                </form>
            </div>
        )
    }
};
export default Search;
