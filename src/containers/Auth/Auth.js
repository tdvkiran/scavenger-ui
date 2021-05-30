import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './Auth.css';

import * as actions from '../../store/actions/index'
import { updateObject, checkValidation } from '../../shared/utility'

const Auth = props => {


    const [controls, setControls] = useState({
        branchName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Branch Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 3
            },
            valid: false,
            touched: false
        }
    });


    useEffect(() => {
        if (!props.buildingBurger && props.redirectPath !== '/') {
            props.onSetAuthRedirectPath();
        }
    }, [props.redirectPath, props.onSetAuthRedirectPath]);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(controls.branchName.value, controls.password.value)
        props.onAuth(controls.branchName.value, controls.password.value)
    }


    const inputChangedHandler = (event, controlName) => {
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
    if (props.loading) {
        form = <Spinner />
    }

    let errorMessage = null;
    if (props.error) {
        errorMessage = (
            <p>{props.error.message}</p>
        );
    }

    let authRedirect = null;
    if (props.isAuthicated) {
        authRedirect = <Redirect to={props.redirectPath} />
    }

    return (
        <div className={classes.Auth}>
            {authRedirect}
            {errorMessage}
            <form onSubmit={submitHandler}>
                {form}
                <Button btnType='Success'>{'Sign-In'}</Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthicated: state.auth.token,
        redirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (branchName, password) => dispatch(actions.auth(branchName, password)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);