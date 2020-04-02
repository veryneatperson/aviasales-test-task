import { takeEvery } from 'redux-saga/effects';

import { GET_TICKETS } from '../actions/tickets';
import { loadTicketsSaga } from './tickets';

function* watchTickets() {
  yield takeEvery(GET_TICKETS, loadTicketsSaga);
}

export default watchTickets;
