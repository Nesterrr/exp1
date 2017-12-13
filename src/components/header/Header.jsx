import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Filters from './Filters'

import ToolbarLink  from './ToolbarLink'

class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <h1 className="main-header__logo">NYT</h1>
                <nav className="main-navigation">
                    <ToolbarLink exact to="/">main</ToolbarLink>
                    <ToolbarLink to="/content">content</ToolbarLink>
                </nav>
                <Route path="/content" component={ Filters }/>
            </header>
        );
    };
}

export default Header;