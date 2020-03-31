export const GET_TICKETS_REQUEST = 'GET_TICKETS_REQUEST';
export const GET_TICKETS_CHUNK_SUCCESS = 'GET_TICKETS_CHUNK_SUCCESS';
export const GET_TICKETS_SUCCESS = 'GET_TICKETS_SUCCESS';
export const GET_TICKETS_FAILURE = 'GET_TICKETS_FAILURE';
export const GET_TICKETS = 'GET_TICKETS';

export const getTickets = () => ({
  type: GET_TICKETS,
});

export const getTicketsRequest = () => ({
  type: GET_TICKETS_REQUEST,
});

export const getTicketsChunkSuccess = (tickets) => ({
  type: GET_TICKETS_CHUNK_SUCCESS,
  payload: tickets,
});

export const getTicketsSuccess = () => ({
  type: GET_TICKETS_SUCCESS,
});

export const getTicketsFailure = (errorMsg) => ({
  type: GET_TICKETS_FAILURE,
  errorMsg,
});
