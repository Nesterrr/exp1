import React from 'react';

import { NavLink } from 'react-router-dom'

function ToolbarLink(props) {
    return (
        <NavLink exact activeClassName="selected" {...props}>{ props.children}</NavLink>
    );

}

export default ToolbarLink;