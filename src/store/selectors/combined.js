import { createSelector } from 'reselect';

import { selectSearchIdLoading } from './searchId';
import { selectTicketsLoading, selectTickets } from './tickets';
import { selectFilters, selectSortBy } from './selection';

const reduceBooleans = (...vals) => vals.reduce((acc, curr) => acc || curr);

const filtersMapping = {
  any: null,
  noLayovers: 0,
  oneLayover: 1,
  twoLayovers: 2,
  threeLayovers: 3,
};

export const selectIsLoading = (state) => selectSearchIdLoading(state) || selectTicketsLoading(state);

export const selectFilteredTickets = createSelector([selectFilters, selectTickets], (filters, tickets) => {
  const { any, noLayovers, oneLayover, twoLayovers, threeLayovers } = filters;

  if (any) return tickets;
  if (!reduceBooleans(noLayovers, oneLayover, twoLayovers, threeLayovers)) return [];

  const filtersArr = Object.entries(filters)
    .filter((el) => el[1])
    .map((el) => filtersMapping[el[0]]);

  return tickets.filter(
    (ticket) =>
      filtersArr.includes(ticket.segments[0].stops.length) || filtersArr.includes[ticket.segments[1].stops.length],
  );
});

export const selectFilteredAndSortedTickets = createSelector(
  [selectFilteredTickets, selectSortBy],
  (filteredTickets, sortBy) => {
    if (sortBy === 'fastest') {
      return [...filteredTickets].sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration),
      );
    } else if (sortBy === 'cheapest') {
      return [...filteredTickets].sort((a, b) => a.price - b.price);
    }
  },
);
