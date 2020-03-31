import {
  SET_SORT_BY,
  TOGGLE_FILTER,
  TOGGLE_ALL_FILTERS,
} from '../actions/selection';

const initialState = {
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
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case TOGGLE_FILTER:
      const newState = {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filter]: action.payload.value,
        },
      };
      if (newState.filters.noLayovers && newState.filters.oneLayover && newState.filters.twoLayovers && newState.filters.threeLayovers) {
        newState.filters.any = true;
      } else {
        newState.filters.any = false;
      }
      return newState;
    case TOGGLE_ALL_FILTERS:
      return {
        ...state,
        filters: {
          any: action.payload,
          noLayovers: action.payload,
          oneLayover: action.payload,
          twoLayovers: action.payload,
          threeLayovers: action.payload,
        },
      };
    default:
      return state;
  }
};
