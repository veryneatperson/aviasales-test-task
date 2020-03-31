export const GET_SEARCHID_REQUEST = 'GET_SEARCHID_REQUEST';
export const GET_SEARCHID_SUCCESS = 'GET_SEARCHID_SUCCESS';
export const GET_SEARCHID_FAILURE = 'GET_SEARCHID_FAILURE';

export const getSearchIdRequest = () => ({
  type: GET_SEARCHID_REQUEST,
});

export const getSearchIdSuccess = (searchId) => ({
  type: GET_SEARCHID_SUCCESS,
  payload: searchId,
});

export const getSearchIdFailure = (errorMsg) => ({
  type: GET_SEARCHID_FAILURE,
  errorMsg,
});
