import axios from 'axios';
import { call, put, select } from 'redux-saga/effects';

import { getTicketsRequest, getTicketsChunkSuccess, getTicketsSuccess, getTicketsFailure } from '../actions/tickets';
import getSearchId from './searchId';
import { selectSearchId } from '../selectors/searchId';
import { ticketsErrorMsg, baseURL } from '../../constants';

export function* getTicketsBySearchId(action) {
  yield put(getTicketsRequest());
  const { searchId } = action;
  let shouldStop = false;
  while (!shouldStop) {
    try {
      const res = yield call(axios.get, `${baseURL}/tickets?searchId=${searchId}`);
      if (res.data.stop) shouldStop = true;
      yield put(getTicketsChunkSuccess(res.data.tickets));
    } catch (err) {
      if (err.response.status !== 500) {
        yield put(getTicketsFailure(ticketsErrorMsg));
        return;
      }
    }
  }
  yield put(getTicketsSuccess());
}

// eslint-disable-next-line no-unused-vars
export function* loadTicketsSaga(action) {
  yield call(getSearchId);
  const searchId = yield select(selectSearchId);
  if (searchId) {
    yield call(getTicketsBySearchId, { searchId });
  } else {
    yield put(getTicketsFailure(ticketsErrorMsg));
  }
}
