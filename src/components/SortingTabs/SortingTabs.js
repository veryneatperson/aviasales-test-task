import React from 'react';
import PropTypes from 'prop-types';

import styles from './SortingTabs.module.scss';
import SortingTab from '../SortingTab/SortingTab';

const sortingOptions = [
  {
    label: 'Самый дешевый',
    name: 'cheapest',
  },
  {
    label: 'Самый быстрый',
    name: 'fastest',
  },
];

const SortingTabs = ({ sortBy, setSortBy }) => (
  <ul className={styles.SortingTabs}>
    {sortingOptions.map((option) => (option.name === sortBy
      ? <SortingTab key={option.label} {...option} checked setSortBy={setSortBy} />
      : <SortingTab key={option.label} {...option} setSortBy={setSortBy} />))}
  </ul>
);

SortingTabs.propTypes = {
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
};

export default SortingTabs;
