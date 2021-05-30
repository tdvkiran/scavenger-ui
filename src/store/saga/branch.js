import { put } from 'redux-saga/effects';

import axios from '../../axios'
import * as actions from '../actions/';

export function* fetchBranchesSaga(action) {
    yield put(actions.fetchBranchesStart());
    const queryParams = action.pincode;
    try {
        const response = yield axios.get('/branches/' + queryParams);
        let fetchedBranches = Object.keys(response.data).map(index => {
            return { ...response.data[index]};
        });
        //console.log(fetchedBranches)
        yield put(actions.fetchBranchesSuccess(fetchedBranches));
    }
    catch (err) {
        yield put(actions.fetchBranchesFail(err));
    }
}