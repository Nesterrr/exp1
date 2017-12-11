import React from 'react';

import Filters from './Filters';

function Nav() {
    return (
        <div>
            <nav className="mdc-toolbar">
                <ul className="mdc-toolbar__row">
                    <li className="mdc-toolbar__section">about</li>
                    <li className="mdc-toolbar__section">sign Up / login</li>
                    <li className="mdc-toolbar__section">bookmarks</li>
                </ul>
            </nav>
            <Filters />
        </div>
    );
}

export default Nav;