import React from 'react';

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

export default SortingTab;
