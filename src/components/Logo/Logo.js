import React from 'react';
import classes from './Logo.css'


const logo =(props)=>{
    return (
        <div className={classes.Logo} style={{height:props.height}}> 
            <h2>Beetle Nut</h2>
        </div>
    );
}

export default logo;