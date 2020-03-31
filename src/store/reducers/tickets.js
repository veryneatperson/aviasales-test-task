import {
  GET_TICKETS_REQUEST,
  GET_TICKETS_CHUNK_SUCCESS,
  GET_TICKETS_FAILURE,
  GET_TICKETS_SUCCESS,
} from '../actions/tickets';

const initialState = {
  loading: false,
  errorMsg: '',
  tickets: [],
  sortBy: 'cheapest',
  filters: {
    any: true,
    noLayovers: true,
    oneLayover: true,
    twoLayovers: true,
    threeLayovers: true,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TICKETS_CHUNK_SUCCESS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      };
    case GET_TICKETS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.errorMsg,
      };
    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
