import moxios from 'moxios';
import { runSaga } from 'redux-saga';
import { baseURL, ticketsErrorMsg } from '../../constants';
import { getTicketsBySearchId } from './tickets';
import { getTicketsRequest, getTicketsChunkSuccess, getTicketsSuccess, getTicketsFailure } from '../actions/tickets';

import { mockedTickets } from '../../fixtures/mockedData';

const searchId = '123ab';

class MockResponse {
  constructor(tickets) {
    this.tickets = tickets;
    this.chunkSize = 2;
    this.ticketsSent = 0;
    this.iterations = 0;
    this.dispatchedChunks = [];
  }

  getChunk() {
    return this.tickets.slice(this.ticketsSent, this.ticketsSent + this.chunkSize);
  }

  get status() {
    const status = this.iterations++ % 2 === 0 ? 200 : 500;
    if (status === 200) {
      this.ticketsSent -= this.chunkSize;
      this.dispatchedChunks.push(getTicketsChunkSuccess(this.getChunk()));
      this.ticketsSent += this.chunkSize;
    } else {
      this.ticketsSent -= this.chunkSize;
    }
    return status;
  }

  get response() {
    if (this.ticketsSent < this.tickets.length) {
      const chunk = this.getChunk();
      this.ticketsSent += this.chunkSize;

      return { tickets: chunk, stop: this.ticketsSent >= this.tickets.length };
    }
  }
}

describe('getTicketsBySearchId saga', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should successfully fetch tickets from API', async () => {
    const mockResponse = new MockResponse(mockedTickets);
    moxios.stubRequest(`${baseURL}/tickets?searchId=${searchId}`, mockResponse);

    const dispatched = [];

    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getTicketsBySearchId,
      { searchId },
    ).toPromise();

    const expectedDispatched = [getTicketsRequest(), ...mockResponse.dispatchedChunks, getTicketsSuccess()];

    expect(dispatched).toEqual(expectedDispatched);
  });

  it('should fail to fetch tickets from API', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 502,
      });
    });

    const dispatched = [];

    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getTicketsBySearchId,
      { searchId },
    ).toPromise();

    expect(dispatched).toEqual([getTicketsRequest(), getTicketsFailure(ticketsErrorMsg)]);
  });
});
