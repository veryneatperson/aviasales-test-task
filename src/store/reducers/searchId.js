import {
  GET_SEARCHID_REQUEST,
  GET_SEARCHID_SUCCESS,
  GET_SEARCHID_FAILURE,
} from '../actions/searchId';

const initialState = {
  loading: false,
  errorMsg: '',
  searchId: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCHID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SEARCHID_SUCCESS:
      return {
        ...state,
        loading: false,
        searchId: action.payload,
      };
    case GET_SEARCHID_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.errorMsg,
      };
    default:
      return state;
  }
};
