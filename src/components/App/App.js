import React, { Component } from 'react';

import styles from './App.module.scss';
import Spinner from '../Spinner/Spinner';
import Header from '../Header/Header';
import Notification from '../Notification/Notification';
import SortingTabsContainer from '../../containers/SortingTabsContainer/SortingTabsContainer';
import TicketListContainer from '../../containers/TicketListContainer/TicketListContainer';
import LayoverFiltersContainer from '../../containers/LayoverFiltersContainer/LayoverFiltersContainer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

class App extends Component {
  componentDidMount() {
    // this.props.getTickets();
  }

  render() {
    let content;
    const { isLoading, searchIdErrorMsg, ticketsErrorMsg } = this.props;

    if (isLoading) {
      content = <Spinner />;
    } else if (searchIdErrorMsg || ticketsErrorMsg) {
      content = <Notification title="Произошла ошибка" message={searchIdErrorMsg || ticketsErrorMsg} />;
    } else {
      content = <TicketListContainer />;
    }

    return (
      <div className={styles.App}>
        <Header />
        <div className={styles.Main}>
          <div className={styles.LeftColumn}>
            <LayoverFiltersContainer />
          </div>
          <div className={styles.RightColumn}>
            <SortingTabsContainer />
            {content}
          </div>
        </div>
        <ScrollToTop />
      </div>
    );
  }
}

export default App;
