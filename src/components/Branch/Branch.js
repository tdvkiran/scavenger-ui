import React from 'react';

import classes from './Branch.css';

const Branch = ({name,city,address,incharge,contact}) => {
    return (
        <div className={classes.Branch}>
            <p>
            <table>
                <tbody>
                    <tr>
                        <td><label>Branch Name:</label></td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td><label>City:</label></td>
                        <td>{city}</td>
                    </tr>
                    <tr>
                        <td><label>Address:</label></td>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <td><label>Branch Incharge:</label></td>
                        <td>{incharge}</td>
                    </tr>
                    <tr>
                        <td><label>Contact Number:</label></td>
                        <td>{contact.join(', ')}</td>
                    </tr>
                </tbody>
            </table>
            </p>
        </div>
    )

}

export default Branch;