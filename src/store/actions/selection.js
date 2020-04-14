export const SET_SORT_BY = 'SET_SORT_BY';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const TOGGLE_ALL_FILTERS = 'TOGGLE_ALL_FILTERS';

export const setSortBy = (sortingOption) => ({
  type: SET_SORT_BY,
  payload: sortingOption,
});

export const toggleAllFilters = () => ({
  type: TOGGLE_ALL_FILTERS,
});

export const toggleFilter = (filter) => ({
  type: TOGGLE_FILTER,
  payload: filter,
});
