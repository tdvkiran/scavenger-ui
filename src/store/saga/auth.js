import { put } from 'redux-saga/effects';

import axios from 'axios';

import * as actions from '../actions/';

export function* logoutSaga(action) {
    yield put(actions.logoutSucceed());
};

export function* authUserSaga(action) {
    yield put(actions.authStart());

    const authData = {
        branchName: action.branchName,
        password: action.password
    }

    try {
        const response = yield axios.post('/users/login', authData)

        console.log(response);
        yield put(actions.authSuccess(response.data.token, response.data.user._id));
    }
    catch (err) {
        console.log(err)
        yield put(actions.authFail(err.response.data.error));
    }
}