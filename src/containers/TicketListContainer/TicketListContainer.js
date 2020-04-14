import { connect } from 'react-redux';

import TicketList from '../../components/TicketList/TicketList';
import { selectTicketsLength } from '../../store/selectors/tickets';
import { selectFilteredAndSortedTickets } from '../../store/selectors/combined';
import { toggleAllFilters } from '../../store/actions/selection';

const mapStateToProps = (state) => ({
  ticketsAmount: selectTicketsLength(state),
  filteredTickets: selectFilteredAndSortedTickets(state),
});

const mapDispatchToProps = (dispatch) => ({
  resetFilters: () => dispatch(toggleAllFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
