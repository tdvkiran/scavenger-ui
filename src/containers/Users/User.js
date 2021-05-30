import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './User.css'

import * as actions from '../../store/actions/index'
import { updateObject, checkValidation } from '../../shared/utility'

const User = (props) => {

    const [controls, setControls] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Name'
            },
            value: '',
            validation: {
                required: true,
                minLength: 3
            },
            valid: false,
            touched: false
        },
        pincode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Pincode'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6,
                maxLength: 6
            },
            valid: false,
            touched: false
        },
        contactNumber: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Contact Number'
            },
            value: '',
            validation: {
                required: true,
                minLength: 10,
                maxLength: 10
            },
            valid: false,
            touched: false
        }
    });

    const onSubmitHandler= (event)=>{
        event.preventDefault();
        props.onSetUserDeatils(controls.pincode.value,controls.name.value,controls.contactNumber.value)
        props.history.push("/branches");
        
    }
    const inputChangedHandler=(event,controlName)=>{
        const updatedControls = updateObject(controls, {
            [controlName]: updateObject(controls[controlName], {
                value: event.target.value,
                valid: checkValidation(event.target.value, controls[controlName].validation),
                touched: true
            })
        });

        setControls(updatedControls);
    }
    
    const formElementArray = Object.keys(controls).map(elementKey => {
        return { id: elementKey, config: controls[elementKey] }
    })
    let form = formElementArray.map(element => {
        return <Input
            key={element.id}
            valueType={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.value}
            invalid={!element.config.valid}
            shouldValidate={element.config.validation}
            touched={element.config.touched}
            changed={(event) => inputChangedHandler(event, element.id)}
        />

    })


    return (
        <div className={classes.User}>
            <form onSubmit={onSubmitHandler}>
                {form}
                <Button btnType='Success'>Search</Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pincode: state.user.pincode,
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthicated: state.auth.token,
        redirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetUserDeatils: (pincode, name, contactNumber) => dispatch(actions.userDetails(pincode, name, contactNumber))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(User);