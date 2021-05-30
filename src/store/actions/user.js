import * as actionTypes from './actionTypes';

export const userDetails = (pincode, name, contactnumber) => {
    return {
        type: actionTypes.USER_DETAILS,
        pincode: pincode,
        name: name,
        contactnumber: contactnumber
    }
}

export const fetchBranchesSuccess = (branches) => {
    return {
        type: actionTypes.FETCH_BRANCHES_SUCCESS,
        branches: branches
    }
}
export const fetchBranchesFail = (error) => {
    return {
        type: actionTypes.FETCH_BRANCHES_FAIL,
        error: error
    }
}
export const fetchBranchesStart = () => {
    return {
        type: actionTypes.FETCH_BRANCHES_START
    }
};

export const fetchBranches = (pincode, name, contactnumber) => {
    return {
        type: actionTypes.FETCH_BRANCHES,
        pincode: pincode,
        name: name,
        contactnumber: contactnumber
    }
}
