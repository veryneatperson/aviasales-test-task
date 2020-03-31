import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { searchIdURL, searchIdErrorMsg } from '../../constants';
import { getSearchIdRequest, getSearchIdSuccess, getSearchIdFailure } from '../actions/searchId';

export function* getSearchId() {
  yield put(getSearchIdRequest());
  try {
    const res = yield call(axios.get, searchIdURL);
    yield put(getSearchIdSuccess(res.data.searchId));
  } catch (err) {
    yield put(getSearchIdFailure(searchIdErrorMsg));
  }
}
