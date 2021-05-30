import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>User</NavigationItem>
        {props.isAuth
            ? <NavigationItem link="/messages">messages</NavigationItem>
            : null}
        {props.isAuth
            ? <NavigationItem link="/logout">Logout</NavigationItem>
            : <NavigationItem link="/auth">Authenticate</NavigationItem>}
    </ul>
)

export default navigationItems;