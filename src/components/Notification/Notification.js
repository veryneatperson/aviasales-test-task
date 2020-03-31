import React from 'react';

import styles from './Notification.module.scss';

const Notification = ({ title, message, resetFilters }) => (
  <div className={styles.Notification}>
    <h3 className={styles.Title}>{title}</h3>
    <p className={styles.Message}>{message}</p>
    <button className={styles.Button} onClick={resetFilters}>Сбросить фильтры</button>
  </div>
);

export default Notification;
