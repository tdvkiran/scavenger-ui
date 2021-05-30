import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios';
import Branch from '../../components/Branch/Branch';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';


const Branches = props => {

    useEffect(() => {
       props.onFetchBranches(props.pincode,props.name,props.contactNumber);
    },[])

    let branches = <Spinner />
    if (!props.loading) {
        branches = props.branches.map(branch => {
            return <Branch key={branch._id} 
                    name={branch.branchName}
                    address={branch.address}
                    city={branch.city}
                    incharge={branch.branchIncharge}
                    contact={branch.contactNumber} />
        });
    }

    return <div>
        {branches}
    </div>

}

const mapStateToProps = (state) => {
    return {
        branches: state.user.branches,
        pincode: state.user.pincode,
        name: state.user.name,
        contactNumber: state.user.contactNumber,
        loading: state.user.loading
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onFetchBranches: (pincode,name,contactNumber) => dispatch(actions.fetchBranches(pincode, name, contactNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Branches, axios));