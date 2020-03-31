import React, { Component } from 'react';

import styles from './TicketList.module.scss';
import Notification from '../Notification/Notification';
import Ticket from '../Ticket/Ticket';

class TicketList extends Component {
  state = {
    amount: 5,
    step: 5,
  }

  showMoreTickets = () => this.setState((state) => ({ amount: state.amount + state.step }))

  render() {
    let content;
    const { amount, step } = this.state;
    const { tickets, filteredTickets, resetFilters } = this.props;

    if (filteredTickets.length < 1) {
      content = (
        <Notification
          title={`Мы нашли ${tickets.length} рейсов, но ни один не соответствует заданным фильтрам.`}
          message="Попробуйте использовать меньше фильтров или воспользуйтесь кнопкой для сброса всех фильтров."
          resetFilters={resetFilters}
        />
      );
    } else {
      content = (
        <React.Fragment>
          {filteredTickets.slice(0, amount).map((ticket) => <Ticket ticket={ticket} key={`${ticket.segments[0].date}${ticket.segments[0].duration}`} />)}
          <button onClick={this.showMoreTickets} className={styles.Button}>{`Показать еще ${step} билетов`}</button>
        </React.Fragment>
      );
    }

    return (
      <div className={styles.TicketList}>
        {content}
      </div>
    );
  }
}

export default TicketList;
