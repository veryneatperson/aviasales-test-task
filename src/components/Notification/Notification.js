import React from 'react';
import PropTypes from 'prop-types';

import styles from './Notification.module.scss';

const Notification = ({ title, message, handleClick, btnText }) => (
  <div className={styles.Notification}>
    <h3 className={styles.Title}>{title}</h3>
    <p className={styles.Message}>{message}</p>
    {btnText && (
      <button className={styles.Button} onClick={handleClick} type="button">
        {btnText}
      </button>
    )}
  </div>
);

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Notification;
