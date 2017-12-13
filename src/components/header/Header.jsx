import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import header from './header.css'

import Filters from './Filters'

import ToolbarLink  from './ToolbarLink'

class Header extends Component {
    render() {
        return (
            <header className='main-header'>
                <h1 className="mdc-typography--display2">NYT</h1>
                <nav>
                    <ToolbarLink exact to="/">main</ToolbarLink>
                    <ToolbarLink to="/content">content</ToolbarLink>
                    <ToolbarLink to="/fave">fave</ToolbarLink>
                </nav>
                <Route path="/content" component={ Filters }/>
            </header>
        );
    };
}

export default Header;