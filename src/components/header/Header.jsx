import React, { Component } from 'react'

import header from './header.css'

import Filters from './Filters'
import ToolbarLink  from './ToolbarLink'

class Header extends Component {
    render() {
        return (
            <header className='main-header'>
                <h1 className="mdc-typography--display2">NYT</h1>
                <nav>
                    <ToolbarLink to="/">main</ToolbarLink>
                    <ToolbarLink to="/login">login</ToolbarLink>
                    <ToolbarLink to="/fave">fave</ToolbarLink>
                </nav>
                <Filters/>
            </header>
        );
    };
}

export default Header;