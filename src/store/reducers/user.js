import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'

const initialState = {
    branches: [],
    pincode: null,
    name: null,
    contactNumber: null,
    loading: false
}

const fetchBranchesStart = (state, action) => {
    return updateObject(state, { loading: true });
}
const fetchBranchesSuccess = (state, action) => {
    return updateObject(state, { branches: action.branches, loading: false });
}
const fetchBranchesFail = (state, action) => {
    return updateObject(state, { loading: false });
}
const setUserDetails = (state, action) => {
    return updateObject(state, { pincode: action.pincode, name: action.name, contactNumber: action.contactNumber });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_DETAILS: return setUserDetails(state,action);
        case actionTypes.FETCH_BRANCHES_START: return fetchBranchesStart(state, action);
        case actionTypes.FETCH_BRANCHES_SUCCESS: return fetchBranchesSuccess(state, action);
        case actionTypes.FETCH_BRANCHES_FAIL: return fetchBranchesFail(state, action);
        default: return state;
    }
}

export default reducer;