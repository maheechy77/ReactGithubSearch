import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired
    }
    static defaultProps={
        icon:'fab fa-github',
        title:'Github Finder'
    }

    render() {
        const {title,icon}=this.props;
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={icon} /> {title}
                </h1>
            </nav>
        )
    }
}
