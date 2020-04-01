import React from 'react';
import PropTypes from 'prop-types';

import styles from './LayoverFilter.module.scss';

const LayoverFilter = ({ checked, onChangeHandler, text }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
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

LayoverFilter.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default LayoverFilter;
