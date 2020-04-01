import React from 'react';
import PropTypes from 'prop-types';

import styles from './Notification.module.scss';

const Notification = ({ title, message, resetFilters }) => (
  <div className={styles.Notification}>
    <h3 className={styles.Title}>{title}</h3>
    <p className={styles.Message}>{message}</p>
    <button className={styles.Button} onClick={resetFilters} type="button">Сбросить фильтры</button>
  </div>
);

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  resetFilters: PropTypes.func.isRequired,
};

export default Notification;
