import { SET_SORT_BY, TOGGLE_FILTER, TOGGLE_ALL_FILTERS } from '../actions/selection';

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

const areSingleFiltersAllChecked = ({ filters: { noLayovers, oneLayover, twoLayovers, threeLayovers } }) =>
  noLayovers && oneLayover && twoLayovers && threeLayovers;

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
          [action.payload]: !state.filters[action.payload],
        },
      };

      areSingleFiltersAllChecked(newState) ? (newState.filters.any = true) : (newState.filters.any = false);

      return newState;

    case TOGGLE_ALL_FILTERS:
      const newValue = !state.filters.any;
      return {
        ...state,
        filters: {
          any: newValue,
          noLayovers: newValue,
          oneLayover: newValue,
          twoLayovers: newValue,
          threeLayovers: newValue,
        },
      };
    default:
      return state;
  }
};
