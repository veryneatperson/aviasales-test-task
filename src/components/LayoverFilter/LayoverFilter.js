import React from 'react';
import PropTypes from 'prop-types';

import styles from './LayoverFilter.module.scss';

const LayoverFilter = ({ name, checked, onChangeHandler, text }) => {
  let handleChange;
  if (name === 'any') {
    handleChange = () => onChangeHandler();
  } else {
    handleChange = () => onChangeHandler(name);
  }

  return (
    <label className={styles.LayoverFilter}>
      <input type="checkbox" className={styles.LayoverFilterInput} checked={checked} onChange={handleChange} />
      <span className={styles.LayoverFilterName} />
      <span className={styles.LayoverFilterText}>{text}</span>
    </label>
  );
};

LayoverFilter.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default LayoverFilter;
