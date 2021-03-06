import React, { useState } from 'react'
import { connect } from 'react-redux'

import Aux from '../Auxilary/Auxilary'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Layout =(props)=> {
    const [showSideDrawer,setShowSideDrawer] = useState(false);
    
    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false)
    }
    const sideDrawerOpenHandler = () => {
        setShowSideDrawer(!showSideDrawer)
    }


        return (
            <Aux>
                <Toolbar
                    menuClicked={sideDrawerOpenHandler}
                    isAuth={props.isAuthenticated}
                />
                <SideDrawer
                    isAuth={props.isAuthenticated}
                    open={showSideDrawer}
                    closed={sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        );
    }

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);