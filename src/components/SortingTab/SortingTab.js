import React from 'react';
import PropTypes from 'prop-types';

import styles from './SortingTab.module.scss';

const SortingTab = ({
  label, name, checked, setSortBy,
}) => {
  let classes = styles.SortingTab;
  if (checked) classes = `${classes} ${styles.checked}`;
  return (
    <li className={classes} onClick={() => setSortBy(name)}>
      <span className={styles.Name}>{label}</span>
    </li>
  );
};

SortingTab.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  setSortBy: PropTypes.func.isRequired,
};

export default SortingTab;
