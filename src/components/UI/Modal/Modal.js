import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxilary/Auxilary'
import Backdrop from '../Backdrop/Backdrop'

const modal = props => {

    // shouldComponentUpdate(nextProps,nextState){
    //     //update the modal , this check improves the performance
    //     return (nextProps.show!==this.props.show) || (nextProps.loading !==this.props.loading);
    // }

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? 1 : 0
                }}>
                {props.children}
            </div>
        </Aux>
    );

}

export default React.memo(modal, (prevProps, nextProps) => {
                                        return (nextProps.show === prevProps.show)
                                        && (nextProps.loading === prevProps.loading)
                                    });