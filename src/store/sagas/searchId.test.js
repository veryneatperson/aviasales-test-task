import moxios from 'moxios';
import { runSaga } from 'redux-saga';

import getSearchId from './searchId';
import { searchIdErrorMsg } from '../../constants';
import { getSearchIdRequest, getSearchIdSuccess, getSearchIdFailure } from '../actions/searchId';

const searchId = '123ab';

describe('getSearchId saga', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should successfully fetch searchId from API', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          searchId,
        },
      });
    });

    const dispatched = [];

    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getSearchId,
    ).toPromise();

    expect(dispatched).toEqual([getSearchIdRequest(), getSearchIdSuccess(searchId)]);
  });

  it('should fail to fetch searchId from API', async () => {
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
      getSearchId,
    ).toPromise();

    expect(dispatched).toEqual([getSearchIdRequest(), getSearchIdFailure(searchIdErrorMsg)]);
  });
});
