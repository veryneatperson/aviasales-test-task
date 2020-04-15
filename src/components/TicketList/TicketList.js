import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './TicketList.module.scss';
import Notification from '../Notification/Notification';
import Ticket from '../Ticket/Ticket';

class TicketList extends Component {
  state = {
    amount: 5,
    step: 5,
  };

  showMoreTickets = () => this.setState((state) => ({ amount: state.amount + state.step }));

  render() {
    let content;
    const { amount, step } = this.state;
    const { ticketsAmount, filteredTickets, resetFilters } = this.props;

    if (filteredTickets.length < 1) {
      content = (
        <Notification
          title={`Мы нашли ${ticketsAmount} рейсов, но ни один не соответствует заданным фильтрам.`}
          message="Попробуйте использовать меньше фильтров или воспользуйтесь кнопкой для сброса всех фильтров."
          resetFilters={resetFilters}
        />
      );
    } else {
      content = (
        <>
          {filteredTickets.slice(0, amount).map((ticket) => (
            <Ticket ticket={ticket} key={`${ticket.price}${ticket.segments[0].date}${ticket.segments[1].date}`} />
          ))}
          <button onClick={this.showMoreTickets} className={styles.Button} type="button">
            {`Показать еще ${step} билетов`}
          </button>
        </>
      );
    }

    return <div className={styles.TicketList}>{content}</div>;
  }
}

TicketList.propTypes = {
  ticketsAmount: PropTypes.number.isRequired,
  filteredTickets: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
  resetFilters: PropTypes.func.isRequired,
};

export default TicketList;
