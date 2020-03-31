import React from 'react';

import styles from './Ticket.module.scss';
import {
  displayPrice,
  displayStartAndEndDates,
  displayLayoversLabel,
  displayDurationInHoursAndMinutes,
} from '../../helpers';
import { carrierLogoURL } from '../../constants';

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;
  return (
    <div className={styles.Ticket}>
      <div className={styles.Header}>
        <h3 className={styles.Price}>{displayPrice(price)} Р</h3>
        <img src={`${carrierLogoURL}${carrier}.png`} alt="aviacompany logo.." />
      </div>
      <div className={styles.Content}>
        {segments.map(({ origin, destination, date, stops, duration }) => (
          <div className={styles.ContentRow} key={`${date}${duration}`}>
            <div className={styles.Block}>
              <span className={styles.Key}>{origin} - {destination}</span>
              <span className={styles.Value}>{displayStartAndEndDates(date, duration)}</span>
            </div>
            <div className={styles.Block}>
              <span className={styles.Key}>в пути</span>
              <span className={styles.Value}>{displayDurationInHoursAndMinutes(duration)}</span>
            </div>
            <div className={styles.Block}>
              <span className={styles.Key}>{displayLayoversLabel(stops.length)}</span>
              <span className={styles.Value}>{stops.join(', ')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Ticket);
