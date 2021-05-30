import { takeEvery } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'
import { logoutSaga, authUserSaga } from './auth';
import { fetchBranchesSaga } from './branch';

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
}

export function* watchBranches() {
    yield takeEvery(actionTypes.FETCH_BRANCHES, fetchBranchesSaga);
}