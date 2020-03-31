import React from 'react';

import styles from './LayoverFilter.module.scss';

const LayoverFilter = ({ checked, onChangeHandler, text }) => (
  <label className={styles.LayoverFilter}>
    <input
      type="checkbox"
      className={styles.LayoverFilterInput}
      checked={checked}
      onChange={onChangeHandler}
    />
    <span className={styles.LayoverFilterName} />
    <span className={styles.LayoverFilterText}>{text}</span>
  </label>
);

export default LayoverFilter;
