import React from 'react';
import PropTypes from 'prop-types';

import styles from './Ticket.module.scss';
import {
  displayPrice,
  displayTime,
  displayLayoversLabel,
  displayDuration,
} from '../../helpers';
import { carrierLogoURL } from '../../constants';

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;
  return (
    <div className={styles.Ticket}>
      <div className={styles.Header}>
        <h3 className={styles.Price}>{displayPrice(price, 'Р')}</h3>
        <img
          className={styles.CarrierLogo}
          src={`${carrierLogoURL}${carrier}.png`}
          alt="aviacompany logo"
        />
      </div>
      <div className={styles.Content}>
        {segments.map(({ origin, destination, date, stops, duration }) => (
          <div className={styles.ContentRow} key={`${date}${duration}`}>
            <div className={styles.Block}>
              <span className={styles.Key}>{`${origin} - ${destination}`}</span>
              <span className={styles.Value}>
                {displayTime(date, duration)}
              </span>
            </div>
            <div className={styles.Block}>
              <span className={styles.Key}>в пути</span>
              <span className={styles.Value}>{displayDuration(duration)}</span>
            </div>
            <div className={styles.Block}>
              <span className={styles.Key}>
                {displayLayoversLabel(stops.length)}
              </span>
              <span className={styles.Value}>{stops.join(', ')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        origin: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        stops: PropTypes.arrayOf(PropTypes.string).isRequired,
        duration: PropTypes.number.isRequired,
      }),
    ),
  }),
};

export default React.memo(Ticket);
