import React, { Component } from 'react';
import header from './header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className='main-header'>
                <h1 className="mdc-typography--display2">React Application</h1>
                <nav>
                    <Link to="/">Main</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/footer">Footer</Link>
                </nav>
            </header>
        );
    };
}

export default Header;