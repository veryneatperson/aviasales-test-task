import { connect } from 'react-redux';

import TicketList from '../../components/TicketList/TicketList';
import { selectTickets } from '../../store/selectors/tickets';
import { selectFilteredAndSortedTickets } from '../../store/selectors/combined';
import { toggleAllFilters } from '../../store/actions/selection';

const mapStateToProps = (state) => ({
  tickets: selectTickets(state),
  filteredTickets: selectFilteredAndSortedTickets(state),
});

const mapDispatchToProps = (dispatch) => ({
  resetFilters: () => dispatch(toggleAllFilters(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
