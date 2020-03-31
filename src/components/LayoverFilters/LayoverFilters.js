import React from 'react';

import styles from './LayoverFilters.module.scss';
import LayoverFilter from '../LayoverFilter/LayoverFilter';

const checkboxLabels = {
  any: 'Все',
  noLayovers: 'Без пересадок',
  oneLayover: '1 пересадка',
  twoLayovers: '2 пересадки',
  threeLayovers: '3 пересадки',
};

const LayoverFilters = ({ filters, toggleFilter, toggleAllFilters }) => (
  <div className={styles.LayoverFilters}>
    <h3 className={styles.Title}>Количество пересадок</h3>
    {Object.keys(filters).map((elem) => {
      let onChangeHandler;

      if (elem === 'any') {
        onChangeHandler = () => toggleAllFilters(!filters[elem]);
      } else {
        onChangeHandler = () => toggleFilter(elem, !filters[elem]);
      }

      return (
        <LayoverFilter
          key={elem}
          checked={filters[elem]}
          onChangeHandler={onChangeHandler}
          text={checkboxLabels[elem]}
        />
      );
    })}
  </div>
);

export default LayoverFilters;
